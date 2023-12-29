import React from 'react'

function First() {
    return (
        <div>
            <div className="container text-center py-5">
                <h1 style={{ fontSize: '40px',fontFamily: 'EB Garamond' }}>FOR A SWEET DAY</h1>
                <p className='fs-5 text-muted py-3'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.<br></br>Voluptate exercitation incididunt</p>
                <div className="d-flex justify-content-evenly">
                <div class="card" style={{width:'300px'}}>
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Italian Loaf</h4>
                        <p class="card-text fs-4">$4.99</p>
                        <img src='https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg'/>
                    </div>
                </div>
                <div class="card" style={{width:'300px'}}>
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Croissant Italy Cake</h4>
                        <p class="card-text fs-4">$5.00</p>
                        <img src='https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg'/>
                    </div>
                </div>
                <div class="card" style={{width:'300px'}}>
                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-3.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Chocolate Muffin</h4>
                        <p class="card-text fs-4">$7.55</p>
                        <img src='https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default First
