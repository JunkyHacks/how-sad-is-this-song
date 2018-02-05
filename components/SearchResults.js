import React from 'react'

import Button from './Button'

const SearchResults = ({ results, onSelect }) => (
  <ul>
    {results.map(result => (
      <li key={result.trackId}>
        <p>
          <strong>{result.name}</strong>
          <br />
          <small>{result.artist}</small>
        </p>
        <Button onClick={() => onSelect(result)}>Go →</Button>
      </li>
    ))}
    <style jsx>{`
      ul {
        list-style: none;
        width: 100%;
        margin: 32px 0;
      }

      li {
        text-align: left;
        background: #d4e3f3;
        border-radius: 5px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      li:not(:last-child) {
        margin-bottom: 16px;
      }
    `}</style>
  </ul>
)

export default SearchResults
