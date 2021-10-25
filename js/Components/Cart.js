import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";

export default class Cart{
    constructor(){
        this.container=document.querySelector('.container');
        this.container.innerHTML=``;
        this.setHeader();
        this.setMain();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
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
                          <article class="product-cart">
                                <img src="/images/buy-1.jpg" alt="">
                                <div class="div-cart">
                                <p>Tricou Barbati</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p class="price">30$</p>
                            <p class="delete-produs">X</p>
    
                        </article>
                         
                        <article class="product-cart">
                            <img src="/images/buy-1.jpg" alt="">
                            <div class="div-cart">
                            <p>Tricou Barbati</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <p class="price">30$</p>
                        <p class="delete-produs">X</p>
    
                    </article>
                    <article class="product-cart">
                        <img src="/images/buy-1.jpg" alt="">
                        <div class="div-cart">
                        <p>Tricou Barbati</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <p class="price">30$</p>
                    <p class="delete-produs">X</p>
    
                </article>
                <article class="product-cart">
                    <img src="/images/buy-1.jpg" alt="">
                    <div class="div-cart">
                    <p>Tricou Barbati</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <p class="price">30$</p>
                <p class="delete-produs">X</p>
    
            </article>
            <article class="product-cart">
                <img src="/images/buy-1.jpg" alt="">
                <div class="div-cart">
                <p>Tricou Barbati</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <p class="price">30$</p>
            <p class="delete-produs">X</p>
    
        </article>
        <article class="product-cart">
            <img src="/images/buy-1.jpg" alt="">
            <div class="div-cart">
            <p>Tricou Barbati</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p class="price">30$</p>
        <p class="delete-produs">X</p>
    
    </article>
    
                        <article class="product-cart">
                            <img src="/images/buy-1.jpg" alt="">
                            <div class="div-cart">
                            <p>Tricou Barbati</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <p class="price">30$</p>
                        <p class="delete-produs">X</p>
    
                    </article>
                     
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
        <article class="product-cart-main">
        <img src="/images/buy-1.jpg" alt="">
        <div class="div-cart">
        <p>Tricou Barbati</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <p class="price">30$</p>

</article>
<article class="product-cart-main">
        <img src="/images/buy-1.jpg" alt="">
        <div class="div-cart">
        <p>Tricou Barbati</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <p class="price">30$</p>

</article>
<article class="product-cart-main">
        <img src="/images/buy-1.jpg" alt="">
        <div class="div-cart">
        <p>Tricou Barbati</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <p class="price">30$</p>

</article>
<article class="product-cart-main">
        <img src="/images/buy-1.jpg" alt="">
        <div class="div-cart">
        <p>Tricou Barbati</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <p class="price">30$</p>

</article>

</section>
        
        `
        this.container.appendChild(main);
    }
    handleClickNav=(e)=>{
         let obj=e.target;
         if(obj.classList.contains("homeButton")){
            let home=new Home();
         }else if(obj.classList.contains("signinButton")){
             let login=new Login();
         }else if(obj.classList.contains("registerButton")){
           let register=new Register();

         }else if(obj.classList.contains("cart")){
             let cart=new Cart();
         }
     }
}