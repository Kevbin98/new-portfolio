// src/components/EarthCanvas.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const EarthCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
    );
    camera.position.set(1, 1, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;

    const textureLoader = new THREE.TextureLoader();

    const earthMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load("/textures/earthmap.jpg"),
      bumpMap: textureLoader.load("/textures/earthbump.jpg"),
      bumpScale: 0.2,
      specularMap: textureLoader.load("/textures/earthspec.jpg"),
      specular: new THREE.Color("grey"),
      shininess: 10,
    });

    const earthGeometry = new THREE.SphereGeometry(0.5, 64, 64);
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    const cloudMaterial = new THREE.MeshLambertMaterial({
      //map: textureLoader.load("/textures/earthcloudmap.jpg"),
      alphaMap: textureLoader.load("/textures/earthcloudmaptrans.jpg"),
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const cloudGeometry = new THREE.SphereGeometry(0.503, 64, 64);
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Glow Shader
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        c: { type: "f", value: 0.7 },
        p: { type: "f", value: 7.0 },
        glowColor: { type: "c", value: new THREE.Color(0x93cfef) },
        viewVector: { type: "v3", value: camera.position },
      },
      vertexShader: `
        uniform vec3 viewVector;
        uniform float c;
        uniform float p;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(c - dot(vNormal, vNormel), p);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, 1.0);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const glowGeometry = new THREE.SphereGeometry(0.523, 64, 64);
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, 10, 2);
    spotLight.position.set(2, 0, 1);
    scene.add(spotLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 1, 1);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.001;
      cloudMesh.rotation.y += 0.0015;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000; // Start with 10k, scale up if needed

    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = THREE.MathUtils.randFloatSpread(1000);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.6,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    return () => {
      if (
        mountRef.current &&
        renderer.domElement &&
        renderer.domElement.parentNode
      ) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default EarthCanvas;
