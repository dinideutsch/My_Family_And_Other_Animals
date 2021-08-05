import React from 'react';
function Error(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1 className="display-3">
               404
               <h1>error</h1>
               <h2>page not found</h2>
               <h3>this URL: <span className="text-danger">
                {props.location.pathname} </span>
                {" "}was not found</h3>
            </h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Error;