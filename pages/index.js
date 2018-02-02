import Link from 'next/link'

import Head from '../components/Head'
import Container from '../components/Container'
import Logo from '../components/Logo'
import SadnessMeter from '../components/SadnessMeter'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
import { token } from '../lib/api'

const Page = ({ content }) => (
  <div>
    <Head title="Home" />
    <Container>
      <Logo text="How sad is this song?-How sad is this song?-" angle={360} />
      {JSON.stringify(content)}
      <SadnessMeter amount={1} />
      <SearchBar />
      <SearchResults
        results={[
          { name: 'Creep', artist: 'Radiohead' },
          { name: 'Creep', artist: 'Radiohead' },
          { name: 'Creep', artist: 'Radiohead' },
          { name: 'Creep', artist: 'Radiohead' },
        ]}
      />
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

Page.getInitialProps = async () => {
  try {
    const accessToken = await token()
    return await accessToken.json()
  } catch (e) {
    return e
  }
}

export default Page
