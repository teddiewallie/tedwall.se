// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://tedwall.se',
	integrations: [
		starlight({
			title: 'Stuff on things',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/teddiewallie/tedwall.se' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Encrypted Arch Install', slug: 'guides/encrypted-arch-install' },
					],
				},
			],
		}),
	],
});
