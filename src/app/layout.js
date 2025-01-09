import Script from 'next/script'
import "./globals.css";
import { Header } from './components/header';
import { Footer } from './components/footer';
import WooCommerce from './service/coreApi';

export const metadata = {
  title: "Trade For Mix",
  description: "Trade For Mix lets you unlock top brands bestselling electronics, clothing, homewares, toys, sporting equipment, auto parts and more so you can live better ...",
};

async function getCategory() {
  let data = [];
  await WooCommerce.get(`products/categories`).then((response) => {
    data = response.data;
  }).catch((error) => { });
  return data
}

export default async function RootLayout({ children }) {
  const data = await getCategory();
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="/assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/assets/css/all.min.css" />
          <link rel="stylesheet" href="/assets/css/aos.min.css" />
          <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
          <link rel="stylesheet" href="/assets/css/slick.css" />
          <link rel="stylesheet" href="/assets/css/main.css" />
        </head>
        <body>
          <div className="site-wrapper overflow-hidden">
            <Header data={data} />
            <main>
              {children}
            </main>
            <Footer data={data} />
          </div>
          <Script src="/assets/js/vendor.min.js" />
          <Script src="/assets/js/script.js" />
          <Script src="/assets/js/custom.js" />

          <Script src="/assets/js/jquery.nice-select.min.js" />
          <Script src="/assets/js/aos.min.js" />
          <Script src="/assets/js/jquery.counterup.min.js" />
          <Script src="/assets/js/waypoints.min.js" />
          <Script src="/assets/js/slick.min.js" />
          <Script src="/assets/js/jquery.countdown.min.js" />

        </body>
      </html>
    </>
  );
}
