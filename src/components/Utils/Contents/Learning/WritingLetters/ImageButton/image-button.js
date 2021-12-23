import './image-button.scss';
import React from 'react';
import {getImageUrl} from '../utils';
function ImageButton(props){

    let width = "auto";
    if(props.width) width = props.width

    console.log(props.width);
    return(
      <React.Fragment>
        <div className='image-btn' onClick={props.onClick} style={{display:'inline-block'}}>
          <img src={getImageUrl(props.image_url)} style={{width:width}}></img>
        </div>
        
      </React.Fragment>
    )
}

export default ImageButton