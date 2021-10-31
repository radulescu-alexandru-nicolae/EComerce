import OptionsController from "../Controllers/OptionsController.js";
import OrderDetailsController from "../Controllers/OrderDetailsController.js";
import ProductCategoriesController from "../Controllers/ProductCategoriesController.js";
import ProductController from "../Controllers/ProductController.js";
import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";

export default class Cart{
    constructor(order){
        this.container=document.querySelector('.container');
        this.container.innerHTML=``;
        this.setHeader();
        this.setMain();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.cartProducts=document.querySelector('.cart-products');
        this.order=order;
        this.productCategoriesController=new ProductCategoriesController();

        this.orderDetailsController=new OrderDetailsController();

        this.optionsController=new OptionsController();

        this.productController=new ProductController();
        this.setCos();
        this.customer;
        
    }

    setHeader=()=>{
        const header=document.createElement('header');
        header.innerHTML=
        `  
            <nav>
                <article class="container-nav">
                <h2>Andu's Shop</h2>
                <article class="meniu">
                    <article class="container-span">
                    <span></span>
                    <span></span>
                    <span></span></article>
                </article>
                <ul class="ul_nav"> 
                    <li class="homeButton"><p>Home</p></li>
                    <li class="registerButton"><p>Register</p></li>
                    <li class="signinButton"><p>Sign In</p></li>
                    <li class="cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Cart</p>
                        <i class="fas fa-arrow-down down"></i>
    
                     <section class="cart-products">
                     
                     
                     </section>
                    </li>
                   
                </ul>
            </article>
        `

        this.container.appendChild(header);

    }

    setMain=()=>{
        const main=document.createElement('main');
        main.innerHTML=
        `
        <section class="container-product-cart">
      

        </section>
        
        `
        this.container.appendChild(main);
    }
    setCos=()=>{
        const containerProducts=document.querySelector('.container-product-cart');
        let arr = this.orderDetailsController.returnDetails(this.order.id);

            let text="";
    let cards=arr.map(e=>{
       
        const product=this.productController.returnProduct(e.product_id);
 
       
        text+=product.toCardCartPag();

          
    })
    containerProducts.innerHTML+=text;

    }
    
    handleClickNav=(e)=>{
         let obj=e.target;
         if(obj.classList.contains("homeButton")){
            let home=new Home(this.customer,this.order);
         }else if(obj.classList.contains("signinButton")){
             let login=new Login();
         }else if(obj.classList.contains("registerButton")){
           let register=new Register();

         }else if(obj.classList.contains("cart")){
             let cart=new Cart();
         }
     }
}