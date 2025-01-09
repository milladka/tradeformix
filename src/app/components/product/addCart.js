
"use client"
import useCartStore from "@/app/store/cartStore";
import { redirect } from "next/navigation";
import { useState } from "react";

export function AddCart({ data }) {
    const [qty, setQty] = useState(1);

    const decrease = () => {
        if (qty == 1) {
            setQty(1)
        } else {
            setQty(qty - 1)
        }
    }

    const addToCart = useCartStore((state) => state.addToCart);

    const addToCartFunc = () => {
        
        var product = {
            id: data.id,
            product_id: data.id,
            quantity: qty,
            name: data.name,
            price: data.price
        };

        addToCart(product);
        redirect('/cart')
    }

    return (

        <div className="slider-content__button-group">
            <div className="product-quantity-count">
                <button onClick={() => decrease()} className="button-count quantity-decrease">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <input defaultValue={qty} readOnly type="number" className="number-product quantity-one" />
                <button onClick={() => setQty(qty + 1)} className="button-count quantity-increase">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2.5V13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="product-add-button">
                <button onClick={() => addToCartFunc()} className="btn btn-primary" href="#">Add to card<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 20.25C8.75 20.6642 8.41421 21 8 21C7.58579 21 7.25 20.6642 7.25 20.25C7.25 19.8358 7.58579 19.5 8 19.5C8.41421 19.5 8.75 19.8358 8.75 20.25Z" fill="white" stroke="white" strokeWidth="1.5" />
                    <path d="M18.5 20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25C17 19.8358 17.3358 19.5 17.75 19.5C18.1642 19.5 18.5 19.8358 18.5 20.25Z" fill="white" stroke="white" strokeWidth="1.5" />
                    <path d="M4.46562 6.75H21.2844L18.8094 15.4125C18.7211 15.7269 18.532 16.0036 18.2711 16.2C18.0103 16.3965 17.6922 16.5019 17.3656 16.5H8.38437C8.05783 16.5019 7.7397 16.3965 7.47886 16.2C7.21803 16.0036 7.02893 15.7269 6.94062 15.4125L3.54688 3.54375C3.50203 3.38696 3.4073 3.24905 3.27704 3.15093C3.14677 3.05282 2.98808 2.99983 2.825 3H1.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
            </div>
        </div>
    )
}