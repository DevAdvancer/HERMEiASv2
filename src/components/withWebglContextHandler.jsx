import React, { useState, useEffect, useRef } from 'react';

const withWebglContextHandler = (WrappedComponent) => {
  return (props) => {
    const [contextLost, setContextLost] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const handleContextLost = (event) => {
        event.preventDefault();
        setContextLost(true);
        console.warn('WebGL context lost. Attempting to restore...');
      };

      const handleContextRestored = () => {
        setContextLost(false);
        console.log('WebGL context restored.');
      };

      canvas.addEventListener('webglcontextlost', handleContextLost, false);
      canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

      return () => {
        canvas.removeEventListener('webglcontextlost', handleContextLost);
        canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      };
    }, []);

    if (contextLost) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-black text-white">
          <p>Rendering context lost. Attempting to restore...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} ref={canvasRef} />;
  };
};

export default withWebglContextHandler;
