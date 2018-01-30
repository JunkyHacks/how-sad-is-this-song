import Link from 'next/link'

import Head from '../components/head'
import Title from '../components/Title'
import SadnessMeter from '../components/SadnessMeter'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
import { token } from '../lib/api'

const Page = ({ content }) => (
  <div className="home">
    <Head title="Home" />
    <Title text="How sad is this song?-How sad is this song?-" angle={360} />
    {JSON.stringify(content)}
    <SearchBar />
    <SearchResults
      results={[
        { name: 'Creep', artist: 'Radiohead' },
        { name: 'Creep', artist: 'Radiohead' },
        { name: 'Creep', artist: 'Radiohead' },
        { name: 'Creep', artist: 'Radiohead' },
      ]}
    />
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

      .home {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        max-width: 600px;
        margin: auto;
      }
    `}</style>
  </div>
)

Page.getInitialProps = async () => {
  const access_token = await token()
  const content = await access_token.json()
  return { content }
}

export default Page
