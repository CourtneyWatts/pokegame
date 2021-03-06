import React, { Component } from 'react'
import Pokedex from './Pokedex'
import pokedexListing from './pokedexListing'
import PokeCard from './PokeCard'
import './Pokegame.css'
import redo from './images/redo.svg'





function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class Pokegame extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  static defaultProps = {
    pokemon: pokedexListing
  }

  handleClick(){
    const redoButton = document.querySelector('.Pokegame-play-again')
    if (redoButton.classList.contains('active')){
      return
    }
    redoButton.classList.add('active')
    setTimeout(()=> {
      redoButton.classList.remove('active')
      this.setState({
        counter: 3
      })
      
    }, 1000)
    
   
  }
  render() {
    const cards = this.props.pokemon.map(function (p) {
      let pokemonId = String(p.id)
      while (pokemonId.length < 3) {
        pokemonId = `0${pokemonId}`
      }
      return <PokeCard key={p.id} name={p.name} type={p.type} xp={p.base_experience} id={pokemonId} />
    })
    shuffle(cards)
    const hand1 = cards.slice(0, 4)
    const hand2 = cards.slice(4,8)
    let xp1 = hand1.reduce((exp, pokemon)=> {
      return exp + pokemon.props.xp
    },0)
    let xp2 = hand2.reduce((exp, pokemon)=> {
      return exp + pokemon.props.xp
    },0)
    let hand1Result = 'draw';
    let hand2Result = 'draw'
    if (xp1 !== xp2){
      if (xp1>xp2){
        hand1Result = 'winner'
        hand2Result = 'loser'
      } else {
        hand1Result = 'loser'
        hand2Result = 'winner'
      }
    }



    return (
      <div className='game container'>
        <Pokedex deck={1} hand={hand1} xp={xp1} handResult={hand1Result}/>
        <Pokedex deck={2} hand={hand2} xp={xp2} handResult={hand2Result}/>
        <div onClick={()=>{this.handleClick()}} className="Pokegame-play-again d-flex align-items-center justify-content-center">
          <div >
            Play Again
          </div>
          <img className='Pokegame-redo' src={redo}/>
        </div>
      </div>
    )
  }
}
export default Pokegame
