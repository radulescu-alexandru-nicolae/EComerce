class Product{
    constructor(id,sku,name,price,weight,descriptions,image,category,create_date,stock){
        this.id=id;
        this.sku=sku;
        this.name=name;
        this.price=price;
        this.weight=weight;
        this.descriptions=descriptions;
        this.image=image;
        this.category=category;
        this.create_date=create_date;
        this.stock=stock;
    }
    toCard=()=>{
        let text=`
        <article class="product">
        <img src="${this.image}" alt="">
        <article class="product-detail">
        <p class="denumire">${this.name}</p>
        <p class="descriere">${this.descriptions}</p>
        </article>
        <article class="buttons-product">
            <i class="fas fa-shopping-cart"></i>
            <i class="far fa-heart"></i>
        </article>


    </article>
      `
        return text;
    }
   
}
export default Product;