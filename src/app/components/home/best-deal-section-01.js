import Link from "next/link";
import { CounterDown } from "../counteDown";
import WooCommerce from "@/app/service/coreApi";
import Image from "next/image";

async function getProduct() {

  let data = [];
  await WooCommerce.get(`products?per_page=8&orderby=date`, {
    headers: {
        "Cache-Control": "no-cache",
    },
    params: {
        timestamp: Date.now(),
    },
}).then((response) => {
    //console.log(response)
    data = response.data;
  }).catch((error) => { });

  return data
}


export async function BestDealSectionOne() {
  const data = await getProduct();
  function truncate(str) {
    return str.length > 35 ? str.substring(0, 25) + "..." : str;
  }
  return (
    <div className="best-deal-section-01">
      <div className="container">
        <div className="best-deal-section-01__wrapper">
          <div className="best-deal-section-01__top-content">
            <div className="section-content">
              <h2 className="title">Best Deals</h2>
            </div>
            <div className="deals-timer">
              <div className="deals-timer__content">
                <h6 className="title">Deals ends in</h6>
              </div>
              <div className="timer-block" id="countdown-01">
                <CounterDown time={500000000} />
              </div>
            </div>
          </div>
          <div className="best-deal-section-01__top-button">
            <Link className="btn-text" href="/products">Browse All Product
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 10H16.875" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="best-deal-section-01__product-area">


          <div className="best-deal-section-01__product-area--big-product">
            <div className="big-product-card-01">
              <div className="card-image">
                <img src="./image/product/ps5.png" alt="ps5" className="w-100" />
              </div>
              <div className="card-body">
                <ul className="rating">
                  <li>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.34375 13.8985L13.2812 16.3985C13.7891 16.7188 14.4141 16.2422 14.2656 15.6563L13.125 11.1719C13.0942 11.0476 13.0991 10.9171 13.1391 10.7955C13.1792 10.6738 13.2529 10.566 13.3516 10.4844L16.8828 7.53908C17.3437 7.15627 17.1094 6.38283 16.5078 6.34377L11.8984 6.04689C11.7727 6.03958 11.6518 5.99578 11.5505 5.92086C11.4492 5.84594 11.3719 5.74314 11.3281 5.62502L9.60937 1.29689C9.56388 1.17182 9.48099 1.06377 9.37198 0.987422C9.26296 0.911072 9.13309 0.870117 9 0.870117C8.8669 0.870117 8.73703 0.911072 8.62802 0.987422C8.519 1.06377 8.43612 1.17182 8.39062 1.29689L6.67187 5.62502C6.62807 5.74314 6.5508 5.84594 6.44952 5.92086C6.34824 5.99578 6.22733 6.03958 6.10156 6.04689L1.49218 6.34377C0.890622 6.38283 0.656247 7.15627 1.11718 7.53908L4.64843 10.4844C4.74713 10.566 4.82077 10.6738 4.86085 10.7955C4.90094 10.9171 4.90584 11.0476 4.875 11.1719L3.82031 15.3281C3.64062 16.0313 4.39062 16.6016 4.99218 16.2188L8.65625 13.8985C8.759 13.8331 8.87824 13.7984 9 13.7984C9.12176 13.7984 9.241 13.8331 9.34375 13.8985V13.8985Z"
                        fill="#EBC80C" />
                    </svg>
                  </li>
                  <li>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.34375 13.8985L13.2812 16.3985C13.7891 16.7188 14.4141 16.2422 14.2656 15.6563L13.125 11.1719C13.0942 11.0476 13.0991 10.9171 13.1391 10.7955C13.1792 10.6738 13.2529 10.566 13.3516 10.4844L16.8828 7.53908C17.3437 7.15627 17.1094 6.38283 16.5078 6.34377L11.8984 6.04689C11.7727 6.03958 11.6518 5.99578 11.5505 5.92086C11.4492 5.84594 11.3719 5.74314 11.3281 5.62502L9.60937 1.29689C9.56388 1.17182 9.48099 1.06377 9.37198 0.987422C9.26296 0.911072 9.13309 0.870117 9 0.870117C8.8669 0.870117 8.73703 0.911072 8.62802 0.987422C8.519 1.06377 8.43612 1.17182 8.39062 1.29689L6.67187 5.62502C6.62807 5.74314 6.5508 5.84594 6.44952 5.92086C6.34824 5.99578 6.22733 6.03958 6.10156 6.04689L1.49218 6.34377C0.890622 6.38283 0.656247 7.15627 1.11718 7.53908L4.64843 10.4844C4.74713 10.566 4.82077 10.6738 4.86085 10.7955C4.90094 10.9171 4.90584 11.0476 4.875 11.1719L3.82031 15.3281C3.64062 16.0313 4.39062 16.6016 4.99218 16.2188L8.65625 13.8985C8.759 13.8331 8.87824 13.7984 9 13.7984C9.12176 13.7984 9.241 13.8331 9.34375 13.8985V13.8985Z"
                        fill="#EBC80C" />
                    </svg>
                  </li>
                  <li>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.34375 13.8985L13.2812 16.3985C13.7891 16.7188 14.4141 16.2422 14.2656 15.6563L13.125 11.1719C13.0942 11.0476 13.0991 10.9171 13.1391 10.7955C13.1792 10.6738 13.2529 10.566 13.3516 10.4844L16.8828 7.53908C17.3437 7.15627 17.1094 6.38283 16.5078 6.34377L11.8984 6.04689C11.7727 6.03958 11.6518 5.99578 11.5505 5.92086C11.4492 5.84594 11.3719 5.74314 11.3281 5.62502L9.60937 1.29689C9.56388 1.17182 9.48099 1.06377 9.37198 0.987422C9.26296 0.911072 9.13309 0.870117 9 0.870117C8.8669 0.870117 8.73703 0.911072 8.62802 0.987422C8.519 1.06377 8.43612 1.17182 8.39062 1.29689L6.67187 5.62502C6.62807 5.74314 6.5508 5.84594 6.44952 5.92086C6.34824 5.99578 6.22733 6.03958 6.10156 6.04689L1.49218 6.34377C0.890622 6.38283 0.656247 7.15627 1.11718 7.53908L4.64843 10.4844C4.74713 10.566 4.82077 10.6738 4.86085 10.7955C4.90094 10.9171 4.90584 11.0476 4.875 11.1719L3.82031 15.3281C3.64062 16.0313 4.39062 16.6016 4.99218 16.2188L8.65625 13.8985C8.759 13.8331 8.87824 13.7984 9 13.7984C9.12176 13.7984 9.241 13.8331 9.34375 13.8985V13.8985Z"
                        fill="#EBC80C" />
                    </svg>
                  </li>
                  <li>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.34375 13.8985L13.2812 16.3985C13.7891 16.7188 14.4141 16.2422 14.2656 15.6563L13.125 11.1719C13.0942 11.0476 13.0991 10.9171 13.1391 10.7955C13.1792 10.6738 13.2529 10.566 13.3516 10.4844L16.8828 7.53908C17.3437 7.15627 17.1094 6.38283 16.5078 6.34377L11.8984 6.04689C11.7727 6.03958 11.6518 5.99578 11.5505 5.92086C11.4492 5.84594 11.3719 5.74314 11.3281 5.62502L9.60937 1.29689C9.56388 1.17182 9.48099 1.06377 9.37198 0.987422C9.26296 0.911072 9.13309 0.870117 9 0.870117C8.8669 0.870117 8.73703 0.911072 8.62802 0.987422C8.519 1.06377 8.43612 1.17182 8.39062 1.29689L6.67187 5.62502C6.62807 5.74314 6.5508 5.84594 6.44952 5.92086C6.34824 5.99578 6.22733 6.03958 6.10156 6.04689L1.49218 6.34377C0.890622 6.38283 0.656247 7.15627 1.11718 7.53908L4.64843 10.4844C4.74713 10.566 4.82077 10.6738 4.86085 10.7955C4.90094 10.9171 4.90584 11.0476 4.875 11.1719L3.82031 15.3281C3.64062 16.0313 4.39062 16.6016 4.99218 16.2188L8.65625 13.8985C8.759 13.8331 8.87824 13.7984 9 13.7984C9.12176 13.7984 9.241 13.8331 9.34375 13.8985V13.8985Z"
                        fill="#EBC80C" />
                    </svg>
                  </li>
                  <li>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.34375 13.8985L13.2812 16.3985C13.7891 16.7188 14.4141 16.2422 14.2656 15.6563L13.125 11.1719C13.0942 11.0476 13.0991 10.9171 13.1391 10.7955C13.1792 10.6738 13.2529 10.566 13.3516 10.4844L16.8828 7.53908C17.3437 7.15627 17.1094 6.38283 16.5078 6.34377L11.8984 6.04689C11.7727 6.03958 11.6518 5.99578 11.5505 5.92086C11.4492 5.84594 11.3719 5.74314 11.3281 5.62502L9.60937 1.29689C9.56388 1.17182 9.48099 1.06377 9.37198 0.987422C9.26296 0.911072 9.13309 0.870117 9 0.870117C8.8669 0.870117 8.73703 0.911072 8.62802 0.987422C8.519 1.06377 8.43612 1.17182 8.39062 1.29689L6.67187 5.62502C6.62807 5.74314 6.5508 5.84594 6.44952 5.92086C6.34824 5.99578 6.22733 6.03958 6.10156 6.04689L1.49218 6.34377C0.890622 6.38283 0.656247 7.15627 1.11718 7.53908L4.64843 10.4844C4.74713 10.566 4.82077 10.6738 4.86085 10.7955C4.90094 10.9171 4.90584 11.0476 4.875 11.1719L3.82031 15.3281C3.64062 16.0313 4.39062 16.6016 4.99218 16.2188L8.65625 13.8985C8.759 13.8331 8.87824 13.7984 9 13.7984C9.12176 13.7984 9.241 13.8331 9.34375 13.8985V13.8985Z"
                        fill="#EBC80C" />
                    </svg>
                  </li>
                  <li className="text-gray-500">(52,677)</li>
                </ul>
                <h6 className="title">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</h6>
                <span className="price-valu"><del>$2000</del>$1900</span>
                <p className="text">
                  Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
                </p>
              </div>
              <div className="card-button-group">

                <Link href="/product/12" className="btn btn-primary w-100 addtocard-btn text-uppercase">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.75 16.875C7.75 17.1511 7.52614 17.375 7.25 17.375C6.97386 17.375 6.75 17.1511 6.75 16.875C6.75 16.5989 6.97386 16.375 7.25 16.375C7.52614 16.375 7.75 16.5989 7.75 16.875Z"
                      fill="white" stroke="white" strokeWidth="1.5" />
                    <path
                      d="M15.375 18.125C16.0654 18.125 16.625 17.5654 16.625 16.875C16.625 16.1846 16.0654 15.625 15.375 15.625C14.6846 15.625 14.125 16.1846 14.125 16.875C14.125 17.5654 14.6846 18.125 15.375 18.125Z"
                      fill="white" />
                    <path
                      d="M4.30469 5.625H18.3203L16.2578 12.8437C16.1842 13.1057 16.0266 13.3363 15.8093 13.5C15.5919 13.6638 15.3268 13.7516 15.0547 13.75H7.57031C7.29819 13.7516 7.03308 13.6638 6.81572 13.5C6.59836 13.3363 6.44078 13.1057 6.36719 12.8437L3.53906 2.95313C3.50169 2.82246 3.42275 2.70754 3.3142 2.62578C3.20565 2.54401 3.0734 2.49986 2.9375 2.5H1.625"
                      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Add to card
                </Link>

              </div>
              <div className="offer-tag">
                <p className="bg-warning-500 text-gray-900 badge mb-2">5% OFF</p>
                <p className="bg-danger-500 text-white badge">HOT</p>
              </div>
            </div>
          </div>



          <div className="best-deal-section-01__product-area--small-product">

            {
              data.length > 0 && data.map(item => {
                return (

                  <Link href={`/product/${item.id}`} key={item.id} className="card-product card-product--03 d-flex flex-column justify-content-center align-items-center">
                    <div className="card-image product-item">
                      <Image src={item?.images && item?.images[0]?.src} fill alt="card" style={{ objectFit: 'cover' }} />
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
  )
}