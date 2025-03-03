import { links } from "/settings.js?import";
import { html } from "https://unpkg.com/lighterhtml?module";

function renderLink(link) {
  const classes = link.url
    ? link.url.replace(/[^a-z0-9]/gi, "-").toLowerCase()
    : "";
  return html`
    <li class=${classes}>
      <a href=${link.url}>
        ${link.img ? html`<img src=${link.img} alt=${link.altText} />` : ""}
        <div class="header">${link.header}</div>
        <div class="text">${link.text}</div>
      </a>
    </li>
  `;
}

export const renderLinks = html.node`
    <ul class="link-list">
      ${links.map(renderLink)}
    </ul>
  `;