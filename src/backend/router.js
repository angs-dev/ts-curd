const express = require('express');
let router = express.Router();
const stores = require('./controllers/serviceController');
const auth = require('./auth/jwt');
const passport = require('passport');

//auth test


router.get("/protected", passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send("YAY! this is a protected Route")
  })
   
    router.get('/auth', auth.auth);
    // Retrieve all stores
    router.get('/stores', passport.authenticate('jwt', { session: false }), stores.fetchAllStore);

    // Retrieve a single store with storeId
    router.get('/stores/:storeId', passport.authenticate('jwt', { session: false }), stores.fetchStoreById);

    // Update a store with storeId
    router.put('/stores/:storeId', passport.authenticate('jwt', { session: false }), stores.updateStore);

    // Retrieve a all store with customerCount and store Name
    router.get('/store/customerCount',passport.authenticate('jwt', { session: false }), stores.fetchStoreCustomerCount);

    // Retrieve a all store with customerDetails
    router.get('/store/customerDetails',passport.authenticate('jwt', { session: false }), stores.fetchStoreBelongCustomerDetails);

     // Create a new customer under one store
    router.post('/createCustomer/:storeId',passport.authenticate('jwt', { session: false }), stores.createCustomer);

    // search store by name auto suggestion
    router.get('/storeSearch/:searchString',passport.authenticate('jwt', { session: false }), stores.searchStore);

module.exports = router;