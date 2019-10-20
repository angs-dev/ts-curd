
const store = require('../models').store;
const customer = require('../models').customer;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const fetchAllStore = function () {
     return new Promise((resolve, reject) => {
        store.findAll().then((res)=>{
            // let getDetails = result.map((obj) => {
            //     return { ID: obj.ID, Name: obj.Name }
            //   });
            resolve(res); 
        }).catch((err) => {
            reject(err);
        });
       
    });
        
    };

// fetch store by id
const fetchStore = function (data) {
    return new Promise((resolve, reject) => {
        let query = '';
        if(data.selectValue === 'NAME'){
           query = {
               Name : {
                   [Op.like] : `%${data.storeId}%`
               }
           }
        
        }else{
             query = {
                ID :  data.storeId 
             };
        }

            store.findOne({
                where : query
            }).then((res)=>{
                resolve([res]); 
            }).catch((err) => {
                reject(err);
            });   


    });  
    };
// update store using id 

const updateStore = function (storeId, PostData) {
    return new Promise((resolve, reject) => {
      
        store.update(
                {
                    Name : PostData.Name,
                    Domain: PostData.Domain,
                    Status: PostData.Status,
                    Street: PostData.Street,
                    State: PostData.State
                },
                {
                    where: {
                        ID :  storeId
                    }
                }).then((result) => {
                    resolve([result]); 
                })
                .catch((err) => {
                    reject(err);
                });
       
    });
        
    };

// update store using id 

const fetchStoreCustomerCount = function () {
    return new Promise((resolve, reject) => { 
        store.findAll({
            attributes: { 
                include: [[Sequelize.fn("COUNT", Sequelize.col("storeData.StoreId")), "customercount"]] 
            },
            include: [{
                model: customer, attributes: [],as: 'storeData',
            }],
            group: ['storeData.StoreId','store.ID']
        }).then((result)=>{
            resolve(result);
        }).catch((err) => {
            reject(err); 
        });
    });
        
    };

    
// fetch customer detail under all store 

const fetchStoreBelongCustomerDetails = function () {
    return new Promise((resolve, reject) => {

        store.findAll({
            attributes: [
                ["Name", "Name"],
            ],
            include: [{
                attributes: [
                ["Firstname","FirstName"],
                ["Lastname", "Lastname"],
                ["Email", "Email"]
                ],
                model: customer,
                as: 'storeData',
                
            }],
            limit: 100,
            subQuery:false
        }).then((result)=>{
            resolve(result);
        }).catch((err) => {
            reject(err); 
        });
    });
        
    };

// create a new customer under store
const createCustomer = function (storeId, PostData) {
    return new Promise((resolve, reject) => {  
            customer.create(
                {
                    StoreId : storeId,
                    Firstname: PostData.firstName,
                    Lastname: PostData.lastName,
                    Phone: PostData.phone,
                    Email: PostData.emailId
                }).then((result) => {
                    resolve([result]); 
                })
                .catch((err) => {
                    reject(err);
                });
       
    });
        
    };

module.exports = {
        fetchAllStore,
        fetchStore,
        updateStore,
        fetchStoreCustomerCount,
        fetchStoreBelongCustomerDetails,
        createCustomer
    }