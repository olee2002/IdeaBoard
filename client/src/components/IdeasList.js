import React, { Component } from 'react'
import axios from 'axios'

class IdeasList extends Components{
 
    state={
        ideas : []
    }

   async componentWillMount(){
        const res  = await axios.get('http://localhost:3001/api/ideas')
       
        this.setState({ideas: res.data})
    }

render(){

    return( 
    <div> 
        <p>
        {this.state.ideas.map((idea)=>{
            return idea.title
        })}
        </p>
        
        </div>
)}

}

export default IdeasList