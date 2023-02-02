//This is the object that you should use to "populate" the template
const gitHop = {
  name: "GitHop",
  imgSrc: "githop.png",
  description: "FooBar's Venom Ale",
};

function showProduct(gitHop){
//Step 1: Chose the <template>'s content
const template = document.querySelector("#gitHopTemplate").content;

//Step 2: Make a "clone"
const clone = template.cloneNode(true);
//Step 3: Change the content of the clone
//use the data from the object above (you can do this when the rest is working)

clone.querySelector("img").textContent = gitHop.img;
clone.querySelector("p").textContent = gitHop.description;

//Step 4: Chose the new "parent" element
//Append it to main

document.querySelector("#GitHop").appendChild(clone);

//Step 5: Add (Append) the clone to the DOM

parent.appendChild(clone);
}

