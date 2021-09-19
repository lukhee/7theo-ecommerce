import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    const { logoFooter = "assets/images/home/logo-footer.png" } = props;
    const { container = "container" } = props;

    return (
        <footer className="footer footer-2">
            <div className="footer-middle border-0">
                <div className={container}>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="widget widget-about">
                                <img src={process.env.PUBLIC_URL + '/' + logoFooter} className="footer-logo" alt="Molla Logo" width="82" height="25" />
                                <p>Why not return to our amazing shop and start filling it with products. Just click on the button below to instantly get back to the shop page.</p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                                            <Link to="tel:123456789">+234 706 155 6337</Link>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Payment Method</span>
                                            <figure className="footer-payments">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/payments.png`} alt="Payment methods" width="272" height="20" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Information</h4>

                                <ul className="widget-list">
                                    <li><Link to={`${process.env.PUBLIC_URL}/about`}>About 7thleo</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/about`}>How to shop on 7thleo</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/faq`}>FAQ</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/contact`}>Contact us</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/pages/login`}>Log in</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><Link to="#">Payment Methods</Link></li>
                                    <li><Link to="#">Money-back guarantee!</Link></li>
                                    <li><Link to="#">Returns</Link></li>
                                    <li><Link to="#">Shipping</Link></li>
                                    <li><Link to="#">Terms and conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><Link to="#">Log in</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/shop/cart`}>View Cart</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/shop/wishlist`}>My Wishlist</Link></li>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={container}>
                    <p className="footer-copyright">Copyright © {(new Date()).getFullYear()} 7thleo Store. All Rights Reserved.</p>
                    <ul className="footer-menu">
                        <li><Link to="#">Terms Of Use</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>
                        <a href="https://www.facebook.com/7thleobysarah" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                        <a href="https://twitter.com/ire_rtw" className="social-icon social-twitter" rel="noopener noreferrer" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                        <a href="https://instagram.com/ire.rtw" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                        <a href="https://youtube.com" className="social-icon social-youtube" rel="noopener noreferrer" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                        <a href="https://pinterest.com" className="social-icon social-pinterest" rel="noopener noreferrer" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);