import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Axios from 'axios'

class Login extends Component {

    state = {
        users: []
    }

    getAllUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            }).catch((err) => {
                console.log(err)
            })

    }


    render() {
        console.log(this.state.users)
        return (
            <div>
                <h1>Log-In</h1>
                <h3>Please Select and Existing User</h3>
                {this.state.users.map(user => {
                    return (<Link to={`/user/${user._id}`}>
                        {user.userName}
                    </Link>)
                })}
            </div>
        )
    }
}

export default Login