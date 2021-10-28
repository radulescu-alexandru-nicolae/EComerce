import Product from "../class/Product.js";
export default class ProductController{
    constructor(){
        this.item_section=document.querySelector('.item-section');
        this.products=[];
        this.load();
    }
    load=()=>{
        let obj=JSON.parse(localStorage.getItem("product"));
        if(obj!==null){
            obj.forEach(e=>{
                let prod=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
                if(prod.name!==undefined){
                    
                    this.products.push(prod);
                   
                }
            })
        }
       
    }
    create=(product)=>{
       
        let produs=new Product(this.nextId(),product.sku,product.name,product.price,product.weight,product.descriptions,product.image,product.category,product.create_date,product.stock);
          this.products.push(produs);
        window.localStorage.setItem("product",JSON.stringify(this.products));
    }

    delete=(id)=>{
        this.products.forEach(e=>{
            if(e.id===id){
                this.products.pop(id);
            }

        })
        window.localStorage.removeItem("product");
        window.localStorage.setItem("product",JSON.stringify(this.products));
    }

    setHome=()=>{
        this.item_section.innerHTML+=this.toCards();
    }
    toCards(){
        let text=``;
        for(let i=0;i<this.products.length;i++){
            text+=this.products[i].toCard();
        }
        return text;
    }

    nextId=()=>{
        let id;
        if(this.products[this.products.length-1]===undefined){
            id=0;
        }else{
            id=this.products[this.products.length-1].id+1;
        }
        return id;
    }

    returnProduct=(id)=>{
        let produs;
        this.products.forEach(e=>{
            if(e.id===id){
                produs=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
            }
        })
        return produs;
    }
}