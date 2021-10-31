import OrderDetails from "../class/OrderDetails.js";
export default class OrderDetailsController{
    constructor(){
        this.orders=[];
        this.load();
    
       
    }
    create=(details)=>{
 
        let id=this.nextId();
        let order=new OrderDetails(id,details.order_id,details.product_id,details.price,details.quantity);
        this.orders.push(order);
        window.localStorage.setItem("OrderDetails",JSON.stringify(this.orders));
     

    }
    load=()=>{
        let obj=JSON.parse(localStorage.getItem("OrderDetails"));
        if(obj!==null){
            obj.forEach(e=>{
                let orderDetail=new OrderDetails(e.id,e.order_id,e.product_id,e.price,e.quantity);
                if(e.order_id!==null){
                    this.orders.push(orderDetail);
                }
            })
        }
    }

    delete=(id)=>{
        this.orders.forEach(e=>{

            if(e.id===id){
                
                this.orders.pop(e);
                window.localStorage.removeItem("OrderDetails");
                window.localStorage.setItem("OrderDetails",JSON.stringify(this.orders));
            }
        })
  
    }

    update=(id,order_id,product_id,price,quantity)=>{
            this.orders.forEach(e=>{
                if(e.id===id){
                    this.orders.pop(id);
                    e.id=id;
                    e.order_id=order_id;
                    e.product_id=product_id;
                    e.price=price;
                  
                    e.quantity=quantity
                    this.orders.push(e);
                }
            })
            window.localStorage.removeItem("OrderDetails");
            window.localStorage.setItem("OrderDetails",JSON.stringify(this.orders));

    }
    nextId=()=>{
        let id;
        if(this.orders[this.orders.length-1]===undefined){
            console.log('e');
            id=1;
        }else if(this.orders[this.orders.length-1]!==undefined){
            id=this.orders[this.orders.length-1].id+1;
        }
        console.log(id);
        return id;
    }
    informationOrderDetail=(id)=>{
        let details=[];
        this.orders.forEach(e=>{
            if(e.id===id){

                details.push(e.id);
                details.push(e.order_id);
                details.push(e.product_id);
                details.push(e.price);
                details.push(e.sku);
                details.push(e.quantity);
                

            }

        })
        return details;
    }
    returnDetails=(id)=>{
        const details=[];
        this.orders.forEach(e=>{
         
       
            if(e.order_id===id){
                
                 details.push(e);
            }
        })
        return details;
    }
  
    returnOrderDetails=(name)=>{
        let orderDetails;
this.orders.forEach(e=>{
    if(e.name===name){
      orderDetails=new OrderDetails(e);
      
    }
})
return orderDetails;
    }
}
