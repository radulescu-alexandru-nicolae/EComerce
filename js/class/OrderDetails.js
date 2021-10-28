import ProductController from "../Controllers/ProductController.js";
import Product from "./Product.js";

class OrderDetails{
    constructor(id,order_id,product_id,price,quantity){
        this.id=id;
        this.order_id=order_id;
        this.product_id=product_id;
        this.price=price;
               this.quantity=quantity;
        // this.productController=new ProductController();       
    }

    // returnProduct=(id)=>{
    //     let product;
    //     this.productController.products.forEach(e=>{
    //         if(e.id===id){
    //             product=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
    //         }

    //     })
       
    //     return product;
    // }



    // toCard=()=>{
    //     const article=document.createElement('article');
    //     article.className='product-cart';
    //     article.innerHTML=
    //     `
    //     <img src="${this.produs.image}" alt="">
    //     <div class="div-cart">
    //     <p>${this.produs.name}</p>
    //     <p>${this.produs.descriptions}</p>
    // </div>
    // <p class="price">${this.produs.price}</p>
    // <p class="delete-produs">X</p>
    //     `
    // }


}
export default OrderDetails;