import React from "react";
import '../../App.css';
import './Admin.css';


const Admin = () => {
    return (
        <div className="adminOptions">

            <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />

            <a href="/addAdmin" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Add Admnistrator&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
            <br />
            <a href="/comments" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; Customers' Comments &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />
            <a href="/createProduct" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Create Product &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />
            <a href="/deleteProduct" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Delete Product &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />
            <a href="/getAllProducts" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;See All Products &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />
            <a href="/getAllOrders" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;See All Orders &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
        </div>
    );
};
export default Admin;