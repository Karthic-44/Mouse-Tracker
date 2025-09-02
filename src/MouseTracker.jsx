import { useEffect, useState } from 'react'

import './App.css'

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0});
  useEffect(() => {
    const handelMouseMove = (event) =>{
      setMousePosition({x: event.clientX, y: event.clientY});
    }
    window.addEventListener('mousemove',handelMouseMove);
    console.log("Mouse listener added");

    return () => {
      window.removeEventListener('mousemove', handelMouseMove)
      console.log("Mouse listener remmoved");
      
    };

  },[]);
  return (
   <div>
    <h2>Mouse Position</h2>
    <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>

   </div>
  );
}

export default MouseTracker
