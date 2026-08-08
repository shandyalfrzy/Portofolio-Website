import { useRef, useState, useEffect, useMemo, createRef, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, BallCollider, useSphericalJoint } from '@react-three/rapier';
import { RoundedBox, useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';
import profileImg from '../../assets/profile.png';
import './LanyardBadge.css';

const SEGMENTS = 12;
const SEG_SPACING = 0.26;
const ANCHOR_Y = 2.8;
const CARD_W = 1.5;
const CARD_H = 2.0;
const BAND_RADIUS = 0.022;

/* -----------------------------------------------
   RopeJoint — one spherical joint per pair of
   consecutive rigid bodies. Each is a separate
   component so the hook call count stays stable.
   ----------------------------------------------- */
function RopeJoint({ a, b }) {
  useSphericalJoint(a, b, [
    [0, -SEG_SPACING / 2, 0],
    [0, SEG_SPACING / 2, 0],
  ]);
  return null;
}

/* -----------------------------------------------
   LanyardScene — 3D scene rendered inside Canvas
   ----------------------------------------------- */
function LanyardScene() {
  const texture = useTexture(profileImg);
  texture.colorSpace = THREE.SRGBColorSpace;

  const segRefs = useMemo(
    () => Array.from({ length: SEGMENTS }, () => createRef()),
    []
  );

  const tubeRef = useRef();
  const dragging = useRef(false);
  const [, forceRender] = useState(0); // for cursor change
  const { viewport, pointer } = useThree();

  // Pre-create curve control points (reused every frame)
  const curvePoints = useMemo(
    () => Array.from({ length: SEGMENTS }, (_, i) =>
      new THREE.Vector3(0, ANCHOR_Y - i * SEG_SPACING, 0)
    ),
    []
  );

  // Initial curve for tube geometry
  const initialCurve = useMemo(
    () => new THREE.CatmullRomCurve3(
      curvePoints.map(p => p.clone())
    ),
    [curvePoints]
  );

  // Update band visual + drag each frame
  useFrame(() => {
    // Read rigid body positions into curvePoints
    let allReady = true;
    for (let i = 0; i < SEGMENTS; i++) {
      const body = segRefs[i].current;
      if (body) {
        const t = body.translation();
        curvePoints[i].set(t.x, t.y, t.z);
      } else {
        allReady = false;
      }
    }

    // Rebuild tube geometry from updated control points
    if (allReady && tubeRef.current) {
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const geo = new THREE.TubeGeometry(curve, 48, BAND_RADIUS, 6, false);
      tubeRef.current.geometry.dispose();
      tubeRef.current.geometry = geo;
    }

    // Follow pointer while dragging
    if (dragging.current) {
      const lastBody = segRefs[SEGMENTS - 1].current;
      if (lastBody) {
        const x = (pointer.x * viewport.width) / 2;
        const y = (pointer.y * viewport.height) / 2;
        lastBody.setNextKinematicTranslation({ x, y, z: 0 });
      }
    }
  });

  /* --- Drag handlers --- */
  const startDrag = useCallback((e) => {
    e.stopPropagation();
    dragging.current = true;
    forceRender(n => n + 1);
    const lastBody = segRefs[SEGMENTS - 1].current;
    if (lastBody) {
      lastBody.setBodyType(2, true); // KinematicPositionBased
    }
    document.body.style.cursor = 'grabbing';
  }, [segRefs]);

  const stopDrag = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    forceRender(n => n + 1);
    const lastBody = segRefs[SEGMENTS - 1].current;
    if (lastBody) {
      lastBody.setBodyType(0, true); // Dynamic
      lastBody.wakeUp();
    }
    document.body.style.cursor = 'auto';
  }, [segRefs]);

  useEffect(() => {
    window.addEventListener('pointerup', stopDrag);
    return () => window.removeEventListener('pointerup', stopDrag);
  }, [stopDrag]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.95} />
      <directionalLight position={[4, 6, 6]} intensity={0.55} castShadow />

      {/* Rope segments (rigid bodies) */}
      {segRefs.map((ref, i) => (
        <RigidBody
          key={i}
          ref={ref}
          type={i === 0 ? 'fixed' : 'dynamic'}
          position={[0, ANCHOR_Y - i * SEG_SPACING, 0]}
          angularDamping={4}
          linearDamping={1.5}
          colliders={false}
          canSleep={false}
        >
          <BallCollider args={[0.025]} />

          {/* Badge card attached to the LAST body */}
          {i === SEGMENTS - 1 && (
            <group
              position={[0, -CARD_H / 2 - 0.12, 0]}
              onPointerDown={startDrag}
              onPointerEnter={() => { if (!dragging.current) document.body.style.cursor = 'grab'; }}
              onPointerLeave={() => { if (!dragging.current) document.body.style.cursor = 'auto'; }}
            >
              {/* Card body */}
              <RoundedBox
                args={[CARD_W, CARD_H, 0.05]}
                radius={0.1}
                smoothness={4}
              >
                <meshStandardMaterial color="#FFFFFF" roughness={0.25} metalness={0.02} />
              </RoundedBox>

              {/* Photo (front face) */}
              <mesh position={[0, 0.18, 0.026]}>
                <planeGeometry args={[CARD_W * 0.68, CARD_W * 0.68]} />
                <meshStandardMaterial map={texture} />
              </mesh>

              {/* Name */}
              <Text
                position={[0, -0.58, 0.026]}
                fontSize={0.12}
                color="#14202B"
                anchorX="center"
                anchorY="middle"
                maxWidth={CARD_W * 0.85}
              >
                SHANDY ALFRIZY
              </Text>

              {/* Role */}
              <Text
                position={[0, -0.76, 0.026]}
                fontSize={0.075}
                color="#4A6173"
                anchorX="center"
                anchorY="middle"
                maxWidth={CARD_W * 0.85}
              >
                UI/UX Designer & Web Developer
              </Text>

              {/* Accent stripe at top of card */}
              <mesh position={[0, CARD_H / 2 - 0.06, 0.026]}>
                <planeGeometry args={[CARD_W, 0.12]} />
                <meshStandardMaterial color="#14202B" />
              </mesh>

              {/* Lanyard clip hole */}
              <mesh position={[0, CARD_H / 2 + 0.02, 0]}>
                <ringGeometry args={[0.035, 0.06, 16]} />
                <meshStandardMaterial color="#8AA6B8" side={THREE.DoubleSide} />
              </mesh>
            </group>
          )}
        </RigidBody>
      ))}

      {/* Spherical joints connecting consecutive segments */}
      {segRefs.slice(1).map((ref, i) => (
        <RopeJoint key={`j-${i}`} a={segRefs[i]} b={ref} />
      ))}

      {/* Lanyard band (tube that follows segment positions) */}
      <mesh ref={tubeRef}>
        <tubeGeometry args={[initialCurve, 48, BAND_RADIUS, 6, false]} />
        <meshStandardMaterial color="#14202B" roughness={0.6} />
      </mesh>
    </>
  );
}

/* -----------------------------------------------
   MobileBadge — CSS-animated fallback for small screens
   ----------------------------------------------- */
function MobileBadge() {
  return (
    <div className="lanyard-mobile">
      <div className="lanyard-mobile-strap"></div>
      <div className="lanyard-mobile-card">
        <div className="lanyard-mobile-stripe"></div>
        <img src={profileImg} alt="Shandy Alfrizy" className="lanyard-mobile-photo" />
        <span className="lanyard-mobile-name">SHANDY ALFRIZY</span>
        <span className="lanyard-mobile-role">UI/UX Designer & Web Developer</span>
      </div>
    </div>
  );
}

/* -----------------------------------------------
   LanyardBadge — exported wrapper:
   desktop → 3D Canvas, mobile → CSS fallback
   ----------------------------------------------- */
export default function LanyardBadge() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) return <MobileBadge />;

  return (
    <div className="lanyard-canvas">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]} interpolate>
            <LanyardScene />
          </Physics>
        </Suspense>
      </Canvas>
      <p className="lanyard-hint">↕ Drag the badge</p>
    </div>
  );
}
