import React, { useEffect } from 'react';
import { useState } from 'react';

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');
  function colorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleRandomHexColor() {
    //#634278
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }

    setColor(hexColor);
  }
  function handleRandomRgbColor() {
    const r = colorUtility(256);
    const g = colorUtility(256);
    const b = colorUtility(256);
    setColor(`rgb(${r},${g},${b})`)

  }
  useEffect(()=>{
    if(typeOfColor==="rgb") handleRandomRgbColor()
    else handleRandomHexColor()
  },[typeOfColor])

  return (
    <div style={{ width: '100vw', height: '100vh', background: color }}>
      <button
        className="text-white border border-white"
        onClick={() => setTypeOfColor('hex')}
      >
        create HEX color
      </button>
      <button
        className="text-white border border-white"
        onClick={() => setTypeOfColor('rgb')}
      >
        create RGB color
      </button>
      <button
        className="text-white border border-white"
        onClick={
          typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        generate random color
      </button>
      <div style={{display:"flex", justifyContent:"center",alignItems:"center" ,fontSize:"60px" ,color:"white",gap:"20px", marginTop:"50px", flexDirection:"column"}}>
            <h2>{typeOfColor ==="rgb"?"RGB Color":"HEX Color"}</h2>
            <h2>{color}</h2>
      </div>
    </div>
  );
}

export default RandomColor;
