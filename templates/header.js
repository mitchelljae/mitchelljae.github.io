import { html } from "https://unpkg.com/lighterhtml?module";
import settings from "/settings.js?import";

export const renderHeader = html.node`<div class="header">
  <div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1>${settings.name}</h1>
</div>`;