const connect  = require('../db');
var _ = require('lodash');

const client = connect.getConnection();

client.connect();

const fetchAllStore = function () {
    return new Promise((resolve, reject) => {
        client.query('SELECT * FROM store', function (err, result) {
            if (err) {
                reject(err); 
            }
            let getDetails = result.rows.map((obj) => {
                return { ID: obj.id, Name: obj.name }
              });
            resolve(getDetails); 
        });
    });
        
    };

// fetch store by id
const fetchStoreById = function (storeId) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM store where id = ${storeId}`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result.rows); 
        });
    });
        
    };
// update store using id 

const updateStore = function (storeId, PostData) {
    return new Promise((resolve, reject) => {
        const query = `update store set name='${PostData.name}' ,domain ='${PostData.domain}', status ='${PostData.status}', street= '${PostData.street}', state='${PostData.state}'  where id = ${storeId}`;
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
        const query = `select store.id ,store.name, count(customer.storeId) as customercount from store
        join customer on (store.id = customer.storeId)
        group by store.id,customer.storeId, store.name order by store.id ;`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result.rows); 
        });
    });
        
    };

    
// fetch customer detail under all store 

const fetchStoreBelongCustomerDetails = function () {
    return new Promise((resolve, reject) => {
        const query = `select store.name, customer.firstname,customer.lastname, customer.email  from store
        join customer on (store.id = customer.storeId) order by store.id;`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            const getCustomerDetails = _.mapValues(_.groupBy(result.rows, 'name'));
            resolve(getCustomerDetails); 
        });
    });
        
    };

// create a new customer under store
const createCustomer = function (storeId, PostData) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO customer(
             storeid, firstname, lastname, phone, email)
            VALUES (${storeId}, '${PostData.firstname}', '${PostData.lastname}','${PostData.phone}', '${PostData.email}'); `;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(query); 
        });
    });
        
    };

    // search store my name like auto suggestion return top 5 records;

const searchStore = function (searchString) {
    return new Promise((resolve, reject) => {
        const query = `SELECT id, name FROM store where name like '%${searchString}%' order by name limit 5`;
        client.query(query, function (err, result) {
            if (err) {
                reject(err); 
            }
            resolve(result.rows); 
        });
    });
        
    };

module.exports = {
        fetchAllStore,
        fetchStoreById,
        updateStore,
        fetchStoreCustomerCount,
        fetchStoreBelongCustomerDetails,
        createCustomer,
        searchStore
    }