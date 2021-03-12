import express from "express";
import Faker from "faker";
import Product from "../Interfaces/Product";
import fs from "fs";
import Item from "../Interfaces/Item";
// Generates persistent random product data

// let GenerateFakeProductList = (NumberOfItems = 100) => {
//   let ProductList: Array<Product> = [];
//   for (let i = 0; i < NumberOfItems; i++) {
//     let product: Product = {
//       code: i,
//       cost: Faker.commerce.price(5, 200, 2, '$'),
//       description: Faker.commerce.productDescription(),
//       inventory: Faker.random.number(100),
//       name: `${Faker.commerce.productAdjective()} ${Faker.commerce.productName()}`
//     }
//     ProductList.push(product)
//   }
//   return JSON.stringify({products: ProductList});
// }
// fs.writeFile("product.json", GenerateFakeProductList(100), () => console.log("wrote file"))

// Generates persistent random product detail data
// let GenerateFakeProductDetailAndProductList = (NumberOfItems = 100) => {
//   let ProductDetailList: Array<Item & Product> = [];
//   for (let i = 0; i < NumberOfItems; i++) {
//     let product: Item & Product = {
//       inventory: Faker.random.number(100),
//       callback: "() => console.log('callback')",
//       category: {name: Faker.commerce.productName(), type: Faker.company.bsNoun()},
//       code: i,
//       cost: Faker.commerce.price(),
//       description: Faker.company.bs(),
//       name: Faker.commerce.productName(),
//       productType: {typeName: Faker.company.bsNoun(), type: Faker.company.bsNoun()},
//       pushedProduct: Faker.random.boolean()
//
//     }
//     ProductDetailList.push(product)
//   }
//   return JSON.stringify({productDetails: ProductDetailList});
// }

// Generates persistent random product detail data joined with product data
// let GenerateFakeProductDetailAndProductList = (NumberOfItems = 100) => {
//   let ProductDetailList: Array<Item> = [];
//   let ProductList: Array<Product> = [];
//   for (let i = 0; i < NumberOfItems; i++) {
//     const inventory = Faker.random.number(100);
//     const callback = "() => console.log('callback')";
//     const category = {name: Faker.commerce.productName(), type: Faker.company.bsNoun()};
//     const code = i;
//     const cost = Faker.commerce.price();
//     const description = Faker.company.bs();
//     const name = Faker.commerce.productName();
//     const productType = {typeName: Faker.company.bsNoun(), type: Faker.company.bsNoun()};
//     const pushedProduct = Faker.random.boolean();
//
//     let productDetails: Item = {
//       callback: callback,
//       category: category,
//       code: code,
//       cost: cost,
//       description: description,
//       name: name,
//       productType: productType,
//       pushedProduct: pushedProduct
//     }
//     let product: Product = {
//       code: code,
//       cost: cost,
//       description: description,
//       inventory: inventory,
//       name: name
//     }
//     ProductList.push(product);
//     ProductDetailList.push(productDetails);
//   }
//   return JSON.stringify({productDetails: ProductDetailList, products: ProductList});
// }
//
// fs.writeFile("productUnionDetails.json", GenerateFakeProductDetailAndProductList(100), () => console.log("wrote file"))
const ProductRouter = express.Router();

ProductRouter.get('/', (req, res) => {
  const rawdata = fs.readFileSync("productUnionDetails.json");
  let details = JSON.parse(rawdata.toString())
  res.send({products: details.products})
})

ProductRouter.get('/:id/details', (req, res) => {
  const rawdata = fs.readFileSync("productUnionDetails.json");
  let details = JSON.parse(rawdata.toString())
  res.send({productDetails: details.productDetails[req.params.id]})
})

export default ProductRouter;
