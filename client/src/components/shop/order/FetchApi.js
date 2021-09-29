
import { editProduct } from "../../admin/products/FetchApi";
import { quantity, totalCost } from "../partials/Mixins";
import axios from "axios";
import Products from "../../admin/products";
const apiURL = process.env.REACT_APP_API_URL;

// const productModel = require("../../../server/models/products");



export const getBrainTreeToken = async () => {
  let uId = JSON.parse(localStorage.getItem("jwt")).user._id;
  try {
    let res = await axios.post(`${apiURL}/api/braintree/get-token`, {
      uId: uId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentProcess = async (paymentData) => {
  console.log(paymentData)
  try {
    const {amountTotal} = paymentData;
    let res = {
      data:{
        
      },
      transaction:{
        amount: amountTotal,
        id: 'SN'+(new Date()).getTime(),

      },
      
    };
    
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (orderData) => {
  console.log('Hi there order data');
  console.log(orderData)
  try {
    
    let res = await axios.post(`${apiURL}/api/order/create-order`, orderData);
    console.log('below is products')
    await orderData.products.map((product) =>{
      
      editProduct({
        pId: product._id,
        pName: product.pName,
        pDescription: product.pDescription,
        pImages: product.pImages,
        pStatus: product.pStatus,
        pCategory: {_id:product.pCategory},
        pQuantity: Number(product.pQuantity)-Number(quantity(product._id)) ,
        pPrice: product.pPrice,
        pOffer: product.pOffer,
      })
    })
    console.log(orderData.products);
    //   let ress = await orderData.cartProducts.map((product, index) => {
    //   let pQuantity=product.pQuantity
    //   editProduct({...product,pQuantity:pQuantity-quantity(product._id)});

    // });
    
    return res.data;
  } catch (error) {
    console.log(error);
  }
  // try {
  //   console.log(orderData.cartProducts)
  //   let res = await orderData.cartProducts.map((product, index) => {
  //     let pQuantity=product.pQuantity
  //     editProduct({...product,pQuantity:pQuantity-quantity(product._id)});

  //   });
  //   return res.data;
  // } catch (error) {
  //   console.log(error);
  // }
};
