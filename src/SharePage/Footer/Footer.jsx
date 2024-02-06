import React from 'react';
import { IoMdPaperPlane } from "react-icons/io";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-white bg-blue-700 text-base-content">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <h3>Lorem ipsum dolor sit am consectetur<br></br> adipisicing elit do eiusmod tempor incididunt<br></br> ut labore dolore magna.</h3>
                    <div className='flex'>
                        <Link to={'/'}><CiFacebook /></Link>
                        <Link to={'/'}><TiSocialGooglePlusCircular /></Link>
                        <Link to={'/'}><TiSocialTwitterCircular /></Link>

                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn text-blue-500 btn-white join-item"><IoMdPaperPlane /></button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>

    );
};

export default Footer;