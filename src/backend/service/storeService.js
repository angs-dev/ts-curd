const connect  = require('../db');
var _ = require('lodash');
const client = connect.getConnection();

client.connect();

//const store = require('../models').store;

const fetchAllStore = function () {
     return new Promise((resolve, reject) => {
        client.query('SELECT * FROM store', function (err, result) {
            if (err) {
                reject(err);
               
            }
            // let getDetails = result.map((obj) => {
            //     return { ID: obj.ID, Name: obj.Name }
            //   });
            resolve(result); 
        });
    });
        
    };

// fetch store by id
const fetchStore = function (data) {
    return new Promise((resolve, reject) => {
        let query = '';
        if(data.selectValue === 'NAME'){
           query = `SELECT * FROM store where Name like '%${data.storeId}%'  order by Name limit 5`;
        
        }else{
             query = `SELECT * FROM store where ID = ${data.storeId}`;
        }
        console.log('@@@@@@@@@@@@@', query);
            client.query(query, function (err, result) {
                if (err) {
                    reject(err); 
                }
                resolve(result); 
            });
        
       
    });  
    };
// update store using id 

const updateStore = function (storeId, PostData) {
    return new Promise((resolve, reject) => {
        const query = `update store set Name='${PostData.Name}' ,Domain ='${PostData.Domain}', status ='${PostData.Status}', Street= '${PostData.Street}', State='${PostData.State}'  where ID = ${storeId}`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result); 
        });
    });
        
    };

// update store using id 

const fetchStoreCustomerCount = function () {
    return new Promise((resolve, reject) => { 

        const query = `select store.ID ,store.Name, count(customer.StoreId) as customercount from store
        join customer on (store.ID = customer.StoreId)
        group by store.ID,customer.StoreId, store.Name order by store.ID ;`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result); 
        });
    });
        
    };

    
// fetch customer detail under all store 

const fetchStoreBelongCustomerDetails = function () {
    return new Promise((resolve, reject) => {
        const query = `select store.Name, customer.Firstname,customer.Lastname, customer.Email  from store
        join customer on (store.ID = customer.StoreId) order by store.ID limit 100;`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            //const getCustomerDetails = _.mapValues(_.groupBy(result, 'Name'));
            resolve(result); 
        });
    });
        
    };

// create a new customer under store
const createCustomer = function (storeId, PostData) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO customer(
             StoreId, Firstname, Lastname, Phone, Email)
            VALUES (${storeId}, '${PostData.firstName}', '${PostData.lastName}','${PostData.phone}', '${PostData.emailId}'); `;
            client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result); 
        });
    });
        
    };

    // search store my name like auto suggestion return top 5 records;

const searchStore = function (searchString) {
    return new Promise((resolve, reject) => {
        console.log();
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result); 
        });
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