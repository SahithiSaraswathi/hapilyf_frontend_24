const {createProxyMiddleware} = require('http-proxy-middleware');
const BASE_URL="https://hapilyf.onrender.com"
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // 👇️ make sure to update your target
      target: `${BASE_URL}`,
      changeOrigin: true,
    }),
  );
};
