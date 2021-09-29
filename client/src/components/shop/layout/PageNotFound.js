import React from "react";
import Layout from "./index";

const PageNotFoundComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <span>
        
      </span>
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
        Contact us
         
         
         
      </span>
      {<br></br>}
      <span className="text-center text-gray-700 text-2xl font-bold tracking-widest">
        
         
         Email - shopnow@shop.com
         
      </span>
      <span className="text-center text-gray-700 text-2xl font-bold tracking-widest">
        
         Phone Number - +912394290420
      </span>
    </div>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
