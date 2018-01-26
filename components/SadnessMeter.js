import React from 'react'

const emojis = [
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

class SadnessMeter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.percentage === this.props.amount * 100
        ? clearInterval(this.interval)
        : this.setState({ percentage: this.state.percentage + 5 })
    }, 100)
  }

  render() {
    const { percentage } = this.state
    const emoji = emojis[Math.floor(this.state.percentage / 10) - 1]

    return (
      <figure className="sadness-meter">
        <figure className={`sadness-meter__emoji twa twa-${emoji}`} />
        <svg viewBox="0 0 32 32">
          <title>{percentage}%</title>
          <circle r="16" cx="16" cy="16" strokeDasharray={`${100 - percentage} 100`} />
        </svg>
        <style jsx>{`
          .sadness-meter {
            position: relative;
            width: 100px;
          }

          .sadness-meter__emoji {
            z-index: 1;
            position: absolute;
            width: 70px;
            height: 70px;
            top: 50%;
            right: 50%;
            background-size: cover;
            transform: translate(50%, -50%);
            filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
          }

          .sadness-meter svg {
            width: 100px;
            height: 100px;
            transform: rotate(-90deg);
            background: #eee;
            border-radius: 50%;
            position: relative;
          }

          .sadness-meter circle {
            fill: #2196f3;
            stroke: #eee;
            stroke-width: 32;
            transition: stroke-dasharray ease 0.5s;
          }
        `}</style>
      </figure>
    )
  }
}

export default SadnessMeter
