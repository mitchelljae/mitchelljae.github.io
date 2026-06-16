// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	image: {
    // Set global quality between 0 and 100 (or 'low', 'mid', 'high', 'max')
    service: {
      config: {
        quality: 90, // 👈 Bumps default optimization from 80 to 90
      }
    }
  }
});
