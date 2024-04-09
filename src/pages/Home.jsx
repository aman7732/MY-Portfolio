import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../Components/Loader";
import HomeInfo from "../Components/HomeInfo";

import Island01 from "../Models/Island01";
import Sky from "../Models/Sky";
import Bird from "../Models/Bird";
import Plane from "../Models/Plane";
// import Island from "../Models/Island01";

import sakura from "../assets/sakura.mp3";
// import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
// import { Bird, Island01, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />

          <Island01
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;

// import {useState, Suspense} from 'react'
// import { Canvas } from '@react-three/fiber'
// import Loader from '../Components/Loader'

// import Island from '../Models/Island01';
// import Sky from '../Models/Sky';
// import Bird from '../Models/Bird';
// import Plane from '../Models/Plane';

// const Home = () => {
// const [isRotating, setIsRotating] = useState(false)

//   const adjustIslandForScreenSize = () =>{
//     let screenScale = null;
//     let screenPosition = [0, -6.5, -43];
//     let rotation = [0.1, 4.7, 0];

//     if(window.innerWidth < 768){
//       screenScale = [0.9, 0.9, 0.9];
//     }else{
//       screenScale = [1, 1, 1];
//     }
//     return [screenScale, screenPosition, rotation];
//   }

//   const adjustPlaneForScreenSize = () =>{
//     let screenScale, screenPosition;

//     if(window.innerWidth < 768){
//       screenScale = [1.5, 1.5, 1.5];
//       screenPosition = [0, -1.5, 0]
//     }else{
//       screenScale = [3, 3, 3];
//       screenPosition = [0, -4, -4]
//     }
//     return [screenScale, screenPosition]
//   }

//   const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

//   const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize();

//   return (
//    <section className="w-full h-screen relative">
//    <Canvas
//    className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'}`}
//    camera={{near: 0.1, far: 1000}}
//    >
//     <Suspense fallback={<Loader />}>
//       <directionalLight position={[1,1,1]} intensity={2}/>
//       <ambientLight />
//       <pointLight />
//       <spotLight />
//       <hemisphereLight />

//        <Bird />
//       <Sky />
//       <Island
//       position={islandPosition}
//       scale={islandScale}
//       rotation={islandRotation}
//       isRotating={isRotating}
//       setisRotating={setIsRotating}
//       />
//       <Plane
//       isRotating={isRotating}
//       PlaneScale={PlaneScale}
//       PlanePosition={PlanePosition}
//       rotation={[0, 20, 0]}
//       />
//     </Suspense>

//    </Canvas>
//    </section>
//   )
// }

// export default Home
