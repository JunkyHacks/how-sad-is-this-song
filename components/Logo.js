import React from 'react'

const Logo = ({ text, angle = 180 }) => {
  const rotation = angle / text.length

  return (
    <h1 className="logo">
      {text.split('').map((char, i) => (
        <span key={i} className="logo__char" style={{ transform: `translateX(-50%) rotate(${i * rotation - 90}deg)` }}>
          {char}
        </span>
      ))}
      <i className="logo__icon">😢</i>
      <style jsx>{`
        .logo {
          font-family: monospace;
          position: relative;
          font-weight: normal;
          transform-origin: left;
          height: 350px;
          width: 350px;
          margin: 32px 0;
        }

        .logo__icon {
          position: absolute;
          right: 50%;
          font-size: 295px;
          transform: translate(50%, -50%);
          top: 45%;
          font-style: normal;
        }

        .logo__char {
          height: 175px;
          position: absolute;
          width: 20px;
          top: 0%;
          left: 50%;
          transform-origin: bottom center;
        }
      `}</style>
    </h1>
  )
}

export default Logo
