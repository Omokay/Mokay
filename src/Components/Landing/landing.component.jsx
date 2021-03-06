import React, { Component } from 'react'
import Header from '../Header/header.component'
import './landing.styles.scss'


class Landing extends Component {
    constructor(props) {
        super(props);
    } 
    
    componentDidMount() {
        this.setState({
            loader: false
        })
    }
    render() {
        return (
            <div className='landing-page'>
                <Header />
            </div>
        )
    }
}


export default Landing;