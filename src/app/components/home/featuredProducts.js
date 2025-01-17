import WooCommerce from "@/app/service/coreApi";
import Image from "next/image";
import Link from "next/link";

async function getProduct() {
    let data = [];
    await WooCommerce.get(`products?per_page=6`).then((response) => {
        data = response.data;
    }).catch((error) => { });

    return data
}

export async function FeaturedProducts() {
    const data = await getProduct();
    function truncate(str) {
        return str.length > 35 ? str.substring(0, 25) + "..." : str;
    }
    return (
        <div className="products-section-01">
            <div className="container">
                <div className="row align-items-stretch">
                    <div className="col-lg-3 ">
                        <div className="products-section-01__add h-100">
                            <div className="add-block-03">
                                <div className="add-block-03__content">
                                    <h6 className="subtitle">COMPUTER & ACCESSORIES</h6>
                                    <h2 className="title">32% Discount</h2>
                                    <p className="text">For all ellectronics products</p>
                                    <div className="content-wrapper">
                                        <p className="text-one">Offers ends in:</p>
                                        <p className="text-two">ENDS OF CHRISTMAS</p>
                                    </div>
                                    <Link className="btn btn-primary" href="/products">
                                        Shop now
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="add-block-03__image d-none d-md-block">
                                    <img src="./image/add/apple-accessories.png" alt="accessories" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 ">
                        <div className="products-section-01__wrappper">
                            <div className="products-section-01__wrappper--content">
                                <div className="section-title">
                                    <h2 className="title">Featured Products</h2>
                                </div>
                                <div className="button-group">
                                    <div className="all-product-button">
                                        <Link className="text-btn" href="/products">Browse All Product
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.125 10H16.875" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#FA8232" strokeWidth="1.5"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContentTwo">
                                <div className="tab-pane fade show active" id="pills-all-2" role="tabpanel"
                                    aria-labelledby="pills-all-2-tab">
                                    <div className="products-section-01__wrappper--product">

 

                                        {

                                            data.length > 0 && data.map(item => {
                                                return (

                                                    <Link href={`/product/${item.id}`} key={item.id} className="card-product card-product--03 ">
                                                        <div className="card-image" style={{ height: '70%', display: 'flex', alignItems: 'center' }}>
                                                            <Image height={195} width={195} src={item?.images && item?.images[0]?.src} layout="intrinsic" alt="card" className="mw-100" />
                                                            <div className="card-hover">
                                                                <div className="view" data-bs-toggle="modal" data-bs-target="#productView">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-body p-0">
                                                            <h6 className="title">{truncate(item.name)}</h6>
                                                            <p className="price-valu">{item.price} $</p>
                                                        </div>
                                                    </Link>
                                                )
                                            })

                                        }

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