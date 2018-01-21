import React, { Component } from 'react'
import axios from 'axios'
// import styled from 'styled-components'

class IdeaView extends Component {
    state = {
        user: {
            userName: 'Bob'
        },
        redirect: false,
        ideas: [{
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
        }]
    }

    getUserId = () => {
        if (this.props.match.params) {
            const { userId } = this.props.match.params
            axios.get(`/api/users/${userId}`).then(res => {
                const user = {
                    _id: res.data._id,
                    userName: res.data.userName
                }

                const ideas = res.data.ideas
                this.setState({ user, ideas })
            })
        }
    }

    componentWillMount() {
        this.getUserId()
    }

    createIdea = () => {
        console.log(this.state.ideas)
        console.log(this.state.user)
      
        axios.get(`/api/users/${this.state.user._id}/ideas`)
            .then(res => {
                const newIdeas = [...this.state.ideas]
                newIdeas.push(res.data.ideas) //This will add the new Idea to the beginning of the array
                this.setState({ ideas: newIdeas })
            }).catch(console.log)
            console.log(this.state.ideas)
    }
    deleteIdea = (idea) => {
       
        axios.get(`/api/users/${this.state.user._id}/ideas/`)
            .then(res => {
                const indexToDelete = res.data.indexOf(idea)
                const newIdeas = [...this.state.ideas]
                newIdeas.splice(indexToDelete,1) //This will add the new Idea to the beginning of the array
                this.setState({ ideas:  newIdeas })
            }).catch(console.log)
    }
    render() {
        
        return (
            <div>
                <div>
                    <h1>{this.state.user.userName}'s Idea Board</h1>
                    <button onClick={this.createIdea}>New Idea</button>
                </div>
                <div>
                    {this.state.ideas.map(idea => {
                        return (
                            <div key={this.state.user.id}>
                                <input type='text' name='title' />
                                <textarea name='description' />
                                <button onClick={this.deleteIdea}>Delete Idea</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default IdeaView