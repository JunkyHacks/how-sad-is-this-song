import React from 'react'

const Title = ({ text, angle = 180 }) => {
  const rotation = angle / (text.length - 1)

  return (
    <h1 className="title">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="title__char"
          style={{ transform: `translate(50%, -50%) rotate(${i * rotation - 90}deg)` }}
        >
          {char}
        </span>
      ))}
      <span className="title__icon">😢</span>
      <style jsx>{`
        .title {
          font-family: monospace;
          position: relative;
          font-weight: normal;
          transform-origin: left;
          height: 200px;
          width: 400px;
          margin-bottom: 200px;
        }

        .title__icon {
          position: absolute;
          right: 50%;
          font-size: 350px;
          transform: translate(50%, -50%);
          top: 100%;
        }

        .title__char {
          height: 200px;
          position: absolute;
          width: 20px;
          top: 50%;
          right: 50%;
          transform-origin: bottom center;
        }
      `}</style>
    </h1>
  )
}

export default Title
