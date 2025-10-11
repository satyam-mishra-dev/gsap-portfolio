import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Model as Astro } from "./Astro";
import gsap from "gsap";

export function InteractiveModel({ scale, isMobile }) {
  const groupRef = useRef();
  const isDragging = useRef(false);
  const previousX = useRef(0);
  const rotationY = useRef(Math.PI);
  const { gl, camera, size } = useThree();

  // Drop animation on mount
  useEffect(() => {
    if (!groupRef.current) return;

    // Convert ~200px to world units at current camera distance
    const fovRad = (camera.fov * Math.PI) / 180;
    const distance = Math.abs(camera.position.z);
    const visibleHeight = 2 * Math.tan(fovRad / 2) * distance;
    const unitsPerPixel = visibleHeight / size.height;
    const mobileOffsetUnits = isMobile ? unitsPerPixel * 200 : 0; // raise ~200px on mobile

    const finalY = -1 + mobileOffsetUnits;

    groupRef.current.position.y = finalY + 2; // start above
    gsap.to(groupRef.current.position, {
      y: finalY,
      duration: 4,
      ease: "elastic.out(1, 0.3)",
      delay: 0.3,
    });
  }, [camera.fov, camera.position.z, size.height, isMobile]);

  // Canvas-level pointer handlers
  useEffect(() => {
    const canvas = gl.domElement;
    // ensure canvas shows grab cursor by default
    canvas.style.cursor = 'grab';
    
    const handlePointerMove = (e) => {
      if (!isDragging.current) return;
      
      console.log('Dragging model!');
      const deltaX = e.clientX - previousX.current;
      rotationY.current += deltaX * 0.01;
      previousX.current = e.clientX;
    };

    const handlePointerDown = (e) => {
      console.log('Canvas pointer down');
      isDragging.current = true;
      previousX.current = e.clientX;
      canvas.style.cursor = 'grabbing';
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerleave', handlePointerUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerleave', handlePointerUp);
    };
  }, [gl]);

  // Update rotation on every frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.current;
    }
  });

  const handlePointerDown = (e) => {
    console.log('Pointer down on model!');
    // let the canvas handler take over; just prevent propagation
    e.stopPropagation();
  };

  const handlePointerOver = () => {
    console.log('Pointer over model!');
    if (!isDragging.current) {
      gl.domElement.style.cursor = 'grab';
    }
  };

  const handlePointerOut = () => {
    console.log('Pointer out of model!');
    if (!isDragging.current) {
      gl.domElement.style.cursor = 'grab';
    }
  };

  return (
    <group ref={groupRef} scale={scale}>
      {/* invisible hitbox to receive pointer events */}
      <mesh
        onPointerDown={handlePointerDown}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        visible={false}
      >
        <boxGeometry args={[1.2, 2, 1.2]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <Astro />
    </group>
  );
}

