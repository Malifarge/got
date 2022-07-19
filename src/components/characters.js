import React from 'react'

class Character extends React.Component {
	render() {
		return(
            
            <>
            <img src={this.props.image} alt={this.props.name} />
            <p>{this.props.name}</p>
            <p>{this.props.title}</p>
            </>
			
		)
	}
}

export default Character