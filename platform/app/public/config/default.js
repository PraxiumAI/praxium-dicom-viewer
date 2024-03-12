window.config = () => {
  return {
    routerBasename: '/',
    customizationService: {
      dicomUploadComponent:
        '@ohif/extension-cornerstone.customizationModule.cornerstoneDicomUploadComponent',
    },
    whiteLabeling: {
      createLogoComponentFn: function (React) {
        return React.createElement(
          'a',
          {
            className: 'text-white',
            href: '#',
          },
          React.createElement('h5', {}, 'Praxium')
        );
      },
    },
    enableGoogleCloudAdapter: false,
    // below flag is for performance reasons, but it might not work for all servers
    showWarningMessageForCrossOrigin: true,
    showCPUFallbackMessage: true,
    showLoadingIndicator: true,
    strictZSpacingForVolumeViewport: true,
    // This is an array, but we'll only use the first entry for now
    oidc: [
      {
        // ~ REQUIRED
        // Authorization Server URL
        authority: 'https://accounts.google.com',
        client_id: '794553766638-sth0me9q4jbsev0t7ongmp6662ujmib2.apps.googleusercontent.com',
        redirect_uri: '/callback',
        response_type: 'id_token token',
        scope:
          'email profile openid https://www.googleapis.com/auth/cloudplatformprojects.readonly https://www.googleapis.com/auth/cloud-healthcare', // email profile openid
        // ~ OPTIONAL
        post_logout_redirect_uri: '/logout-redirect.html',
        revoke_uri: 'https://accounts.google.com/o/oauth2/revoke?token=',
        automaticSilentRenew: true,
        revokeAccessTokenOnSignout: true,
      },
    ],
    extensions: [],
    modes: [],
    showStudyList: true,
    // filterQueryParam: false,
    defaultDataSourceName: 'dicomweb',
    dataSources: [
      {
        namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
        sourceName: 'dicomweb',
        configuration: {
          friendlyName: 'dcmjs DICOMWeb Server',
          name: 'GCP',
          wadoUriRoot:
            'https://healthcare.googleapis.com/v1/projects/nyukat/locations/europe-west3/datasets/art-test/dicomStores/art-test-store/dicomWeb',
          qidoRoot:
            'https://healthcare.googleapis.com/v1/projects/nyukat/locations/europe-west3/datasets/art-test/dicomStores/art-test-store/dicomWeb',
          wadoRoot:
            'https://healthcare.googleapis.com/v1/projects/nyukat/locations/europe-west3/datasets/art-test/dicomStores/art-test-store/dicomWeb',
          qidoSupportsIncludeField: true,
          imageRendering: 'wadors',
          thumbnailRendering: 'wadors',
          enableStudyLazyLoad: true,
          supportsFuzzyMatching: true,
          supportsWildcard: false,
          dicomUploadEnabled: true,
          omitQuotationForMultipartRequest: true,
          configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
        },
      },
    ],
  };
};
