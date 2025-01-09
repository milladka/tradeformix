
import { AddCart } from "@/app/components/product/addCart";
import WooCommerce from "@/app/service/coreApi";
import { notFound } from 'next/navigation';

async function getProduct(slug) {
    let data = {};
    await WooCommerce.get(`products/${slug}`).then((response) => {
        // console.log(response)
        data = response.data;
    }).catch((error) => {
        if (error.response.data.data.status == 404) {
            notFound();
        }
    });

    return data

}

export default async function ProductDetail({ params }) {
    const { slug } = await params
    const data = await getProduct(slug);
    // console.log(data.attributes)

    const roundedNumber = (num) => Number(num.toFixed(2));

    return (
        <>
            <div className="product-detail-section">
                <div className="container">
                    <div className="product-detail-section__slider">
                        <div className="product-detail-slider">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="slider-area">
                                        <div className="product-slider--03">
                                            <div className="single-slider">
                                                <img src={data?.images[0].src} alt={data?.images[0].alt} />
                                            </div>
                                            {/* <div className="single-slider">
                                                <img src="/image/product/mac.png" alt="mac" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="/image/product/mac.png" alt="mac" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="/image/product/mac.png" alt="mac" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="/image/product/mac.png" alt="mac" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="/image/product/mac.png" alt="mac" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="/image/product/mac.png" alt="mac" />
                                            </div> */}
                                        </div>
                                        {/* <div className="silde-wrap">
                                            <div className="product-slider--03__nav">
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/01.png" alt="product" />
                                                    </div>
                                                </div>
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/02.png" alt="product" />
                                                    </div>
                                                </div>
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/03.png" alt="product" />
                                                    </div>
                                                </div>
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/04.png" alt="product" />
                                                    </div>
                                                </div>
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/05.png" alt="product" />
                                                    </div>
                                                </div>
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/06.png" alt="product" />
                                                    </div>
                                                </div>
                                                <div className="single-slide">
                                                    <div className="small-prduct">
                                                        <img src="/image/product/gallery/02.png" alt="product" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-slider--03__control-buttons">
                                                <button className="button button--prev">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.25 12H3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <button className="button button--next">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="slider-content">
                                        <div className="slider-content__ratting">
                                            <ul>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.3434 14.8985L14.2809 17.3985C14.7887 17.7188 15.4137 17.2422 15.2653 16.6563L14.1246 12.1719C14.0938 12.0476 14.0987 11.9171 14.1388 11.7955C14.1789 11.6738 14.2525 11.566 14.3512 11.4844L17.8824 8.53908C18.3434 8.15627 18.109 7.38283 17.5074 7.34377L12.8981 7.04689C12.7723 7.03958 12.6514 6.99578 12.5501 6.92086C12.4488 6.84594 12.3716 6.74314 12.3278 6.62502L10.609 2.29689C10.5635 2.17182 10.4806 2.06377 10.3716 1.98742C10.2626 1.91107 10.1327 1.87012 9.99963 1.87012C9.86654 1.87012 9.73667 1.91107 9.62765 1.98742C9.51863 2.06377 9.43575 2.17182 9.39026 2.29689L7.67151 6.62502C7.6277 6.74314 7.55044 6.84594 7.44916 6.92086C7.34787 6.99578 7.22696 7.03958 7.10119 7.04689L2.49182 7.34377C1.89026 7.38283 1.65588 8.15627 2.11682 8.53908L5.64807 11.4844C5.74677 11.566 5.8204 11.6738 5.86049 11.7955C5.90057 11.9171 5.90547 12.0476 5.87463 12.1719L4.81994 16.3281C4.64026 17.0313 5.39026 17.6016 5.99182 17.2188L9.65588 14.8985C9.75863 14.8331 9.87787 14.7984 9.99963 14.7984C10.1214 14.7984 10.2406 14.8331 10.3434 14.8985Z" fill="#FA8232" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.3434 14.8985L14.2809 17.3985C14.7887 17.7188 15.4137 17.2422 15.2653 16.6563L14.1246 12.1719C14.0938 12.0476 14.0987 11.9171 14.1388 11.7955C14.1789 11.6738 14.2525 11.566 14.3512 11.4844L17.8824 8.53908C18.3434 8.15627 18.109 7.38283 17.5074 7.34377L12.8981 7.04689C12.7723 7.03958 12.6514 6.99578 12.5501 6.92086C12.4488 6.84594 12.3716 6.74314 12.3278 6.62502L10.609 2.29689C10.5635 2.17182 10.4806 2.06377 10.3716 1.98742C10.2626 1.91107 10.1327 1.87012 9.99963 1.87012C9.86654 1.87012 9.73667 1.91107 9.62765 1.98742C9.51863 2.06377 9.43575 2.17182 9.39026 2.29689L7.67151 6.62502C7.6277 6.74314 7.55044 6.84594 7.44916 6.92086C7.34787 6.99578 7.22696 7.03958 7.10119 7.04689L2.49182 7.34377C1.89026 7.38283 1.65588 8.15627 2.11682 8.53908L5.64807 11.4844C5.74677 11.566 5.8204 11.6738 5.86049 11.7955C5.90057 11.9171 5.90547 12.0476 5.87463 12.1719L4.81994 16.3281C4.64026 17.0313 5.39026 17.6016 5.99182 17.2188L9.65588 14.8985C9.75863 14.8331 9.87787 14.7984 9.99963 14.7984C10.1214 14.7984 10.2406 14.8331 10.3434 14.8985Z" fill="#FA8232" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.3434 14.8985L14.2809 17.3985C14.7887 17.7188 15.4137 17.2422 15.2653 16.6563L14.1246 12.1719C14.0938 12.0476 14.0987 11.9171 14.1388 11.7955C14.1789 11.6738 14.2525 11.566 14.3512 11.4844L17.8824 8.53908C18.3434 8.15627 18.109 7.38283 17.5074 7.34377L12.8981 7.04689C12.7723 7.03958 12.6514 6.99578 12.5501 6.92086C12.4488 6.84594 12.3716 6.74314 12.3278 6.62502L10.609 2.29689C10.5635 2.17182 10.4806 2.06377 10.3716 1.98742C10.2626 1.91107 10.1327 1.87012 9.99963 1.87012C9.86654 1.87012 9.73667 1.91107 9.62765 1.98742C9.51863 2.06377 9.43575 2.17182 9.39026 2.29689L7.67151 6.62502C7.6277 6.74314 7.55044 6.84594 7.44916 6.92086C7.34787 6.99578 7.22696 7.03958 7.10119 7.04689L2.49182 7.34377C1.89026 7.38283 1.65588 8.15627 2.11682 8.53908L5.64807 11.4844C5.74677 11.566 5.8204 11.6738 5.86049 11.7955C5.90057 11.9171 5.90547 12.0476 5.87463 12.1719L4.81994 16.3281C4.64026 17.0313 5.39026 17.6016 5.99182 17.2188L9.65588 14.8985C9.75863 14.8331 9.87787 14.7984 9.99963 14.7984C10.1214 14.7984 10.2406 14.8331 10.3434 14.8985Z" fill="#FA8232" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.3434 14.8985L14.2809 17.3985C14.7887 17.7188 15.4137 17.2422 15.2653 16.6563L14.1246 12.1719C14.0938 12.0476 14.0987 11.9171 14.1388 11.7955C14.1789 11.6738 14.2525 11.566 14.3512 11.4844L17.8824 8.53908C18.3434 8.15627 18.109 7.38283 17.5074 7.34377L12.8981 7.04689C12.7723 7.03958 12.6514 6.99578 12.5501 6.92086C12.4488 6.84594 12.3716 6.74314 12.3278 6.62502L10.609 2.29689C10.5635 2.17182 10.4806 2.06377 10.3716 1.98742C10.2626 1.91107 10.1327 1.87012 9.99963 1.87012C9.86654 1.87012 9.73667 1.91107 9.62765 1.98742C9.51863 2.06377 9.43575 2.17182 9.39026 2.29689L7.67151 6.62502C7.6277 6.74314 7.55044 6.84594 7.44916 6.92086C7.34787 6.99578 7.22696 7.03958 7.10119 7.04689L2.49182 7.34377C1.89026 7.38283 1.65588 8.15627 2.11682 8.53908L5.64807 11.4844C5.74677 11.566 5.8204 11.6738 5.86049 11.7955C5.90057 11.9171 5.90547 12.0476 5.87463 12.1719L4.81994 16.3281C4.64026 17.0313 5.39026 17.6016 5.99182 17.2188L9.65588 14.8985C9.75863 14.8331 9.87787 14.7984 9.99963 14.7984C10.1214 14.7984 10.2406 14.8331 10.3434 14.8985Z" fill="#FA8232" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.3434 14.8985L14.2809 17.3985C14.7887 17.7188 15.4137 17.2422 15.2653 16.6563L14.1246 12.1719C14.0938 12.0476 14.0987 11.9171 14.1388 11.7955C14.1789 11.6738 14.2525 11.566 14.3512 11.4844L17.8824 8.53908C18.3434 8.15627 18.109 7.38283 17.5074 7.34377L12.8981 7.04689C12.7723 7.03958 12.6514 6.99578 12.5501 6.92086C12.4488 6.84594 12.3716 6.74314 12.3278 6.62502L10.609 2.29689C10.5635 2.17182 10.4806 2.06377 10.3716 1.98742C10.2626 1.91107 10.1327 1.87012 9.99963 1.87012C9.86654 1.87012 9.73667 1.91107 9.62765 1.98742C9.51863 2.06377 9.43575 2.17182 9.39026 2.29689L7.67151 6.62502C7.6277 6.74314 7.55044 6.84594 7.44916 6.92086C7.34787 6.99578 7.22696 7.03958 7.10119 7.04689L2.49182 7.34377C1.89026 7.38283 1.65588 8.15627 2.11682 8.53908L5.64807 11.4844C5.74677 11.566 5.8204 11.6738 5.86049 11.7955C5.90057 11.9171 5.90547 12.0476 5.87463 12.1719L4.81994 16.3281C4.64026 17.0313 5.39026 17.6016 5.99182 17.2188L9.65588 14.8985C9.75863 14.8331 9.87787 14.7984 9.99963 14.7984C10.1214 14.7984 10.2406 14.8331 10.3434 14.8985Z" fill="#FA8232" />
                                                    </svg>
                                                </li>
                                                <li className="rating-text">4.7 Star Rating</li>
                                                <li className="feedback-text">(21,671 User feedback)</li>
                                            </ul>
                                        </div>
                                        <div className="slider-content__title">
                                            <h6>{data?.name}</h6>
                                        </div>
                                        <div className="slider-content__fact">
                                            <ul>
                                                <li>Sku: <span>{data?.sku}</span></li>
                                                <li>Availability: <span className="stock">{data?.stock_status}</span></li>
                                                <li>Category:
                                                    {
                                                        data?.categories.map(cat => {
                                                            return (
                                                                <span className="px-2" key={cat.id}>{cat.name}</span>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="slider-content__price-block">

                                            {
                                                data?.price < data?.regular_price ?
                                                    <div className="price">
                                                        <span>{data?.price} $</span>
                                                        <del>{data?.regular_price} $</del>
                                                    </div>
                                                    :
                                                    <div className="price"><span>{data?.price} $</span></div>
                                            }

                                            {
                                                data?.price < data?.regular_price &&

                                                <div className="offer-badge">
                                                    <span className="badge">{roundedNumber((100 - ((data?.price * 100) / data?.regular_price)))} % OFF</span>
                                                </div>

                                            }

                                        </div>



                                        <div className="slider-content__form">

                                            {
                                                data.attributes && data.attributes.length > 0 && data.attributes.map(item => {
                                                    return (

                                                        <div key={item.id} className="slider-content__form--size">
                                                            <h6 className="title">{item.name}</h6>
                                                            <div className="selectbox">
                                                                <select className="nice-select">
                                                                    {
                                                                        Array.isArray(item.options) ?
                                                                            item.options.map((ite, index) => {
                                                                                return (
                                                                                    <option value={ite} key={index}>{ite}</option>
                                                                                )
                                                                            })
                                                                            :
                                                                            <option>{data.attributes.options}</option>
                                                                    }

                                                                </select>
                                                            </div>
                                                        </div>



                                                    )
                                                })
                                            }

                                        </div>
                                        {/* //// */}
                                        <AddCart data={data} />

                                        <div className="slider-content__content">
                                            <div className="content-one">
                                                <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                    Add to Wishlist</a>
                                                <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5186 9.34692H21.0186V4.84692" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6.16895 6.16885C6.93431 5.40236 7.84329 4.79429 8.84387 4.37941C9.84445 3.96453 10.917 3.75098 12.0002 3.75098C13.0834 3.75098 14.1559 3.96453 15.1565 4.37941C16.1571 4.79429 17.0661 5.40236 17.8314 6.16885L21.0189 9.34698" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.48145 14.6531H2.98145V19.1531" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17.8314 17.8312C17.0661 18.5977 16.1571 19.2058 15.1565 19.6206C14.1559 20.0355 13.0834 20.2491 12.0002 20.2491C10.917 20.2491 9.84445 20.0355 8.84387 19.6206C7.84329 19.2058 6.93431 18.5977 6.16895 17.8312L2.98145 14.6531" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                    Add to Compare</a>
                                            </div>
                                            <div className="content-two">
                                                <ul>
                                                    <li className="text">Share product:</li>
                                                    <li className="copy"><a href="#">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.75 15.75H20.25V3.75H8.25V8.25" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M15.75 8.25H3.75V20.25H15.75V8.25Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a></li>
                                                    <li className="fb"><a href="#"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path className="fill-1" fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4183 0 16 3.58173 16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8C0 3.58173 3.58173 0 8 0Z" fill="#5F6C72" />
                                                        <path className="fill-2" d="M9.04119 15.933V9.75237H10.7847L11.0158 7.5771H9.04119L9.04412 6.48827C9.04412 5.92091 9.09805 5.61705 9.91348 5.61705H11.0035V3.44141H9.25968C7.16499 3.44141 6.42783 4.4966 6.42783 6.27136V7.57726H5.12207V9.75274H6.42783V15.8453C6.93653 15.9466 7.46243 16.0001 8.00089 16.0001C8.34875 16.0001 8.69623 15.9777 9.04119 15.933Z" fill="white" />
                                                    </svg>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.03184 14.5024C11.0699 14.5024 14.3718 9.49713 14.3718 5.15673C14.3718 5.01458 14.3689 4.87308 14.3625 4.73217C15.005 4.26699 15.5595 3.69103 16 3.03128C15.4118 3.29294 14.7789 3.46904 14.1149 3.54844C14.7926 3.14181 15.3129 2.49851 15.5584 1.73169C14.914 2.11419 14.2091 2.38382 13.4739 2.52898C12.8749 1.89052 12.0221 1.49121 11.0778 1.49121C9.26494 1.49121 7.79489 2.96219 7.79489 4.7754C7.79489 5.03319 7.82374 5.28385 7.88006 5.52436C5.15177 5.38699 2.73252 4.07995 1.11343 2.09252C0.821818 2.59379 0.668434 3.16349 0.668943 3.74345C0.668943 4.88304 1.24846 5.88903 2.12976 6.47759C1.60846 6.46166 1.0986 6.32077 0.643057 6.06676C0.642569 6.08055 0.642569 6.09399 0.642569 6.10872C0.642569 7.69944 1.77408 9.02759 3.27613 9.32854C2.99402 9.40542 2.70292 9.44428 2.41054 9.44411C2.19938 9.44411 1.99359 9.42333 1.79359 9.38491C2.21151 10.69 3.42335 11.6397 4.86013 11.6663C3.73659 12.5474 2.32127 13.0723 0.783024 13.0723C0.521349 13.0725 0.259888 13.0573 0 13.0267C1.45281 13.9585 3.17789 14.5022 5.032 14.5022" fill="#5F6C72" />
                                                        </svg>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_678_19086)">
                                                                <path d="M7.02406 0.0530204C4.3652 0.349837 1.71572 2.50098 1.60636 5.57382C1.53762 7.45001 2.07033 8.85755 3.85592 9.25278C4.63077 7.88586 3.60597 7.58436 3.44663 6.59549C2.79207 2.54316 8.12072 -0.220364 10.9092 2.60877C12.8386 4.56776 11.5685 10.5947 8.45659 9.96827C5.47592 9.36995 9.91568 4.57245 7.53646 3.63045C5.60246 2.86497 4.57453 5.97218 5.49154 7.51563C4.95415 10.1698 3.79656 12.6709 4.26522 15.9999C5.78524 14.897 6.29764 12.7849 6.71787 10.5822C7.48178 11.0462 7.88951 11.5289 8.86432 11.6039C12.4589 11.882 14.4664 8.01553 13.9758 4.44904C13.54 1.28715 10.3843 -0.321906 7.02406 0.0530204Z" fill="#5F6C72" />
                                                            </g>
                                                        </svg>
                                                    </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="slider-content__payment-method">
                                            <p>100% Guarantee Safe Checkout</p>
                                            <img src="/image/payment-method.png" alt="payment-method.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-information">
                <div className="container">
                    <div className="product-information__tab">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>
                                <button className="nav-link" id="nav-information-tab" data-bs-toggle="tab" data-bs-target="#nav-information" type="button" role="tab" aria-controls="nav-information" aria-selected="false">Additional information</button>
                                <button className="nav-link" id="nav-specification-tab" data-bs-toggle="tab" data-bs-target="#nav-specification" type="button" role="tab" aria-controls="nav-specification" aria-selected="false">Specification</button>
                                <button className="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Review</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                                <div className="description-content">
                                    <div className="description">
                                        <h2 className="title">Description</h2>

                                        <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>

                                    </div>
                                    <div className="description-content--info">
                                        <div className="feature">
                                            <h2 className="title">Feature</h2>
                                            <ul>
                                                <li>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 16.5C16.1421 16.5 19.5 13.1421 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 13.1421 7.85786 16.5 12 16.5Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 13.5C14.4853 13.5 16.5 11.4853 16.5 9C16.5 6.51472 14.4853 4.5 12 4.5C9.51472 4.5 7.5 6.51472 7.5 9C7.5 11.4853 9.51472 13.5 12 13.5Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.5 15V22.5L12 20.25L7.5 22.5V15" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Free 1 Year Warranty
                                                </li>
                                                <li>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.5 7.50002H20.4938C20.6432 7.49904 20.7894 7.54329 20.9132 7.62695C21.037 7.71061 21.1326 7.82977 21.1875 7.96877L22.5 11.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M1.5 13.5H16.5" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M17.625 20.25C18.8676 20.25 19.875 19.2426 19.875 18C19.875 16.7574 18.8676 15.75 17.625 15.75C16.3824 15.75 15.375 16.7574 15.375 18C15.375 19.2426 16.3824 20.25 17.625 20.25Z" stroke="#FA8232" strokeWidth="1.5" strokeMiterlimit="10" />
                                                        <path d="M6.375 20.25C7.61764 20.25 8.625 19.2426 8.625 18C8.625 16.7574 7.61764 15.75 6.375 15.75C5.13236 15.75 4.125 16.7574 4.125 18C4.125 19.2426 5.13236 20.25 6.375 20.25Z" stroke="#FA8232" strokeWidth="1.5" strokeMiterlimit="10" />
                                                        <path d="M15.375 18H8.625" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4.125 18H2.25C2.05109 18 1.86032 17.921 1.71967 17.7803C1.57902 17.6397 1.5 17.4489 1.5 17.25V6.75C1.5 6.55109 1.57902 6.36032 1.71967 6.21967C1.86032 6.07902 2.05109 6 2.25 6H16.5V16.05" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.5 11.25H22.5V17.25C22.5 17.4489 22.421 17.6397 22.2803 17.7803C22.1397 17.921 21.9489 18 21.75 18H19.875" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Free Shipping & Fasted Delivery
                                                </li>
                                                <li>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5656 11.4186L20.25 12.5717L17.25 6.8342L19.5938 5.66232C19.7679 5.57354 19.9701 5.55722 20.1563 5.61693C20.3425 5.67665 20.4975 5.80754 20.5875 5.98107L22.8937 10.3967C22.9405 10.4851 22.9691 10.5819 22.9779 10.6816C22.9867 10.7812 22.9755 10.8815 22.9449 10.9767C22.9143 11.072 22.865 11.1601 22.7999 11.236C22.7348 11.3118 22.6551 11.3739 22.5656 11.4186V11.4186Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.74996 12.4784L1.43434 11.3159C1.34518 11.2722 1.26571 11.211 1.20067 11.136C1.13563 11.0609 1.08634 10.9736 1.05573 10.8791C1.02512 10.7847 1.01381 10.685 1.02248 10.5861C1.03116 10.4872 1.05963 10.391 1.10621 10.3034L3.41246 5.88774C3.50268 5.71433 3.65703 5.58299 3.84265 5.52171C4.02827 5.46042 4.23048 5.47402 4.40621 5.55961L6.74996 6.73149L3.74996 12.4784Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20.25 12.5718L18.75 14.3343L15.3 17.7843C15.206 17.8722 15.092 17.936 14.968 17.9703C14.8439 18.0046 14.7133 18.0083 14.5875 17.9812L9.15 16.6218C9.05067 16.5941 8.95812 16.5462 8.87812 16.4812L3.75 12.478" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M18.75 14.3345L14.625 11.3345L13.425 12.2345C12.9051 12.6225 12.2737 12.8321 11.625 12.8321C10.9762 12.8321 10.3449 12.6225 9.82496 12.2345L9.31871 11.8501C9.2331 11.785 9.1623 11.7025 9.11097 11.608C9.05965 11.5135 9.02899 11.4092 9.02101 11.3019C9.01304 11.1947 9.02793 11.087 9.0647 10.9859C9.10148 10.8849 9.1593 10.7928 9.23434 10.7157L12.9093 7.0501C12.9784 6.98141 13.0603 6.927 13.1504 6.89C13.2404 6.853 13.3369 6.83414 13.4343 6.83448H17.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.80627 6.73121L11.6156 5.32496C11.7865 5.27595 11.9693 5.28924 12.1313 5.36246L15.375 6.83433" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.5 19.9594L7.67813 19.2469C7.56313 19.2209 7.45666 19.166 7.36875 19.0875L5.25 17.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    100% Money-back guarantee
                                                </li>
                                                <li>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.1406 12.7498H18.1406C17.7428 12.7498 17.3613 12.9079 17.08 13.1892C16.7987 13.4705 16.6406 13.852 16.6406 14.2498V17.9998C16.6406 18.3976 16.7987 18.7792 17.08 19.0605C17.3613 19.3418 17.7428 19.4998 18.1406 19.4998H19.6406C20.0384 19.4998 20.42 19.3418 20.7013 19.0605C20.9826 18.7792 21.1406 18.3976 21.1406 17.9998V12.7498ZM21.1406 12.7498C21.1407 11.5616 20.9054 10.3851 20.4484 9.28826C19.9915 8.19141 19.3218 7.19591 18.4781 6.3592C17.6344 5.52248 16.6334 4.86112 15.5328 4.41326C14.4322 3.9654 13.2538 3.73992 12.0656 3.74982C10.8782 3.74117 9.70083 3.96757 8.60132 4.41598C7.5018 4.8644 6.50189 5.52596 5.6592 6.36255C4.81651 7.19914 4.1477 8.19422 3.69131 9.29045C3.23492 10.3867 2.99997 11.5624 3 12.7498V17.9998C3 18.3976 3.15804 18.7792 3.43934 19.0605C3.72064 19.3418 4.10218 19.4998 4.5 19.4998H6C6.39782 19.4998 6.77936 19.3418 7.06066 19.0605C7.34196 18.7792 7.5 18.3976 7.5 17.9998V14.2498C7.5 13.852 7.34196 13.4705 7.06066 13.1892C6.77936 12.9079 6.39782 12.7498 6 12.7498H3" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    24/7 Customer support
                                                </li>
                                                <li>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.75 15.75H18.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 15.75H12.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2.25 9.08447H21.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Secure payment method
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shipping-information">
                                            <h2 className="title">Shipping Information</h2>
                                            <ul>
                                                <li><span>Courier:</span> 2 - 4 days, free shipping</li>
                                                <li><span>Local Shipping:</span> up to one week, $19.00</li>
                                                <li><span>UPS Ground Shipping:</span> 4 - 6 days, $29.00</li>
                                                <li><span>Unishop Global Export:</span> 3 - 4 days, $39.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                                <div className="information-content">
                                    <div className="information-content__one">
                                        <div className="information-content__overview">
                                            <h6 className="title">Overview</h6>
                                            <ul>
                                                <li><span className="text-gray-900">Model Name:</span><span
                                                    className=" text-gray-600">MacBook Pro</span></li>
                                                <li><span className="text-gray-900">Brand:</span><span
                                                    className=" text-gray-600">Apple</span></li>
                                                <li><span className="text-gray-900">Specific Uses:</span><span
                                                    className=" text-gray-600">Personal, Gaming, Business</span></li>
                                                <li><span className="text-gray-900">Screen Size:</span><span className=" text-gray-600">16
                                                    Inches</span></li>
                                                <li><span className="text-gray-900">Display:</span><span className=" text-gray-600">Liquid
                                                    Retina XDR display</span></li>
                                                <li><span className="text-gray-900">Key-board:</span><span className=" text-gray-600">Magic
                                                    Keyboard with Touch ID</span></li>
                                                <li><span className="text-gray-900">Human Interface Input:</span><span
                                                    className=" text-gray-600">Keyboard</span></li>
                                                <li><span className="text-gray-900">CPU Manufacturer:</span><span
                                                    className=" text-gray-600">Apple</span></li>
                                            </ul>
                                        </div>
                                        <div className="information-content__details">
                                            <div className="content">
                                                <h6 className="title">Product Warranty:</h6>
                                                <p>For warranty information about this product, please click here.</p>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Operating System:</h6>
                                                <p>Mac OS Big Sur</p>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Dimensions:</h6>
                                                <ul>
                                                    <li><span className="text-gray-900">Dimensions:</span><span className=" text-gray-600">
                                                        304.1 x 212.4 x 15.6 mm</span></li>
                                                    <li><span className="text-gray-900">Weight:</span><span className=" text-gray-600"> 3
                                                        Pounds (1.4 kg)</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="information-content__highlights">
                                        <h6 className="title">Highlights: </h6>
                                        <ul>
                                            <li>Stylish & Portable Thin and Light Laptop</li>
                                            <li>13.3 inch Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour
                                                (P3), True Tone Technology)</li>
                                            <li>Light Laptop without Optical Disk Drive</li>
                                            <li>No cost EMI starting from $252 USD/month</li>
                                            <li>Net banking & Credit/ Debit/ ATM card</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-specification" role="tabpanel" aria-labelledby="nav-specification-tab">
                                <div className="specification-content">
                                    <div className="content one">
                                        <div className="specification-content__overview">
                                            <h6 className="title">General</h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Sales Package</span><span
                                                    className=" text-gray-600">MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge
                                                    Cable (2m), User Guide, Warranty Documents</span></li>
                                                <li><span className="text-gray-900 fw-500">Model Number</span><span
                                                    className=" text-gray-600">MYD82HN/A</span></li>
                                                <li><span className="text-gray-900 fw-500">Part Number</span><span
                                                    className=" text-gray-600">MYD82HN/A</span></li>
                                                <li><span className="text-gray-900 fw-500">Series</span><span
                                                    className=" text-gray-600">MacBook Pro</span></li>
                                                <li><span className="text-gray-900 fw-500">Color</span><span
                                                    className=" text-gray-600">Space Grey</span></li>
                                                <li><span className="text-gray-900 fw-500">Type</span><span className=" text-gray-600">Thin
                                                    and Light Laptop</span></li>
                                                <li><span className="text-gray-900 fw-500">Suitable For</span><span
                                                    className=" text-gray-600">Processing & Multitasking</span></li>
                                                <li><span className="text-gray-900 fw-500">Battery Backup</span><span
                                                    className=" text-gray-600">Upto 17 hours</span></li>
                                                <li><span className="text-gray-900 fw-500">Power Supply</span><span
                                                    className=" text-gray-600">61 W AC Adapter</span></li>
                                                <li><span className="text-gray-900 fw-500">MS Office Provided</span><span
                                                    className=" text-gray-600">No</span></li>
                                            </ul>
                                        </div>
                                        <div className="line"></div>
                                        <div className="specification-content__overview">
                                            <h6 className="title">Display And Audio Features</h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Touchscreen</span><span
                                                    className=" text-gray-600">MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge
                                                    Cable (2m), User Guide, Warranty Documents
                                                </span></li>
                                                <li><span className="text-gray-900 fw-500">Screen Size</span><span
                                                    className=" text-gray-600">33.78 cm (13.3 inch)</span></li>
                                                <li><span className="text-gray-900 fw-500">Screen Resolution</span><span
                                                    className=" text-gray-600">2560 x 1600 Pixel</span></li>
                                                <li><span className="text-gray-900 fw-500">Screen Type</span><span
                                                    className=" text-gray-600">Quad LED Backlit IPS Display (227 PPI, 500 nits
                                                    Brightness, Wide Colour (P3), True Tone Technology)</span></li>
                                                <li><span className="text-gray-900 fw-500">Speakers</span><span
                                                    className=" text-gray-600">Built-in Speakers</span></li>
                                                <li><span className="text-gray-900 fw-500">Internal Mic</span><span
                                                    className=" text-gray-600">Studio Quality Three-mic Array with Directional
                                                    Beamforming</span></li>
                                                <li><span className="text-gray-900 fw-500">Sound Properties</span><span
                                                    className=" text-gray-600">Stereo Speakers with High Dynamic Range, Wide Stereo
                                                    Sound, Support for Dolby Atmos Playback</span></li>
                                                <li><span className="text-gray-900 fw-500">Battery Backup</span><span
                                                    className=" text-gray-600">Upto 17 hours</span></li>
                                                <li><span className="text-gray-900 fw-500">Power Supply</span><span
                                                    className=" text-gray-600">61 W AC Adapter</span></li>
                                                <li><span className="text-gray-900 fw-500">MS Office Provided</span><span
                                                    className=" text-gray-600">No</span></li>
                                            </ul>
                                        </div>
                                        <div className="line"></div>
                                        <div className="specification-content__overview">
                                            <h6 className="title">Port And Slot Features</h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Mic In
                                                </span><span className=" text-gray-600">Yes</span></li>
                                                <li><span className="text-gray-900 fw-500">USB Port</span><span className=" text-gray-600">2
                                                    x Thunderbolt / USB 4 Ports (Supports Charging, DisplayPort, Thunderbolt 3
                                                    (Upto 40 Gbps), USB 3.1 (2nd Gen, Upto 10 Gbps)</span></li>
                                            </ul>
                                        </div>
                                        <div className="line"></div>
                                        <div className="specification-content__overview">
                                            <h6 className="title">Connectivity Features
                                            </h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Wireless LAN
                                                </span><span className=" text-gray-600">IEEE 802.11ax (Wi-Fi 6)</span></li>
                                                <li><span className="text-gray-900 fw-500">Bluetooth</span><span
                                                    className=" text-gray-600">v5.0/A</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content two">
                                        <div className="specification-content__overview">
                                            <h6 className="title">Processor And Memory Features
                                            </h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Processor Brand
                                                </span><span className=" text-gray-600">Apple</span></li>
                                                <li><span className="text-gray-900 fw-500">Processor Name</span><span
                                                    className=" text-gray-600">M1 Max</span></li>
                                                <li><span className="text-gray-900 fw-500">SSD</span><span
                                                    className=" text-gray-600">Yes</span></li>
                                                <li><span className="text-gray-900 fw-500">SSD Capacity</span><span
                                                    className=" text-gray-600">256 GB</span></li>
                                                <li><span className="text-gray-900 fw-500">RAM</span><span className=" text-gray-600">8
                                                    GB</span></li>
                                                <li><span className="text-gray-900 fw-500">RAM Type</span><span
                                                    className=" text-gray-600">DDR4</span></li>
                                                <li><span className="text-gray-900 fw-500">Processor Varient</span><span
                                                    className=" text-gray-600">Apple M1 Chip</span></li>
                                                <li><span className="text-gray-900 fw-500">Expandable Memory</span><span
                                                    className=" text-gray-600">Up to 16 GB</span></li>
                                                <li><span className="text-gray-900 fw-500">Graphic Processor
                                                </span><span className=" text-gray-600">NM</span></li>
                                                <li><span className="text-gray-900 fw-500">Number of Cores</span><span
                                                    className=" text-gray-600">8</span></li>
                                            </ul>
                                        </div>
                                        <div className="line"></div>
                                        <div className="specification-content__overview">
                                            <h6 className="title">Additional Features
                                            </h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Disk Drive
                                                </span><span className=" text-gray-600">MacBook Pro, 61 W USB-C Power Adapter, USB-C
                                                    Charge Cable (2m), User Guide, Warranty Documents
                                                    </span></li>
                                                <li><span className="text-gray-900 fw-500">Web Camera</span><span
                                                    className=" text-gray-600">720p FaceTime HD Webcam</span></li>
                                                <li><span className="text-gray-900 fw-500">Keyboard</span><span
                                                    className=" text-gray-600">Backlit Magic Keyboard</span></li>
                                                <li><span className="text-gray-900 fw-500">Pointer Device</span><span
                                                    className=" text-gray-600">Force Touch Trackpad</span></li>
                                                <li><span className="text-gray-900 fw-500">Included Software</span><span
                                                    className=" text-gray-600">Built-in Apps: iMovie, Siri, GarageBand, Pages,
                                                    Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks,
                                                    Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth,
                                                    Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My,
                                                    QuickTime Player</span></li>
                                                <li><span className="text-gray-900 fw-500">Additional Features</span><span
                                                    className=" text-gray-600">58.2 WHr Li-polymer Battery</span></li>
                                            </ul>
                                        </div>
                                        <div className="line"></div>
                                        <div className="specification-content__overview">
                                            <h6 className="title">Warranty
                                            </h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Warranty Summary
                                                </span><span className=" text-gray-600">1 Year Limited Warra­nty
                                                    </span></li>
                                                <li><span className="text-gray-900 fw-500">Warranty Service Type</span><span
                                                    className=" text-gray-600">Onsite</span></li>
                                                <li><span className="text-gray-900 fw-500">Covered in Warranty</span><span
                                                    className=" text-gray-600">Manufacturing Defects</span></li>
                                                <li><span className="text-gray-900 fw-500">Not Covered in Warranty</span><span
                                                    className=" text-gray-600">Physical Damage</span></li>
                                                <li><span className="text-gray-900 fw-500">Domestic Warranty</span><span
                                                    className=" text-gray-600">1 Year
                                                </span></li>
                                            </ul>
                                        </div>
                                        <div className="line"></div>
                                        <div className="specification-content__overview">
                                            <h6 className="title">Connectivity Features
                                            </h6>
                                            <ul>
                                                <li><span className="text-gray-900 fw-500">Wireless LAN
                                                </span><span className=" text-gray-600">IEEE 802.11ax (Wi-Fi 6)
                                                    </span></li>
                                                <li><span className="text-gray-900 fw-500">Bluetooth</span><span
                                                    className=" text-gray-600">v5.0/A</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                                <div className="review-content">
                                    <div className="review-content__rating">
                                        <div className="customer-rating">
                                            <h6 className="title">4.7</h6>
                                            <div className="star">
                                                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232" />
                                                </svg>
                                                </i>
                                                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232" />
                                                </svg>
                                                </i>
                                                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232" />
                                                </svg>
                                                </i>
                                                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232" />
                                                </svg>
                                                </i>
                                                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0007 17.7563C11.8548 17.7592 11.7123 17.8013 11.5882 17.8781L7.19135 20.6625C6.46948 21.1219 5.56948 20.4375 5.7851 19.5938L7.05073 14.6063C7.08774 14.4571 7.08186 14.3005 7.03375 14.1545C6.98565 14.0086 6.89729 13.8792 6.77885 13.7813L2.54135 10.2469C1.98823 9.7875 2.26948 8.85938 2.99135 8.8125L8.5226 8.45625C8.67353 8.44747 8.81862 8.39492 8.94016 8.30501C9.0617 8.21511 9.15441 8.09175 9.20698 7.95L11.2695 2.75625C11.325 2.60726 11.4249 2.47887 11.5556 2.38836C11.6864 2.29785 11.8417 2.24956 12.0007 2.25V17.7563Z" fill="#FA8232" />
                                                    <path d="M16.2228 14.7869L16.2228 14.7869L16.2239 14.7912L17.5924 20.1717C17.5925 20.1719 17.5925 20.172 17.5926 20.1721C17.5962 20.1867 17.5963 20.196 17.5961 20.2011C17.5958 20.2064 17.5948 20.2107 17.5933 20.2146C17.59 20.2234 17.5828 20.2341 17.5714 20.2427C17.5625 20.2495 17.556 20.2513 17.554 20.2517C17.5525 20.2512 17.5475 20.2495 17.5389 20.2442C17.5387 20.244 17.5386 20.2439 17.5384 20.2438L12.8157 17.2453C12.5721 17.0904 12.2894 17.0081 12.0007 17.0081C11.7122 17.0081 11.4296 17.0903 11.1861 17.2451C11.186 17.2451 11.1859 17.2452 11.1858 17.2453L6.7901 20.0289L6.7887 20.0298C6.7442 20.0581 6.71215 20.0614 6.689 20.0598C6.66102 20.0578 6.6256 20.0464 6.59054 20.0197C6.52203 19.9677 6.48465 19.8855 6.51175 19.7795L6.51206 19.7782L7.77769 14.7907L7.7777 14.7907L7.77866 14.7869C7.8497 14.5006 7.8384 14.2 7.74607 13.9198C7.65395 13.6403 7.4849 13.3924 7.25832 13.2045C7.25781 13.2041 7.2573 13.2037 7.25678 13.2033L3.02174 9.67094L3.02053 9.66993C3.01175 9.66264 3.00804 9.65742 3.00646 9.65492C3.00472 9.65216 3.00323 9.64894 3.00205 9.64449C2.99939 9.63438 2.99846 9.61694 3.00469 9.59679C3.01091 9.57669 3.02014 9.56693 3.02286 9.56463C3.02377 9.56386 3.02407 9.56374 3.02438 9.56361L3.02444 9.56359L3.02444 9.56359C3.02465 9.5635 3.02896 9.56168 3.03971 9.56096C3.03979 9.56096 3.03987 9.56095 3.03995 9.56095L8.56885 9.20485C8.86427 9.18714 9.14822 9.08402 9.38618 8.90799C9.62218 8.73342 9.80284 8.49462 9.90666 8.22021L11.9665 3.03308C11.9692 3.02631 11.9718 3.0195 11.9743 3.01265C11.9763 3.00723 11.9799 3.00254 11.9846 2.99923C11.9893 2.99592 11.995 2.99414 12.0007 2.99414C12.0065 2.99414 12.0121 2.99592 12.0169 2.99923C12.0216 3.00254 12.0252 3.00723 12.0272 3.01265C12.0297 3.0195 12.0322 3.02631 12.0349 3.03308L14.0948 8.22018C14.1986 8.49461 14.3793 8.73342 14.6153 8.90799C14.8532 9.08402 15.1372 9.18714 15.4326 9.20485C15.4335 9.2049 15.4344 9.20495 15.4353 9.20501L20.9615 9.56095C20.9616 9.56095 20.9617 9.56096 20.9617 9.56096C20.9727 9.56169 20.9769 9.56355 20.977 9.56359C20.9774 9.56373 20.9776 9.56381 20.9786 9.56463C20.9813 9.56693 20.9905 9.57669 20.9968 9.59679C21.003 9.61694 21.0021 9.63438 20.9994 9.64449C20.9982 9.64894 20.9967 9.65216 20.995 9.65492C20.9934 9.65742 20.9897 9.66264 20.9809 9.66993L20.9797 9.67094L16.7447 13.2033C16.7442 13.2037 16.7436 13.2041 16.7431 13.2045C16.5166 13.3924 16.3475 13.6403 16.2554 13.9198L16.9677 14.1546L16.2554 13.9198C16.1631 14.2 16.1518 14.5006 16.2228 14.7869Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                </i>
                                            </div>
                                            <p className="text">Customer Rating <span className="count text-gray-700 fw-normal">(934,516)</span></p>
                                        </div>
                                        <div className="rating-graph w-100">
                                            <div className="rating-bar">
                                                <div className="rating-bar__item">
                                                    <div className="star">
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <div className="rating-per" style={{ maxWidth: '63%' }}></div>
                                                    </div>
                                                    <div className="rating-bar-count">
                                                        <h6>63%<span>(94,532)</span></h6>
                                                    </div>
                                                </div>
                                                <div className="rating-bar__item">
                                                    <div className="star">
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        </i>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <div className="rating-per" style={{ maxWidth: '24%' }} ></div>
                                                    </div>
                                                    <div className="rating-bar-count">
                                                        <h6>24%<span>(6,171)</span></h6>
                                                    </div>
                                                </div>
                                                <div className="rating-bar__item">
                                                    <div className="star">
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <div className="rating-per" style={{ maxWidth: '9%' }} ></div>
                                                    </div>
                                                    <div className="rating-bar-count">
                                                        <h6>9%<span>(714)</span></h6>
                                                    </div>
                                                </div>
                                                <div className="rating-bar__item">
                                                    <div className="star">
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                        </svg>
                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <div className="rating-per" style={{ maxWidth: '1%' }} ></div>
                                                    </div>
                                                    <div className="rating-bar-count">
                                                        <h6>1%<span>(152)</span></h6>
                                                    </div>
                                                </div>
                                                <div className="rating-bar__item">
                                                    <div className="star">
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                        <i>
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953L8.28873 12.7757L5.08487 14.8046M5.08414 10.336L5.56453 9.76L5.56352 9.75915C5.76053 9.92251 5.90752 10.1381 5.98763 10.3812C6.06794 10.6249 6.07776 10.8863 6.01597 11.1353L6.01502 11.1392L6.01501 11.1392L5.08487 14.8046M5.08414 10.336L1.90602 7.68517L5.08414 10.336ZM5.08487 14.8046L4.99464 14.8617L4.99332 14.8626L4.99226 14.8633L4.99086 14.8641C4.99061 14.8643 4.99049 14.8644 4.99049 14.8644C4.99049 14.8644 4.99062 14.8643 4.99088 14.8642C4.9912 14.864 4.99171 14.8638 4.9924 14.8635C4.99288 14.8633 4.99344 14.863 4.99409 14.8628C4.99465 14.8626 4.99528 14.8623 4.99597 14.8621C4.99765 14.8615 4.99971 14.8609 5.00214 14.8602C5.01099 14.858 5.02065 14.8572 5.02981 14.8578C5.04745 14.859 5.0554 14.8648 5.05637 14.8655C5.05737 14.8663 5.05992 14.8684 5.06221 14.8745C5.06279 14.8761 5.06326 14.8777 5.06361 14.8793C5.06371 14.8797 5.06381 14.8802 5.06389 14.8806C5.06416 14.8821 5.06432 14.8834 5.06439 14.8847C5.06457 14.8879 5.06393 14.8871 5.06548 14.881L5.06579 14.8798L5.08487 14.8046ZM9.00055 12.5686C8.7487 12.5686 8.50207 12.6403 8.28947 12.7753L5.56207 9.75795L2.65634 7.33436L6.43837 7.09077C6.696 7.07523 6.94361 6.98526 7.15114 6.83174C7.35667 6.6797 7.51411 6.47184 7.60481 6.23297L9.00055 2.71824L10.3963 6.23294C10.487 6.47182 10.6444 6.67969 10.8499 6.83173L11.296 6.22878L10.85 6.83174C11.0575 6.98526 11.3051 7.07523 11.5627 7.09077C11.5637 7.09083 11.5646 7.09088 11.5656 7.09094L15.3448 7.33436L12.439 9.75795C12.4385 9.75837 12.438 9.75879 12.4375 9.75922C12.2405 9.92257 12.0936 10.1381 12.0135 10.3812C11.9332 10.6249 11.9233 10.8863 11.9851 11.1353L11.9851 11.1353L11.9862 11.1396L12.9204 14.8126L9.71236 12.7757C9.71222 12.7756 9.71207 12.7755 9.71193 12.7755C9.49926 12.6403 9.25251 12.5686 9.00055 12.5686Z" stroke="#ADB7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </i>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <div className="rating-per" style={{ maxWidth: '7%' }} ></div>
                                                    </div>
                                                    <div className="rating-bar-count">
                                                        <h6>7%<span>(643)</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-content__feedback">
                                        <div className="comment-block-02">
                                            <h6 className="title">Customer Feedback</h6>
                                            <div className="comment-block-02__wrapper">
                                                <div className="comment-area">
                                                    <div className="comment-area__wrapper">
                                                        <div className="avatar">
                                                            <img src="/image/blog/avatar-1.png" alt="avatar" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="content__doc">
                                                                <h6 className="name">Dianne Russell</h6>
                                                                <span className="dot"></span>
                                                                <p className="time">Just now</p>
                                                            </div>
                                                            <div className="content__rating">
                                                                <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                                </svg>
                                                                </i>
                                                                <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                                </svg>
                                                                </i>
                                                                <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                                </svg>
                                                                </i>
                                                                <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                                </svg>
                                                                </i>
                                                                <i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.30992 13.4086L12.8537 15.6586C13.3107 15.9469 13.8732 15.518 13.7396 14.9906L12.713 10.9547C12.6853 10.8428 12.6897 10.7254 12.7258 10.6159C12.7619 10.5065 12.8281 10.4094 12.917 10.336L16.0951 7.68517C16.5099 7.34064 16.299 6.64455 15.7576 6.60939L11.6091 6.3422C11.496 6.33562 11.3871 6.2962 11.296 6.22878C11.2048 6.16135 11.1353 6.06883 11.0959 5.96252L9.54898 2.0672C9.50804 1.95464 9.43344 1.85739 9.33533 1.78868C9.23721 1.71996 9.12033 1.68311 9.00055 1.68311C8.88076 1.68311 8.76388 1.71996 8.66576 1.78868C8.56765 1.85739 8.49306 1.95464 8.45211 2.0672L6.90523 5.96252C6.86581 6.06883 6.79627 6.16135 6.70512 6.22878C6.61397 6.2962 6.50514 6.33562 6.39195 6.3422L2.24352 6.60939C1.70211 6.64455 1.49117 7.34064 1.90602 7.68517L5.08414 10.336C5.17297 10.4094 5.23924 10.5065 5.27532 10.6159C5.31139 10.7254 5.3158 10.8428 5.28805 10.9547L4.33883 14.6953C4.17711 15.3281 4.85211 15.8414 5.39352 15.4969L8.69117 13.4086C8.78365 13.3498 8.89096 13.3186 9.00055 13.3186C9.11013 13.3186 9.21745 13.3498 9.30992 13.4086Z" fill="#FA8232" />
                                                                </svg>
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}