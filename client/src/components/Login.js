import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    state = {
        users: []
    }

    getAllUsers = () => {

        axios.get('/api/users')
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })
        console.log(this.state.users)
    }

    createUser = () => {
        axios.post('/api/users', {
            user: this.state.user
        }).then((res) => {
            this.setState({
                redirectToHome: true,
                createdUser: res.data
            })
        })
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleSignUp = (event) => {
        event.preventDefault()
        this.createUser()
    }

    componentWillMount () {
        this.getAllUsers()
       
      }

    render() {
        console.log(this.state.users)
        return (
            <div>
                <Link to={`/`}>BackToHome</Link>
                <h1>Log-In</h1>
                <h3>Please Select and Existing User</h3>
                {this.state.users.map(user => {
                    return (<Link to={`/user/${user._id}`}>
                        {user.userName}
                    </Link>)
                })}
                
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.password} />
                    </div>
                    <button> Sign Up </button>
                </form>
                </div>
                
                    )
    }
}


export default Login