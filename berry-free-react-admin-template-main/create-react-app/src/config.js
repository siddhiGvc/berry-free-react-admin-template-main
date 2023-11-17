const config = {
  // basename: only at build time to set, and don't add '/' at end off BASENAME for breadcrumbs,  like '/berry-material-react/react/default'
  basename: '/free',
  defaultPath: '/dashboard/default',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  outlinedFilled: true,
  theme: 'light',
  i18n: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false,
  jwt: {
      secret: 'SECRET-KEY',
      timeout: '1 days'
  },
  firebase: {
      apiKey: 'apiKey',
      authDomain: 'authDomain',
      projectId: 'berry-material-react',
      storageBucket: 'berry-material-react.appspot.com',
      messagingSenderId: 'messagingSenderId',
      appId: 'appId',
      measurementId: 'measurementId'
  },
  auth0: {
      client_id: 'client_id',
      domain: 'demo-localhost.us.auth0.com'
  }
};

export default config;