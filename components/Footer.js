import React from "react";
import logo from './Images/logo1.png'

const Footer = () => {
  return (
    <div className='footer-main' id='contact'>
        <div className='abc'></div>
        <div className='footer-cont'>
            <div className='footer-logo'>
                <h1>UDAAN</h1>
            </div>

            <div className='footer-text'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className='sm-icon'>
                <a href='#'><img className='reg-sm-icon' src='https://cdn-icons-png.flaticon.com/512/4628/4628653.png' alt='err'></img></a>
                <a href='#'><img className='reg-sm-icon' src='https://cdn-icons-png.flaticon.com/512/1362/1362857.png' alt='err'></img></a>
                <a href='#'> <img className='reg-sm-icon' src='https://cdn-icons-png.flaticon.com/512/4628/4628711.png' alt='err'></img></a>
            </div>

            <div className='reg-links'>
                <a className='reg-link' href='#'>About Us</a>
                <a className='reg-link' href='#'>Jobs</a>
                <a href='#'>Blogs</a>
                <a href='#'>Press</a>
                <a href='#'>FAQ</a>
                <a href='#'>Carrers</a>
                <a href='#'>Contact Us</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Site Map</a>
                <a href='#'>Terms of Use</a>
            </div>

            <div className='reg-contact-main'>
                    <div className='reg-contact'>
                        <img className='reg-contact-img' src='https://cdn-icons-png.flaticon.com/512/455/455604.png' alt='err'/>
                        <div className='reg-contact-text' >
                            <p>Having a Question ?</p>
                            <h4>+91-123456789</h4>
                         </div>
                    </div>
 
                    <div className='reg-contact'>
                        <img className='reg-contact-img' src='https://cdn-icons-png.flaticon.com/512/455/455604.png' alt='err'/>
                        <div className='reg-contact-text' >
                            <p>Contact Us</p>
                            <h4>udaan124start@gmail.com</h4>
                        </div>
                    </div>

                    <div className='footer-rights'>
                        <h5>© 2022-2030 All Rights Reserved </h5>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Footer;
