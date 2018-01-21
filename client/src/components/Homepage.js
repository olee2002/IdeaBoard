import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import Login from './Login'

class Homepage extends Component {
    render(){

        return(
            <div>
                Hello! Welcome to the page!
                <Login />
                </div>
        )
    }
}

export default Homepage