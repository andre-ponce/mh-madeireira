module.exports = {
  images: {
    domains: [
      'static.maximaweb.com.br',
      'maximaweb.s3.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/linha/:id/:slug',
        destination: '/:slug/l/:id',
        permanent: true,
      },
      {
        source: '/sub-departamento/:id/:slug',
        destination: '/:slug/s/:id',
        permanent: true,
      },
      {
        source: '/departamento/:id/:slug',
        destination: '/:slug/d/:id',
        permanent: true,
      },
      {
        source: '/marca/:id/:slug',
        destination: '/:slug/m/:id',
        permanent: true,
      },
      {
        source: '/produto/:id/:sub/:dep/:slug',
        destination: '/:slug/p/:id',
        permanent: true,
      },
      {
        source: '/produto/:id/:dep/:slug',
        destination: '/:slug/p/:id',
        permanent: true,
      },
      {
        source: '/produto/:id/:slug',
        destination: '/:slug/p/:id',
        permanent: true,
      },
    ];
  },
};
