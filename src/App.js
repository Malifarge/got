import React from 'react'
import Character from './components/characters'
import './style/global.css'

let myArticle

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      characters: [],
      favorites: [],
      continents: [],
      onglet : true,
    }
  }

  async componentDidMount(){
    const gotCharacters = await fetch("https://thronesapi.com/api/v2/Characters")
    const data = await gotCharacters.json()
    const gotContinents = await fetch("https://thronesapi.com/api/v2/Continents")
    const dataContinents = await gotContinents.json()
    this.setState({
      characters: data,
      continents: dataContinents
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
    myArticle = document.getElementById(character.id)
    myArticle.classList.add("favoris")
    }

  }

  handleUnfavoriteClick = (favorite) =>{
    let Unfavorite= [...this.state.favorites]
    const index = Unfavorite.indexOf(favorite)
    Unfavorite.splice(index,1)
    this.setState({
      favorites: Unfavorite
    })
    myArticle = document.getElementById(favorite.id)
    myArticle.classList.remove("favoris")
    }

    handleClickCharacters = () =>{
      this.setState({
        onglet : true
      })
    }

    handleClickContinents = () =>{
      this.setState({
        onglet : false
      })
    }
	render() {
		return(
			<>
      <h1>Game of thrones</h1>

      <nav className='flex'> <button onClick={this.handleClickCharacters}>Characters</button> <button onClick={this.handleClickContinents}>Continents</button></nav>

      {this.state.onglet ? (
      <><section>
      {
      this.state.characters.map((character) => (
         <Character 
         key={character.id}
         id={character.id} 
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
         id={`${favorite.id}F`}
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
      ):(
        <section className='continent'>
        {this.state.continents.map((continent) => {
            return(<p key={continent.name}>{continent.name}</p>)
        })}
      </section>
      )
      }
      
      </>
		)
	}
}

export default App