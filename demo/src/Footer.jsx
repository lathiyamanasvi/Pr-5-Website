import React from 'react'

function Footer() {
    return (
        <div>
            <div className="container">
                <div className="d-flex py-5 align-items-center">
                    <div className="w-25 p-5">
                        <img src='https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg' />
                        <div className="d-flex justify-content-evenly py-5 fs-5 align-items-center">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-pinterest-p"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className="w-25 p-5">
                    <h4 style={{fontFamily: 'EB Garamond',paddingLeft:'35px',paddingBottom:'10px'}} className='fs-3'>CATEGORIES</h4>
                        <ul style={{paddingLeft:'0px!important'}}>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}}>Cupcake</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}} className='py-3'>Pastry</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}}>Muffin</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}} className='py-3'>Waffle</li>
                        </ul>
                    </div>
                    <div className="w-25 p-5">
                    <h4 style={{fontFamily: 'EB Garamond',paddingLeft:'35px',paddingBottom:'10px'}} className='fs-3'>SERVICES</h4>
                        <ul style={{fontFamily:'-moz-initial'}}>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}}>Delivery</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}} className='py-3'>Payment</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}}>Returns</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}} className='py-3'>Privacy</li>
                        </ul>
                    </div>
                    <div className="w-25 p-5">
                    <h4 style={{fontFamily: 'EB Garamond',paddingLeft:'35px',paddingBottom:'10px'}} className='fs-3'>INFORMATION</h4>
                        <ul style={{fontFamily:'-moz-initial'}}>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}}>About Us</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}} className='py-3'>Contact Us</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}}>Latest Post</li>
                            <li style={{listStyle:'none',color:'gray',fontSize:'18px'}} className='py-3'>Selling Tips</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
