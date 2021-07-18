const itemList = [
    {
        id: 1,
        img:"https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
        title: 'painting 1',
        description: 'description 1',
        price: '$100',
        section: 'art'
    },
    {
        id: 2,
        img:"https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
        title: 'painting 2',
        description: 'description 2',
        price: '$200',
        section: 'art'
    },
    {
        id: 3,
        img:"https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
        title: 'painting 3',
        description: 'description 3',
        price: '$300',
        section: 'art'
    },
    {
        id: 4,
        img:"https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
        title: 'painting 4',
        description: 'description 4',
        price: '$400',
        section: 'art'
    },
    {
        id: 5,
        img:"https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
        title: 'painting 5',
        description: 'description 5',
        price: '$500',
        section: 'art'
    },
    {
        id: 6,
        img:"https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
        title: 'painting 6',
        description: 'description 6',
        price: '$600',
        section: 'art'
    },
    {
        id: 7,
        img:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
        title: 'shirt 1',
        description: 'description 1',
        price: '$100',
        section: 'clothes'
    },
    {
        id: 8,
        img:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
        title: 'shirt 2',
        description: 'description 2',
        price: '$200',
        section: 'clothes'
    },
    {
        id: 9,
        img:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
        title: 'shirt 3',
        description: 'description 3',
        price: '$300',
        section: 'clothes'
    },
    {
        id: 10,
        img:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
        title: 'shirt 4',
        description: 'description 4',
        price: '$400',
        section: 'clothes'
    },
    {
        id: 11,
        img:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
        title: 'shirt 5',
        description: 'description 5',
        price: '$500',
        section: 'clothes'
    },
    {
        id: 12,
        img:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
        title: 'shirt 6',
        description: 'description 6',
        price: '$600',
        section: 'clothes'
    },
    {
        id: 13,
        img:"https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_1400x.jpg?v=1614976781",
        title: 'sofa 1',
        description: 'description 1',
        price: '$100',
        section: 'home'
    },
    {
        id: 14,
        img:"https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_1400x.jpg?v=1614976781",
        title: 'sofa 2',
        description: 'description 2',
        price: '$200',
        section: 'home'
    },
    {
        id: 15,
        img:"https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_1400x.jpg?v=1614976781",
        title: 'sofa 3',
        description: 'description 3',
        price: '$300',
        section: 'home'
    },
    {
        id: 16,
        img:"https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_1400x.jpg?v=1614976781",
        title: 'sofa 4',
        description: 'description 4',
        price: '$400',
        section: 'home'
    },
    {
        id: 17,
        img:"https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_1400x.jpg?v=1614976781",
        title: 'sofa 5',
        description: 'description 5',
        price: '$500',
        section: 'home'
    },
    {
        id: 18,
        img:"https://cdn.shopify.com/s/files/1/2660/5202/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_1400x.jpg?v=1614976781",
        title: 'sofa 6',
        description: 'description 6',
        price: '$600',
        section: 'home'
    },
    {
        id: 19,
        img:"https://cdn.webshopapp.com/shops/274523/files/254944862/650x650x1/mens-bracelet-with-stainless-steel-anchor-clasp-an.jpg",
        title: 'bracelet 1',
        description: 'description 1',
        price: '$100',
        section: 'jewellery'
    },
    {
        id: 20,
        img:"https://cdn.webshopapp.com/shops/274523/files/254944862/650x650x1/mens-bracelet-with-stainless-steel-anchor-clasp-an.jpg",
        title: 'bracelet 2',
        description: 'description 2',
        price: '$200',
        section: 'jewellery'
    },
    {
        id: 21,
        img:"https://cdn.webshopapp.com/shops/274523/files/254944862/650x650x1/mens-bracelet-with-stainless-steel-anchor-clasp-an.jpg",
        title: 'bracelet 3',
        description: 'description 3',
        price: '$300',
        section: 'jewellery'
    },
    {
        id: 22,
        img:"https://cdn.webshopapp.com/shops/274523/files/254944862/650x650x1/mens-bracelet-with-stainless-steel-anchor-clasp-an.jpg",
        title: 'bracelet 4',
        description: 'description 4',
        price: '$400',
        section: 'jewellery'
    },
    {
        id: 23,
        img:"https://cdn.webshopapp.com/shops/274523/files/254944862/650x650x1/mens-bracelet-with-stainless-steel-anchor-clasp-an.jpg",
        title: 'bracelet 5',
        description: 'description 5',
        price: '$500',
        section: 'jewellery'
    },
    {
        id: 24,
        img:"https://cdn.webshopapp.com/shops/274523/files/254944862/650x650x1/mens-bracelet-with-stainless-steel-anchor-clasp-an.jpg",
        title: 'bracelet 6',
        description: 'description 6',
        price: '$600',
        section: 'jewellery'
    },
    {
        id: 25,
        img:"https://e7.pngegg.com/pngimages/15/821/png-clipart-red-toy-car-kids-toys-toy-car.png",
        title: 'toy 1',
        description: 'description 1',
        price: '$100',
        section: 'toy'
    },
    {
        id: 26,
        img:"https://e7.pngegg.com/pngimages/15/821/png-clipart-red-toy-car-kids-toys-toy-car.png",
        title: 'toy 2',
        description: 'description 2',
        price: '$200',
        section: 'toy'
    },
    {
        id: 27,
        img:"https://e7.pngegg.com/pngimages/15/821/png-clipart-red-toy-car-kids-toys-toy-car.png",
        title: 'toy 3',
        description: 'description 3',
        price: '$300',
        section: 'toy'
    },
    {
        id: 28,
        img:"https://e7.pngegg.com/pngimages/15/821/png-clipart-red-toy-car-kids-toys-toy-car.png",
        title: 'toy 4',
        description: 'description 4',
        price: '$400',
        section: 'toy'
    },
    {
        id: 29,
        img:"https://e7.pngegg.com/pngimages/15/821/png-clipart-red-toy-car-kids-toys-toy-car.png",
        title: 'toy 5',
        description: 'description 5',
        price: '$500',
        section: 'toy'
    },
    {
        id: 30,
        img:"https://e7.pngegg.com/pngimages/15/821/png-clipart-red-toy-car-kids-toys-toy-car.png",
        title: 'toy 6',
        description: 'description 6',
        price: '$600',
        section: 'toy'
    }
]

    

export default itemList
