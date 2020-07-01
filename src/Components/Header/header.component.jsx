import React, { Component } from 'react';
import './header.styles.scss';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navVisibility: false,
            navbarWidth: false,
        };
    }

    handleClick = () => {
        if (this.state.navbarWidth === false) {
            this.setState({
                navVisibility: true
            });
        } else {
            this.setState({
                navbarWidth: false
            });
        }
        
    }
    render() {
        const { navVisibility } = this.state
        return (
            <div className='header'>
                <nav>
                    <div className='nav-brand'>

                    </div>
                    <div className='hambg' onClick={this.handleClick}>
                        <svg className='hamburger' width='30' height='30' viewBox='0 0 25 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='25' height='3' fill='#292A2C' />
                            <rect x='12' y='10' width='13' height='3' fill='#292A2C' />
                            <rect x='7' y='5' width='18' height='3' fill='#292A2C' />
                        </svg>


                        {
                            navVisibility ?
                                <ul className='navShowing'>
                                    <li className='navItems'>Home</li>
                                    <li className='navItems'>About me</li>
                                    <li className='navItems'>Projects</li>
                                    <li className='navItems'>Skills</li>
                                    <li className='navItems'>Get in touch</li>
                                </ul> : 
                                    null
                        }
                    </div>
                </nav>


            </div>
        )
    }
};


export default Header;