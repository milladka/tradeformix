import { Newsletter } from "../components/home/newslatter";

export default function AboutUs() {
    return (
        <>
            <div className="about-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-lg-6 col-md-8 col-xs-10 offset-xxl-1 order-lg-2">
                            <div className="content-image">
                                <img src="./image/about/about.png" alt="about" className="w-100" />
                            </div>
                        </div>
                        <div className="col-xxl-5 col-lg-6 order-lg-1">
                            <div className="content-area">
                                <h6 className="subtitle">WHO WE ARE</h6>
                                <h2 className="title">Trade For Mix - largest electronics retail shop in the world.</h2>
                                <p className="text">Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum risus, ac tincidunt diam lectus id magna. Praesent maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor. </p>
                                <ul className="content-list-01">
                                    <li>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.5004 7.875L14.2504 16.125L12.0566 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Great 24/7 customer services.
                                    </li>
                                    <li>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.5004 7.875L14.2504 16.125L12.0566 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        600+ Dedicated employe.
                                    </li>
                                    <li>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.5004 7.875L14.2504 16.125L12.0566 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        50+ Branches all over the world.
                                    </li>
                                    <li>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.5004 7.875L14.2504 16.125L12.0566 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Over 1 Million Electronics Products
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
        </>
    )
}