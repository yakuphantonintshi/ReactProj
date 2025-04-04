const iceCreamData = [
  {
    id: 1,
    name: "Vanilla Dream",
    flavour: "Vanilla",
    image:
      "https://www.moevenpick-icecream.com/sites/default/files/styles/product_packaging/public/products/photos/12896_vanilla-dream-packshot-500ml-2d-facing_0_0.jpeg?itok=Fin6xVxH",
    price: 3.99,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 2,
    name: "Chocolate Overload",
    flavour: "Chocolate",
    image:
      "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13253346_XL1_20240607.jpg",
    price: 4.49,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 3,
    name: "Strawberry Delight",
    flavour: "Strawberry",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/dairy-day-ice-cream-strawberry-delight-box-500-ml-240660508-dnwvq.png",
    price: 4.29,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 4,
    name: "Minty Fresh",
    flavour: "Mint Chocolate Chip",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QkdxATQ469tEKDcDXTWO4IcmGQWd2RlvVw&s",
    price: 4.59,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 5,
    name: "Caramel Swirl",
    flavour: "Caramel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTz23jBeBHJceimmBLViqiHukoApr5gAdNyA&s",
    price: 4.19,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 6,
    name: "Cookies and Cream",
    flavour: "Cookies and Cream",
    image:
      "https://i5.walmartimages.com/seo/Great-Value-Cookies-Cream-Ice-Cream-16-fl-oz_af89b7bf-bc92-401f-8fba-70b4e1ca51c2.cbf24a20a7e4facde8b5f9d5e89a591c.jpeg",
    price: 4.69,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 7,
    name: "Tropical Paradise",
    flavour: "Mango",
    image:
      "https://cdn-prd-02.pnp.co.za/sys-master/images/h9e/h5c/10795461050398/silo-product-image-v2-05Apr2022-180230-6009880657162-Straight_on-18907-5547_400Wx400H",
    price: 4.39,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 8,
    name: "Pistachio Perfection",
    flavour: "Pistachio",
    image:
      "https://assets.woolworthsstatic.co.za/Extremely-Creamy-Italian-Pistachio-Dairy-Ice-Cream-1-L-6009178835104.jpg?V=FwFs&h=600&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIxLTExLTA1LzYwMDkxNzg4MzUxMDRfaGVyby5qcGcifQ&q=85&w=600",
    price: 4.79,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 9,
    name: "Peanut Butter Bliss",
    flavour: "Peanut Butter",
    image:
      "https://images.ctfassets.net/ey6wsek5zeab/4AtCiZJB8Vb3o33qmewkI9/7ca44f7da733ac3d686faa8742846618/CB_RENDERING_PINTS_CHOCOLATE_PEANUT_BUTTER_FRONT_BUTTON.png?w=500&h=500&q=90&fm=webp&fit=pad&f=center",
    price: 4.89,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 10,
    name: "Raspberry Ripple",
    flavour: "Raspberry",
    image:
      "https://ik.imagekit.io/wegetanystock/brandbank/images/5012262011385/1?tr=w-500,h-500",
    price: 4.49,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 11,
    name: "Butter Pecan",
    flavour: "Butter Pecan",
    image: "https://m.media-amazon.com/images/I/51v0NWH3qIL.jpg",
    price: 4.69,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 12,
    name: "Chocolate Chip Cookie Dough",
    flavour: "Chocolate Chip Cookie Dough",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYQZrg5gKBLcITTku48gvvai0HUn6m6MAzA&s",
    price: 4.99,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 13,
    name: "Black Cherry Bliss",
    flavour: "Black Cherry",
    image:
      "https://i.pinimg.com/736x/0a/86/73/0a867343cefe9ebc751294b754bb576f.jpg",
    price: 4.89,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 14,
    name: "Mint Chocolate Chip",
    flavour: "Mint Chocolate Chip",
    image:
      "https://luxecolombo.com/cdn/shop/files/Untitled-design-9_300x300.jpg?v=1707643643",
    price: 4.59,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 15,
    name: "Salted Caramel",
    flavour: "Salted Caramel",
    image:
      "https://cdn-prd-02.pnp.co.za/sys-master/images/ha6/h82/10435628597278/silo-product-image-v2-18Sep2021-180055-3415581114751-up-1804443-275_400Wx400H",
    price: 4.79,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 16,
    name: "Lemon Sorbet",
    flavour: "Lemon Sorbet",
    image:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjM3ZDJlY2FkOTczOTU4M2YwMDU4YThkZDgzYWE1NDRhIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=5095de96b902a937feaf7cafacd299b842482be04616116d8da7c07592973709",
    price: 3.99,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 17,
    name: "Coffee Crunch",
    flavour: "Coffee",
    image:
      "https://i5.walmartimages.com/asr/dbdbe864-bf06-4d3d-b6f7-8e91a869684a.01ef110fd7d0ec49bfd573c5622d42b5.jpeg",
    price: 4.49,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 18,
    name: "Pumpkin Spice",
    flavour: "Pumpkin Spice",
    image:
      "https://images.deliveryhero.io/image/darkstores-jo/Jordan%20Items/JOR-6253808730370.jpg?size=520",
    price: 4.39,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 19,
    name: "Chocolate Fudge Brownie",
    flavour: "Chocolate Fudge",
    image:
      "https://i5.walmartimages.com/seo/Ben-Jerry-s-Chocolate-Fudge-Brownie-Ice-Cream-Kosher-Milk-Cage-Free-Eggs-1-Pint-1-Count_bccfb5ef-721c-4f65-a755-b6d04edb3628.6bc40172f144dff0cad1cfc5944694b0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    price: 4.99,
    button: "View More",
    button2: "Add To Cart",
  },
  {
    id: 20,
    name: "Caramel Macchiato",
    flavour: "Caramel Macchiato",
    image:
      "https://rawabihypermarket.com/uploads/product_images/featured_image/945513.jpg",
    price: 4.69,
    button: "View More",
    button2: "Add To Cart",
  },
];

export default iceCreamData;
