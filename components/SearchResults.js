import React from 'react'
import Link from 'next/link'

import Button from './Button'

const SearchResults = ({ results }) => (
  <ul>
    {results.map(result => (
      <li key={result.trackId}>
        <p>
          <strong>{result.name}</strong>
          <br />
          <small>{result.artist}</small>
        </p>
        <Link
          href={`/?artist=${result.artist}&song=${result.name}&duration=${results.duration}&trackId=${results.trackId}`}
        >
          <Button>Go →</Button>
        </Link>
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
