export function NewsSection() {
    return (
        <div className="news-section-01 bg-gray-50">
            <div className="container">
                <div className="news-section-01__title-block">
                    <h2 className="title">Latest News</h2>
                </div>
                <div className="row card-row justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-xs-11">
                        <div className="card-news">
                            <div className="card-image">
                                <a href="#">
                                    <img src="./image/news/1.png" alt="news" className="w-100" />
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="card-body__meta">
                                    <div className="user-block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M5.98126 18.6938C6.54555 17.5823 7.4066 16.6488 8.46896 15.9967C9.53132 15.3446 10.7535 14.9995 12 14.9995C13.2465 14.9995 14.4687 15.3446 15.5311 15.9967C16.5934 16.6488 17.4545 17.5823 18.0188 18.6938"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Kristin</span>
                                    </div>
                                    <a href="#">
                                        <div className="date-block">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                                                    stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M7.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M3.75 8.25H20.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <span>19Dec, 2024</span>
                                        </div>
                                    </a>
                                    <div className="comment-block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.25626 16.5938C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17983 4.74669 6.25146 6.47652 4.90832C8.20636 3.56517 10.367 2.89961 12.5527 3.0366C14.7385 3.17358 16.7991 4.10368 18.3477 5.65229C19.8963 7.20089 20.8264 9.26151 20.9634 11.4473C21.1004 13.6331 20.4349 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7438L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5988 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7063L4.25626 16.5938Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
                                                fill="#FA8232" />
                                            <path
                                                d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z"
                                                fill="#FA8232" />
                                            <path
                                                d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z"
                                                fill="#FA8232" />
                                        </svg>
                                        <span>453</span>
                                    </div>
                                </div>
                                <a href="#">
                                    <h2 className="title">Unlocking the Future of Shopping: Discover Our Online Marketplace</h2>
                                </a>
                                <p className="text">Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor
                                    vitae, hendrerit blandit lorem. </p>
                                <a className="btn btn-outline-primary" href="#">
                                    Read more
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-8 col-xs-11">
                        <div className="card-news">
                            <div className="card-image">
                                <a href="#">
                                    <img src="./image/news/2.png" alt="news" className="w-100" />
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="card-body__meta">
                                    <div className="user-block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M5.98126 18.6938C6.54555 17.5823 7.4066 16.6488 8.46896 15.9967C9.53132 15.3446 10.7535 14.9995 12 14.9995C13.2465 14.9995 14.4687 15.3446 15.5311 15.9967C16.5934 16.6488 17.4545 17.5823 18.0188 18.6938"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Robert</span>
                                    </div>
                                    <a href="#">
                                        <div className="date-block">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                                                    stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M7.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M3.75 8.25H20.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <span>28 Nov, 2024</span>
                                        </div>
                                    </a>
                                    <div className="comment-block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.25626 16.5938C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17983 4.74669 6.25146 6.47652 4.90832C8.20636 3.56517 10.367 2.89961 12.5527 3.0366C14.7385 3.17358 16.7991 4.10368 18.3477 5.65229C19.8963 7.20089 20.8264 9.26151 20.9634 11.4473C21.1004 13.6331 20.4349 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7438L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5988 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7063L4.25626 16.5938Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
                                                fill="#FA8232" />
                                            <path
                                                d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z"
                                                fill="#FA8232" />
                                            <path
                                                d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z"
                                                fill="#FA8232" />
                                        </svg>
                                        <span>738</span>
                                    </div>
                                </div>
                                <a href="#">
                                    <h2 className="title">Revolutionizing Retail: Your Ultimate Online Shopping Destination</h2>
                                </a>
                                <p className="text">Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor
                                    vitae, hendrerit blandit lorem. </p>
                                <a className="btn btn-outline-primary" href="#">
                                    Read more
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-8 col-xs-11">
                        <div className="card-news">
                            <div className="card-image">
                                <a href="#">
                                    <img src="./image/news/3.png" alt="news" className="w-100" />
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="card-body__meta">
                                    <div className="user-block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M5.98126 18.6938C6.54555 17.5823 7.4066 16.6488 8.46896 15.9967C9.53132 15.3446 10.7535 14.9995 12 14.9995C13.2465 14.9995 14.4687 15.3446 15.5311 15.9967C16.5934 16.6488 17.4545 17.5823 18.0188 18.6938"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Kristin</span>
                                    </div>
                                    <a href="#">
                                        <div className="date-block">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                                                    stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M7.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M3.75 8.25H20.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <span>9 May, 2024</span>
                                        </div>
                                    </a>
                                    <div className="comment-block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.25626 16.5938C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17983 4.74669 6.25146 6.47652 4.90832C8.20636 3.56517 10.367 2.89961 12.5527 3.0366C14.7385 3.17358 16.7991 4.10368 18.3477 5.65229C19.8963 7.20089 20.8264 9.26151 20.9634 11.4473C21.1004 13.6331 20.4349 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7438L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5988 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7063L4.25626 16.5938Z"
                                                stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
                                                fill="#FA8232" />
                                            <path
                                                d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z"
                                                fill="#FA8232" />
                                            <path
                                                d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z"
                                                fill="#FA8232" />
                                        </svg>
                                        <span>826</span>
                                    </div>
                                </div>
                                <a href="#">
                                    <h2 className="title">Beyond Borders: Explore a World of Products with Us</h2>
                                </a>
                                <p className="text">Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis,
                                    risus augue condimentum purus.</p>
                                <a className="btn btn-outline-primary" href="#">
                                    Read more
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}