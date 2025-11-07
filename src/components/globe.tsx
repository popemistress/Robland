'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const globeTexture = PlaceHolderImages.find((img) => img.id === 'globe-texture');

  // Intersection Observer to only render when visible
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(currentMount);

    return () => {
      if (currentMount) {
        observer.unobserve(currentMount);
      }
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isVisible) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable for better performance
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
    mountRef.current.appendChild(renderer.domElement);

    // Globe with reduced geometry for better performance
    const geometry = new THREE.SphereGeometry(1.5, 32, 32); // Reduced from 64x64
    
    const textureLoader = new THREE.TextureLoader();
    const texture = globeTexture ? textureLoader.load(globeTexture.imageUrl) : undefined;
    
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      color: texture ? 0xffffff : 0xA67B5B,
      metalness: 0.2,
      roughness: 0.8,
      flatShading: true, // Better performance
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Points of interest
    const points = [
        { lat: 20, lon: -40 },
        { lat: 50, lon: 20 },
        { lat: -30, lon: 120 },
        { lat: 40, lon: 100 },
    ];
    
    points.forEach(point => {
        const phi = (90 - point.lat) * (Math.PI / 180);
        const theta = (point.lon + 180) * (Math.PI / 180);

        const x = -(1.51 * Math.sin(phi) * Math.cos(theta));
        const y = 1.51 * Math.cos(phi);
        const z = 1.51 * Math.sin(phi) * Math.sin(theta);
        
        const pointGeometry = new THREE.SphereGeometry(0.03, 8, 8); // Reduced from 16x16
        const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x808000 });
        const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
        pointMesh.position.set(x, y, z);
        globe.add(pointMesh);
    });

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y
        };
        globe.rotation.y += deltaMove.x * 0.005;
        globe.rotation.x += deltaMove.y * 0.005;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };
    
    const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
            isDragging = true;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    };
    
    const onTouchMove = (e: TouchEvent) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaMove = {
            x: e.touches[0].clientX - previousMousePosition.x,
            y: e.touches[0].clientY - previousMousePosition.y
        };
        globe.rotation.y += deltaMove.x * 0.005;
        globe.rotation.x += deltaMove.y * 0.005;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => { isDragging = false; };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: true });
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    // Animation loop with frame limiting
    let animationFrameId: number;
    let lastFrameTime = 0;
    const targetFPS = 30; // Limit to 30 FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
        animationFrameId = requestAnimationFrame(animate);
        
        const elapsed = currentTime - lastFrameTime;
        if (elapsed < frameInterval) return;
        
        lastFrameTime = currentTime - (elapsed % frameInterval);
        
        if (!isDragging) {
            globe.rotation.y += 0.0005;
        }
        renderer.render(scene, camera);
    };
    animate(0);

    // Handle resize
    const handleResize = () => {
        if (mountRef.current) {
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mouseup', onMouseUp);
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        renderer.domElement.removeEventListener('mousemove', onMouseMove);
        renderer.domElement.removeEventListener('touchstart', onTouchStart);
        renderer.domElement.removeEventListener('touchmove', onTouchMove);
        renderer.domElement.removeEventListener('touchend', onTouchEnd);
        
        const currentMount = mountRef.current;
        if (currentMount && renderer.domElement.parentNode === currentMount) {
            currentMount.removeChild(renderer.domElement);
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        texture?.dispose();
    };
  }, [globeTexture, isVisible]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Globe;
