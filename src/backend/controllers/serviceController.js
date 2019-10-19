

const storeService = require('../service/storeService');
const { CreateResponse } = require('../util/responseFormat');
const winston = require('winston');

    const fetchAllStore = function (req, res) {
    storeService
      .fetchAllStore()
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
 
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
  };

  // fetch by store id controller
  
  const fetchStore = function (req, res) {
   
    const data = req && req.body ? req.body : {};
    
    if(Object.entries(data).length === 0 && data.constructor === Object){
      res.status(404).json({
        errors: {
          global: "Please give storeid or name"
        }
      });
    }else{
      storeService
      .fetchStore(data)
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
 
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
    }
    
  };

  // update store details based on store id

  const updateStore = function (req, res) {
    const storeId = req && req.params && req.params.storeId ? req.params.storeId : '';
    const PostData = req && req.body && req.body ? req.body : '';
    if(Object.entries(data).length === 0 && data.constructor === Object && storeId !== ''){
      res.status(404).json({
        errors: {
          global: "Please give update data and storeid"
        }
      });
    }else{
    storeService
      .updateStore(storeId, PostData)
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
 
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
    }
  };

  // all store with customerCount and store Name

  const fetchStoreCustomerCount = function (req, res) {
    storeService
      .fetchStoreCustomerCount()
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
 
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
  };

  
  // all store with fetchStoreBelongCustomerDetails

  const fetchStoreBelongCustomerDetails = function (req, res) {
    storeService
      .fetchStoreBelongCustomerDetails()
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
 
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
  };

   // all store with customer under one store ...storeid is must

   const createCustomer = function (req, res) {
    const storeId = req && req.body && req.body && req.body.storeId ? req.body.storeId : '';
    const PostData = req && req.body && req.body ? req.body : '';
    if(Object.entries(data).length === 0 && data.constructor === Object && storeId !== ''){
      res.status(404).json({
        errors: {
          global: "Please give create data and storeid"
        }
      });
    }else{
    storeService
      .createCustomer(storeId, PostData)
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
 
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
    }
  };

  // search store my name auto suggestions
   
  const searchStore = function (req, res) {
    const searchString = req && req.params && req.params.searchString ? req.params.searchString : '';
    storeService
      .searchStore(searchString)
      .then(response => {
        res.json(CreateResponse(response));
      })
      .catch(error => {
        winston.error(`${error.status || 500} - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send(CreateResponse(null, [
          {
            code: '400',
            msg: error
          }
        ]));
      });
  };


  module.exports = {
    fetchAllStore,
    fetchStore,
    updateStore,
    fetchStoreCustomerCount,
    fetchStoreBelongCustomerDetails,
    createCustomer,
    searchStore
  }
