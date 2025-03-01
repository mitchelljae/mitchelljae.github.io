import { html } from "https://unpkg.com/lighterhtml?module";
import settings from "/settings.js?import";

export const renderFooter = html.node`<footer class="footer">
  <div class="tagline">
    Based on <a class="btn--remix" target="_top" href="https://glitch.com/edit/#!/remix/glitch-in-bio"
  >Glitch in Bio.</a>
  </div>
  <a
    class="btn--remix"
    target="_top"
    href="https://glitch.com/edit/#!/remix/glitch-in-bio"
  >
    <img
      src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
      alt=""
    />
    Get your own free page
  </a>
</footer>
`;
