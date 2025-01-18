'use client';
import React, { useState, useEffect } from 'react';
import WooCommerce from "@/app/service/coreApi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function fetchProducts(page) {
    let data = [];
    await WooCommerce.get(`products?per_page=20&page=${page}&timestamp: ${Date.now()}`, {
        headers: {
            "Cache-Control": "no-cache",
        }
    }).then((response) => {
        data = response.data;
    }).catch((error) => {
        if (error.response && error.response.data && error.response.data.data.status === 404) {
            notFound();
        }
    });

    return data;
}

async function fetchCategories() {
    let data = [];
    await WooCommerce.get(`products/categories`, {
        headers: {
            "Cache-Control": "no-cache",
        },
        params: {
            timestamp: Date.now(),
        },
    }).then((response) => {
        data = response.data;
    }).catch((error) => { });
    return data;
}

export default function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [isInitialLoading, setIsInitialLoading] = useState(true); // لودینگ اولیه

    useEffect(() => {
        const loadInitialData = async () => {
            setIsInitialLoading(true); // نمایش لودینگ اولیه
            const initialProducts = await fetchProducts(1);
            const cats = await fetchCategories();
            setProducts(initialProducts);
            setCategories(cats);
            setIsInitialLoading(false); // پایان لودینگ اولیه
        };
        loadInitialData();
    }, []);

    const loadMoreProducts = async () => {
        setIsLoading(true);
        const nextPage = currentPage + 1;
        const newProducts = await fetchProducts(nextPage);

        if (newProducts.length > 0) {
            setProducts([...products, ...newProducts]);
            setCurrentPage(nextPage);
        } else {
            setHasMore(false);
        }
        setIsLoading(false);
    };

    function truncate(str) {
        return str.length > 35 ? str.substring(0, 25) + "..." : str;
    }

    if (isInitialLoading) {
        return (
            <div className="text-center my-5 py-5">
                <p>Loading products...</p>
            </div>
        );
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
                                        {categories.length > 0 &&
                                            categories.map((item) => {
                                                if (item.name !== 'Uncategorized') {
                                                    return (
                                                        <li key={item.id}>
                                                            <Link href={`/category/${item.id}`}>
                                                                <span dangerouslySetInnerHTML={{ __html: item.name }} />
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9">
                        <div className="shop-body-01__searchsortbox">
                            <div className="search-box">
                                <form action="#">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search for anything..."
                                        />
                                        <div className="icon">
                                            <svg
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813 3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z"
                                                    stroke="#191C1F"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M14.2031 13.7031L18 17.5"
                                                    stroke="#191C1F"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="shop-body-01__product">
                            {products.length > 0 ? (
                                products.map((item) => (
                                    <Link
                                        href={`/product/${item.id}`}
                                        key={item.id}
                                        className="card-product card-product--03 d-flex flex-column justify-content-center align-items-center"
                                    >
                                        <div
                                            className="card-image"
                                            style={{ width: 200, height: 200, position: 'relative' }}
                                        >
                                            <Image
                                                src={item.images && item.images[0].src}
                                                fill
                                                alt="card"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="card-hover">
                                                <div
                                                    className="view"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productView"
                                                >
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z"
                                                            stroke="white"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                            stroke="white"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <h6 className="title">{truncate(item.name)}</h6>
                                            <p className="price-valu">{item.price} $</p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center">No product in this category</div>
                            )}
                        </div>

                        {hasMore && (
                            <div className="text-center mt-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={loadMoreProducts}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Load More'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
