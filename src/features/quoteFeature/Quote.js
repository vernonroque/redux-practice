import React,{useEffect} from 'react'
import styles from './Quote.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeToOne,
  changeToTwo,
  changeToThree,
  getQuote,
  selectQuote,
} from './quoteSlice';
//import {fetchQuote} from "./quoteAPI";

export const Quote = (props) => {
  const quote = useSelector(selectQuote);
  
  const dispatch = useDispatch();
  //console.log(dispatch(changeToOne));

  // const fetchData = async() => {
  //   try {
  //     const response = await fetchQuote();
  //       console.log('Response inside useEffect', response);
  //       } catch (error) {
  //           console.log(error);
  //       }
  // }

  // useEffect(()=>{

  //   fetchData();

  // },[quote])
    
  return (
    <div className = {styles.quoteContainer}>
      <h1 className ={styles.header}>Quote</h1>
      <h2>Here is the quote of the day: </h2>
      <h3>{quote.quote}</h3>
      <h4>{quote.author}</h4>

      <button onClick={()=>dispatch(changeToOne())}>
          button 1
      </button>
      <button onClick = {() => dispatch(changeToTwo())}>
          button 2
      </button>
      <button onClick = {() => dispatch(changeToThree())}>
          button 3
      </button>
      <button onClick = {() => dispatch(getQuote())}>
          get a random quote
      </button>
    </div>
  )
}
