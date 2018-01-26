import Link from 'next/link'
import Head from '../components/head'
import SadnessMeter from '../components/SadnessMeter'
import { search } from '../lib/api'

export default () => (
  <div className="home">
    <Head title="Home" />
    <SadnessMeter amount={0.1} />
    <SadnessMeter amount={0.2} />
    <SadnessMeter amount={0.3} />
    <SadnessMeter amount={0.4} />
    <SadnessMeter amount={0.5} />
    <SadnessMeter amount={0.6} />
    <SadnessMeter amount={0.7} />
    <SadnessMeter amount={0.8} />
    <SadnessMeter amount={0.9} />
    <SadnessMeter amount={1} />
    <style jsx>{`
      .home {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)
