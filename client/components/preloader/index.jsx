import Loader from 'react-loader-spinner';
import React from "react";
export default class Preloader extends React.Component {
 //other logic
   render() {
    return(
     <Loader 
        type="Circle"
        color="#00BFFF"
        height="100"	
        width="100"
     />   
    );
   }
}