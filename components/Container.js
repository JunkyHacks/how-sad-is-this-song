import React from 'react'

const Container = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        max-width: 600px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Container
