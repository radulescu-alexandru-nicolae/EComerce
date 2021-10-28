import Product from "../class/Product.js";
import Cart from "./Cart.js";
import Login from "./Login.js";
import Register from "./Register.js";

import Customers from "../class/Customers.js";
import OrdersController from "../Controllers/OrdersController.js";
import ProductCategoriesController from "../Controllers/ProductCategoriesController.js";
import OrdersDetailController from "../Controllers/OrderDetailsController.js";
import CategoriesController from "../Controllers/CategoriesController.js";
import OptionsController from "../Controllers/OptionsController.js";
import ProductController from "../Controllers/ProductController.js";
import Orders from "../class/Orders.js";
import OrderDetails from "../class/OrderDetails.js";
export default class Home{
   
    constructor(customer={} ,order={}){
        this.customer=customer;

        this.produse=JSON.parse(localStorage.getItem('product'));
        this.container=document.querySelector('.container');
        this.container.innerHTML=``;
        this.setHeader();
        this.setMain();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
       this.scroll();
       this.navFunction();
       this.asideFunction();
        this.addCos();
        this.containerProduse=document.querySelector('.container-products');
        this.controlOrders = new OrdersController();

         this.productCategoriesController=new ProductCategoriesController();

         this.orderDetailsController=new OrdersDetailController();

         this.optionsController=new OptionsController();

         this.productController=new ProductController();

         this.order=order;

         this.controlOrders.create(this.order);
         this.containerProduse.addEventListener("click",this.addCos);
         this.cartProducts=document.querySelector('.cart-products');
         this.nav.addEventListener("click",this.removCos);

         this.showCos();
    }
    setHeader=()=>{
        const header=document.createElement('header');
        header.innerHTML=`
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
        </nav>
        <aside>
            <!-- <section class="product-type">
                <ol>
                    <li>Product Type</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Women</li>
                    <li>
                        <i class="fas fa-chevron-right"></i>
                        <i class="fas fa-chevron-down"></i>
                    </li>

                </ol>
            </section> -->
           <section class="aside-section">
            <img src="/images/category-1.jpg" alt="" class="fade-img">
            <img src="/images/category-2.jpg" alt=""  class="fade-img">
            <img src="/images/category-3.jpg" alt=""  class="fade-img">
            <ul>
              <li class="1"></li>
              <li class="2"></li>
              <li class="3"></li>
            </ul>
           </section>
        </aside>
        `
        this.container.appendChild(header);



        const cartProducts=document.querySelector('.cart-products');



        

    }

    setMain=()=>{
        const main=document.createElement('main');
        const menCategory=document.createElement('section');
        const containerProduse=document.createElement('section');
        containerProduse.className='container-products';
        menCategory.className='men-category primary-category';
        const buttonLeft=document.createElement('button');
        buttonLeft.className='left';
        const buttonRight=document.createElement('button');
        buttonRight.className='right';
        const right=document.createElement('i');
        right.className='fas fa-chevron-right right';
        buttonRight.appendChild(right);

        const left=document.createElement('i');
        left.className='fas fa-chevron-left left';
        buttonLeft.appendChild(left);
        const menProduct=document.createElement('section');
        menProduct.className='men-product sectiune-product';
        //women start here
        const womenCategory=document.createElement('section');
        womenCategory.className='women-category primary-category';
        const womenProduct=document.createElement('section');
        womenProduct.className='women-product sectiune-product';
      
        const buttonLeftF=document.createElement('button');
        buttonLeftF.className='left';
        const buttonRightF=document.createElement('button');
        buttonRightF.className='right';
        const rightF=document.createElement('i');
        rightF.className='fas fa-chevron-right right';
        buttonRightF.appendChild(rightF);

        const leftF=document.createElement('i');
        leftF.className='fas fa-chevron-left left';
        buttonLeftF.appendChild(leftF);
      
        this.produse.forEach(e=>{
            const produs=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
                if(produs.category==='Male'){
                    menProduct.innerHTML+=`
                   ${produs.toCard()}
                   `
                }else if(produs.category==='Female'){
                    
                    womenProduct.innerHTML+=
                    `
                    ${produs.toCard()}
                    `
                }
          })
          womenCategory.appendChild(buttonLeftF);
          womenCategory.appendChild(womenProduct);
          womenCategory.appendChild(buttonRightF);

        menCategory.appendChild(buttonLeft);
        menCategory.appendChild(menProduct);
         menCategory.appendChild(buttonRight);
       
        containerProduse.appendChild(menCategory);
        containerProduse.appendChild(womenCategory);
        main.appendChild(containerProduse);
        this.container.appendChild(main);
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
             let cart=new Cart(this.order);
             cart.customer=this.customer;
         }
     }

 scroll(){
    const category=document.querySelectorAll('.primary-category');
    const containerProduse=document.querySelector('.container-products');
    containerProduse.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON'){
            const parent=e.target.parentNode.querySelector('.sectiune-product');
            if(e.target.className==='right'){
                parent.scrollLeft+=900;
            }else{
                parent.scrollLeft-=900;
            }
        }else if(e.target.tagName==='I'&&e.target.className!=='fas fa-shopping-cart'){
            const parent=e.target.parentNode.parentNode.querySelector('.sectiune-product');
            if(e.target.className==='fa-chevron-right'){
                      parent.scrollLeft+=900;
                        }else{
                            parent.scrollLeft-=900;
                        }
        }
    })
    
    
     }

     navFunction(){
        const meniu=document.querySelector('.meniu');
        const span=meniu.querySelectorAll('span');
        const ulNav=document.querySelector('nav ul');
        meniu.addEventListener('click',(e)=>{
            if (window.matchMedia("(max-width: 1024px)").matches) {
                if (span[1].style.opacity !== '0') {
                    span[1].style.opacity = "0";
                    meniu.style.setProperty('--first-span', '-38deg');
                    meniu.style.setProperty('--second-span', '38deg');
                    ulNav.style.opacity="1";
                    ulNav.style.zIndex="2";
                    ulNav.style.transform="translateY(0)";
        
                } else {
                    span[1].style.opacity = "1";
                    meniu.style.setProperty('--first-span', '0deg');
                    meniu.style.setProperty('--second-span', '0deg');
                    ulNav.style.opacity="0";
                    ulNav.style.zIndex="-1";
                    ulNav.style.transform="translateY(-100%)";
                }
        }
        })
        window.addEventListener('resize',function(){
            if (window.matchMedia("(min-width: 1024px)").matches){
                ulNav.style.opacity="1";
                ulNav.style.zIndex="1";
                ulNav.style.transform="translateY(0)";
        
            }else{
                ulNav.style.opacity="0";
                ulNav.style.zIndex="-1";
                ulNav.style.transform="translateY(-100%)";
            }
        })
        const cart=document.querySelector('.cart');
        cart.addEventListener('mouseover',displayOn);
        cart.addEventListener('mouseout',displayOff);
        const cartProducts=document.querySelector('.cart-products');
        cartProducts.addEventListener('mouseout',displayOff);
        function displayOn(){
          
            cartProducts.style.opacity="1";
            cartProducts.style.zIndex="100";
        }
        function displayOff(){
            cartProducts.style.opacity="0";
            cartProducts.style.zIndex="-2";
        }
     }

     asideFunction(){
        const aside=document.querySelector('aside');
        const ulAside=aside.querySelector('ul');
        ulAside.addEventListener('click',(e)=>{
            if(e.target.tagName==='LI'){
              showImg(e.target.className-1);
              e.target.style.background="white";
            }
        })
        showImg(0);
        function showImg(n){
            let images=document.querySelectorAll('.fade-img');
            
            for(let i=0;i<images.length;i++){
                if(i!==n){
                    images[i].style.animation="none";
                    ulAside.querySelectorAll('li')[i].style.background="gray";
                }else{
                    images[n].style.animation="fade 1s forwards";
                    ulAside.querySelectorAll('li')[n].style.background="gray";
        
                }
            }
        }
     }

     addCos=(event)=>{
        if(event){
            let obj=event.target;
            if(obj.classList.contains("fa-shopping-cart")){
               const denumire=obj.parentNode.parentNode.querySelector('.denumire');
                const produs=this.returnObject(denumire.innerHTML);
                const details=new OrderDetails
                (this.orderDetailsController.nextId,
                    this.order.id,produs.id,produs.price,1,produs.image,produs.name);
                    console.log(this.orderDetailsController.nextId);

                this.orderDetailsController.create(details);


              

            }
        
        }
        
        

     }     
     showCos=()=>{
    let arr=this.orderDetailsController.returnDetails(this.order.id);
    let text="";
    let cards=arr.map(e=>{
        const product=this.productController.returnProduct(e.product_id);

        text+=product.toCardCart();
    })
    this.cartProducts.innerHTML+=text;
    
    }
    
     removCos=(event)=>{
         if(event){
            let obj=event.target;
            if(obj.classList.contains("delete-produs")){
                this.orderDetailsController.delete(1);

            }
         }
     }
 
     returnObject=(element)=>{
        let gasit;
        
       this.productController.products.forEach(e=>{
        const produs=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
           if(produs.name===element){
            gasit=produs;

           }
       })
       return gasit;

     }
     returnAccount=()=>{
         return this.customer;
     }

}