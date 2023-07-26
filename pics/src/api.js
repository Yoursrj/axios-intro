import axios from 'axios';
//This line imports the axios library, which is a popular JavaScript library used for making HTTP requests.
const searchImages = async () =>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization : 'Client-ID CkdeSQCw4wbH36EUu3W4nnjZuzHMJWfyIl92HFOdR3U'
      },
      params:{
         query:'cars'
      }
    })
    console.log(response)

    return response.data.results;
}
//This code defines an async function called searchImages. Inside the function, it uses axios to send a GET request to the specified URL ('https://api.unsplash.com/search/photos'). 
//The axios.get() method returns a promise that resolves to a response object.

//The request includes headers with an authorization token, which is typically used for authentication or authorization purposes. In this case, 
//the authorization token is provided as 'Client-ID CkdeSQCw4wbH36EUu3W4nnjZuzHMJWfyIl92HFOdR3U'. 
//Please note that this token is specific to the Unsplash API and may have been generated for a specific application or user.

//The request also includes query parameters, where the query parameter is set to 'cars'. This specifies the search query for the images you want to retrieve from the Unsplash API.

//After sending the request and awaiting the response, the code logs the response object to the console.

//Finally, the function returns the results property of the response.data object. This assumes that the API response contains a results property that holds the desired image data.

export default searchImages;
//This line exports the searchImages function as the default export of the module, making it available for use in other files.