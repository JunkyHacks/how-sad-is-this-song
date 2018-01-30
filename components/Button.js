import React from 'react'

const Button = ({ children }) => (
  <button>
    <span className="eff" />
    <span className="label">{children}</span>
    <style jsx>{`
      button {
        padding: 8px 16px;
        position: relative;
        min-width: 58px;
        min-height: 35px
        color: inherit;
        font-weight: bold;
        cursor: pointer;
        background: none;
        border: 0;
      }

      .label,
      .eff {
        background: white;
        border: 2px solid;
        color: inherit;
        font-weight: bold;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
      }

      .eff {
        transition: transform ease .1s;
        transform: translate(4px, 4px);
      }

      button:hover .eff {
        transform: translate(2px, 2px);
      }

      .label {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </button>
)

export default Button
