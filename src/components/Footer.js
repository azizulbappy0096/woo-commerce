import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top  container-fluid">
                <div className="row text-light text-center">
                    <div className="col-12 col-md-4 d-flex  flex-column flex-md-row align-items-center justify-content-center mt-5 mt-md-0">
                        <img src="/images/footer-tik.svg" />
                        <h4 className="text-2xl lg:text-2xl mb-0 ml-2"> <span className="fw-light">30 day</span> money back guarantee </h4>
                    </div>
                    <div className="col-12 col-md-4 d-flex  flex-column flex-md-row align-items-center justify-content-center mt-5 mt-md-0">
                        <img src="/images/footer-union.svg" />
                        <h4 className="text-2xl lg:text-2xl mb-0 ml-2"> Support <span className="fw-light"> teams across the world</span>  </h4>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column flex-md-row align-items-center justify-content-center mt-5 mt-md-0">
                        <img src="/images/footer-lock.svg" />
                        <h4 className="text-2xl lg:text-2xl mb-0 ml-2"> Safe &amp; Secure <span className="fw-light">online payment</span>   </h4>
                    </div>
                </div>
                <div className="row justify-content-center pt-32 pb-10" >
                    <div className="col-auto">
                    <img src="/images/woo-footer.svg" />
                    </div>
                </div>
                <div className="row justify-content-center text-light border-t pt-16" style={{borderColor: "#9A7DFF"}}>
                    <div className="col-6 col-lg-2">
                        <h5 className="uppercase"> Who we are </h5>
                        <ul className="list-unstyled">
                            <li> <a href="#">About</a> </li>
                            <li> <a href="#">Team</a>  </li>
                            <li> <a href="#"> Work With Us</a></li>
                        </ul>
                    </div>
                    <div className=" col-lg-2 d-none d-lg-block">
                        <h5 className="uppercase">Woocommerce</h5>
                        <ul className="list-unstyled">
                            <li> <a href="#">Features </a> </li>
                            <li> <a href="#">Payments </a>  </li>
                            <li> <a href="#"> Marketing </a></li>
                            <li> <a href="#"> Shipping  </a></li>
                            <li> <a href="#">Extension Store  </a></li>
                            <li> <a href="#">  eCommerce blog  </a></li>
                            <li> <a href="#"> Development blog </a></li>
                            <li> <a href="#"> Ideas board </a></li>
                            <li> <a href="#">  Mobile App </a></li>
                            <li> <a href="#"> Community </a></li>
                            <li> <a href="#"> Style Guide  </a></li>
                            <li> <a href="#"> Email Newsletter </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2  d-none d-lg-block">
                        <h5 className="uppercase">Other products</h5>
                        <ul className="list-unstyled">
                            <li> <a href="#">Storefront  </a> </li>
                            <li> <a href="#">WooSlider  </a>  </li>
                            <li> <a href="#"> Sensei  </a></li>
                            <li> <a href="#"> Sensei Extensions  </a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h5 className="uppercase">Support</h5>
                        <ul className="list-unstyled">
                            <li> <a href="#">Documentation  </a> </li>
                            <li> <a href="#">Customizations  </a>  </li>
                            <li> <a href="#"> Support  </a></li>
                            <li> <a href="#"> Policy   </a></li>
                            <li> <a href="#">Contact   </a></li>
                            <li> <a href="#">  COVID-19 Resources   </a></li>
                            <li> <a href="#"> Privacy Notice for California Users </a></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-2  d-none d-lg-block">
                        <h5 className="uppercase">We recommend</h5>
                        <ul className="list-unstyled">
                            <li> <a href="#">WooExperts   </a> </li>
                            <li> <a href="#">Hosting Solutions   </a>  </li>
                            <li> <a href="#"> Pre-sales FAQ  </a></li>
                            <li> <a href="#"> Success Stories     </a></li>
                            <li> <a href="#">Design Feedback Group   </a></li>
              
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom container-fluid py-10">
                <div className="row align-items-center">
                    <div className="col icon__img d-none d-md-grid">
                            <img src="/images/twitter.svg" />
                            <img src="/images/facebook.svg" />
                            <img src="/images/follow.svg" />
                            <img src="/images/insta.svg" />
                    </div>
                    <div className="col-auto">
                        <p className="uppercase m-md-0 text-center"> COPYRIGHT WOOCOMMERCE 2020 - <a href="#" className="text-decoration-underline">TERMS &amp; CONDITIONS PRIVACY POLICY</a> </p>
                    </div>
                    <div className="col d-md-flex justify-content-center d-none">
                        <img src="/images/automattic.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
