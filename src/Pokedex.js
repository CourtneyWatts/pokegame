import React, { Component } from 'react'
import './Pokedex.css'

class Pokedex extends Component {
  render () {
    const hand = this.props.hand
    const player = this.props.deck
    return (
      <div className='Pokedex text-center'>
        <div className='Pokedex-details pt-5 d-flex align-items-center justify-content-between'>
          <h4>Points: {this.props.xp}</h4>
          <h2 className={this.props.isWinner ? 'winner' : 'loser'}>{this.props.isWinner ? 'Winning Hand' : 'Losing Hand'}</h2>
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
