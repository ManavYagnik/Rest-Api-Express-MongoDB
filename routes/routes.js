const express = require('express');
const Model_Products = require('../models/model_products');
const Model_Contacts = require('../models/model_contacts');
const router = express.Router();

//Post Method
router.post('/products/post', async (req, res) => {
    const data = new Model_Products({
        id: req.body.id,
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        photo: req.body.photo
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/products', async (req, res) => {
    try {
        const data = await Model_Products.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
// router.get('/products/:id', async (req, res) => {
//     try {
//         const data = await Model_Products.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })



router.get('/products/:category', async (req, res) => {
    try {
        const data = await Model_Products.find({"category":req.params.category});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})




//Update by ID Method
router.patch('/products/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model_Products.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/products/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model_Products.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//contacts

router.post('/contacts/post', async (req, res) => {
    const data = new Model_Contacts({
       

        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email, 
        city:req.body.city,
        subject:req.body.subject
   
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/contacts', async (req, res) => {
    try {
        const data = await Model_Contacts.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
// router.get('/contacts/:id', async (req, res) => {
//     try {
//         const data = await Model_Contacts.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })



router.get('/contacts/cateogry', async (req, res) => {
    try {
        const data = await Model_Contacts.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})




//Update by ID Method
router.patch('/contacts/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model_Contacts.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/contacts/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model_Contacts.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;