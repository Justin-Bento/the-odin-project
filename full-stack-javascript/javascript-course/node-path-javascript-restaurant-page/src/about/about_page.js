export const about_page = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating elements
  const headline = document.createElement("h1");
  const supporting = document.createElement("p");

  // Section for writing Content
  headline.textContent = "About Bistro Huddy";

  supporting.textContent =
    "Bistro Huddy is a creative endeavour by Drew Talbert and Andrea Kelley. This fictional restaurant brings laughter and joy to its audience through humour and storytelling.";

  // Section for appending Content
  content.appendChild(headline);
  content.appendChild(supporting);
};
