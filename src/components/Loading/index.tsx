/**
 * Loading Component 
 */
 import React from 'react';
 import './style.css';

 type Response = {
   code: number
   msg: string
 }

 type AppProps = {
  isLoading: boolean
  hasFinished: boolean
  isError: boolean
  qqData: Response
  children?: React.ReactNode
}
 
 const Loading: React.FC<AppProps> = ( {isLoading,hasFinished, isError, qqData, children}) => {
   if(hasFinished) {
    if(!isLoading) {
      if(isError) return (<div>{qqData.msg}</div>)
      else return (
       <div className="loading">
         {children}
       </div>
     );
    } else return (
      <div>
        Loading...
      </div>
    )
   } else return null
   
 };
 export default Loading;