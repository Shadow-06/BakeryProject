import { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

import { useParams } from 'react-router-dom';
import { getOrderDetailsStart } from './../../redux/Orders/orders.actions';
import { useDispatch, useSelector } from 'react-redux';
import { proxy, useProxy } from 'valtio';
import { Link, useHistory } from 'react-router-dom';
import { setOrderDetails } from './../../redux/Orders/orders.actions';
import './styles.scss';



function Donut1(props) {
  // const snapref = useRef();

  const OrderDetails = ({ order }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const orderItems = order && order.orderItems;
    const Item = orderItems[1].items

  useEffect(() => {

    dispatch(
        setOrderDetails({})
    );

  }, []);

//   const 

  const ref = useRef();

  const snap = useProxy(state);
  const { nodes, materials } = useGLTF('/donut.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered]);

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={10}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <group position={[0, 0.02, 0]}>
        <mesh
          material-color={snap.items.Base}
          geometry={nodes.Base.geometry}
          material={materials.Base}
        />
        <mesh
          material-color={snap.items.Top}
          geometry={nodes.Top.geometry}
          material={materials.Top}
        />
      </group>

      <mesh
        material-color={snap.items.Base}
        geometry={nodes.Base.geometry}
        material={materials.Base}
        position={[0, 0.01, 0]}
      />
      <mesh
        material-color={snap.items.Top}
        geometry={nodes.Top.geometry}
        material={materials.Top}
        position={[0, 0.02, 0]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3001.geometry}
        material={materials.Sprinkles}
        position={[0, 0.05, -0.05]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3002.geometry}
        material={materials.Sprinkles}
        position={[-0.03, 0.05, -0.03]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3003.geometry}
        material={materials.Sprinkles}
        position={[0.06, 0.05, 0.01]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2001.geometry}
        material={materials.Sprinkles}
        position={[-0.01, 0.05, -0.06]}
        rotation={[-0.87, 0.44, -1.78]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2002.geometry}
        material={materials.Sprinkles}
        position={[0.06, 0.05, -0.02]}
        rotation={[-0.87, 0.44, -1.78]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1.geometry}
        material={materials.Sprinkles}
        position={[-0.04, 0.05, 0.01]}
        rotation={[-1.04, -0.27, -1.9]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1002.geometry}
        material={materials.Sprinkles}
        position={[0.05, 0.05, 0]}
        rotation={[-1.04, -0.27, -1.9]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1003.geometry}
        material={materials.Sprinkles}
        position={[0.04, 0.05, -0.02]}
        rotation={[-1.04, -0.27, -1.9]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2003.geometry}
        material={materials.Sprinkles}
        position={[0.04, 0.05, 0.02]}
        rotation={[-0.87, 0.44, -1.78]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4001.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.05, -0.02]}
        rotation={[-0.73, 0.23, -1.52]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4002.geometry}
        material={materials.Sprinkles}
        position={[-0.04, 0.05, -0.04]}
        rotation={[-0.73, 0.23, -1.52]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4003.geometry}
        material={materials.Sprinkles}
        position={[-0.01, 0.05, 0.05]}
        rotation={[-0.73, 0.23, -1.52]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5001.geometry}
        material={materials.Sprinkles}
        position={[-0.03, 0.05, 0.03]}
        rotation={[-0.84, 0.1, -1.71]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5002.geometry}
        material={materials.Sprinkles}
        position={[0.04, 0.05, 0.04]}
        rotation={[-0.84, 0.1, -1.71]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5003.geometry}
        material={materials.Sprinkles}
        position={[-0.04, 0.05, -0.03]}
        rotation={[-0.84, 0.1, -1.71]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3004.geometry}
        material={materials.Sprinkles}
        position={[0.05, 0.05, -0.04]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3005.geometry}
        material={materials.Sprinkles}
        position={[0.03, 0.04, 0.02]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3006.geometry}
        material={materials.Sprinkles}
        position={[0.02, 0.05, 0.04]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1004.geometry}
        material={materials.Sprinkles}
        position={[0.02, 0.05, -0.06]}
        rotation={[-1.04, -0.27, -1.9]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1005.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.05, 0]}
        rotation={[-1.04, -0.27, -1.9]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5004.geometry}
        material={materials.Sprinkles}
        position={[0.03, 0.05, -0.03]}
        rotation={[-0.84, 0.1, -1.71]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4004.geometry}
        material={materials.Sprinkles}
        position={[0.06, 0.05, -0.02]}
        rotation={[-0.73, 0.23, -1.52]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2004.geometry}
        material={materials.Sprinkles}
        position={[0.01, 0.05, 0.05]}
        rotation={[-0.87, 0.44, -1.78]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2005.geometry}
        material={materials.Sprinkles}
        position={[-0.04, 0.05, -0.02]}
        rotation={[-0.87, 0.44, -1.78]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1001.geometry}
        material={materials.Sprinkles}
        position={[-0.01, 0.05, 0.03]}
        rotation={[-1.04, -0.27, -1.9]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3.geometry}
        material={materials.Sprinkles}
        position={[-0.02, 0.05, -0.05]}
        rotation={[-0.84, 0.69, -1.49]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.05, -0.01]}
        rotation={[-0.87, 0.44, -1.78]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 0.05, 0.02]}
        rotation={[-0.73, 0.23, -1.52]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5.geometry}
        material={materials.Sprinkles}
        position={[0.01, 0.05, -0.05]}
        rotation={[-0.84, 0.1, -1.71]}
      />
    </group>
  );
}

// function Picker() {
//   const snap = useProxy(state);
//   if (snap.current === 'Top') {
//     return (
//       <div
//         style={{
//           display: snap.current ? 'block' : 'none',
//           position: 'relative',
//           top: '10px',
//           left: '40px',
//         }}
//       >
//         <h1>{snap.current}</h1>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Top}
//             onClick={(color) => (state.items.Top = '#FC5A8D')}
//           >
//             <img src={optionStrawberry} data-option='Strawberry' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Top}
//             onClick={(color) => (state.items.Top = '#F3E5AB')}
//           >
//             <img src={optionVanilla} data-option='Vanilla' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Top}
//             onClick={(color) => (state.items.Top = '#F4BB44')}
//           >
//             <img src={optionMango} data-option='Mango' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Top}
//             onClick={(color) => (state.items.Top = '#7B3F00')}
//           >
//             <img src={optionChoco} data-option='Choco' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Top}
//             onClick={(color) => (state.items.Top = '#FFA500')}
//           >
//             <img src={optionOrange} data-option='Orange' />
//           </button>
//         </div>
//       </div>
//     );
//   }
//   if (snap.current === 'Base') {
//     return (
//       <div
//         style={{
//           display: snap.current ? 'block' : 'none',
//           position: 'relative',
//           top: '10px',
//           left: '40px',
//         }}
//       >
//         <h1>{snap.current}</h1>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Base}
//             onClick={(color) => (state.items.Base = '#FC5A8D')}
//           >
//             <img src={optionStrawberry} data-option='Strawberry' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Base}
//             onClick={(color) => (state.items.Base = '#F3E5AB')}
//           >
//             <img src={optionVanilla} data-option='Vanilla' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Base}
//             onClick={(color) => (state.items.Base = '#F4BB44')}
//           >
//             <img src={optionMango} data-option='Mango' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Base}
//             onClick={(color) => (state.items.Base = '#7B3F00')}
//           >
//             <img src={optionChoco} data-option='Choco' />
//           </button>
//         </div>
//         <div
//           class='options'
//           style={{
//             display: snap.current ? 'block' : 'none',
//             position: 'relative',
//             top: '10px',
//             left: '40px',
//           }}
//         >
//           <button
//             color={snap.items.Base}
//             onClick={(color) => (state.items.Base = '#FFA500')}
//           >
//             <img src={optionOrange} data-option='Orange' />
//           </button>
//         </div>
//       </div>
//     );
//   }
//   if (snap.current === 'Sprinkles') {
//     return (
//       <div
//         style={{
//           display: snap.current ? 'block' : 'none',
//           position: 'relative',
//           top: '20px',
//           left: '500px',
//         }}
//       >
//         <h1>{snap.current}</h1>
//         <CirclePicker
//           colors={[
//             '#fff',
//             '#abdee6',
//             '#cbaacb',
//             '#ffffb5',
//             '#ffccb6',
//             '#f3b0c3',
//           ]}
//           color={snap.items.Sprinkles}
//           onChange={(color) => (state.items.Sprinkles = color.hex)}
//         />
//       </div>
//     );
//   }
// }

export default function Donut() {
  const dispatch = useDispatch();
  const history = useHistory();
  const snap = useProxy(state);

  
  
  return (
    <>
      
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[80, 80, 30]} castShadow />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={2}
          far={1}
        />
        <Suspense fallback={null}>
          <Donut1 />
        </Suspense>

        <OrbitControls />
      </Canvas>
      

      {/* <button onClick="Click()">Click me</button> */}
    </>
  );
}
