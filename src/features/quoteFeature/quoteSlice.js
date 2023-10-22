import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchQuote} from "./quoteAPI";

const initialState = {
    quote: "50 told me go 'head switch ya style up. And if they hate, then let them hate and watch the money pile up.",
    author: "Kanye West",
    status:'idle',
    error:null,
  };

  export const getQuote = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
      const response = await fetchQuote();
      // The value we return becomes the `fulfilled` action payload
      console.log("the response inside my thunk>>>",response);
      return response;

    }
  );

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
    },
    extraReducers: (builder) => {
        builder
          .addCase(getQuote.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getQuote.fulfilled, (state, action) => {
            console.log('action.payload:', action.payload);
            state.status = 'success';
            state.quote = action.payload.quote;
            state.author = action.payload.author;
            state.error = null;
          })
          .addCase(getQuote.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
          })
      },

  })

  export const {changeToOne, changeToTwo, changeToThree} = quoteSlice.actions



  export const selectQuote = (state) => state.quote;

  export default quoteSlice.reducer;