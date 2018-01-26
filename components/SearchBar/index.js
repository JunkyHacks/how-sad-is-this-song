import React from 'react'

const SearchBar = ({ onChange, value }) => (
  <form className="search-bar">
    <input
      className="search-bar__input"
      type="search"
      onChange={onChange}
      value={value}
      autoFocus
    />
    <style jsx>{`
      .search-bar__input {
        font-size: 24px;
        padding: 16px 32px;
        border: 4px solid;
        outline: 0;
        width: 600px;
      }
    `}</style>
  </form>
)

export default SearchBar
