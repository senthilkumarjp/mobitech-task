const ProductModel = require("../models/ProductModel");

const router = require("express").Router();

router.post('/add',(req,res)=>{
const nameValidate = req.body.name;
const brandValidate = req.body.brand;
    if(nameValidate.length >20){
        res.status(400).json({messsage:"name must be 20 or less"})
    }else if(brandValidate.length >=20){
        res.status(400).json({message:"brand must be 20 or less"})
    }
    else{

    const addproduct = new ProductModel({
        name:req.body.name,
        description:req.body.description,
        brand:req.body.brand,
        offers:req.body.offers,
        price:req.body.price
    })

    addproduct.save((err, product) => {
        if (err) {
          res.status(400).json({message:err})
        }

          res.status(200).json({message:"added successfully!",addproduct})

        // res.json(product);
      });
    }

})

router.get('/get' , async(req,res)=>{
    const data = await ProductModel.find()
    res.status(200).json({data})
})

router.put('/update/:id',async(req,res)=>{

    ProductModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
                name:req.body.name,
                description:req.body.description,
                brand:req.body.brand,
                offers:req.body.offers,
                price:req.body.price
          },
        },
        { new: true },
        (err, data) => {
          if (err) {
            res.status(400).json({message:err})
          } else res.status(200).json(data);
        }
      );
})
router.delete('/:id',async(req,res)=>{
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json('deleted success!')
})

module.exports = router;