module.exports = ({
  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: 'http://nginx/api/:path',
      },
      {
        source: '/api/admin/auth/:path',
        destination: 'http://nginx/api/admin/auth/:path',
      },
      {
        source: '/api/admin/:path',
        destination: 'http://nginx/api/admin/:path',
      },
    ]
  },
})
