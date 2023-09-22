import React, { useEffect } from 'react';

function Index() {
  useEffect(() => {
    window.onload = function () {
      particlesJS.load('particles-js', 'https://raw.githubusercontent.com/joft60302/paticles/main/particlesjs-config%20(3).json', function () {
        console.log('particles.js loaded');
      });
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        #particles-js {
          background-image: url("/bgregister3.png");
          position: absolute;
          z-index:-100;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
      <div id="particles-js">
        <div sx={{color:"#fff"}}>test</div>
      </div>
    </div>
  );
}

export default Index;
