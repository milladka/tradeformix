import { NextResponse } from 'next/server';
import WooCommerce from '../service/coreApi';

async function getProduct() {

  let data = [];
  await WooCommerce.get(`products?per_page=20`).then((response) => {
    //console.log(response)
    data = response.data;
  }).catch((error) => {
    if (error.response.data.data.status == 404) {
      notFound();
    }
  });

  return data
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tradeformix.com';
  const data = await getProduct();

  const date = new Date();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
        <loc>${baseUrl}</loc>
        <priority>1</priority>
      </url>
      <url>
        <loc>${baseUrl}/products</loc>
        <priority>1</priority>
      </url>
  ${data
      .map(({ id }) => {
        return `
      <url>
        <loc>${baseUrl}/product/${id}</loc>
        <priority>0.8</priority>
      </url>`;
      })
      .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
