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
  title: 'Meilleur parrain',
  author: 'Emmmanuel Rondeau',
  email: 'super-parrain@jekife.fr',
  description: 'Meilleur site de Parrainage - Fortuneo, Boursorama, Rakuten, Vinted, Store et rideaux, Veepee',
  keywords: ['Emmanuel Rondeau'],
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
