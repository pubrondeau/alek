const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItKatex = require('@iktakahiro/markdown-it-katex');
const markdownItClass = require('@toycode/markdown-it-class');
const markdownItTocDoneRight = require('markdown-it-toc-done-right');
const markdownItLinkAttributes = require('markdown-it-link-attributes');
const { slugifyString } = require('../utils');

const markdownLib = markdownIt({
  html: true,
  breaks: false,
  linkify: true,
})
  .use(markdownItPrism, {
    defaultLanguage: 'plaintext',
  })
  .use(markdownItAttrs)
  .use(markdownItTocDoneRight, {
    placeholder: `{:toc}`, // same as Jekyll
    slugify: slugifyString,
    containerId: 'toc',
    listClass: 'list toc-list',
    itemClass: 'toc-item',
    linkClass: 'toc-link',
    listType: 'ol',
  })
  .use(markdownItClass, {
    ol: 'list',
    ul: 'list',
    blockquote: 'rhythm',
  })
  .use(markdownItAnchor, {
    slugify: slugifyString,
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink({
      class: 'to-underline',
    }),
  })
  .use(markdownItLinkAttributes, {
    // Only external links (explicit protocol; internal links use relative paths)
    pattern: /^https?:/,
    attrs: {
      target: '_blank',
      rel: 'noreferrer noopener',
    },
  })
  .use(markdownItKatex, {
    strict: false,
    throwOnError: true,
  });

module.exports = markdownLib;
