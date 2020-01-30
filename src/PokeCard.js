import React, { Component } from 'react'
import './PokeCard.css'

class PokeCard extends Component {
  render () {
    const pokemon = this.props
    const pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`
    return (
      <div className='col text-center mb-3'>
        <div className='PokeCard'>
          <div className='Pokecard-img-holder'>
            <img className='Pokecard-img' src={pokemonImg} />
          </div>
          <div className='PokeCard-details'>
            <h3 className='PokeCard-name pt-2'>{pokemon.name}</h3>
            <p className='PokeCard-type pb-0'>Type: {pokemon.type}</p>
            <p className='PokeCard-xp pb-2'>XP: {pokemon.xp}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default PokeCard
