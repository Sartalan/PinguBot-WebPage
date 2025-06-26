
import * as THREE from 'three';
import { useRef, useEffect } from 'react'


export function Model(){

const containerRef = useRef(null);

useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( containerRef.curret.offsetWidth, containerRef.current.offsetHeight );
  renderer.setAnimationLoop( animate );
  containerRef.current.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

}

   return () => {
      renderer.dispose();
      containerRef.current.innerHTML = '';
    };

}, [])  


return( 
 <div ref={containerRef} class="hidden md:block w-1/1 h-100" id="model">
  </div>
)

}






