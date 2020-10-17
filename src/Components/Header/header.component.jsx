import React, { Component } from 'react';
import Home from '../Home/home.component';
import About from '../About/about.component';
import Projects from '../Projects/projects.component';
import Skills from '../Skills/skills.component';
import Contact from '../Contact/contact.component';
import { Twitter } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Youtube } from 'react-feather';
import './header.styles.scss';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navVisibility: false,
            currentView: 'Home'
        };
    }

    handleClick = () => {
        if (this.state.navVisibility === false) {
            this.setState({
                navVisibility: true
            });
        }
    }

    closeNav = () => {
        if (this.state.navVisibility === true) {
            this.setState({
                navVisibility: false
            });
        }
    }

    handleViewChange = (item) => {
        this.setState({
            currentView: item
        }, () => console.log(this.state.currentView));
    }


    render() {
        const { currentView } = this.state;
        const { navVisibility } = this.state;
        const list = ['Home', 'About', 'Contact', 'Projects', 'Skills'];

        return (
            <div className='main'>
                <div className='header'>
                    <nav>
                        <div className='nav-brand'>
                            <a className='navbar-brand' href="#"><div className='nav-logo'></div></a>
                        </div>
                        <div className='hambg' onClick={this.handleClick}>
                            <svg className='hamburger' width='30' height='30' viewBox='0 0 25 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect width='25' height='3' fill='#292A2C' />
                                <rect x='12' y='10' width='13' height='3' fill='#292A2C' />
                                <rect x='7' y='5' width='18' height='3' fill='#292A2C' />
                            </svg>

                            {/* <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='2.20965' height='15.4675' transform='matrix(0.728885 0.684637 -0.68464 0.728881 11.0962 0.213196)' fill='white' />
                            <rect width='15.4675' height='2.20965' transform='matrix(0.728885 0.684637 -0.68464 0.728881 1.72595 0.50647)' fill='white' />
                        </svg> */}



                            {
                                navVisibility ?
                                    <ul className='navShowing'>

                                        {
                                            list.map(item => {
                                                return (
                                                    <li className='navItems' key={item} onClick={() => {
                                                        this.handleViewChange(item)
                                                    }}>{item}</li>
                                                );
                                            })
                                        }
                                        <li className='navClose' onClick={this.closeNav}><svg width='19' height='19' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <rect width='2.20965' height='15.4675' transform='matrix(0.728885 0.684637 -0.68464 0.728881 11.0962 0.213196)' fill='white' />
                                            <rect width='15.4675' height='2.20965' transform='matrix(0.728885 0.684637 -0.68464 0.728881 1.72595 0.50647)' fill='white' />
                                        </svg></li>
                                    </ul> :
                                    null
                            }
                        </div>
                    </nav>


                </div>

                {

                    currentView === 'Home' ? <Home /> :
                        currentView === 'About' ? <About /> :
                            currentView === 'Projects' ? <Projects /> :
                                currentView === 'Skills' ? <Skills /> :
                                    currentView === 'Contact' ? <Contact /> : <Home />

                }
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <p className='follow-text text-center'>Follow me</p>
                        <div className='sm-list'>
                            <Twitter className='icons' />
                            <Linkedin className='icons' />
                            <Instagram className='icons' />
                            <Youtube className='icons' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default Header;