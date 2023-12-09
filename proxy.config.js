const API_URL = process.env.API_URL;
const GRAPHQL_URL = process.env.GRAPHQL_URL;

console.log(`API_URL = ${API_URL}`);
console.log(`GRAPHQL_URL = ${GRAPHQL_URL}`);

const PROXY_CONFIG = {
  '/api/*': {
    target: "http://84.54.44.140/",
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  },
  '/graphql/*': {
    target: GRAPHQL_URL,
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {
      '^/graphql': '/graphql'
    }
  }
};

module.exports = PROXY_CONFIG;
