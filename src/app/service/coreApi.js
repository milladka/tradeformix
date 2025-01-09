import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: "https://back.tradeformix.com", 
  consumerKey: "ck_46ecc89c14fb4b933c42113431d4afdc45804c77",
  consumerSecret: "cs_395c1bd10dc1b773cee98e872aef6ad1eaeee108",
  version: "wc/v3" 
});

export default WooCommerce;