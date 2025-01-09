import Link from "next/link";

export function BannerArea() {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="banner-area__slider">
                            <div className="product-slider-01">
                                <div className="single-slider">
                                    <div className="banner-slider-content-01">
                                        <div className="banner-content">
                                            <h6 className="subtitle text-secondary-500 text-14 text-uppercase"><span className="line"></span>THE BEST
                                                PLACE TO PLAY</h6>
                                            <h2 className="titel">Xbox Consoles</h2>
                                            <p className="text">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                                            <Link className="btn btn-primary" href="/product/12">
                                                Shop now
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="banner-image-group">
                                            <img src="./image/banner/x-box.png" alt="x-box" />
                                            <div className="price-tag">
                                                <span>$ 1900</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="banner-area__add">
                            <div className="one">
                                <div className="add-block-01">
                                    <div className="add-content">
                                        <h6 className="subtitle text-warning-500">Best Sales</h6>
                                        <h2 className="title">New Google <br /> Pixel 6 Pro</h2>
                                        <Link className="btn btn-primary" href="/product/100">
                                            Shop now
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                                <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="add-image">
                                        <img src="./image/add/add-mobile-1.png" alt="mobile" />
                                    </div>
                                </div>
                            </div>
                            <div className="two">
                                <div className="add-block-02">
                                    <div className="add-image">
                                        <img src="./image/add/airpods.png" alt="mobile" />
                                    </div>
                                    <div className="add-content">
                                        <h2 className="title">Xiaomi <br /> FlipBuds Pro</h2>
                                        <span className="price">$75 USD</span>
                                        <Link className="btn btn-primary" href="/product/102">
                                            Shop now
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                                <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}