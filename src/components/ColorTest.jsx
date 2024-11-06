import React, { useEffect, useState } from 'react';

function ColorTest() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');
  function ColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[ColorUtility(hex.length)];
    }

    setColor(hexColor);
  }
  function handleRandomRgbColor() {
    const r = ColorUtility(256);
    const g = ColorUtility(256);
    const b = ColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(()=>{
    if(typeOfColor==="rgb")handleRandomRgbColor()
    else handleRandomHexColor()
  },[typeOfColor])
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        onClick={() => setTypeOfColor('hex')}
        className="border border-white text-white"
      >
        create HEX color
      </button>
      <button
        onClick={() => setTypeOfColor('rgb')}
        className="border border-white text-white"
      >
        create RGB color
      </button>
      <button
        onClick={
          typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor
        }
        className="border border-white text-white"
      >
        Generate random color
      </button>
      <div
        style={{
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          gap: '20px',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '50px',
        }}
      >
        <h1>
          {typeOfColor === 'rgb' ? "RGB color" :"HEX color"}
        </h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default ColorTest;
