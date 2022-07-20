import React from 'react'
import Character from './components/characters'
import './style/global.css'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      characters: [],
      favorites: []
    }
  }

  async componentDidMount(){
    const gotCharacters = await fetch("https://thronesapi.com/api/v2/Characters")
    const data = await gotCharacters.json()
    this.setState({
      characters: data
    })
  }

  handleFavoriteClick = character =>{
    let favoritesBis = [...this.state.favorites]
    let test = 0
    favoritesBis.forEach((favoris)=>{
      if (favoris.id === character.id) {
        test++
      }
    })

    if(test===0){
    favoritesBis= [...this.state.favorites, character]
    this.setState({
      favorites: favoritesBis
    })
    }
  }

  handleUnfavoriteClick = (favorite) =>{
    let Unfavorite= [...this.state.favorites]
    const index = Unfavorite.indexOf(favorite)
    Unfavorite.splice(index,1)
    this.setState({
      favorites: Unfavorite
    })
    }
  

	render() {
		return(
			<>
      <h1>Game of thrones</h1>
      <section>
      {this.state.characters.map((character) => (
         <Character 
         key={character.id} 
         name={character.fullName} 
         title={character.title} 
         image={character.imageUrl}
         favoris={this.handleFavoriteClick}
         characterInfo={character} 
         buttonName="Favoris"
         />
        ))}
      </section>
      <h2>Favorites</h2>
      <section>
      {this.state.favorites.map((favorite) => (
         <Character 
         key={favorite.id} 
         name={favorite.fullName} 
         title={favorite.title} 
         image={favorite.imageUrl}
         favoris={this.handleUnfavoriteClick}
         characterInfo={favorite}
         buttonName="Enlever"
         />
        ))}
      </section>
       
      </>
		)
	}
}

export default App