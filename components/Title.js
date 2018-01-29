import React from 'react'

const Title = ({ text, angle = 180 }) => {
  const rotation = angle / (text.length - 1)

  return (
    <h1 className="title" style={{ transform: `rotate(-${angle / 2}deg)` }}>
      {text.split('').map((char, i) => (
        <span className="title__char" style={{ transform: `rotate(${i * rotation}deg)` }}>
          {char}
        </span>
      ))}
      <style jsx>{`
        .title {
          font-family: monospace;
          position: relative;
          font-weight: normal;
          transform-origin: left;
          width: 400px;
        }

        .title__char {
          height: 200px;
          position: absolute;
          width: 20px;
          left: 0;
          top: 0;
          transform-origin: bottom center;
        }
      `}</style>
    </h1>
  )
}

export default Title
