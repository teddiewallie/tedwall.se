const prefixify = (path: string) => `/styleguide/${path}`;

const styleguideItems = {
  'Article': prefixify('article'),
  'Button': prefixify('button'),
  'Code Block': prefixify('code-block'),
  'Colors': prefixify('colors'),
  'Fonts': prefixify('fonts'),
  'Sidebar': prefixify('sidebar'),
  'Topbar': prefixify('topbar')
};

export default styleguideItems;

