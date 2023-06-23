import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { Loader } from "../Loader";

const Earth = () => {
    const [resizeEarth, setResizeEarth] = useState(false);
    const earth = useGLTF("./planet/scene.gltf");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1280px)");

        setResizeEarth(mediaQuery.matches);

        const handleResize = (e) => {
            setResizeEarth(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <primitive
            object={earth.scene}
            scale={resizeEarth ? 2.5 : 2}
            position-y={0}
            rotation-y={0}
        />
    );
};

export function EarthCanvas() {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
}
