import React from 'react'
import Link from 'next/link'

import Head from '../components/Head'
import Container from '../components/Container'
import Logo from '../components/Logo'
import SadnessMeter from '../components/SadnessMeter'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

import { token, search, lyricSentiment } from '../lib/api'
import { debounce } from '../lib/utils'

const normalizeResult = res =>
  res.tracks.items.map(({ artists, album, name }) => ({
    name,
    artist: artists[0].name,
    album: album.name,
  }))

class Page extends React.Component {
  state = {
    results: [],
  }

  searchTracks = debounce(300, value =>
    search({
      q: value,
      type: 'track',
      limit: 10,
      accessToken: this.props.token,
    })
      .then(normalizeResult)
      .then(results => this.setState({ results })),
  )

  handleSearchChange = ({ target }) => this.searchTracks(target.value)

  render() {
    return (
      <div>
        <Head title="Home" />
        <Container>
          <Logo text="How sad is this song?-How sad is this song?-" angle={360} />
          <SearchBar onChange={this.handleSearchChange} />
          <SearchResults results={this.state.results} />
        </Container>
        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
          }

          html {
            font-size: 16px;
          }

          body {
            font-size: 1rem;
            font-family: 'Noto Sans', sans-serif;
            color: #222;
          }
        `}</style>
      </div>
    )
  }
}

Page.getInitialProps = async ({ query }) => {
  if (query.artist && query.song) {
    const sentiment = await lyricSentiment(query.artist, query.song)
  }
  try {
    const { access_token } = await token().then(res => res.json())

    return { token: access_token }
  } catch (e) {
    return e
  }
}

export default Page
