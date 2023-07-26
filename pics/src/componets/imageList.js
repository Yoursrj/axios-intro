import './Imagelist.css'
import ImageShow from "./imageShow";
//These lines import the CSS file named Imagelist.css and the ImageShow component from the file imageShow.js.
//images app.js se aata ahi or yaha update hoke waps chala jata hai app.js me output lekar
function ImageList({images}){
    const renderedImages= images.map((image) => {//har image ko map karega or nikalega..koi dikkat wlai baat nhi h
       return <ImageShow key = {image.id} image = {image}/>//imageshow component use krra hai image prop or usme image hi jara h
    })
    return <div className='image-list'>{renderedImages}</div>//ussi array jisme rendered images hai usse show krdo div me
}
//This code defines a functional component called ImageList that takes an images prop as its input. Inside the component, it maps over the images array and creates a new array of ImageShow components. 
//Each ImageShow component is assigned a unique key based on the image.id prop and is passed the image object as a prop.
//The resulting array of ImageShow components is stored in the renderedImages variable. 
//Finally, the component returns a <div> element with the class name 'image-list' and renders the renderedImages array within it.
export default ImageList;
//This line exports the ImageList component as the default export of the module, making it accessible for use in other files.