const content = document.querySelector("#content");

// Clear existing content to prevent duplicates
content.innerHTML = "";

// Section for creating elements
const headline = document.createElement("h1");
const supporting = document.createElement("p");

// Section for writing Content
headline.textContent = "Welcome To Bistro Huddy";

supporting.textContent =
  " Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.";

// Section for appending Content
content.appendChild(headline);
content.appendChild(supporting);
