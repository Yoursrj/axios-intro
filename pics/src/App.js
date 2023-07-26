import Searchbar from "./componets/searchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./componets/imageList";
//These lines import the Searchbar component from the file searchBar.js, 
//the searchImages function from the file api.js, the useState hook from the react library, and the ImageList component from the file imageList.js.

function App(){
    const [images,setImages] = useState([]);//use state ke iss array me list of images jayengi
    //This code defines a functional component called App. Inside the component, it initializes a state variable called images using the useState hook. 
    //The initial value of images is an empty array, and the corresponding setter function is setImages.
    const handleSubmit =async (term) =>{//handlesubmit callback function hai..jo neeche se aara hai component se
    const result = await searchImages(term);//await lagaya hai taaki images pendimg na ho
        //console.log('Do a Search with',term);
        console.log(result);
        setImages(result);//setter function setImages ke llagane se rerender hoga pura result
        //hum result ko state ke array me daalre h rerender hota rhega or dalta rhega
    }
    //This code declares an async callback function called handleSubmit. It takes a term parameter, which represents the search term entered by the user. 
    //Inside the function, it calls the searchImages function (presumably an asynchronous function that fetches images based on the search term) and waits for the result using the await keyword. The result is logged to the console,\
    //and then the setImages function is used to update the images state with the result.

    return <div>
        <Searchbar onEnterClick={handleSubmit} />
         <ImageList images={images}/> {/*//images naam ke prop mein bhej re h image state uparse from usestate */}
    </div>
    //This is the JSX code returned by the App component. It renders a <div> element that contains the Searchbar component and the ImageList component. 
    //The onEnterClick prop of the Searchbar component is set to the handleSubmit function defined earlier. The images prop of the ImageList component is set to the images state.
}

export default App;
//This line exports the App component as the default export of the module, making it the entry point of the application and accessible for use in other files.