import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

/**
 * FrameLimiter throttles React Three Fiber renders by invalidating
 * the canvas at a fixed frequency. Use with Canvas frameloop="demand".
 *
 * Example:
 * <Canvas frameloop="demand"> <FrameLimiter fps={30} /> ... </Canvas>
 */
export default function FrameLimiter({
  fps = 30,
  enabled = true,
  pauseWhenHidden = true,
  pauseWhenOffscreen = true,
}) {
  const { invalidate, gl } = useThree();
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const intervalRef = useRef(1000 / fps);
  const isRunningRef = useRef(false);
  const observerRef = useRef(null);

  useEffect(() => {
    intervalRef.current = 1000 / Math.max(1, fps);
  }, [fps]);

  useEffect(() => {
    if (!enabled) return;

    const start = () => {
      if (isRunningRef.current) return;
      isRunningRef.current = true;
      rafRef.current = requestAnimationFrame((t) => {
        lastTimeRef.current = t;
        loop(t);
      });
    };

    const stop = () => {
      if (!isRunningRef.current) return;
      isRunningRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };

    const loop = (time) => {
      const last = lastTimeRef.current;
      const interval = intervalRef.current;
      if (time - last >= interval) {
        const drift = (time - last) % interval;
        lastTimeRef.current = time - drift;
        invalidate();
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    // Page visibility pause/resume
    const onVisibility = () => {
      if (!pauseWhenHidden) return;
      if (document.hidden) stop();
      else start();
    };
    if (pauseWhenHidden) document.addEventListener("visibilitychange", onVisibility);

    // Offscreen pause/resume via IntersectionObserver
    if (pauseWhenOffscreen && gl?.domElement) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          if (entry.isIntersecting) start();
          else stop();
        },
        { root: null, threshold: 0 }
      );
      observerRef.current.observe(gl.domElement);
    }

    start();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (pauseWhenHidden) document.removeEventListener("visibilitychange", onVisibility);
      if (observerRef.current && gl?.domElement) {
        observerRef.current.unobserve(gl.domElement);
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      isRunningRef.current = false;
    };
  }, [enabled, invalidate, gl, pauseWhenHidden, pauseWhenOffscreen]);

  return null;
}

