import Customers from "./class/Customers.js";
import Orders from "./class/Orders.js";
import Product from "./class/Product.js";
import Cart from "./Components/Cart.js";
import Home from "./Components/Home.js";
import Register from "./Components/Register.js";
import OrdersController from "./Controllers/OrdersController.js";
import ProductController from "./Controllers/ProductController.js";
import CustomerController from "./Controllers/CustomerController.js";
import OrderDetailsController from "./Controllers/OrderDetailsController.js";


const customer=new Customers(4,'radulescu@gmail.com','qwert','Radulescu Alexandru','Ion Tuculescu Nr4','Romania','93777');
const order=new Orders(4,customer.id,0,'Ion Tuculescu','Ion Tuculescu','radulescu@gmail.com','2021-01-01','In Tranist');
const home=new Home(customer,order);


