import Link from 'next/link'
import Head from '../components/head'
import SadnessMeter from '../components/SadnessMeter'

export default () => (
  <div className="home">
    <Head title="Home" />
    <h1>How SAD is my song!?</h1>
    <style jsx>{`
      .home {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)
