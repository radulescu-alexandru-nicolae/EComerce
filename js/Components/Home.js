import Cart from "./Cart.js";
import Login from "./Login.js";
import Register from "./Register.js";

export default class Home{
    constructor(){
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

    }

    setMain=()=>{
        const main=document.createElement('main');
        main.innerHTML=`

    
            <section class="container-products">
                <section class="men-category primary-category">
                    <button class="left"><i class="fas fa-chevron-left left"></i></button>
                    <section class="men-product sectiune-product">
    
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
    
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
    
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/buy-1.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                    </section>
                    <button class="right"><i class="fas fa-chevron-right" id="right"></i></button>
                </section>
                <section class="women-category primary-category">
                    <button class="left"><i class="fas fa-chevron-left left"></i></button>
                    <section class="women-product sectiune-product">
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
        
        
                        </article>
                        <article class="product">
                            <img src="images/category-3.jpg" alt="">
                            <article class="product-detail">
                            <p class="denumire">Tricou Barbati S</p>
                            <p class="descriere">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident</p>
                            </article>
                            <article class="buttons-product">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="far fa-heart"></i>
                            </article>
                        </article>
                    </section>
                    <button class="right"><i class="fas fa-chevron-right" id="right"></i></button>
               
                </section>
            </section>
        
        `;
        this.container.appendChild(main);
    }

    handleClickNav=(e)=>{
        console.log(e.target);
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
        }else if(e.target.tagName==='I'){
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
        function displayOn(e){
          
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
}