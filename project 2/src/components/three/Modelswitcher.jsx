import { PresentationControls } from '@react-three/drei';
import React from 'react'
import { useRef } from 'react';
import MacbookModel16 from '../mymodels/Macbook-16';
import MacbookModel14 from '../mymodels/Macbook-14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1; 
const OFFSET_DISTANCE = 5; 

const fadeMeshes = (group, opacity ) =>{
    if (!group ) return;

    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
        }

    })
}

const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION });
}

 

const Modelswitcher = ({scale, isMobile } ) => {
    const SmallMacbookRef = useRef();
    const LargeMacbookRef = useRef();
    
const showLargeMacbook = scale === 0.08 || scale === 0.05;
    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup( SmallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup( LargeMacbookRef.current, 0);
        
        
            fadeMeshes(SmallMacbookRef.current, 0);
            fadeMeshes(LargeMacbookRef.current, 1);
        } else {
            moveGroup( SmallMacbookRef.current, 0);
            moveGroup( LargeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(SmallMacbookRef.current, 1);
            fadeMeshes(LargeMacbookRef.current, 0);
        }    

    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [ -Math.PI , Math.PI ],
        azimuth :[-Infinity , Infinity ], 
        config : { mass: 1, tension: 0, friction: 26 }

    }



  return (
    <>
       <PresentationControls { ...controlsConfig}>
            <group ref={LargeMacbookRef}>
                <MacbookModel16 scale ={isMobile ? 0.05 : 0.08 }/>
            </group>
        </PresentationControls> 

        <PresentationControls { ...controlsConfig}>
            <group ref={SmallMacbookRef}>
                <MacbookModel14 scale ={isMobile ? 0.03 : 0.06 }/>
            </group>
        </PresentationControls> 
    </>
  )
}

export default Modelswitcher
