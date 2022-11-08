console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1")
node1.textContent = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementByClassName('node2') to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const node3 = document.getElementsByTagName("h3");

for (let element of node3) {
    element.textContent = "I used the getElementByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const tag = document.createElement("p");
const text = document.createTextNode("This node was created using the createElement() method");

// TODO: Append the created node to the parent node using the element.appendChild() method
tag.appendChild(text);
const element = document.getElementById("parent");
element.appendChild(tag);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const newTag = document.createElement("a");
newTag.href = "http://www.google.com";
const newText = document.createTextNode("I am a <a> tag");
newTag.appendChild(newText);
const newElement = document.getElementById("parent");
newElement.appendChild(newTag);
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");
let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

setTimeout(()=>{
    exercise3Container.replaceChild(newChildNode, oldChild);
    exercise3Container.removeChild(newChildNode);
}, 3000)


// TODO: Remove the "New Child Node"


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
 list.forEach((item) => {
    let li = document.createElement("li");
     li.textContent = item;
     ul.appendChild(li);
 });
// TODO: Append the new list items to the unordered list element
document.querySelector("#container").appendChild(ul);
// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/
function show() {
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let closeBtn = document.createElement("button")

    h2.textContent = "Modal Header";
    p.textContent = "Words go here"
    closeBtn.textContent = "Close";

    closeBtn.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
    });

modalCard.append(h2, p, closeBtn);
modalCard.classList.add("modal-card");

    modalContainer.id = "modal";
    modalContainer.appendChild(modalCard);

    document.body.appendChild(modalContainer);

    }


let button = document.querySelector("#btn");
button.addEventListener("click", show)
// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
