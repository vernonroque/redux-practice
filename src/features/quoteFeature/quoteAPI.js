
const APIKEY = process.env.REACT_APP_API_KEY;
    const url = 'https://api.api-ninjas.com/v1/quotes?category=';
    const category = 'dreams';
    const limit = '&limit=2';

export const fetchQuote = () => {
    return fetch(url+category+limit,{
        method:'GET',
         headers:{
             'X-Api-Key': APIKEY
            },
        contentType: 'application/json'
        }
    )
    .then(response => {
        if(response.ok) {
        return response.json();
        }
        throw new Error("Request failed!!");
        },networkError => console.log(networkError.message)
    )
    .then(jsonResponse => {
        const chosenQuote = Math.round(Math.random(1));
        // console.log("The number >>>",chosenQuote);
        // console.log( "response inside API",jsonResponse);
        // console.log('My chosen quote >>>>', jsonResponse[chosenQuote]);
        return jsonResponse[chosenQuote];
    }).catch(error => {
        console.log(error);
        throw error; // Re-throw the error to be caught in the calling code
      });
}