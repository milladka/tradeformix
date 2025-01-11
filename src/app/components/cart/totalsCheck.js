'use client';
import useCartStore from "@/app/store/cartStore";
import Link from "next/link";

export function TotalsCheck() {
    const { cart } = useCartStore();

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const fivePercent = total * 0.05;
    const tax = total * 0.1;
    const roundedNumber = (num) => Number(num.toFixed(2));

    return (
        <div className="shopping-card-body__card-total">
            <div className="card-total-block">
                <h6 className="title">Card Totals</h6>
                <ul className="subtotal-list">
                    <li><span className="text">Sub-total</span><span className="ammount">{roundedNumber(total)} $</span></li>
                    <li><span className="text">Shipping</span><span className="ammount">{roundedNumber(fivePercent)} $</span></li>
                    <li><span className="text">Tax</span><span className="ammount">{roundedNumber(tax)} $</span></li>
                    <li className="line"></li>
                    <li><span className="total-text">Total</span><span className="total-ammount">${roundedNumber((total + fivePercent + tax))} USD</span></li>
                </ul>
                
            </div>
        </div>
    )
}