const gitHop = {
  name: "GitHop",
  imgSrc: "githop.png",
  description: "FooBar's Venom Ale",
};
//This is the object that you should use to "populate" the template

//Step 1: Chose the <template>'s content
const templateElement = document.querySelector("#myBeerTemplate").content;

//Step 2: Make a "clone"
const myClone = templateElement.cloneNode(true);

//Step 3: Change the content of the clone
//use the data from the object above
myClone.querySelector("h1").textContent = gitHop.name;
myClone.querySelector("p").textContent = gitHop.description;
myClone.querySelector("img").src = gitHop.imgSrc;
//Step 4: Chose the new "parent" element
//Append it to main
const parentElement = document.querySelector("main");

//Step 5: Add (Append) the clone to the DOM
parentElement.appendChild(myClone);
