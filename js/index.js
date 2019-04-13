// Your code goes here
/*
COPY OF INSTRUCTIONS FROM README FILE:

## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [X] `scroll`
	* [ ] `select`
	* [X] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

*/ 

// 1. mouseleave/mouseenter will make <a> in the <nav> turn pink and get big
const navButtons = document.querySelectorAll("nav a");
//Stop the navigation from items from refreshing the page by using `preventDefault()`

navButtons.forEach(navLink => {
    navLink.addEventListener("mouseenter", (event)=>{
        event.target.style.fontSize = "2.0rem";
        event.target.style.color = "pink";
        
    });
    navLink.addEventListener("mouseleave", event => {
        event.target.style.color = "#212529";
        event.target.style.fontSize = "1.6rem";
        event.target.style.fontWeight= "bolder";
        
    });
    //Stop the navigation from items from refreshing the page by using `preventDefault()` when an a tag in the nav is clicked.

    navLink.addEventListener("click", event=> {
        event.stopPropagation();//Stops annoying don't click on our page
        event.preventDefault();
    });

});

//2. dblclick on Logo will make logo pink and bigger. 
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('dblclick', event => {
    event.target.style.color = "pink";
    event.target.style.fontSize = "5.0rem";
})

//3. click event; make the images smaller (max-width change) when clicked once and then restore when clicked again
const imagesContent = document.querySelectorAll(".img-content img");
console.log(imagesContent);

imagesContent.forEach((image) => { 
    
    image.addEventListener('click', event => {
        event.stopPropagation(); //will prevent stop clicking alert from starting
        event.target.style.width = "60%";
    });
    //restore following double click to original size
    image.addEventListener('dblclick', event => event.target.style.width = "100%");
});

//4. copy: trying to copy anything/add to clipboard will cause an alert telling you not to copy anything
const ourHTML = document.querySelector('html');

ourHTML.addEventListener("copy", event => {
    alert("DON'T COPY OUR STUFF!")
})

//5. mouseover on images, will flip them/make them mirror
const imagesAll = document.querySelectorAll('img');

imagesAll.forEach (image => {
    image.addEventListener("mouseover", event =>{
        console.log("Image flipping")
        event.target.style.transform = "scaleX(-1)";
        event.target.style.filter = "FlipH";
    });         
})

//6. scrolling
window.addEventListener("scroll", event => console.log("SCROLLING"));

//7. resize - "resize" really only works on the global level/window only according to MDN documentation (https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView/resize_event)
window.addEventListener("resize", event => alert("Why are you resizing your browser window?"));

//8. 


//9.


//10.


// Stop propagation, clicking on page by default launches an alert 
const wholeHTML = document.querySelector('html');

wholeHTML.addEventListener("click", event => {
    alert("Stop clicking randomly on our page. Click only on the buttons or on links");
})

//Now I need to prevent clicking on buttons on the bottom from setting off the above alert.
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
    });
})
