import React from 'react'

function SupportedBy() {
    return (
        <div className="suportedBy container-fluid text-center mt-24">
            <h1> Supported by real people </h1>
            <p>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
            <div className="row position-relative">
                <img src="/images/supportPeople.svg" style={{ transform: "translateY(1%)" }} />
                <div className="position-absolute" style={{bottom: "-40%", zIndex: -1}}>
                    <img src="/images/support-bg.svg" />
                </div>
            </div>
            <div className="row cta py-5 z-10 position-relative">
                <div className="col-12 col-md-8 offset-md-1 align-self-center">
                <h4 className="text-xl md:text-3xl text-left"> <span className="fw-light">WooCommerce - the</span> most customizable eCommerce platform <span className="fw-light">for building</span> your online business. </h4>
                </div>
                <div className="col-12 col-md align-self-center mt-2 mt-md-0">
                <button className="text-uppercase rounded-pill px-3 py-2">
                    get started
                </button>
                </div>
            </div>
        </div>
    )
}

export default SupportedBy
