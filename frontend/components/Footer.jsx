import React from 'react';

const Footer = () => (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='footer-about'>
                About
                <div className='about-text'>
                    Airjnj is a personal project designed to be an <a href='http://airbnb.com'>Airbnb</a> clone. This project focuses on utilizing Ruby on Rails in the backend and React/Redux for the front end.
                    Additional technologies used are Google Cloud Api for Google Maps and Places, and AWS S3 in combination with Rails Active Storage for image preview and uploading. Please feel free
                    to check out my portfolio to see more of my projects.
                </div>
            </div>
            <div className='footer-links'>
                Quicklinks
                <div className='quicklinks'>
                    <div onClick="window.open('https://www.linkedin.com/in/jay-lam/','_blank')">LinkedIn</div>
                    <div onClick="window.open('https://github.com/lamjay415','_blank')">Github</div>
                    <div onClick="window.open('https://jay-lam.netlify.app/','_blank')">Portfolio</div>
                </div>
            </div>
            <div className='footer-contact'>
                Contact Me
                <div className='footer-email'>lamjay415@gmail.com</div>
            </div>
        </div>
    </div>
);

export default Footer;