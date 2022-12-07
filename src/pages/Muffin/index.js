import { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { proxy, useProxy } from "valtio";
import { CirclePicker } from "react-color";
import "./styles.scss";
import optionStrawberry from "./../../assets/Strawberry-PNG.png";
import optionVanilla from "./../../assets/vanilla.jpg";
import optionMango from "./../../assets/mango.jpg";
import optionChoco from "./../../assets//chocolate.jpg";
import optionOrange from "./../../assets/orange.jpg";

const state = proxy({
  current: null,
  items: {
    base: "#CD7F32",
    icing: "#AA336A",
    wrapper: "#ffffff",
    Sprinkles: "#ykasff",
  },
});

function Muffin1(props) {
  const ref = useRef();
  const snap = useProxy(state);
  const { nodes, materials } = useGLTF("/cupcake.glb");

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
  //   ref.current.rotation.x = Math.cos(t / 4) / 8;
  //   ref.current.rotation.y = Math.sin(t / 4) / 8;
  //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });
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
        position={[0.01, 0.68, -0.11]}
        scale={[0.46, 0.17, 0.46]}
      />
      <mesh
        material-color={snap.items.icing}
        geometry={nodes.icing.geometry}
        material={materials.icing}
        position={[0.01, 0.77, 0.01]}
        scale={0.41}
      />
      <mesh
        material-color={snap.items.base}
        geometry={nodes.base.geometry}
        material={materials.base}
        position={[0.01, 0.68, -0.11]}
        scale={[0.46, 0.17, 0.46]}
      />
      <mesh
        material-color={snap.items.wrapper}
        geometry={nodes.wrapper.geometry}
        material={materials.wrapper}
        position={[0, 0.06, 0]}
        scale={[0.64, 0.51, 0.64]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle.geometry}
        material={materials.Sprinkles}
        position={[-0.09, 0.88, -0.32]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3.geometry}
        material={materials.Sprinkles}
        position={[-0.25, 0.97, 0.01]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2.geometry}
        material={materials.Sprinkles}
        position={[0.2, 0.91, -0.22]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4.geometry}
        material={materials.Sprinkles}
        position={[0.27, 0.91, -0.08]}
        rotation={[-0.73, 0.23, -1.52]}
        scale={4.82}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5.geometry}
        material={materials.Sprinkles}
        position={[0.29, 0.92, 0.05]}
        rotation={[-0.84, 0.1, -1.71]}
        scale={7.18}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1002.geometry}
        material={materials.Sprinkles}
        position={[-0.17, 0.95, -0.2]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2001.geometry}
        material={materials.Sprinkles}
        position={[-0.06, 0.95, -0.25]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5001.geometry}
        material={materials.Sprinkles}
        position={[0.16, 1, 0.05]}
        rotation={[-0.84, 0.1, -1.71]}
        scale={7.18}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2002.geometry}
        material={materials.Sprinkles}
        position={[0.06, 0.92, -0.28]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2003.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 1.11, -0.02]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1003.geometry}
        material={materials.Sprinkles}
        position={[-0.17, 1, -0.18]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1004.geometry}
        material={materials.Sprinkles}
        position={[0.16, 0.94, -0.2]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1005.geometry}
        material={materials.Sprinkles}
        position={[0.07, 0.97, -0.2]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3001.geometry}
        material={materials.Sprinkles}
        position={[-0.05, 1.14, 0.01]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3002.geometry}
        material={materials.Sprinkles}
        position={[0.06, 1.06, 0.01]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2004.geometry}
        material={materials.Sprinkles}
        position={[-0.3, 0.93, -0.15]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2005.geometry}
        material={materials.Sprinkles}
        position={[-0.32, 0.91, 0]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1006.geometry}
        material={materials.Sprinkles}
        position={[-0.14, 0.97, -0.07]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4001.geometry}
        material={materials.Sprinkles}
        position={[0.23, 0.91, 0.2]}
        rotation={[-0.73, 0.23, -1.52]}
        scale={4.82}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2006.geometry}
        material={materials.Sprinkles}
        position={[-0.04, 1.02, 0.17]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3003.geometry}
        material={materials.Sprinkles}
        position={[-0.2, 0.97, 0.14]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2007.geometry}
        material={materials.Sprinkles}
        position={[-0.31, 0.93, 0.11]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2008.geometry}
        material={materials.Sprinkles}
        position={[-0.23, 0.9, 0.27]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2009.geometry}
        material={materials.Sprinkles}
        position={[0.09, 0.99, 0.11]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1007.geometry}
        material={materials.Sprinkles}
        position={[-0.07, 0.92, 0.32]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1008.geometry}
        material={materials.Sprinkles}
        position={[0.11, 0.88, 0.35]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4002.geometry}
        material={materials.Sprinkles}
        position={[0.23, 0.85, 0.28]}
        rotation={[-0.73, 0.23, -1.52]}
        scale={4.82}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3004.geometry}
        material={materials.Sprinkles}
        position={[-0.07, 1.16, 0.07]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3005.geometry}
        material={materials.Sprinkles}
        position={[0.01, 1.16, 0.03]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2010.geometry}
        material={materials.Sprinkles}
        position={[-0.03, 1.05, -0.12]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3006.geometry}
        material={materials.Sprinkles}
        position={[0.02, 1.16, 0.07]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2011.geometry}
        material={materials.Sprinkles}
        position={[0, 1.1, 0.1]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle5002.geometry}
        material={materials.Sprinkles}
        position={[0.06, 1.1, 0.04]}
        rotation={[-0.84, 0.1, -1.71]}
        scale={7.18}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4003.geometry}
        material={materials.Sprinkles}
        position={[0.12, 0.96, 0.22]}
        rotation={[-0.73, 0.23, -1.52]}
        scale={4.82}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle4004.geometry}
        material={materials.Sprinkles}
        position={[0.09, 0.91, 0.29]}
        rotation={[-0.73, 0.23, -1.52]}
        scale={4.82}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1009.geometry}
        material={materials.Sprinkles}
        position={[0.05, 1.03, 0.16]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle1010.geometry}
        material={materials.Sprinkles}
        position={[0.12, 1.01, -0.1]}
        rotation={[-1.04, -0.27, 1.25]}
        scale={[3.72, 9.84, 3.53]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3007.geometry}
        material={materials.Sprinkles}
        position={[-0.15, 1.05, -0.02]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2012.geometry}
        material={materials.Sprinkles}
        position={[-0.14, 0.93, 0.13]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle2013.geometry}
        material={materials.Sprinkles}
        position={[-0.15, 0.9, 0.1]}
        rotation={[-0.87, 0.44, -1.78]}
        scale={[2.49, 10.81, 5.26]}
      />
      <mesh
        material-color={snap.items.Sprinkles}
        geometry={nodes.Sprinkle3008.geometry}
        material={materials.Sprinkles}
        position={[-0.16, 0.95, 0.12]}
        rotation={[-0.84, 0.69, -1.49]}
        scale={[1.03, 3.67, 3.1]}
      />
    </group>
  );
}
function Picker() {
  const snap = useProxy(state);
  if (snap.current === "base") {
    return (
      <div
        style={{
          display: snap.current ? "block" : "none",
          position: "relative",
          top: "10px",
          left: "40px",
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = "#FC5A8D")}
          >
            <img src={optionStrawberry} data-option="Strawberry" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = "#F3E5AB")}
          >
            <img src={optionVanilla} data-option="Vanilla" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = "#F4BB44")}
          >
            <img src={optionMango} data-option="Mango" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = "#332421")}
          >
            <img src={optionChoco} data-option="Choco" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.base}
            onClick={(color) => (state.items.base = "#FFA500")}
          >
            <img src={optionOrange} data-option="Orange" />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === "icing") {
    return (
      <div
        style={{
          display: snap.current ? "block" : "none",
          position: "relative",
          top: "10px",
          left: "40px",
        }}
      >
        <h1>{snap.current}</h1>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.icing}
            onClick={(color) => (state.items.icing = "#FC5A8D")}
          >
            <img src={optionStrawberry} data-option="Strawberry" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.icing}
            onClick={(color) => (state.items.icing = "#F3E5AB")}
          >
            <img src={optionVanilla} data-option="Vanilla" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.icing}
            onClick={(color) => (state.items.icing = "#F4BB44")}
          >
            <img src={optionMango} data-option="Mango" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.icing}
            onClick={(color) => (state.items.icing = "#332421")}
          >
            <img src={optionChoco} data-option="Choco" />
          </button>
        </div>
        <div
          class="options"
          style={{
            display: snap.current ? "block" : "none",
            position: "relative",
            top: "10px",
            left: "40px",
          }}
        >
          <button
            color={snap.items.icing}
            onClick={(color) => (state.items.icing = "#FFA500")}
          >
            <img src={optionOrange} data-option="Orange" />
          </button>
        </div>
      </div>
    );
  }
  if (snap.current === "wrapper") {
    return (
      <div
        style={{
          display: snap.current ? "block" : "none",
          position: "relative",
          top: "20px",
          left: "500px",
        }}
      >
        <h1>{snap.current}</h1>
        <CirclePicker
          colors={[
            "#fff",
            "#abdee6",
            "#cbaacb",
            "#ffffb5",
            "#ffccb6",
            "#f3b0c3",
          ]}
          color={snap.items.wrapper}
          onChange={(color) => (state.items.wrapper = color.hex)}
        />
      </div>
    );
  }
  if (snap.current === "Sprinkles") {
    return (
      <div
        style={{
          display: snap.current ? "block" : "none",
          position: "relative",
          top: "20px",
          left: "500px",
        }}
      >
        <h1>{snap.current}</h1>
        <CirclePicker
          colors={[
            "#fff",
            "#abdee6",
            "#cbaacb",
            "#ffffb5",
            "#ffccb6",
            "#f3b0c3",
          ]}
          color={snap.items.Sprinkles}
          onChange={(color) => (state.items.Sprinkles = color.hex)}
        />
      </div>
    );
  }
}

export default function Muffin() {
  return (
    <>
      <Picker />
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
          <Muffin1 />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
