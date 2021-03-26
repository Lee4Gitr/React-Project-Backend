import express from "express";
import fs from "fs";


const ProductRouter = express.Router();

ProductRouter.get('/', (req, res) => {
  const rawdata = fs.readFileSync("productUnionDetails.json");
  let details = JSON.parse(rawdata.toString())
  res.send({products: details.products})
})

ProductRouter.get('/:id', (req, res) => {
  const rawdata = fs.readFileSync("productUnionDetails.json");
  let details = JSON.parse(rawdata.toString())
  res.send(details.products[req.params.id])
})

ProductRouter.get('/:id/details', (req, res) => {
  const rawdata = fs.readFileSync("productUnionDetails.json");
  let details = JSON.parse(rawdata.toString())
  res.send({productDetails: [details.productDetails[req.params.id]]})
})

ProductRouter.post('/:id/purchase', (req, res) => {

  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    // console.log(JSON.parse(data));
    storeData(JSON.parse(data), "orders.json")
    res.end();
  })

  const storeData = (incomingData: string, path:string) => {
    try {

      fs.readFile('orders.json', function (err, data) {
        const oldData = data.toString();
        const json = JSON.parse(oldData);
        json.push(incomingData)

        fs.writeFile("orders.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
      })

      fs.writeFileSync(path, incomingData)
    } catch (err) {
      console.error(err)
    }
  }

  res.send({message: "Product Purchase Successful!"});

})

export default ProductRouter;
