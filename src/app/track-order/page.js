export default function TrackOrder() {
    return (
        <div className="trackorder-body">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="section-title-block">
                            <h2 className="title">Track Order</h2>
                            <p className=" text-14 text-gray-600">To track your order please enter your order ID in the input field below and press the “Track Order” <br className="d-none d-sm-block" /> button. this was given to you on your receipt and in the confirmation email you should have received.</p>
                        </div>
                        <div className="order-form">
                            <form action="#" method="get">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="from-group">
                                            <label className="form-label" htmlFor="orderid">Order ID</label>
                                            <input type="text" id="orderid" className=" form-control" placeholder="ID..." />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="from-group">
                                            <label className="form-label" htmlFor="email">Billing Email</label>
                                            <input type="email" id="email" className=" form-control" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <p className="text"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.25 11.25H12V16.5H12.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9Z" fill="#5F6C72" />
                                    </svg>
                                        Order ID that we sended to your in your email address.
                                    </p>
                                    <div className="button-group">
                                        <a href="#" className="btn btn-primary">Track Order<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}