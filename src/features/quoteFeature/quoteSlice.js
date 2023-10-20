import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    quote: "50 told me go 'head switch ya style up. And if they hate, then let them hate and watch the money pile up.",
    author: "Kanye West"
  };

  export const quoteSlice = createSlice({
    name:'quote',
    initialState,

    reducers: {
        changeToOne: (state) =>{
            state.quote = "Don't worry, be happy"
            state.author = "Anonymous"
        },
        changeToTwo: (state) =>{
            state.quote = "It's so good to be here"
            state.author = "Digable Planets"
        },
        changeToThree: (state) =>{
            state.quote = " In a world of pure imagination"
            state.author = "Willy Wonka"
        },
    }

  })

  export const {changeToOne, changeToTwo, changeToThree} = quoteSlice.actions



  export const selectQuote = (state) => state.quote;

  export default quoteSlice.reducer;