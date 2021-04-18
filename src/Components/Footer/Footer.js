import React from 'react';
import logoPic from '../../images/teach.png';
import addressPic from '../../images/location.png';
import mailPic from '../../images/gmail.png';
import phonePic from '../../images/incoming-call.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import './Footer.css';
const Footer = () => {
    return (
        <section className="footer-container row">
            <div className="col-md-3 text-center">
                <div>
                    <h1>KIDZ KLUB</h1>
                    <img src={logoPic} style={{ width: "200px", height: "200px" }} alt="" />
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae numquam illo repellat rerum ratione placeat tempore, inventore eveniet culpa.

                    </p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div>
                    <h2>Contact Info</h2>
                </div>
                <div>
                    <p><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={addressPic} alt="" />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, ratione!</p>
                    <br />
                    <p><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={phonePic} alt="" /> +02383278723832</p>
                    <br />
                    <p><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={mailPic} alt="" /><a href="kidzzKlub@gmail.com">kidzklub@gmail.com</a></p>

                </div>
            </div>
            <div className="col-md-3 text-center">
                <div>
                    <h2>Useful Links</h2>
                </div>
                <div>
                    <li>Our Teachers</li>
                    <li>Our Services</li>
                    <li>Our Events</li>

                </div>
            </div>
            <div className="col-md-3 text-center">
                <div >
                    <h2>Follow us:</h2>
                </div>
                <div>

                    <p><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={facebook} alt="" />Facebook</p>
                    <br />
                    <p><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={instagram} alt="" />Instagram</p>
                    <br />
                    <p><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={twitter} alt="" />Twitter</p>

                </div>
            </div>
        </section>
    );
};

export default Footer;