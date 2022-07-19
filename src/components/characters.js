import React from 'react'

class Character extends React.Component {
	render() {
		return(
            
            <article>
            <img src={this.props.image} alt={this.props.name} />
            <h2>{this.props.name}</h2>
            <p>{this.props.title}</p>
            </article>
			
		)
	}
}

export default Character