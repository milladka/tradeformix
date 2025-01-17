import WooCommerce from "@/app/service/coreApi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Trade For Mix | All Products",
    description: "Trade For Mix lets you unlock top brands bestselling electronics, clothing, homewares, toys, sporting equipment, auto parts and more so you can live better ...",
};

async function getProduct() {
    let data = [];
    await WooCommerce.get(`products?per_page=20`).then((response) => {
        //console.log(response)
        data = response.data;
    }).catch((error) => {
        if (error.response.data.data.status == 404) {
            notFound();
        }
    });

    return data
}

async function getCategory() {
    let data = [];
    await WooCommerce.get(`products/categories`).then((response) => {
        data = response.data;
    }).catch((error) => { });
    return data
}


export default async function Products() {
    const data = await getProduct();
    const cats = await getCategory();

    function truncate(str) {
        return str.length > 35 ? str.substring(0, 25) + "..." : str;
    }

    return (
        <div className="shop-body-01">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="shop-body-01__filter d-none d-xl-block">
                            <div className="shop-body-01__filter--catagory">
                                <div className="category-block-01">
                                    <h6 className="title">Category</h6>
                                    <ul className="footer-list-group">
                                        {
                                            cats.length > 0 && cats.map(item => {
                                                if (item.name !== 'Uncategorized') {

                                                    return (
                                                        <li key={item.id} >
                                                            <Link href={`/category/${item.id}`} >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                    </ul>

                                </div>
                            </div>

                            <div className="shop-body-01__filter--line"></div>

                        </div>

                        <div className="shop-body-01__offcanvas offcanvas-01 d-block d-xl-none">
                            <a className="offcanvas-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                </svg> Filter
                            </a>
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="shop-body-01__filter">
                                        <div className="shop-body-01__filter--catagory">
                                            <div className="category-block-01">
                                                <h6 className="title">Category</h6>
                                                {
                                                    cats.length > 0 && cats.map(item => {
                                                        if (item.name !== 'Uncategorized') {

                                                            return (
                                                                <li key={item.id} >
                                                                    <Link href={`/category/${item.id}`} >
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="shop-body-01__filter--line"></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9">
                        <div className="shop-body-01__searchsortbox">
                            <div className="search-box">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search for anything..." />
                                        <div className="icon">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813 3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M14.2031 13.7031L18 17.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sort-box">
                                <p>Sort by:</p>
                                <div className="selectbox">
                                    <select className="nice-select">
                                        <option data-display="Most Popular">Most Popular</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="shop-body-01__product">
                            {
                                data.length > 0 ? data.map(item => {
                                    return (

                                        <Link href={`/product/${item.id}`} key={item.id} className="card-product card-product--03 d-flex flex-column justify-content-center align-items-center">
                                            <div className="card-image" style={{ width: 200, height: 200, position: 'relative' }}>
                                                <Image  src={item.images && item.images[0].src} fill alt="card" style={{ objectFit: 'cover' }} />
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
                                    :
                                    <div className="text-center">No product in this category</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}