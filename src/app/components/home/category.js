import WooCommerce from "@/app/service/coreApi";
import Link from "next/link";

async function getCategory() {
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
    }).catch((error) => {

    });

    return data

}

export async function CategorySection() {
    const data = await getCategory();
    return (
        <div className="shop-category-section-01">
            <div className="container">
                <div className="section-title-block text-center">
                    <h2 className="title">Shop with Categories</h2>
                </div>
                <div className="shop-category-section-01__slider">
                    <div className="product-slider-02 row align-items-center justify-content-center">
                        {
                            data.length > 0 && data.map(item => {
                                if (item.name !== 'Uncategorized') {

                                    return (
                                        <Link key={item.id} href={`/category/${item.id}`} className="single-item col-12 col-lg-4 mb-3">
                                            <div className="card-product card-product--02 ">
                                                {/* <div className="card-image ">
                                                    <img src={item.image?.src} alt={item.image?.alt} className="mw-100" />
                                                </div> */}
                                                <div className="card-body p-0">
                                                    <h6 className="title" dangerouslySetInnerHTML={{ __html: item.name }} />
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}