import React, { Component } from 'react';
import './header.styles.scss';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navVisibility: false
        };
    }

    handleClick = () => {
        if (this.state.navVisibility === false) {
            this.setState({
                navVisibility: true
            });
        } else {
            this.setState({
                navVisibility: false
            });
        }
        
    }
    render() {
        const { navVisibility } = this.state
        return (
            <div className='header'>
                <nav>
                    <div className='nav-brand'>
                        <svg className='nav-brand' width='40' height='40' viewBox='0 0 66 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='18.7197' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 32.6836 36.362)' fill='#292A2C' />
                            <rect width='18.7197' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 45.2417 49.6783)' fill='#292A2C' />
                            <rect width='5.3548' height='23.4008' transform='matrix(0.684022 -0.729461 0.686084 0.727522 31.4352 37.6934)' fill='#292A2C' />
                            <rect width='23.3997' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 18.5984 51.3828)' fill='#292A2C' />
                            <rect width='23.3997' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 31.1563 64.6992)' fill='#292A2C' />
                            <rect width='5.3548' height='23.6914' transform='matrix(0.684022 -0.729461 0.686084 0.727522 17.3181 52.7484)' fill='#292A2C' />
                            <rect width='8.02608' height='6.86389' transform='matrix(0.684022 -0.729461 0.686084 0.727522 29.0863 51.8831)' fill='#292A2C' />
                            <rect width='5.3548' height='7.80282' transform='matrix(0.684022 -0.729461 0.686084 0.727522 55.9996 34.5334)' fill='#292A2C' />
                            <rect width='5.3548' height='7.79879' transform='matrix(0.684022 -0.729461 0.686084 0.727522 45.4883 22.7068)' fill='#292A2C' />
                            <rect width='3.43975' height='2.28796' transform='matrix(0.684022 -0.729461 0.686084 0.727522 32.2247 51.8749)' fill='white' />
                            <rect width='18.7197' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 32.6836 36.362)' fill='#292A2C' />
                            <rect width='18.7197' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 45.2417 49.6783)' fill='#292A2C' />
                            <rect width='5.3548' height='23.4008' transform='matrix(0.684022 -0.729461 0.686084 0.727522 31.4352 37.6934)' fill='#292A2C' />
                            <rect width='23.3997' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 18.5984 51.3828)' fill='#292A2C' />
                            <rect width='23.3997' height='5.35386' transform='matrix(0.684022 -0.729461 0.686084 0.727522 31.1563 64.6992)' fill='#292A2C' />
                            <rect width='5.3548' height='23.6914' transform='matrix(0.684022 -0.729461 0.686084 0.727522 17.3181 52.7484)' fill='#292A2C' />
                            <rect width='8.02608' height='6.86389' transform='matrix(0.684022 -0.729461 0.686084 0.727522 29.0863 51.8831)' fill='#292A2C' />
                            <rect width='5.3548' height='7.80282' transform='matrix(0.684022 -0.729461 0.686084 0.727522 55.9996 34.5334)' fill='#292A2C' />
                            <rect width='5.3548' height='7.79879' transform='matrix(0.684022 -0.729461 0.686084 0.727522 45.4883 22.7068)' fill='#292A2C' />
                            <rect width='3.43975' height='2.28796' transform='matrix(0.684022 -0.729461 0.686084 0.727522 32.2247 51.8749)' fill='white' />
                            <rect width='18.7157' height='5.35503' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 32.3322 33.6254)' fill='#292A2C' />
                            <rect width='18.7157' height='5.35503' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 19.8186 20.2619)' fill='#292A2C' />
                            <rect width='5.35363' height='23.4059' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 33.5851 32.2988)' fill='#292A2C' />
                            <rect width='23.3946' height='5.35503' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 46.4674 18.6578)' fill='#292A2C' />
                            <rect width='23.3946' height='5.35503' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 33.9539 5.29416)' fill='#292A2C' />
                            <rect width='5.35363' height='23.6965' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 47.7523 17.2972)' fill='#292A2C' />
                            <rect width='8.02434' height='6.86539' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 35.9812 18.118)' fill='#292A2C' />
                            <rect width='5.35363' height='7.80452' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 9.01023 35.3661)' fill='#292A2C' />
                            <rect width='5.35363' height='7.80049' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 19.4819 47.2323)' fill='#292A2C' />
                            <rect width='3.439' height='2.28846' transform='matrix(-0.686599 0.727036 -0.683506 -0.729945 32.8428 18.1144)' fill='white' />
                        </svg>

                    </div>
                    <div className='hamburger' onClick={this.handleClick}>
                        <svg className='hamburger' width='30' height='30' viewBox='0 0 25 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='25' height='3' fill='#292A2C' />
                            <rect x='12' y='10' width='13' height='3' fill='#292A2C' />
                            <rect x='7' y='5' width='18' height='3' fill='#292A2C' />
                        </svg>


                        {navVisibility ? <ul className='sideNav'>
                            <li className='navItems'><a href='#'>Home</a></li>
                            <li className='navItems'><a href='#'>About me</a></li>
                            <li className='navItems'><a href='#'>Projects</a></li>
                            <li className='navItems'><a href='#'>Skills</a></li>
                            <li className='navItems'><a href='#'>Get in touch</a></li>
                        </ul> : null }
                    </div>
                </nav>


            </div>
        )
    }
};


export default Header;