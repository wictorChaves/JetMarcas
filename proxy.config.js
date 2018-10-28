const proxy = [
    {
      context: '/tmview/search-tmv',
      target: 'https://www.tmdn.org',
      pathRewrite: {'^/tmview/search-tmv' : ''}
    }
  ];
  module.exports = proxy;