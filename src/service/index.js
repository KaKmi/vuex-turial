/**
 * Created by Jared on 16/1/5.
 */
import {Promise} from 'es6-promise';
const  _products =[
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX1 - Sucker CD", "price": 19.99, "inventory": 5}
];


export default {
    getProducts(){
        return new Promise((resolve, reject) => {


            setTimeout(function () {
                resolve(_products);
            },100);
        })
    },
    buyProducts(products){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                Math.random()>.5 ?resolve():reject()
            },100)
        })
    }



}