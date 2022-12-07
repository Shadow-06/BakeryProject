import { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { proxy, useProxy } from 'valtio';
import { CirclePicker } from 'react-color';
import './styles.scss';
import optionStrawberry from './../../assets/Strawberry-PNG.png';
import optionVanilla from './../../assets/vanilla.jpg';
import optionMango from './../../assets/mango.jpg';
import optionChoco from './../../assets//chocolate.jpg';
import optionOrange from './../../assets/orange.jpg';

const state = proxy({
  current: null,
  items: {
    base: '#AA336A',
    toping1: '#AA336A',
    toping2: '#7B3F00',
    cone1: '#00FF00',
    cone2: '#00FF00',
    cone3: '#00FF00',
    cone4: '#00FF00',
    ball1: '#FFFF00',
    ball2: '#FFFF00',
    ball3: '#FFFF00',
    ball4: '#FFFF00',
    board: '#FFCCCB',
  },
});

function Cake1(props) {
  const ref = useRef();
  const snap = useProxy(state);
  const { nodes, materials } = useGLTF('/cake.glb');

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
      scale={0.5}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        material-color={snap.items.base}
        geometry={nodes.base.geometry}
        material={materials.base}
        position={[0, -0.79, 0]}
      />

      <mesh
        material-color={snap.items.toping1}
        geometry={nodes.toping1.geometry}
        material={materials.toping1}
        position={[0, 0.74, 0]}
        scale={1.05}
      />

      <mesh
        material-color={snap.items.cone1}
        geometry={nodes.cone1.geometry}
        material={materials.cone1}
        position={[0, 0.99, 0.76]}
        scale={[0.14, 0.1, 0.14]}
      />
      <mesh
        material-color={snap.items.toping2}
        geometry={nodes.toping2.geometry}
        material={materials.toping2}
        position={[0, 0.12, 0]}
        scale={[1.08, 1, 1.08]}
      />
      <mesh
        material-color={snap.items.cone2}
        geometry={nodes.cone2.geometry}
        material={materials.cone2}
        position={[0, 0.99, -0.83]}
        scale={[0.14, 0.1, 0.14]}
      />
      <mesh
        material-color={snap.items.cone4}
        geometry={nodes.cone4.geometry}
        material={materials.cone4}
        position={[-0.79, 0.99, 0]}
        scale={[0.14, 0.1, 0.14]}
      />
      <mesh
        material-color={snap.items.cone3}
        geometry={nodes.cone3.geometry}
        material={materials.cone3}
        position={[0.79, 0.99, 0]}
        scale={[0.14, 0.1, 0.14]}
      />
      <mesh
        material-color={snap.items.ball3}
        geometry={nodes.ball3.geometry}
        material={materials.ball3}
        position={[-0.55, 0.93, -0.56]}
        scale={0.1}
      />
      <mesh
        material-color={snap.items.ball2}
        geometry={nodes.ball2.geometry}
        material={materials.ball2}
        position={[0.54, 0.93, -0.56]}
        scale={0.1}
      />
      <mesh
        material-color={snap.items.ball1}
        geometry={nodes.ball1.geometry}
        material={materials.ball1}
        position={[0.54, 0.93, 0.52]}
        scale={0.1}
      />
      <mesh
        material-color={snap.items.ball4}
        geometry={nodes.ball4.geometry}
        material={materials.ball4}
        position={[-0.56, 0.93, 0.52]}
        scale={0.1}
      />
      <mesh
        material-color={snap.items.board}
        geometry={nodes.board.geometry}
        material={materials.board}
        position={[0, -0.9, 0]}
        scale={[1.51, 0.02, 1.61]}
      />
    </group>
  );
}

function Picker() {
  const snap = useProxy(state);
  if (snap.current === 'base') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'toping1') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping1}
            onClick={(color) => (state.items.toping1 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping1}
            onClick={(color) => (state.items.toping1 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping1}
            onClick={(color) => (state.items.toping1 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping1}
            onClick={(color) => (state.items.toping1 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping1}
            onClick={(color) => (state.items.toping1 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'toping2') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping2}
            onClick={(color) => (state.items.toping2 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping2}
            onClick={(color) => (state.items.toping2 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping2}
            onClick={(color) => (state.items.toping2 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping2}
            onClick={(color) => (state.items.toping2 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.toping2}
            onClick={(color) => (state.items.toping2 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'cone1') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone1}
            onClick={(color) => (state.items.cone1 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone1}
            onClick={(color) => (state.items.cone1 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone1}
            onClick={(color) => (state.items.cone1 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone1}
            onClick={(color) => (state.items.cone1 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone1}
            onClick={(color) => (state.items.cone1 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'cone2') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone2}
            onClick={(color) => (state.items.cone2 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone2}
            onClick={(color) => (state.items.cone2 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone2}
            onClick={(color) => (state.items.cone2 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone2}
            onClick={(color) => (state.items.cone2 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone2}
            onClick={(color) => (state.items.cone2 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'cone3') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone3}
            onClick={(color) => (state.items.cone3 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone3}
            onClick={(color) => (state.items.cone3 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone3}
            onClick={(color) => (state.items.cone3 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone3}
            onClick={(color) => (state.items.cone3 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone3}
            onClick={(color) => (state.items.cone3 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'cone4') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone4}
            onClick={(color) => (state.items.cone4 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone4}
            onClick={(color) => (state.items.cone4 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone4}
            onClick={(color) => (state.items.cone4 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone4}
            onClick={(color) => (state.items.cone4 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.cone4}
            onClick={(color) => (state.items.cone4 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'ball1') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball1}
            onClick={(color) => (state.items.ball1 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball1}
            onClick={(color) => (state.items.ball1 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball1}
            onClick={(color) => (state.items.ball1 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball1}
            onClick={(color) => (state.items.ball1 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball1}
            onClick={(color) => (state.items.ball1 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'ball2') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball2}
            onClick={(color) => (state.items.ball2 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball2}
            onClick={(color) => (state.items.ball2 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball2}
            onClick={(color) => (state.items.ball2 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball2}
            onClick={(color) => (state.items.ball2 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball2}
            onClick={(color) => (state.items.ball2 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'ball3') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball3}
            onClick={(color) => (state.items.ball3 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball3}
            onClick={(color) => (state.items.ball3 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball3}
            onClick={(color) => (state.items.ball3 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball3}
            onClick={(color) => (state.items.ball3 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball3}
            onClick={(color) => (state.items.ball3 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === 'ball4') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '10px',
          left: '40px',
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball4}
            onClick={(color) => (state.items.ball4 = '#FC5A8D')}
          >
            <img src={optionStrawberry} data-option='Strawberry' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball4}
            onClick={(color) => (state.items.ball4 = '#F3E5AB')}
          >
            <img src={optionVanilla} data-option='Vanilla' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball4}
            onClick={(color) => (state.items.ball4 = '#F4BB44')}
          >
            <img src={optionMango} data-option='Mango' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball4}
            onClick={(color) => (state.items.ball4 = '#332421')}
          >
            <img src={optionChoco} data-option='Choco' />
          </button>
        </div>
        <div
          class='options'
          style={{
            display: snap.current ? 'block' : 'none',
            position: 'relative',
            top: '10px',
            left: '40px',
          }}
        >
          <button
            color={snap.items.ball4}
            onClick={(color) => (state.items.ball4 = '#FFA500')}
          >
            <img src={optionOrange} data-option='Orange' />
          </button>
        </div>
      </div>
    );
  }

  if (snap.current === 'board') {
    return (
      <div
        style={{
          display: snap.current ? 'block' : 'none',
          position: 'relative',
          top: '20px',
          left: '500px',
        }}
      >
        <h1>{snap.current}</h1>
        <CirclePicker
          colors={[
            '#fff',
            '#abdee6',
            '#cbaacb',
            '#ffffb5',
            '#ffccb6',
            '#f3b0c3',
          ]}
          color={snap.items.board}
          onChange={(color) => (state.items.board = color.hex)}
        />
      </div>
    );
  }
}

export default function Cake() {
  return (
    <>
      <Picker />
      <Canvas
        concurrent
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 0, 2.75] }}
      >
        <ambientLight intensity={0.5} />

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
          <Cake1 />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
