function ImageShow({image}){
    return <div>
        <img src={image.urls.small} alt ={image.alt_desription}/>
    </div>
}
//This code defines a functional component called ImageShow that takes an image prop as its input. Inside the component, it returns a <div> element that contains an <img> element.
// The <img> element has its src attribute set to image.urls.small, which expects the image prop to be an object with a urls property that contains a small property.
// This assumes that the urls object has a small property that holds the URL of a small-sized image.
// The <img> element also has an alt attribute set to image.alt_description, which expects the image prop to have an alt_description property that contains the alternative text for the image
export default ImageShow;
//This line exports the ImageShow component as the default export of the module, making it available for use in other files.