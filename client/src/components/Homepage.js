import React, {Component} from 'react'
import {Redirect,Link} from 'react-router-dom'
import Axios from 'axios'
import Login from './Login'

class Homepage extends Component {
    render(){

        return(
            <div>
                <h1>Hello! Welcome to the page!</h1>
                {/* <Link to = '/login'>LogIn </Link > */}
                </div>
        )
    }
}

export default Homepage