import './letter-component.scss'
import React, { useEffect, useState, useRef, createRef } from 'react';
import {useParams} from 'react-router-dom';
import ImageButton from '../ImageButton/image-button';
import HandWritingCanvas from '../HandWritingCanvas/handwritingcanvas';
import { useSpeechSynthesis } from 'react-speech-kit';
import {getImageUrl} from '../utils'
import LetterInfo from './a-z';
let mouse_trace_data=new Array(4);
const LetterComponent = (props)=> {  
  let { letter } = useParams();
  const { speak } = useSpeechSynthesis();  
  const handWritingCanvasRefs =  [...Array(4)].map(() => createRef());  
  const canvasWrapperRef = createRef();
  function onCheck(data, err){
    console.log(data, err);
    if(err){

    }else{
      console.log(data[0]);
      for(var i = 0; i< data[0].length; i ++)
        speak({text:data[0][i]});
    }
  }
  function SetActiveCanvas(index){
    console.log(index);
    for(var i = 0; i < handWritingCanvasRefs.length; i ++){
      if(handWritingCanvasRefs[i].current == null)
        continue;
      if(i == index)
        handWritingCanvasRefs[i].current.showControlBtn();
      else
        handWritingCanvasRefs[i].current.hideControlBtn();
    }
    
  }  
  useEffect(()=>{
    mouse_trace_data=new Array(4);
    if(handWritingCanvasRefs[0].current){
      console.log(canvasWrapperRef.current.clientWidth)
      let canvas1Width = canvasWrapperRef.current.clientWidth-handWritingCanvasRefs[0].current.getCanvasWidth();
      let canvas3Width = canvasWrapperRef.current.clientWidth-handWritingCanvasRefs[2].current.getCanvasWidth();
      handWritingCanvasRefs[1].current.setCanvasWidth(canvas1Width);
      handWritingCanvasRefs[3].current.setCanvasWidth(canvas3Width);
    }
  },[])
  console.log(letter)
  let titleLetter = letter.toUpperCase() + letter;  
  let {imagebuttons,images}=LetterInfo[letter]
  return (
    <div className="letter-container">      
      <h1 className="title"> The Letter <span>{titleLetter}</span></h1>
      <div className="d-flex justify-content-between ml-20 mr-20 ">
        <div className="trace-letter">
          <p>Trace The Letter</p>
          <div className="trace-letter-image-wrapper" style={images.letter.style}>
            <img src={getImageUrl(images.letter.url)}></img>
          </div>
          
        </div>
        <div className="typical-letter-content">
          <div className="typical-letter-image">
            <img src={getImageUrl(images.background)}></img>
            {
              imagebuttons.map((item, index)=>{
                  return(                  
                    <div className="image-btn-wrapper" style={item.style} key={"image-btn" + index}>
                      <ImageButton image_url={item.image_url} onClick={()=>{speak({text:item.speak_text})}}></ImageButton>
                    </div>
                  )                
              })
            }        
          </div>
        </div>
      </div>
      <div className="dotted-box">
        <img src={getImageUrl(images.letterUp)} className="big-letter"></img>        
        <div className="big-canvas canvas-wrapper" ref={canvasWrapperRef}>
          <div className="handwriting-canvas">
            <HandWritingCanvas ref={handWritingCanvasRefs[0]} init_trace={mouse_trace_data[0]} onCheck={onCheck} 
            onDrawStart={()=>{SetActiveCanvas(0)}} onDrawEnd={(data)=>{mouse_trace_data[0]=data}} onErase={()=>{mouse_trace_data[0]=undefined}}></HandWritingCanvas>
          </div>
          <div className="handwriting-canvas">
            <HandWritingCanvas  ref={handWritingCanvasRefs[1]} init_trace={mouse_trace_data[1]} onCheck={onCheck} 
            onDrawStart={()=>{SetActiveCanvas(1)}} onDrawEnd={(data)=>{mouse_trace_data[1]=data}} onErase={()=>{mouse_trace_data[1]=undefined}}></HandWritingCanvas>
          </div>          
        </div>
      </div>
      <div className="dotted-box mt-30">
        <div className="dott-box-content small-letter">
          <img src={getImageUrl(images.letterDown)}></img>
          <div className="canvas-wrapper">
            <div className="handwriting-canvas">
              <HandWritingCanvas width="32" height="39" ref={handWritingCanvasRefs[2]} init_trace={mouse_trace_data[2]} onCheck={onCheck} onDrawStart={()=>{SetActiveCanvas(2)}} onDrawEnd={(data)=>{mouse_trace_data[2]=data}}></HandWritingCanvas>
            </div>
            <div className="handwriting-canvas">
              <HandWritingCanvas height="39" ref={handWritingCanvasRefs[3]} init_trace={mouse_trace_data[3]} onCheck={onCheck} onDrawStart={()=>{SetActiveCanvas(3)}} onDrawEnd={(data)=>{mouse_trace_data[3]=data}}></HandWritingCanvas>
            </div>
          </div>
        </div>
        
      </div>      
      <div className="footer mt-50">
        <img src={getImageUrl(images.footer)}></img>
      </div>
      <img src="/assets/images/model1.png" className="model"></img>
    </div>
  );
};

export default LetterComponent;