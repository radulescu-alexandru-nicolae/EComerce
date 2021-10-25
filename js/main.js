import Customers from "./class/Customers.js";
import Orders from "./class/Orders.js";
import Product from "./class/Product.js";
import Cart from "./Components/Cart.js";
import Home from "./Components/Home.js";
import Register from "./Components/Register.js";
import OrdersController from "./Controllers/OrdersController.js";
import ProductController from "./Controllers/ProductController.js";
import CustomerController from "./Controllers/CustomerController.js";


const customer=new Customers(4,'radulescu@gmail.com','qwert','Radulescu Alexandru','Ion Tuculescu Nr4','Romania','93777');
const order=new Orders(4,customer.id,0,'Ion Tuculescu','Ion Tuculescu','radulescu@gmail.com','2021-01-01','In Tranist');
const home=new Home(customer,order);
// const a=new ProductController();

const controllerProduct=new ProductController();
// const product=new Product(1,'qwer','TricuBarbati','200',200,'Tricou Barbati Marimea S','images/buy-1.jpg','Men','2021-01-01','200');
// controllerProduct.create(product);



// ordersController.create(3,1,'Ion Tuculescu','Ion Tuculescu','qwer@gmail.com','2021-01-01','In Transit');
// a.create('QWER','Tricou Femei S',30,23,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ex est corrupti provident','images/category-3.jpg','Women','2021-01-01',200);