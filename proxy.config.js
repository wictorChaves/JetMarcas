const proxy = [
    {
      context: '/api/inpi/test',
      target: 'http://127.0.0.1:8000',
      pathRewrite: {'^/api/inpi/test' : ''}
    }
  ];
  module.exports = proxy;