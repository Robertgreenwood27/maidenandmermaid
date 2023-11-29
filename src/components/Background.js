import React, { useEffect, useRef, useState } from 'react';

const Background = () => {
  const canvasRef = useRef(null);
  const lightningRef = useRef(null);
  const [isWideViewport, setIsWideViewport] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const lightningCanvas = lightningRef.current;
    const lightningCtx = lightningCanvas.getContext('2d');
    let raindrops = [];
    let lightningTimeout;

    // Function to create raindrops
    function createRain() {
      for (let i = 0; i < 100; i++) {
        raindrops.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          length: Math.random() * 20,
          opacity: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 5 + 2,
        });
      }
    }

    // Function to draw raindrops
    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (image) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      for (let i = 0; i < raindrops.length; i++) {
        const { x, y, length, opacity, speed } = raindrops[i];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + length);
        ctx.globalAlpha = opacity;
        ctx.stroke();

        raindrops[i].y += speed;
        if (raindrops[i].y > window.innerHeight) {
          raindrops[i].y = -length;
        }
      }
    }

    // Function to draw lightning
    function drawLightning() {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const radius = Math.random() * (window.innerWidth / 4) + window.innerWidth / 4;

      lightningCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const gradient = lightningCtx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, `rgba(138, 43, 226, ${Math.random() * 0.8 + 0.2})`);
      gradient.addColorStop(1, 'rgba(138, 43, 226, 0)');

      lightningCtx.fillStyle = gradient;
      lightningCtx.beginPath();
      lightningCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      lightningCtx.fill();

      clearTimeout(lightningTimeout);
      lightningTimeout = setTimeout(() => {
        lightningCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }, 300 + Math.random() * 200);
    }

    // Function to start animation
    function animate() {
      drawRain();
      requestAnimationFrame(animate);
    }

    // Load the image and start animation
    if (isWideViewport) {
      const wideImage = new Image();
      wideImage.src = '/tree.png';
      wideImage.onload = () => {
        setImage(wideImage);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        lightningCanvas.width = window.innerWidth;
        lightningCanvas.height = window.innerHeight;
        createRain();
        animate();
        setInterval(drawLightning, 5000);
      };
    } else {
      const regularImage = new Image();
      regularImage.src = '/tree-wide.png';
      regularImage.onload = () => {
        setImage(regularImage);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        lightningCanvas.width = window.innerWidth;
        lightningCanvas.height = window.innerHeight;
        createRain();
        animate();
        setInterval(drawLightning, 5000);
      };
    }

    // Event listener to update isWideViewport state
    const handleResize = () => {
      setIsWideViewport(window.innerWidth >= 550);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWideViewport]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <canvas ref={lightningRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <canvas ref={canvasRef} style={{ position: 'absolute', width: '100%', height: '100%', opacity: '0.9' }} />
    </div>
  );
};

export default Background;
