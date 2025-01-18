'use client';
import Image from "next/image";
import NiceSelect from "./NiceSelect/NiceSelect";
import Link from "next/link";
import useCartStore from "../store/cartStore";

export function Header({ data }) {
    const { cart } = useCartStore();
    return (
        <>
            <header className="site-header site-header--menu-center mobile-menu-trigger-dark bg-secondary-700 d-lg-none site-header--absolute">
                <div className="container">
                    <nav className="navbar site-navbar">
                        <div className="site-header__brand">
                            <Link href={'/'}>
                                <Image src={'/image/logo/logo-white-new.png'} alt="LOGO" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="menu-block-wrapper ">
                            <div className="menu-overlay"></div>
                            <nav className="menu-block menu-block-inner" id="append-menu-header">
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa fa-angle-left"></i>
                                    </div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>
                                <ul className="site-menu-main">
                                    <li className="nav-item nav-item-has-children">
                                        <a href="index.html" className="nav-link-item drop-trigger">Home</a>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Pages <i className="fas fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="#">About Us</a>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Case Studies<i className="fas fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu" id="submenu-9">
                                                    <li className="sub-menu--item">
                                                        <a href="#">Case Study</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="#">Case Study Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Services<i className="fas fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu" id="submenu-10">
                                                    <li className="sub-menu--item">
                                                        <a href="#">Service</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="#">Service Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Blogs <i className="fas fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-11">
                                            <li className="sub-menu--item">
                                                <a href="#">Blog One</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="#">Blog Two</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="#">Blog Details One</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="#">Blog Details Two</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Contact
                                        </a>
                                    </li>
                                </ul>
                                <div className="m-social-block">
                                    <ul className="list-unstyled list-group">
                                        <li className="text text-14">Follow us:</li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-reddit"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="mobile-menu-trigger">
                            <span></span>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="top-nav bg-secondary-700 d-none d-lg-block">
                <div className="container">
                    <div className="top-nav__wrapper">
                        <div className="top-nav__wrapper--text">
                            <p className="text-14">Trade For Mix | Affordable Prices on Top Brands with Free Shipping. </p>
                        </div>
                        <div className="top-nav__wrapper--content">
                            <div className="social-content">
                                <ul className="list-unstyled list-group">
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="https://youtube.com/@tread-x8q?si=v46dxLfOBcExFapx"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="switcher">
                                <div className="switcher__language">
                                    <NiceSelect defaultValue="1" id="a-select" placeholder="select...">
                                        <option value="1">
                                            English
                                        </option>
                                        <option value="2">Spanish</option>
                                        <option value="3">Deutsch</option>
                                    </NiceSelect>
                                </div>
                                <div className="switcher__currency">
                                    <NiceSelect defaultValue="1" id="a-select-2" placeholder="select...">
                                        <option value="1">
                                            USD
                                        </option>
                                        <option value="2">EUR</option>
                                    </NiceSelect>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desk-nav d-none d-lg-block">
                <div className="container">
                    <div className="desk-nav__wrapper">
                        <div className="desk-nav__wrapper--logo">
                            <Link href="/">
                                <>
                                    <Image src={'/image/logo/logo-white-new.png'} alt="LOGO" width={50} height={50} />
                                    <span className="p-2 fw-bold text-white h5">TRADE FOR MIX</span>
                                </>
                            </Link>
                        </div>
                        <div className="desk-nav__wrapper--search">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search for anything..." />
                                    <div className="icon">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813
                                                    3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.2031 13.7031L18 17.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="desk-nav__wrapper--widget">
                            <div className="cart cart-hide_show">
                                <Link href="/cart" className="plain-btn text-white">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z" fill="currentColor" />
                                        <path d="M23 29C24.1046 29 25 28.1046 25 27C25 25.8954 24.1046 25 23 25C21.8954 25 21 25.8954 21 27C21 28.1046 21.8954 29 23
                                                29Z" fill="currentColor" />
                                        <path d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875
                                                22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625
                                                4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {
                                        cart.length > 0 &&
                                        <div className="frame">
                                            <span>
                                                {cart.length}
                                            </span>
                                        </div>
                                    }
                                </Link>


                            </div>
                            <div className="user user-hide_show">
                                <div id="showHiddenMenuTwo">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                                        <path d="M3.875 27.0001C5.10367 24.8716 6.87104 23.104 8.99944 21.875C11.1278 20.646 13.5423 19.999 16 19.999C18.4577 19.999 20.8722 20.646 23.0006 21.875C25.129 23.104 26.8963 24.8716 28.125 27.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="signin-popup" id="hiddenWidgetTwo">
                                    <h2 className="title">Sign in to your account</h2>
                                    <div className="signin-form">
                                        <form action="#">
                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="form-group">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <label className="form-label">Password</label>
                                                    <a href="#" className="forgot-btn">Forget Password</a>
                                                </div>
                                                <div className="pass-box">
                                                    <input className="form-control" id="password-hide_show9" type="password" placeholder="password" />
                                                    <div className="pass-box--eye select-icon__nine">
                                                        <i className="far fa-eye"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-button">
                                                <button className="btn btn-primary w-100">
                                                    Login
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.625 10H17.375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="from-text">
                                                <div className="texts">
                                                    <p className="text">Don’t have account</p>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary w-100">Create account</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-nav d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="bottom-nav__wrapper">
                            <div className="left-sidebar">
                                <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Category
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 6L8 11L3 6" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        {
                                            /* <li><a className="dropdown-item" href="#">SmartPhone <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 2.25L8.25 6L4.5 9.75" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </a>
                                                <div className="sub-item">
                                                    <div className="sub-wrapper">
                                                        <ul className="input-field">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">iPhone</a></li>
                                                            <li><a href="#">Sansung</a></li>
                                                            <li><a href="#">Realme</a></li>
                                                            <li><a href="#">Xiaomi</a></li>
                                                            <li><a href="#">Oppo</a></li>
                                                            <li><a href="#">Vivo</a></li>
                                                            <li><a href="#">OnePlus</a></li>
                                                            <li><a href="#">Huawei</a></li>
                                                            <li><a href="#">Infinix</a></li>
                                                            <li><a href="#">Tecno</a></li>
                                                        </ul>
                                                        <div className="featured-itme-01">
                                                            <div className="featured-list">
                                                                <h6 className="title">FEATURED PHONES</h6>
                                                                <a href="#" className="d-block">
                                                                    <div className="single-featured">
                                                                        <div className="card-image">
                                                                        </div>
                                                                        <div className="card-contetn">
                                                                            <p>Samsung Electronics <br /> Samsung Galexy S21 5G</p>
                                                                            <span>$160</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="#" className="d-block">
                                                                    <div className="single-featured">
                                                                        <div className="card-image">
                                                                        </div>
                                                                        <div className="card-contetn">
                                                                            <p>Simple Mobile 5G LTE Galexy <br /> 12 Mini 512GB Gaming Phone</p>
                                                                            <span>$1,500</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="#" className="d-block">
                                                                    <div className="single-featured">
                                                                        <div className="card-image">
                                                                        </div>
                                                                        <div className="card-contetn">
                                                                            <p>Sony DSCHX8 High Zoom <br /> Point & Shoot Camera</p>
                                                                            <span><del className="text-gray-400">$3200</del> $2,300</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="discount-add">
                                                                <div className="card-img">
                                                                </div>
                                                                <div className="card-content">
                                                                    <h4>21% Discount</h4>
                                                                    <p>Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</p>
                                                                    <div className="price-tag">
                                                                        <span className="text">Starting price:</span>
                                                                        <span className="price">$99 USD</span>
                                                                    </div>
                                                                    <a className="btn btn-primary w-100" href="#">
                                                                        Shop now
                                                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M3.625 10H17.375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */
                                        }
                                        {
                                            data.length > 0 && data.map(item => {
                                                if (item.name !== 'Uncategorized') {

                                                    return (
                                                        <li key={item.id} >
                                                            <Link className="dropdown-item" href={`/category/${item.id}`} >
                                                                <span dangerouslySetInnerHTML={{ __html: item.name }} />
                                                            </Link>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                    </ul>
                                </div>
                                <nav className="mainnav">
                                    <ul>
                                        <li className="single-list" >
                                            <Link href="/track-order">
                                                <span className="d-block me-1">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.25 21.75H18.75" stroke="#5F6C72" strokeWidth="1.5"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                        <path
                                                            d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                                                            stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path
                                                            d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                                                            stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className="text-14">
                                                    Track Order
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-list ">
                                            <Link href="/support">
                                                <span className="d-block me-1">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.1406 12.7503H18.1406C17.7428 12.7503 17.3613 12.9083 17.08 13.1897C16.7987 13.471 16.6406 13.8525 16.6406 14.2503V18.0003C16.6406 18.3981 16.7987 18.7797 17.08 19.061C17.3613 19.3423 17.7428 19.5003 18.1406 19.5003H19.6406C20.0384 19.5003 20.42 19.3423 20.7013 19.061C20.9826 18.7797 21.1406 18.3981 21.1406 18.0003V12.7503ZM21.1406 12.7503C21.1407 11.5621 20.9054 10.3856 20.4484 9.28875C19.9915 8.1919 19.3218 7.1964 18.4781 6.35969C17.6344 5.52297 16.6334 4.86161 15.5328 4.41375C14.4322 3.96589 13.2538 3.74041 12.0656 3.75031C10.8782 3.74165 9.70083 3.96805 8.60132 4.41647C7.5018 4.86488 6.50189 5.52645 5.6592 6.36304C4.81651 7.19963 4.1477 8.19471 3.69131 9.29094C3.23492 10.3872 2.99997 11.5629 3 12.7503V18.0003C3 18.3981 3.15804 18.7797 3.43934 19.061C3.72064 19.3423 4.10218 19.5003 4.5 19.5003H6C6.39782 19.5003 6.77936 19.3423 7.06066 19.061C7.34196 18.7797 7.5 18.3981 7.5 18.0003V14.2503C7.5 13.8525 7.34196 13.471 7.06066 13.1897C6.77936 12.9083 6.39782 12.7503 6 12.7503H3"
                                                            stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className="text-14">
                                                    Customer Support
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="single-list ">
                                            <Link href="/support">
                                                <span className="d-block me-1">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                            stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path d="M11.25 11.25H12V16.5H12.75" stroke="#5F6C72" strokeWidth="1.5"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                        <path
                                                            d="M12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875Z"
                                                            fill="#191C1F" stroke="#5F6C72" strokeWidth="1.5" />
                                                    </svg>
                                                </span>
                                                <span className="text-14">
                                                    Need Help
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <div className="tell">
                                <span>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656"
                                            stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M16.5266 7.75488C17.4192 7.99195 18.2333 8.46077 18.8864 9.11384C19.5395 9.7669 20.0083 10.581 20.2454 11.4736"
                                            stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M10.1172 13.6504C11.0176 15.5098 12.5211 17.0095 14.3828 17.9051C14.5201 17.9701 14.672 17.9983 14.8235 17.9868C14.975 17.9752 15.1209 17.9245 15.2469 17.8395L17.9812 16.0129C18.1021 15.931 18.2417 15.881 18.387 15.8676C18.5324 15.8542 18.6788 15.8778 18.8125 15.9363L23.9312 18.1348C24.1062 18.2076 24.2524 18.3359 24.3472 18.4999C24.4421 18.664 24.4804 18.8546 24.4562 19.0426C24.294 20.3089 23.6759 21.4726 22.7177 22.3162C21.7594 23.1597 20.5266 23.6251 19.25 23.6254C15.3049 23.6254 11.5214 22.0582 8.73179 19.2686C5.94218 16.479 4.375 12.6955 4.375 8.7504C4.37529 7.47377 4.84073 6.24099 5.68425 5.28273C6.52776 4.32447 7.69153 3.70639 8.95781 3.54415C9.14576 3.52001 9.33643 3.55832 9.50047 3.65319C9.66451 3.74805 9.79281 3.89421 9.86562 4.06915L12.0641 9.19884C12.1212 9.33047 12.1451 9.47414 12.1337 9.61719C12.1223 9.76024 12.0758 9.89829 11.9984 10.0192L10.1719 12.7973C10.0906 12.9229 10.0428 13.0673 10.0333 13.2167C10.0237 13.3661 10.0526 13.5154 10.1172 13.6504V13.6504Z"
                                            stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                +49-69-1234-5678
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}