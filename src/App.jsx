import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0});
  useEffect(() => {
    const handelMouseMove = (event) =>{
      setMousePosition({x: event.clientX, y: event.clientY});
    }
    window.addEventListener('mousemove',handelMouseMove);
  },[]);
  return (
   <div>
    <h2>Mouse Position</h2>
    <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>

   </div>
  );
}

export default App
