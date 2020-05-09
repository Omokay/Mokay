import React, { Component } from 'react'
import './landing.styles.scss'


class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loader: true,
            welcomeText: 'Welcome...',
        }
    }
    
    componentDidMount() {
        this.setState({
            loader: false
        })
    }
    render() {
        return (
            <div className='landing-page'>
                
            </div>
        )
    }
}


export default Landing;