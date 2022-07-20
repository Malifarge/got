import React from 'react'

class Character extends React.Component {
	render() {
		return(
            
            <article>
            <div className='image' style={{ 
            backgroundImage: `url(${this.props.image})` 
            }}></div>
            <h2>{this.props.name}</h2>
            <p>{this.props.title}</p>
            <button onClick={() => this.props.favoris(this.props.characterInfo)}>{this.props.buttonName}</button>
            </article>
			
		)
	}
}

export default Character