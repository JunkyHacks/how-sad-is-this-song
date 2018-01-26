import React from 'react'

const EmojiMeter = ({ percentage, emoji }) => (
  <div className="emoji-meter">
    <i className={`emoji-meter__emoji twa twa-${emoji}`} />
    <svg viewBox="0 0 32 32">
      <circle r="16" cx="16" cy="16" strokeDasharray={`${100 - percentage} 100`} />
    </svg>
    <style jsx>{`
      .emoji-meter {
        position: relative;
        width: 100px;
      }

      .emoji-meter__emoji {
        z-index: 1;
        position: absolute;
        width: 70px;
        height: 70px;
        top: 50%;
        right: 50%;
        background-size: cover;
        transform: translate(50%, -50%);
        filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
      }

      .emoji-meter svg {
        width: 100px;
        height: 100px;
        transform: rotate(-90deg);
        background: #eee;
        border-radius: 50%;
        position: relative;
      }

      .emoji-meter circle {
        fill: #2196f3;
        stroke: #eee;
        stroke-width: 32;
        transition: stroke-dasharray ease 0.5s;
        will-change: stroke-dasharray;
      }
    `}</style>
  </div>
)

export default EmojiMeter
