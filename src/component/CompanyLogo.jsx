import React from 'react'
import "./sliper-logo.css";

const CompanyLogo = () => {
    return (
        <div className="dax">
            <marquee behavior="scroll" direction="right" scrollamount={10}>
                <img src="/images/logo-01.png" alt="" />
                <img src="/images/logo-02.png" alt="" />
                <img src="/images/logo-03.png" alt="" />
                <img src="/images/logo-04.png" alt="" />
                <img src="/images/logo-05.png" alt="" />
                <img src="/images/logo-06.png" alt="" />
                <img src="/images/logo-08.png" alt="" />
                <img src="/images/logo-01.png" alt="" />
                <img src="/images/logo-02.png" alt="" />
                <img src="/images/logo-03.png" alt="" />
            </marquee>
        </div>

    )
}


export default CompanyLogo


