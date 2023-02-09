export default {
    titleTemplate: '%s | HydroStore',
    defaultTitle: 'shopify | HydroStore',
    description:"shopify最新FW「Hydrogen」を使用したECサイト構築ができるのはHydroStoreだけ。初期費用0円、月々15,000円〜あなたのネットショップを今すぐオープンしよう",
    openGraph: {
      url: 'https://hydrostore.vercel.app/',
      type: 'website',
      locale: 'ja_JP',
      site_name: 'HydroStore',
      images: [
        {
          url: "/hydrostore_logo1.svg",
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
          type: 'image/jpeg',
        },
       ],
    },
    twitter: {
    //   handle: '@hogehoge',
    //   site: '@fugafuga',
      cardType: 'summary_large_image',
    },
};