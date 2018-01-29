import Link from 'next/link'

import Head from '../components/head'
import Title from '../components/Title'
import SadnessMeter from '../components/SadnessMeter'
import SearchBar from '../components/SearchBar'

export default () => (
  <div className="home">
    <Head title="Home" />
    <Title text="How sad is this song?" angle={180} />
    <SearchBar />
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
        color: #041030;
      }

      .home {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)
