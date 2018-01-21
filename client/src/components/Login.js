import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    state = {
        users: []
    }
    componentWillMount() {
        this.getAllUsers()

    }
    getAllUsers = () => {

        axios.get('/api/users')
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })

    }
    createUser = () => {
        axios.post('/api/users',{
            user: this.state.user
        }).then((res) => {
            this.setState({createdUser: res.data })
        })
    }
    handleChange = (e) => {
        // e.preventDefault()
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    handleSignUp = (e) => {
        e.preventDefault()

        this.createUser()
    }



    render() {
        // console.log(this.state.users)
        return (
            <div>
                <Link to={`/`}>BackToHome</Link>
                <h1>Log-In</h1>
                <h4>Please Select and Existing User</h4>
                {this.state.users.map(user => {
                    return (
                        <div>
                            <Link to={`/user/${user._id}`} key={user._id}>
                                <div>User: {user.userName}</div>
                            </Link>
                        </div>
                    )
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
                    <button>Sign Up</button>
                </form>
            </div>

        )
    }
}


export default Login