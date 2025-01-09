export function Newsletter() {
    return (
        <div className="newsletter-section-01 bg-secondary-700">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-xs-11">
                        <div className="newsletter-section-01__wrapper">
                            <div className="section-title-block">
                                <h2 className="title">Subscribe to our newsletter</h2>
                                <p className="text">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec
                                    non quam urna. Quisque vitae porta ipsum.</p>
                            </div>
                            <div className="newsletter-form-01">
                                <form action="#">
                                    <input className="form-control" type="text" placeholder="Email address" />
                                    <div className="button-group">
                                        <a className="btn btn-primary" href="#">
                                            Subscribe
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                                <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}