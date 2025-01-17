import WooCommerce from "@/app/service/coreApi";
import Image from "next/image";
import Link from "next/link";

async function getProduct() {
    let data = [];
    await WooCommerce.get(`products?per_page=12`).then((response) => {
        data = response.data;
    }).catch((error) => { });

    return data
}


export async function ProductSectionThree() {
    const data = await getProduct();
    function truncate(str) {
        return str.length > 35 ? str.substring(0, 25) + "..." : str;
    }
    return (
        <div className="products-section-03 mt-5 pt-5">
            <div className="container">
                <div className="row card-row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2 className="title">FLASH SALE TODAY</h2>
                        </div>
                    </div>

                    {

                        data.length > 0 && data.map(item => {
                            return (

                                <div key={item.id} className="col-xl-3 col-md-6">
                                    <Link href={`/product/${item.id}`} key={item.id} className=" d-block single-item">
                                        <div className="card-product card-product--04 ">
                                            <div className="card-image" style={{width:90,height:90, position:'relative'}}>
                                                <Image src={item?.images && item?.images[0]?.src} fill alt="card" style={{ objectFit: 'cover' }}  />
                                            </div>
                                            <div className="card-body p-0">
                                                <h6 className="title">{truncate(item.name)}</h6>
                                                <span className="price">{item.price} $</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                            )
                        })

                    }






                </div>
            </div>
        </div>
    )
}