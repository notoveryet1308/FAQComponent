import React from 'react';

import { ReactComponent as AddBtn } from '../../img/add_btn.svg';
import './style.css';


function Index({onClickHandler}) {
  return (
    <div className="add-faq-btn" >
      <div className="border-dashed" />
      <div className="add-btn" onClick={onClickHandler}>
        <AddBtn />
      </div>
    </div>
  )
}

export default Index;
