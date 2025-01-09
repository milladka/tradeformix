'use client';
import useCartStore from "@/app/store/cartStore";

export function Table() {
    const { cart, removeFromCart } = useCartStore();

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th className="text-center" scope="col">Sub-Total</th>
                </tr>
            </thead>
            <tbody>

                {
                    cart.length > 0 ?

                        cart.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className="products" data-label="Products">
                                        <span className="product-wrapper">
                                            <button onClick={() => removeFromCart(item.id)} className="close-btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                        stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10" />
                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <span className="text">{item.name}</span>
                                        </span>
                                    </td>
                                    <td className="price" data-label="Price">
                                        <span className="price-wraper">
                                            <span className="main-price text-14 text-gray-900">{item.price} $</span>
                                        </span>
                                    </td>
                                    <td data-label="Quantity">
                                        <div className="text-center">
                                            {item.quantity}
                                        </div>
                                    </td>
                                    <td className="sub-total text-center fw-bold" data-label="Sub-Total">
                                        {(item.quantity * item.price)} $
                                    </td>
                                </tr>
                            )
                        })

                        :

                        <tr>
                            <td colSpan={4} className="p-2 text-center">No Product in Cart</td>
                        </tr>
                }

            </tbody>
        </table>
    )
}