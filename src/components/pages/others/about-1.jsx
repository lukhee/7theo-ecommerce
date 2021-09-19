import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import ProfileOne from '../../features/profile/profile-one';
import OwlCarousels from '../../features/owl-carousel';
import Testimonial from '../../features/testimonial';

// import Utils
import { mainSlider5 } from '../../settings';

import _data from '../../../mock_data/data.json';

function AboutOne() {
    useEffect(() => {
        document.querySelector(".footer-middle") && document.querySelector(".footer-middle").classList.add("border-0");
    })

    return (
        <div className="main">
            <Helmet>
                <title>7thLeo - About Page</title>
            </Helmet>

            <h1 className="d-none">7thLeo - About Page</h1>

            <Breadcrumb title="About Us" parent1={["Pages", "pages/about"]} adClass="border-0 mb-0" />

            <div className="container">
                <div className="page-header page-header-big text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about-header-bg.jpg)` }}>
                    <h1 className="page-title text-white">About us<span className="text-white">Who we are</span></h1>
                </div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h2 className="title">Our Vision</h2>
                            <p>We take fashion personally and bring you happiness. We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="title">Our Mission</h2>
                            <p>We believe great fashion shouldn’t come with a compromise, be that style, price or impact. We’ve set ourselves challenging targets to reduce the impact of our product, business and logistics, and we’re always looking for new ways to drive sustainability forward. <br />Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>
                        </div>
                    </div>

                    <div className="mb-5"></div>
                </div>

                <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title">Who We Are</h2>
                                <p className="lead text-primary mb-3">Contemporary fashion brand for modern people. <br />We design and tailor</p>
                                <p className="mb-2">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>

                                <Link to={`${process.env.PUBLIC_URL}/blog/classic`} className="btn btn-sm btn-minwidth btn-outline-primary-2">
                                    <span>VIEW OUR NEWS</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/about/img-1.jpg`} alt="" className="about-img-front" />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/about/img-2.jpg`} alt="" className="about-img-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="brands-text">
                                <h2 className="title">The world's premium design brands in one destination.</h2>
                                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="brands-display">
                                <div className="row justify-content-center">
                                    {_data.brands.default.map((brand, index) =>
                                        <div className="col-6 col-sm-4" key={index}>
                                            <Link to="#" className="brand">
                                                <img src={process.env.PUBLIC_URL + '/' + brand.image} alt="Brand Name" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-4 mb-6" />

                    <h2 className="title text-center mb-4">Meet Our Team</h2>

                    <div className="row">
                        <div className="col-md-4">
                            <ProfileOne image={`assets/images/team/member-1.jpg`} name="Samanta Grey" title="Founder & CEO" content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc." />
                        </div>
                        <div className="col-md-4">
                            <ProfileOne image={`assets/images/team/member-2.jpg`} name="Bruce Sutton" title="Sales & Marketing Manager" content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc." />
                        </div>
                        <div className="col-md-4">
                            <ProfileOne image={`assets/images/team/member-3.jpg`} name="Janet Joy" title="Product Manager" content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc." />
                        </div>
                    </div>
                </div>

                <div className="mb-2"></div>

                <div className="about-testimonials bg-light-2 pt-6 pb-6">
                    <div className="container">
                        <h2 className="title text-center mb-3">What Customer Say About Us</h2>

                        <OwlCarousels adClass="owl-simple owl-testimonials-photo" carouselOptions={mainSlider5} >
                            <Testimonial image={`assets/images/testimonials/user-1.jpg`} content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. <br/>In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                name="Jenson Gregory" job="Customer" />

                            <Testimonial image={`assets/images/testimonials/user-2.jpg`} content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"
                                name="Victoria Ventura" job="Customer" />
                        </OwlCarousels>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(AboutOne);