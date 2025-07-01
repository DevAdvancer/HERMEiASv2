import { useFrame, useThree } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Iphone16 } from '../assets/DemoLe-Assets/Iphone16';
import { useScroll, useTransform } from 'motion/react';


const DemoLePhone = () => {
    const { camera } = useThree()
    const { scrollYProgress } = useScroll()

    const x = useTransform(scrollYProgress, [0, 0.2, 0.5], [-6.92, -9.108493862362037, -6.92]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.5], [-0.0057, 0.1872756154044498, -0.0057]);
    const z = useTransform(scrollYProgress, [0, 0.2, 0.5], [5.92, 0.016352467306954218, -5.92]);


    useFrame(() => {
        const xPos = x.get()
        const yPos = y.get()
        const zPos = z.get()
        camera.position.set(xPos, yPos, zPos)
        camera.lookAt(0, 0, 0)
    })

    return (
        <>
            <PerspectiveCamera makeDefault fov={45} />
            
            <Environment preset='city' />
            <Iphone16 />
        </>
    );
};
export default DemoLePhone;