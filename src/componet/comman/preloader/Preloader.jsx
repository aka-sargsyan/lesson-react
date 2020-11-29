import React from 'react';
import styleCss from './PreloaderStyle.module.css'
import loaderImg from '../../assets/preloader/loader2.gif'
const Preloader = (props) => {
  return (
    <div>
     <img className={styleCss.width} src={loaderImg} alt="" />
    </div>
  )
}

export default Preloader;