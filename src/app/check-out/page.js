"use client"
import Link from "next/link";
import { Table } from "../components/cart/table";
import { Totals } from "../components/cart/totals";
import { useState } from "react";
import { TotalsCheck } from "../components/cart/totalsCheck";
import useCartStore from "../store/cartStore";
import WooCommerce from "../service/coreApi";
import { redirect } from "next/navigation";
import { toast } from 'react-toastify';
import Image from "next/image";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

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
        toast.success('Register Order Succesfully')
        redirect('/')
        // const data = {
        //     payment_method: "bacs",
        //     payment_method_title: "PayPal",
        //     set_paid: true,
        //     billing: {
        //         first_name: firstname,
        //         last_name: lastname,
        //         address_1: address,
        //         address_2: "",
        //         city: City,
        //         state: state,
        //         postcode: postalCode,
        //         country: "US",
        //         email: email,
        //         phone: phoneNumber
        //     },
        //     shipping: {
        //         first_name: firstname,
        //         last_name: lastname,
        //         address_1: address,
        //         address_2: "",
        //         city: City,
        //         state: "CA",
        //         postcode: postalCode,
        //         country: "US"
        //     },
        //     line_items: cart
        //     ,
        //     shipping_lines: [
        //         {
        //             method_id: "flat_rate",
        //             method_title: "Flat Rate",
        //             total: "10.00"
        //         }
        //     ]
        // };
        // WooCommerce.post("orders", data)
        //     .then((response) => {
        //         alert('Order Registred')
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //     });
    }

    const initialOptions = {
        clientId: "AWOosajxOHihhZesZqXw94BGq3hlqFmSHJg7DbFApe_ZeraTF9eey-I_ExbsH3jtmI5kdv-3J9GiuUUX",
        // Add other options as needed
    };
    const styles = {
        shape: "rect",
        layout: "vertical",
    };

    return (
        <div className="shopping-card-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="shopping-card-body__wrapper border rounded p-2">
                            <h6 className="title">Shopping Card</h6>
                            <div className="shopping-card-body__wrapper--table">
                                <Table checkout />
                            </div>
                            <div className="shopping-card-body__wrapper billing-info-block mt-3">
                                <h6 className="p-2">Billing and Shipping Information</h6>
                                <div className="billing-info-block__form p-2">
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
                                                                <CountryDropdown
                                                                    value={Country}
                                                                    className="nice-select"
                                                                    onChange={(val) => setCountry(val)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label className="form-label">Region/State</label>
                                                            <div className="selectbox">
                                                                <RegionDropdown
                                                                    country={Country}
                                                                    value={state}
                                                                    className="nice-select"
                                                                    onChange={(val) => setState(val)}
                                                                />
                                                            </div>
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
                            <div className="shopping-card-body__wrapper billing-info-block border rounded p-2">
                                <div className="d-flex align-items-center justify-content-start rounded mb-2" style={{ minHeight: 60, backgroundColor: '#efefef' }}>
                                    <div className="mx-2 fw-bold">Check out with</div>
                                    <div className="card-image" style={{ width: 120, height: 30, position: 'relative', maxHeight: '100%' }}>
                                        <Image alt="paypal" src={'/image/paypal.png'} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <div className="p-2 " style={{ backgroundColor: '#faf8f5' }}></div>
                                <PayPalScriptProvider options={initialOptions}>
                                    <PayPalButtons style={styles} />
                                </PayPalScriptProvider>

                                {/* <button onClick={() => saveOrder()} className=" btn btn-primary w-100">
                                            Proceed Order <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button> */}
                            </div>
                            <div className="mt-5">
                                <div className="border rounded" style={{ padding: "15px", backgroundColor: "#f9f9f9", marginBottom: "20px",fontSize:12 }}>
                                    <ul style={{ lineHeight: "1.8", color: "#555" }}>
                                        <li>
                                            <strong>Review Your Information:</strong> Please double-check all entered details, including shipping address, contact number, and billing information, before finalizing your order. Any errors may cause delays in processing or delivery.
                                        </li>
                                        <li>
                                            <strong>Secure Payments:</strong> All transactions are securely processed. Your card details are encrypted and never stored on our system.
                                        </li>
                                        <li>
                                            <strong>Account Balance:</strong> Ensure you have sufficient balance or credit limit to complete the transaction successfully.
                                        </li>
                                        <li>
                                            <strong>Order Confirmation Email:</strong> Once your payment is completed, you will receive a confirmation email with your order details. If you do not receive this email, check your Spam or Promotions folder.
                                        </li>
                                        <li>
                                            <strong>Order Processing & Shipping:</strong> The processing and shipping time for your order starts once your payment is received. Shipping times are mentioned on the product page.
                                        </li>
                                        <li>
                                            <strong>Order Cancellation:</strong> You may cancel your order only before it enters the processing stage. Once the order is prepared or shipped, cancellation will not be possible.
                                        </li>
                                        <li>
                                            <strong>Return Policy:</strong> All returns and refunds are subject to our return and refund policy. Please review the policy before placing your order.
                                        </li>
                                        <li>
                                            <strong>Payment Receipt:</strong> A digital receipt will be sent to your email after the payment is processed. If needed, you can download a printable version from your account.
                                        </li>
                                    </ul>
                                    <p style={{ marginTop: "15px", color: "#777" }}>
                                        By placing an order on this website, you agree to all the terms and conditions of the store. We recommend reviewing these terms before making your payment.
                                    </p>
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