import React,{useState} from 'react'
const isLoggedIn = true;
export default function DynamicRenderingexample() {
    if(isLoggedIn){
  return <p>Welcome Back!</p>;
    }
    else{
        return <p> Please log in</p>;
    }
  
}
