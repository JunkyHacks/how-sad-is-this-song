import React from 'react'

const Title = ({ text, angle = 180 }) => {
  const rotation = angle / text.length

  return (
    <h1 className="title">
      {text.split('').map((char, i) => (
        <span className="title__char" style={{ transform: `rotate(${i * rotation - 90}deg)` }}>
          {char}
        </span>
      ))}
      <i className="title__icon">😢</i>
      <style jsx>{`
        .title {
          font-family: monospace;
          position: relative;
          font-weight: normal;
          transform-origin: left;
          height: 350px;
          width: 350px;
          margin-bottom: 32px;
        }

        .title__icon {
          position: absolute;
          right: 53%;
          font-size: 295px;
          transform: translate(50%, -50%);
          top: 45%;
          font-style: normal;
        }

        .title__char {
          height: 175px;
          position: absolute;
          width: 20px;
          top: 0;
          right: 50%;
          transform-origin: bottom center;
        }
      `}</style>
    </h1>
  )
}

export default Title
