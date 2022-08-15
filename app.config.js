const config = {
  expo: {
    version: 'APP_VERSION',
    name: 'App Name',
    slug: 'appname',
    owner: 'Joshua Hauth',
    scheme: 'appname',
    privacy: 'hidden',
    platforms: ['ios', 'android'],
    orientation: 'portrait',
    backgroundColor: '#ffffff',
    primaryColor: '#fd7154',
    icon: './src/assets/images/icon.png',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      checkAutomatically: 'ON_LOAD',
    },
    assetBundlePatterns: ['**/*'],
  },
};

export default config;
