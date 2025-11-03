import Particles from "@/components/Particles";

export default function Main() {
  return (
    <div className="h-screen relative overflow-auto">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.7}
        particleBaseSize={150}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={true}
        className="absolute w-full h-full"
      />
    </div>
  );
}
