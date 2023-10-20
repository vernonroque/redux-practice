import React from 'react'
import styles from './Quote.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeToOne,
  changeToTwo,
  changeToThree,
  selectQuote
} from './quoteSlice';

export const Quote = (props) => {
  const quote = useSelector(selectQuote);
  console.log(quote);
  
  const dispatch = useDispatch();
  //const [changeQuote,setChangeQuote] = useState(quote.quote.getState());
  console.log(dispatch(changeToOne));
    
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
    </div>
  )
}
