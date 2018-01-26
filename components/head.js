import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="http://ellekasai.github.io/twemoji-awesome/twemoji-awesome.css" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f602.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f606.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f604.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f610.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f615.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f626.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f61f.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f623.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f622.svg" as="image" />
    <link rel="preload" href="https://twemoji.maxcdn.com/2/svg/1f62d.svg" as="image" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Head
