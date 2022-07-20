import React from 'react'

class Continent extends React.Component{
    render() {
        console.log("hello");
        return (
        <p>{this.props.infos}</p>
        );
    }
}

export default Continent