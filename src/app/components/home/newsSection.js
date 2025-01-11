import Image from "next/image";

const getLatestPosts = async () => {
    const apiUrl = 'https://back.tradeformix.com/wp-json/wp/v2/posts?per_page=3';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export async function NewsSection() {

    const data = await getLatestPosts();

    return (
        <div className="news-section-01 bg-gray-50">
            <div className="container">
                <div className="news-section-01__title-block">
                    <h2 className="title">Latest News</h2>
                </div>
                <div className="row card-row justify-content-center">
                    {
                        data && data.map(item => {
                            return (
                                <div key={item.id} className="col-xl-4 col-lg-6 col-md-8 col-xs-11">
                                    <div className="card-news">
                                        <div className="card-image">
                                            <a href="#">
                                                <div className="card-image" style={{ width: 350, height: 240, position: 'relative' }}>
                                                    <Image src={item?.jetpack_featured_media_url && item?.jetpack_featured_media_url} fill alt="card" style={{ objectFit: 'cover' }} />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href="#">
                                                <h2 className="title">{item?.title?.rendered}</h2>
                                            </a>
                                            <div className="text" dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />
                                            <a className="btn btn-outline-primary" href="#">
                                                Read more
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}