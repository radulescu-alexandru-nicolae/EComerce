import ProductCategories from "../class/ProductCategories.js";

export default class ProductCategoriesController{
    constructor(){
        this.productCategories=[];
    }



    load=()=>{
        let obj=JSON.parse(localStorage.getItem("ProductCategories"));
        if(obj!==null){
            obj.foreach(e=>{
                let prodCat=new ProductCategories(e.id,e.product_id,e.category_id);;
                if(prodCat.product_id!==undefined){
                    this.productCategories.push(prodCat);
                }

            })
        }
    }
    create=(productObj)=>{
     
        let produs=new ProductCategories(this.nextId(),productObj.id,productObj.category_id);
        this.productCategories.push(produs);
        window.localStorage.setItem("ProductCategories",JSON.stringify(this.productCategories));
    }

    delete=(id)=>{
        this.productCategories.forEach(e=>{
            if(e.id===id){
                this.productCategories.pop(id);
            }
        })
        window.localStorage.removeItem("ProductCategories");
        window.localStorage.setItem("ProductCategories",JSON.stringify(this.productCategories));
    }

    nextId=()=>{
        let id;
        if(this.productCategories[this.productCategories.length-1]===undefined){
            id=0;
        }else{
            id=this.productCategories[this.productCategories-1].id +1;
        }
        return id;
    }
}

