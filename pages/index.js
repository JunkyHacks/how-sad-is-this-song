import Link from 'next/link'
import Head from '../components/head'

export default () => (
  <div>
    <Head title="Home" />

    <h1>Hello World!</h1>

    <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
  </div>
)
