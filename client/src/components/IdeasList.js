import React, { Component } from 'react'
import axios from 'axios'

class IdeasList extends Components{
 
    state={
        ideas : []
    }

   async componentWillMount(){
        const response  = await axios.get('/ideas')

        this.setState({ideas: response.data})
    }

render(){

    return( 
    <div> 
        <p>{this.state.ideas.map((idea)=>{
            return idea.title
        })}</p>
        
        </div>
)}

}

export default IdeasList