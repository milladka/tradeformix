import Link from "next/link";
import { Table } from "../components/cart/table";
import { Totals } from "../components/cart/totals";

export default function Cart() {
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
                            <div className="shopping-card-body__wrapper--button">
                                <Link className="btn btn-1 btn-outline-secondary" href="/products">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.875 10H3.125" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Return to Shop
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Totals />
                    </div>
                </div>
            </div>
        </div>
    )
}