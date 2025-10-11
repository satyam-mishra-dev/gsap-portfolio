import { Canvas } from "@react-three/fiber";
import { InteractiveModel } from "../components/InteractiveModel";
import { Environment, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import FrameLimiter from "../components/FrameLimiter";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help brands and startups unlock growth through 
  intelligent web experiences, AI-powered agents, 
  & research-driven innovation`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen overflow-x-clip">
      <div style={{ pointerEvents: 'none' }}>
        <AnimatedHeaderSection
          subTitle={"404 No Bugs Found"}
          title={"Satyam Mishra"}
          text={text}
          textColor={"text-black"}
        />
      </div>
      <figure
        className="absolute inset-0 -z-50 w-full h-full"
      >
        <Canvas
          shadows
          frameloop="always"
          dpr={isMobile ? [0.8, 1] : [1, 2]}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          style={{ pointerEvents: 'auto' }}
        >
          <FrameLimiter fps={isMobile ? 30 : 60} enabled />
          <ambientLight intensity={0.5} />
          <InteractiveModel scale={isMobile ? 1.8 : 2.5} isMobile={isMobile} />
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
