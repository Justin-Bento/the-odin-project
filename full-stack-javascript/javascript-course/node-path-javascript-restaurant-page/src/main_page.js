export const main_page = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating elements
  const headline = document.createElement("h1");
  const supporting = document.createElement("p");
  const title = document.createElement("h2");
  const subtitle_appetizers = document.createElement("h3");
  const subtitle_SoupsSalads = document.createElement("h3");
  const subtitle_Entrees = document.createElement("h3");
  const subtitle_Desserts = document.createElement("h3");
  const subtitle_Drinks = document.createElement("h3");

  // Section for writing Content
  headline.textContent = "Welcome To Bistro Huddy";
  title.textContent = "Bistro Huddy Menu";
  subtitle_appetizers.textContent = "Appetizers";
  subtitle_SoupsSalads.textContent = "Soups & Salads";
  subtitle_Entrees.textContent = "Entrees";
  subtitle_Desserts.textContent = "Desserts";
  subtitle_Drinks.textContent = "Drinks";

  supporting.textContent =
    "Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.";

  // Section for appending Content
  content.appendChild(headline);
  content.appendChild(supporting);
  content.appendChild(title);
  content.appendChild(subtitle_appetizers);
  content.appendChild(subtitle_SoupsSalads);
  content.appendChild(subtitle_Entrees);
  content.appendChild(subtitle_Desserts);
  content.appendChild(subtitle_Drinks);
};
