import React from 'react'

export const NextArrow = (props) => {
//classname
//styles
//onClick
//css style must  be defined as an object in the below div. 
return (
<>
  <div className={props.className} style={{...props.style, backgroundColor:"gray"}} onClick={props.onClick} />
</>
)
};
export const PrevArrow = (props) => {
return (
<>
  <div className={props.className} style={{...props.style,backgroundColor:"gray "}} onClick={props.onClick} />
</>
)
};