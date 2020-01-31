import React, { Component } from 'react'
import './Pokedex.css'

class Pokedex extends Component {
  render () {
    const hand = this.props.hand
    const player = this.props.deck
    const verdict = () => {
      if (this.props.handResult !== 'draw') {
        if (this.props.handResult === 'winner') {
          return 'Winning Hand'
        } else {
          return 'Losing Hand'
        }
      }
      return 'Draw'
    }
    return (
      <div className='Pokedex text-center'>
        <div className='Pokedex-details pt-5 d-flex align-items-center justify-content-between'>
          <h4>Points: {this.props.xp}</h4>
          <h2 className={this.props.handResult}>{verdict()}</h2>
        </div>
        <div className='row align-items-center'>
          <div className='Pokedex-player'>Player {player}</div>
          {hand}
        </div>
      </div>
    )
  }
}
export default Pokedex
