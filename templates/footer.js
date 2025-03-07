import { html } from "https://unpkg.com/lighterhtml?module";
import settings from "/settings.js?import";

export const renderFooter = html.node`<hr class="hr-footer" data-content="X">
<footer class="footer">
  <div class="tagline">
    Based on the excellent <a target="_top" href="https://glitch.com/edit/#!/remix/glitch-in-bio"
  >Glitch in Bio.</a>
  </div>
</footer>
`;
