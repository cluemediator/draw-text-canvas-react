import React, { useRef, useEffect } from 'react';

function App() {
  const canvas = useRef();
  let ctx = null;

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    writeText({ text: 'Clue Mediator!', x: 180, y: 70 });

    writeText({ text: 'Welcome to ', x: 180, y: 70 }, { textAlign: 'right' });

    writeText({ text: 'www.cluemediator.com', x: 180, y: 130 }, { fontSize: 30, color: 'green', textAlign: 'center' });

    writeText({ text: 'Like, Share and Subscribe...', x: 180, y: 200 }, { fontSize: 14, fontFamily: 'cursive', color: 'blue', textAlign: 'center' });
  }, []);

  // write a text
  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;

    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }

  return (
    <div className="App">
      <h3>Write text on Canvas - <a href="http://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default App;