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
                { label: 'Fleeting Thoughts', link: 'fleeting-thoughts' },
                {
                    label: 'Writeups',
                    items: [
                        { label: 'Thought from Terminal', slug: 'writeups/thought-from-terminal' },
                        { label: 'My Keyboard Layout', slug: 'writeups/my-keyboard-layout' },
                        { label: 'My Arch Mirror', slug: 'writeups/my-arch-mirror' },
                    ],
                },
				{
					label: 'Guides',
					items: [
						{ label: 'Encrypted Arch Install', slug: 'guides/encrypted-arch-install' },
						{ label: 'Markdown in nvim', slug: 'guides/markdown-in-nvim' },
					],

				},
                // {
                //     label: 'Outdoors',
                //     items: [
                //         { label: 'Gear', slug: 'outdoors/gear' },   
                //     ],
                // },
			],
		}),
	],
});
