import { html } from "https://unpkg.com/lighterhtml?module";
import settings from "/settings.js?import";

export const renderFooter = html.node`<footer class="footer">
  <div class="tagline">
    Based on <a target="_top" href="https://glitch.com/edit/#!/remix/glitch-in-bio"
  >Glitch in Bio.</a>
  </div>
</footer>
`;
