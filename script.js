// Access property from Dom Object  Here

// Check type
console.log("Check type: ", typeof "h3");

// All document directory
console.log("All Document directory:");
console.dir(document);

// Show title , head, domain , body from document
console.log("Title:", document.title);
console.log("Head:", document.head);
console.log("Domain:", document.domain);
console.log("Boyd:", document.body);

// Change documents title from javascript
document.title = "Change Title";
console.log("Title Change to:", document.title);

// Document all (special kind of object but not an array) - Bad Practice
console.log("Document All Object:", document.all);
console.log("Document All Image:", document.images);
console.log("Document All Link:", document.links);

// - Good Practice

// Document getElementById which comes from prototype
// Get element by ID - which is an object
console.log("Document Link by ID:", document.getElementById("link"));
console.log("Document Image by ID:", document.getElementById("model"));
// get element by id and also change the element
let title = document.getElementById("title");

// read the browser output
title.innerText = "Document Object Model (Check Script.js and Console log)";
console.log("innerText: ", title.innerText);
// read the html output
title.textContent = "Document Object Model (Check Script.js and Console log)";
console.log("textContent: ", title.textContent);
document.title = title.textContent;

// change the title style
title.style.color = "black";
title.style.textAlign = "Center";
title.style.marginBottom = "50px";
title.style.fontSize = "27px";
console.log("Change the title Style: ", title.style);

// Document getElementsByClassName
let list_item = document.getElementsByClassName("list-item");
console.log("GetelementbyClassname: ", list_item);
// change the style with loop
for (i = 0; i < list_item.length; i++) {
   list_item[i].style.fontSize = "20px";
   list_item[i].style.marginBottom = "20px";
}

// Document getElementsByTag
let list_item_tag = document.getElementsByTagName("li");
console.log("From tag :", list_item_tag);

// Query Selector
let titel_query = document.querySelector(".title");
console.log("title query: ", titel_query);

let li_query = document.querySelector(".list-item:last-child");
li_query.style.color = "blue";

// Query Selector ALL
let li_query_all = document.querySelectorAll(".list-item");
for (let item of li_query_all) {
   item.style.color = "black";
}

// Parent Child Relation
const parent = document.querySelector("#parent");
const child = parent.children;
console.log("Parent Child Relation", child);

// Grand parent - Same out put with grand parent
const grandparent = document.querySelector(".main_content");
const g_parent = grandparent.children;
const g_child = g_parent[0].children;
console.log("Grandparent Parent Child Relation", g_child);

// Child to parent
const c_child = document.querySelector(".list");
const c_parent = c_child.parentElement;
console.log("Child to parent:", c_parent);

// child to grandparent
const cg_child = document.querySelector(".list");
const cg_grandparent = cg_child.closest(".main_content");
console.log("Child to grandparent:", cg_grandparent);

// Sibling next
const next_child_one = document.querySelector(".list-item");
const next_child_tow = next_child_one.nextElementSibling;
console.log("Sibling for list", next_child_tow);

// Sibling prev
const prev_child_tow = next_child_tow.previousElementSibling;
console.log("Sibling for list", prev_child_tow);

// Create Element
const divelement = document.createElement("div");
divelement.className = "structure";
divelement.setAttribute("id", "structure_element");

// insert to html before parent div
const container = document.querySelector(".main_content");
const container_parent = container.querySelector(".parent");
// for insert before parent div
container.insertBefore(divelement, container_parent);
// for insert after parent div ( we can you append , append is useful for text also )
// container.appendChild(divelement);
container.append(divelement);

// Event Listener
// == Click, dblclick, mousedown, mouseup, mouseenter, mouseleave,
// == mouseover, mouseout , keydown , keyup, foucus, cut, paste, input
const event_header = document.querySelector(".title");
event_header.addEventListener("click", (event) => {
   console.log("Click Event Title", event);
});

event_header.addEventListener("mouseout", (event) => {
   console.log("Mouse Out Title", event);
});
event_header.addEventListener("cut", (event) => {
   console.log("Cut Title", event);
});
