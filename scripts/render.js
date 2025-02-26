// Importing modules and functions
import { html, render } from "lighterhtml";
import { renderFooter } from "../templates/footer.js";

const head = document.getElementsByTagName("head")[0];
head.appendChild(renderMeta);

// Getting a reference to the content div
const contentDiv = document.getElementById("content");

// Define an array of sections to be added
const sections = [renderHeader, renderLinks, renderSocialIcons, renderFooter];

// Iterate over sections and append them to contentDiv
sections.forEach((section) => contentDiv.appendChild(section));