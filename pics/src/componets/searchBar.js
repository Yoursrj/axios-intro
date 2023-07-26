import { useState } from 'react';
import './Searchbar.css';
//In these lines, the code imports the useState hook from the react library and imports the CSS file named Searchbar.css.

function SearchBar({onEnterClick}){
    //This line defines a functional component called SearchBar that accepts a prop called onEnterClick. 
    //This prop is a callback function that will be passed from the parent component (App.js).
    
    //onEnterClick prop hai jo aara hai app.js se....koi onlick ya onhover wagra nahi hai
    //app.js parent component hai...child component ka jo searchbar.js ko mil ra h
    // const handleClick = () =>{//callback function of onEnterClick..matlab jabhi user cick krega 
    //     //onclick par...neeche tab onEnterClick chal jayega
    const [term,setTerm] = useState('');//5.71 and 5.72
    //Here, the useState hook is used to declare a state variable called term and its corresponding setter function setTerm. The initial value of term is set to an empty string.
    const handleChange = (event) =>{//5.71 and 5.72
    //This function is triggered when the user types in the input field. It updates the term state with the value entered by the user.    
        setTerm(event.target.value);//5.71 and 5.72
     }
     //This function is triggered when the form is submitted. 
     //It prevents the default form submission behavior (which would cause a page reload) and calls the onEnterClick callback function passed from the parent component, passing the current value of term as an argument.
    const handleFormSubmit = (event) => {//ye function tab chalega jab form submit hota hai
        event.preventDefault();//iske liye or upar ke event ke liye 5.70 me jaao lecture ke
        //console.log('I need to tell parent about some data');
        onEnterClick(term);//onEnterClick Ka callback function hai ye...{onEnterClick}...or jo user ne dala hai input me
        //     //wo daal denge hum onEnterClick ke andar
        //     //app.js ka jo "term" hai jo search hoga wo isse milega     
    }

    //This is the JSX code returned by the SearchBar component. It renders a div element with the class name 'search-bar'.
    // Inside it, there is a form element that triggers the handleFormSubmit function when submitted. The form contains a label and an input element. 
    //The input element's value is bound to the term state, and its onChange event is handled by the handleChange function.
    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}> {/*//onSubmit krete hi on submit hal jayega jo ek callback function hai */}
        <label>Enter Search Term</label>       
        <input value ={term} onChange={handleChange}/>
        </form>
      {/*<button onClick={handleClick}>Click Me</button>   //onClick krete hi on submit hal jayega jo ek callback function hai */}
    </div>
}

export default SearchBar;
//This line exports the SearchBar component as the default export of the module, making it available for use in other files.