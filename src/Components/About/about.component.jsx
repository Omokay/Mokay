import React from 'react';
import './about.styles.scss';


const About = () => {
    return (
        <div className='container-fluid about'>
            <div className='row aboutme'>
                <div className='col-md-6 col-sm-12'>
                    <p className='column-about'>About<span className='metext'> Me</span></p>
                    <p className='abouttext'>Systems Analyst by day, and a Software Developer by night.
                    I am an aspiring Fullstack Engineer with affinity for frontend development. 
I have worked on a few projects using technologies that include Django, Nodejs, Express, Bootstrap, Sass, AntDesign, Redux, Firebase and more.
I am proficient in test driven development, agile methodology and CI/CD tools. 
I am very passionate about growth and continued learning, working with a team, and contributing to projects.</p>
                </div>
                <div className='col-md-6 column-about'>

                </div>
            </div>
        </div>
    )
};

export default About;