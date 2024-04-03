import { Configuration } from '@congarevenuecloud/core';

export const environment: Configuration = {
  production: false,
  defaultImageSrc: 'assets/images/conga.png',
  defaultCountry: 'US',
  defaultLanguage: 'en-US',
  defaultCurrency: 'USD',
  productIdentifier: 'Id',
  hashRouting: true,
  lineItemPageSize: 500,
  toasterTimeout: 2000,
  captchaSiteKey: 'conga',
  storefrontId: '80cba99b-dcff-46f6-b770-ba9e351fed8c',
  endpoint: 'https://preview-rls09.congacloud.com',
  loginEndpoint: 'https://login-rlspreview.congacloud.com',
  clientId: 'a07b0ecd-49fb-4d25-aec8-6dacd4dcf876',
  // clientId: 'cnga-int-ps-tnt1',
  // clientId: 'rls-preview-spa',
  authority: 'https://login-rlspreview.congacloud.com/api/v1/auth',
  userId: 'f7ab823c-7533-4334-9484-283790810023'
};