const { GITHUB_PERSONAL_ACCESS_TOKEN, ELEVENTY_ENV } = process.env;

const environmentSpecificVariables = {
  development: {
    // FIXME: don't hardcode port
    url: 'http://localhost:4001',
  },
  production: {
    url: 'https://affectionate-gates-1063aa.netlify.app/',
  },
};

const featureFlags = {
  enableComments: !!GITHUB_PERSONAL_ACCESS_TOKEN,
};

module.exports = {
  title: 'Aleksandr Hovhannisyan',
  author: 'Aleksandr Hovhannisyan',
  email: 'aleksandrhovhannisyan@gmail.com',
  description: 'Dev tutorials, thoughts on software development, and the occasional off-topic post.',
  keywords: ['Aleksandr Hovhannisyan'],
  issues: {
    owner: `pubrondeau`,
    repo: `alek`,
  },
  pagination: {
    itemsPerPage: 20,
  },
  featureFlags: {
    ...featureFlags,
  },
  ...environmentSpecificVariables[ELEVENTY_ENV],
};
