"use client"
import Link from "next/link";
import { Table } from "../components/cart/table";
import { Totals } from "../components/cart/totals";
import { useState } from "react";
import { TotalsCheck } from "../components/cart/totalsCheck";
import useCartStore from "../store/cartStore";
import WooCommerce from "../service/coreApi";

export default function Checkout() {
    const { cart } = useCartStore();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [City, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Country, setCountry] = useState('');

    const saveOrder = () => {
        const data = {
            payment_method: "bacs",
            payment_method_title: "PayPal",
            set_paid: true,
            billing: {
                first_name: firstname,
                last_name: lastname,
                address_1: address,
                address_2: "",
                city: City,
                state: state,
                postcode: postalCode,
                country: "US",
                email: email,
                phone: phoneNumber
            },
            shipping: {
                first_name: firstname,
                last_name: lastname,
                address_1: address,
                address_2: "",
                city: City,
                state: "CA",
                postcode: postalCode,
                country: "US"
            },
            line_items: cart
            ,
            shipping_lines: [
                {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: "10.00"
                }
            ]
        };
        WooCommerce.post("orders", data)
            .then((response) => {
                alert('Order Registred')
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    return (
        <div className="shopping-card-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="shopping-card-body__wrapper">
                            <h6 className="title">Shopping Card</h6>
                            <div className="shopping-card-body__wrapper--table">
                                <Table />
                            </div>
                            <div className="shopping-card-body__wrapper billing-info-block">
                                <h6 className="title">Billing Information</h6>
                                <div className="billing-info-block__form">
                                    <form action="#" method="get">
                                        <div className="row gx-3">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="form-label">Customer</label>
                                                    <div className="row gx-3">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="first-name" placeholder="First name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="last-name" placeholder="Last name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Address</label>
                                                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Address" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label className="form-label">Country</label>
                                                            <div className="selectbox">
                                                                <select value={Country} onChange={(e) => setCountry(e.target.value)} className="nice-select">
                                                                    <option data-display="Select...">Select...</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Germany">Germany</option>
                                                                    <option value="India">India</option>
                                                                    <option value="Nepal">Nepal</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label className="form-label">Region/State</label>
                                                            <input value={state} onChange={(e) => setState(e.target.value)} type="text" className="form-control" placeholder="Region/State" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label className="form-label">City</label>
                                                            <input value={City} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder="City" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="zipcode" className="form-label">Postal code</label>
                                                            <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="text" id="zipcode" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email" className="form-label">Email</label>
                                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="phonenum" className="form-label">Phone Number</label>
                                                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" id="phonenum" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="shopping-card-body__wrapper billing-info-block">
                                <h6 className="title">PayPal</h6>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label">Cart Number</label>
                                            <input type="text" className="form-control" placeholder="cart number" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label">Date Expire</label>
                                            <input type="text" className="form-control" placeholder="Date Expire" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label">CVV</label>
                                            <input type="text" className="form-control" placeholder="C" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={() => saveOrder()} className=" btn btn-primary w-100">
                                            Proceed Order <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                    <div className="col-lg-4">
                        <TotalsCheck />
                    </div>
                </div >
            </div >
        </div >
    )
}