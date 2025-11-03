import Particles from "./Particles";

export default function ParticlesBackground() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-50 pointer-events-none">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.7}
                particleBaseSize={150}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={true}
            />
        </div>
    )
}