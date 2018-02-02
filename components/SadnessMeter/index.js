import React from 'react'

import EmojiMeter from './EmojiMeter'

class SadnessMeter extends React.Component {
  state = {
    percentage: 0,
  }

  emojis = ['😂', '😀', '☺', '😐', '😕', '😟', '☹', '😣', '😢', '😭']

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.percentage === this.props.amount * 100
        ? clearInterval(this.interval)
        : this.setState({ percentage: this.state.percentage + 5 })
    }, 50)
  }

  render() {
    const { percentage } = this.state
    const emoji = this.emojis[Math.floor(this.state.percentage / 10) - 1]

    return (
      <figure className="sadness-meter">
        <EmojiMeter emoji={emoji} percentage={percentage} />
        <figcaption>{percentage} %</figcaption>
      </figure>
    )
  }
}

export default SadnessMeter
