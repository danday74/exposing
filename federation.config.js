const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config')

// noinspection JSCheckFunctionSignatures
module.exports = withNativeFederation({

  name: 'exposing',

  exposes: {
    './Component': './src/app/app.component.ts',
    'MySharedLib2222': './src/app/exports/my-shared-lib-2222.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
})
