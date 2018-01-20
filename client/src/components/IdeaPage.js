import React, { Component } from 'react'
import axios from 'axios'
// import styled from 'styled-components'

class IdeaPage extends Component {
    state = {
        ideas: [
            {
                id: 1,
                title: 'hello',
                description: 'world'
            }, {
                id: 2,
                title: 'hola',
                description: 'mundo'
            }, {
                id: 3,
                title: 'goodnight',
                description: 'moon'
            }, {
                id: 4,
                title: 'greetings',
                description: 'earthlings'
            }
        ]
    }

    async componentWillMount() {
        const response = await axios.get('/api/ideas')
        this.setState({ideas: response.data})
    }

    createIdea = async () => {
        const res = await axios.post(`/api/ideas`)
        console.log(res)
        const newIdea = res.data
        
        const newIdeas = [...this.state.ideas]
        newIdeas.unshift(newIdea) //This will add the new Idea to the beginning of the array
        this.setState({ideas: newIdeas})
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Idea Board</h1>
                    <button>New Idea</button>
                </div>
                <div>
                    {this.state.ideas.map((idea)=> {
            return (
              <div key={idea.title}>
                        <input type="text" name="title" />
                        <textarea name="description" />
                        <button>Delete Idea</button>
                        <button onClick={this.createIdea}>New Idea</button>
                    </div>
                    )
          })}
        </div>
            </div>
        )
    }
}

export default IdeaPage