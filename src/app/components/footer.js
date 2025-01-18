import Image from "next/image";
import Link from "next/link";


export async function Footer({ data }) {
    return (
        <>
            <div className="footer-section-01">
                <div className="container">
                    <div className="row card-row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="logo">
                                    <a href="#"><Image src="/image/logo/logo-primary-new.png" height={50} width={50} alt="logo" /></a>
                                </div>
                                <div className="text-white">Your Gateway to Endless Possibilities.</div>
                                <div className="widget-content-info">
                                    <span className="text-one">Customer Supports:</span>
                                    <span className="phone">+49-69-1234-5678</span>
                                    <span className="text-one">Max Mustermann <br /> 10115 Berlin, Kentucky 39495</span>
                                    <span className="mail"><a href="mailto:info@tradeformix.com">info@tradeformix.com</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="title">Top Category</h2>
                                <ul className="footer-list-group">
                                    {
                                        data.length > 0 && data.map(item => {
                                            if (item.name !== 'Uncategorized') {

                                                return (
                                                    <li key={item.id} >
                                                        <Link href={`/category/${item.id}`} >
                                                            <span dangerouslySetInnerHTML={{ __html: item.name }} />
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                    <li className="text-btn"><Link href="/products">Browse All Product
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.125 10H16.875" stroke="#EBC80C" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#EBC80C" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="title">Quick links</h2>
                                <ul className="footer-list-group">
                                    <li><Link href="/products">Shop Product</Link></li>
                                    <li><a href="#">Shoping Cart</a></li>
                                    <li><Link href="/track-order">Track Order</Link></li>
                                    <li><Link href="/support">Customer Help</Link></li>
                                    <li><Link href="/about-us">About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h2 className="title">Popular Tag</h2>
                                <ul className="footer-tag">
                                    <li><a href="#">Game</a></li>
                                    <li><a href="#">iPhone</a></li>
                                    <li><a href="#">TV</a></li>
                                    <li><a href="#">Asus Laptops</a></li>
                                    <li><a href="#">Macbook </a></li>
                                    <li><a href="#">SSD</a></li>
                                    <li><a href="#">Graphics Card </a></li>
                                    <li><a href="#">Power Bank </a></li>
                                    <li><a href="#">Smart TV</a></li>
                                    <li><a href="#">Speaker</a></li>
                                    <li><a href="#">Tablet</a></li>
                                    <li><a href="#">Microwave</a></li>
                                    <li><a href="#">Samsung</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-01">
                <p className="text-14 text-gray-300">Trade For Mix | Affordable Prices on Top Brands with Free Shipping</p>
            </div>
        </>
    )
}