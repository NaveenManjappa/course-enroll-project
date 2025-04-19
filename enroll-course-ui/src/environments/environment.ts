import { EnvironmentConfiguration } from "../app/models/environment-configuration";

const serverUrl = 'https://localhost:7271/api';

export const environment:EnvironmentConfiguration = {
  env_name:'dev',
  production:false,
  apiUrl:serverUrl,
  apiEndpoints:{
    userProfile:'user-profiles'
  },
  azb2cConfig:{
    clientId:'',
    readScopeUrl:'',
    writeScopeUrl:'',
    scopeUrls:['',''],
    apiEndpointUrl:'https://localhost:7271/api'
  },
  cacheTimeInMins:30
};