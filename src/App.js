import React from 'react'
import Character from './components/characters'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      characters: []
    }
  }

  async componentDidMount(){
    const gotCharacters = await fetch("https://thronesapi.com/api/v2/Characters")
    const data = await gotCharacters.json()
    this.setState({
      characters: data
    })
  }

	render() {
		return(
			<>
      <h1>Game of thrones</h1>
       {this.state.characters.map((character) => (
         <Character key={character.id} name={character.fullName} title={character.title} image={character.imageUrl}/>
        ))}

      </>
		)
	}
}

export default App