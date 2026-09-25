'use client'
import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.esm'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

function ParticleCloud({ theme }) {
  const pointsRef = useRef()
  const colorAttribRef = useRef()
  
  const particleCount = 25000
  const arraySize = particleCount * 3
  
  const basePositions = useMemo(() => {
    const arr = new Float32Array(arraySize)
    return random.inSphere(arr, { radius: 2.6 }) 
  }, [arraySize])

  const [currentPositions] = useState(() => {
    const arr = new Float32Array(arraySize)
    for(let i = 0; i < arraySize; i += 3) {
      const scatterDist = 6 + Math.random() * 12 
      arr[i] = basePositions[i] * scatterDist
      arr[i+1] = basePositions[i+1] * scatterDist
      arr[i+2] = basePositions[i+2] * scatterDist
    }
    return arr
  })
  
  const colorArray = useMemo(() => {
    const arr = new Float32Array(arraySize)
    
    // EXACTLY 3 PASTEL COLORS: Pastel Green, Pastel Purple, and Pastel Dark Pink
    const colorA = new THREE.Color(theme === 'dark' ? '#A7F3D0' : '#1e3a8a') // Soft Pastel Green
    const colorB = new THREE.Color(theme === 'dark' ? '#DDD6FE' : '#7e22ce') // Soft Pastel Purple
    const colorC = new THREE.Color(theme === 'dark' ? '#F472B6' : '#be185d') // Soft Pastel Dark Pink

    for(let i = 0; i < particleCount; i++) {
      const x = basePositions[i*3]
      const y = basePositions[i*3+1]
      
      const mixX = (x + 2.6) / 5.2
      const mixY = (y + 2.6) / 5.2
      
      const finalColor = colorA.clone().lerp(colorB, mixX).lerp(colorC, mixY)

      arr[i*3] = finalColor.r
      arr[i*3+1] = finalColor.g
      arr[i*3+2] = finalColor.b
    }
    return arr
  }, [theme, basePositions, arraySize, particleCount])

  useEffect(() => {
    if (colorAttribRef.current) {
      colorAttribRef.current.array.set(colorArray)
      colorAttribRef.current.needsUpdate = true
    }
  }, [colorArray])

  const mouseVec = useMemo(() => new THREE.Vector3(), [])
  const introTimer = useRef(0)
  const scrollProgress = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        scrollProgress.current = window.scrollY / totalScroll
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    if (introTimer.current < 1) {
      introTimer.current += delta * 0.4 
      if (introTimer.current > 1) introTimer.current = 1
    }
    const introProgress = 1 - Math.pow(1 - introTimer.current, 3)
    const scrollVal = scrollProgress.current

    const rotationDamp = scrollVal > 0.05 ? Math.max(0.15, 1 - (scrollVal * 0.85 * 0.75)) : 1
    pointsRef.current.rotation.x -= (delta / 20) * rotationDamp 
    pointsRef.current.rotation.y -= (delta / 24) * rotationDamp

    mouseVec.set(state.pointer.x, state.pointer.y, 0.5)
    mouseVec.unproject(state.camera)
    mouseVec.sub(state.camera.position).normalize()
    const distance = -state.camera.position.z / mouseVec.z
    const mouseWorldPos = state.camera.position.clone().add(mouseVec.multiplyScalar(distance))
    pointsRef.current.worldToLocal(mouseWorldPos)

    const positions = pointsRef.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime

    for (let i = 0; i < arraySize; i += 3) {
      const introScale = 1 + (1 - introProgress) * 9 
      const adjustedScroll = scrollVal * 0.75
      const spreadFactor = 1 + (adjustedScroll * 2.8)

      const waveDeform = Math.sin(time * 0.4 + basePositions[i] * 3) * 0.06 
      const noiseOffset = Math.sin(i + time * 0.2) * adjustedScroll * 0.2

      const targetBaseX = (basePositions[i] + waveDeform) * introScale * spreadFactor + noiseOffset
      const targetBaseY = (basePositions[i+1] + waveDeform) * introScale * spreadFactor + (adjustedScroll * 1.5)
      const targetBaseZ = (basePositions[i+2] + waveDeform) * introScale * spreadFactor

      let currX = positions[i]
      let currY = positions[i+1]
      let currZ = positions[i+2]

      const dx = mouseWorldPos.x - targetBaseX
      const dy = mouseWorldPos.y - targetBaseY
      const dz = mouseWorldPos.z - targetBaseZ
      const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)

      const maxDist = 5.5 

      if (dist < maxDist && introTimer.current > 0.5) {
        const force = Math.pow((maxDist - dist) / maxDist, 2.5)
        const pullFactor = 3.2 
        
        const targetX = targetBaseX + dx * force * pullFactor
        const targetY = targetBaseY + dy * force * pullFactor
        const targetZ = targetBaseZ + dz * force * pullFactor

        currX += (targetX - currX) * 0.025
        currY += (targetY - currY) * 0.025
        currZ += (targetZ - currZ) * 0.025
      } else {
        currX += (targetBaseX - currX) * 0.015
        currY += (targetBaseY - currY) * 0.015
        currZ += (targetBaseZ - currZ) * 0.015
      }

      positions[i] = currX
      positions[i+1] = currY
      positions[i+2] = currZ
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={pointsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={currentPositions} count={particleCount} itemSize={3} />
          <bufferAttribute ref={colorAttribRef} attach="attributes-color" array={colorArray} count={particleCount} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial 
          transparent 
          vertexColors={true} 
          size={0.014} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </points>
    </group>
  )
}

export default function HeroSphere() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 w-full h-full bg-transparent z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5.0] }}>
        <ParticleCloud theme={resolvedTheme} />
      </Canvas>
    </div>
  )
}