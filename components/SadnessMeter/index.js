import React from 'react'

import EmojiMeter from './EmojiMeter'

class SadnessMeter extends React.Component {
  state = {
    percentage: 0,
  }

  emojis = [
    'joy',
    'laughing',
    'smile',
    'neutral-face',
    'confused',
    'frowning',
    'worried',
    'persevere',
    'cry',
    'sob',
  ]

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.percentage === this.props.amount * 100
        ? clearInterval(this.interval)
        : this.setState({ percentage: this.state.percentage + 1 })
    }, 20)
  }

  render() {
    const { percentage } = this.state
    const emoji = this.emojis[Math.floor(this.state.percentage / 10) - 1]

    return (
      <figure className="sadness-meter">
        <EmojiMeter emoji={emoji} percentage={percentage} />
        <figcaption>{percentage} %</figcaption>
        <style jsx>{`

        `}</style>
      </figure>
    )
  }
}

export default SadnessMeter
