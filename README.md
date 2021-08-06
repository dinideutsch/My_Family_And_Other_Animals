## My Family And Other Animals

#### Description
My Family And Other Animals is a web application for buying pets, pets' food and accessories.
getting through the homepage into the store, the user can choose one of the three departments of the store,
and inside each of them he will be able to see the cards of the products, each card with price, add-to-cart button and an image which will, by clicking on it take the user to a details page of the product.
clicking on the cart button will navigate to the cart page where the user can increment/decrement the amount of each product, clean the whole cart or pay with paypal.
Also, in a contact page the user can send a comment to the store, and get an email back.
Another feature is enter as admin, what will enable you to delete/add products, see users comments and more.
 
#### Languages and Platforms
The project is divided into two parts:
1. client side -  implemented with HTML, css and react.js, in charge of the visibility and 
functioning of the website.
2. server side - implemented with node.js (Express), in charge of providing the API to manage the data which is stored in mongodb tables.

#### Usage
Note: you will probably need to create a new mongodb database.
      when you do this, you can insert the data from the json files attached in the client side.
1. first run the server side using these commands in the terminal:
   * npm install
   * npm run dev
2. secondly run the client  with these commands:
   * npm install
   * npm start
  
#### Demo
 ![petshop-_online-video-cutter](https://user-images.githubusercontent.com/86185062/128439902-9bbbe08d-3713-40a1-9c81-f324f81ed442.gif)
