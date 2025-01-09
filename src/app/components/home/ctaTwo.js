import Link from "next/link";

export function CtaTwo() {
    return (
        <div className="cta-section-01">
            <div className="container">
                <div className="cta-section-01__wrapper">
                    <div className="content-area">
                        <h6 className="subtitle">SAVE UP TO $200.00</h6>
                        <h2 className="title">Macbook Pro</h2>
                        <p className="text">Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage</p>
                        <Link className="btn btn-primary" href="/product/98">
                            Shop now
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="image-group">
                        <img src="./image/product/apple.png" alt="apple" className="w-100" />
                        <div className="price-valu">
                            <span>$2250</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}