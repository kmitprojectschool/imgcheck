import React from 'react';
import one from './img-local/1.jpg'  // image path is relative to this file//

const MyGrid = () => {
    return (
        <div>
            
<div className="container">
    <div className="row">
        <div className="col-sm-4">           
              <img className="img-thumbnail" src={one}/> 
        </div>
        <div className="col-sm-4">
            <img className="img-thumbnail" src="/imgs-public/1.jpg"/>
        </div>
        <div className="col-sm-4">
            <img className="img-thumbnail" src="img-local/3.jpg"/>
        </div>
    </div> 

    <div className="row">
        <div className="col-sm-4">
            <img className="img-thumbnail" src="imgs/4.jpg"/>
        </div>
        <div className="col-sm-4">
            <img className="img-thumbnail" src="imgs/5.jpg"/>
        </div>
        <div className="col-sm-4">
            <img className="img-thumbnail" src="imgs/6.jpg"/>
        </div>
    </div> 


</div>
            
        </div>
    );
};

export default MyGrid;