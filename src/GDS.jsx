import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { MutatingDots } from "react-loader-spinner";
import { XR, createXRStore } from "@react-three/xr"

const store = createXRStore()

function Model(props) {
    const { scene } = useGLTF("output3.glb");
    return <primitive object={scene} position={[-600, -100, 100]} />;
}

function Loading() {
    return <Html>
        <div className="absolute top-0 left-0 w-full flex items-center justify-center h-full text-white">
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="white"
                secondaryColor="white"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass="opacity-75"
            />
        </div>
    </Html>
}

export default function GDS() {
    return (
        <>
            <button onClick={() => store.enterAR()}>Enter AR</button>
            <Canvas pixelRatio={[1, 2]} camera={{ position: [1, 1, 1] }}>
                <XR store={store}>
                    <ambientLight intensity={1.5} />
                    <Suspense fallback={<Loading />}>
                        <Model />
                    </Suspense>
                    <OrbitControls />
                </XR>
            </Canvas>
        </>
    );
}
