const meniu=document.querySelector('.meniu');
const span=meniu.querySelectorAll('span');
const ulNav=document.querySelector('nav ul');
console.log(ulNav);
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


//here start aside

const aside=document.querySelector('aside');
var slideIndex=1;

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
//here start scroll
// const category=document.querySelector('.men-category');
// const menProduct=document.querySelector('.men-product');
// const buttons=category.querySelectorAll('button');

// category.addEventListener('click',(e)=>{
//     if(e.target.tagName==='BUTTON'){
//        if(e.target.className==='right'){
//         menProduct.scrollLeft+=900;
//        }else{
//         menProduct.scrollLeft-=900;
//        }
//     }else if(e.target.tagName==='I'){
//         if(e.target.className==='fa-chevron-right'){
//             menProduct.scrollLeft+=900;
//         }else{
//             menProduct.scrollLeft-=900;
//         }
//     }
// })
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
