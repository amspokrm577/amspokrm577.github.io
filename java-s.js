// this project is a file abstraction.
// To be sent and received.


// finish this by loading JSON later
// let data = '[
// ]';

// when user first opens the page this function
// manipulates the default background function.

function red() {
    // insert labmda expressions for certain styles
    document.body.style['background-color'] = 'red';

  }


let p1;
let p2;

// call by reference pass
// what does & and * look like?
function myFunction (p1, p2) 
{

  let myJSON = '{"name":"John", "age":30, "car":null}';

  const myObj = JSON.parse (myJSON);

  let text = "";
  for (const x in myObj) {
    text += myObj[x] + ", ";
  }

  document.getElementById ("demo").innerHTML = myObj.name;

  return p1 * p2;   
}




// The first use of Js for defining a behavior of a website. 
// The user would have an event-listener for a certain effect on the
// embedded style .css this would create a responsive behavior in the 
// webpage. One can edit the internal .css by changing values of 
// specific definitions in the css tag. 

document.getElementById("btn-1").addEventListener("click", ()=> {
    document.getElementById("test").innerText = "Hello World";
    document.querySelector(".test-container").classList()
  });


console.log("Success-1");

let header = document.querySelector('.header');
  let origOffsetY = header.offsetTop;

    function onScroll(e) {
        window.scrollY >= origOffsetY ? header.classList.add('sticky') :
                          header.classList.remove('sticky');
        console.log("Success-2");
    }

document.addEventListener('scroll', onScroll);  // <- this argument is a lambda
                                                // might need a ()=> ----------

// this could go into a <pre> tag for withdraw html default tags. 

const formLetter = `Dear ${boss}:

By the time you receive this message, I will have
quit. I have found a startup that is friendly to
dogs.

Sincerely,

Rossy
`;
// ${title} and ${image.path} are like environment variables
// Define the innerhtml for a certain div identified by a class or ID
// This is the behavior for a user event.
let container = document.querySelector(".test-inner");



let innerhtml = container.innerHTML = `
  <div>
    <h2>${title}</h2>
    <img src="${image.path}" alt="${image.description}">
  </div>`;

  // document.querySelector(".")
  
  // This will potentially be the JSON for storing data based on user events. 
  // Data Structs can be created to form more comprehensive flows of data

  let para = document.querySelector("p");
  let classes = para.classList;
  para.classList.add("d");

  let text =  para.textContent = `paragraph classList is "${classes}"`;
  console.log(text);

// this is one way to get the children of a div.
function test_color_change () {
    let x, i;
    x = document.querySelectorAll(".example");
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
    }
  }

function text_child_test () {
    const myElement = document.getElementById('color-changer');
    for (let i = 0; i < myElement.children.length; i++) 
      {
        console.log(myElement.children[i].tagName);
      }
  };
