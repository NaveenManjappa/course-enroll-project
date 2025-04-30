import { EnvironmentConfiguration } from "../app/models/environment-configuration";

const serverUrl = 'https://learnsmart-api.azurewebsites.net/api/';

export const environment:EnvironmentConfiguration = {
  env_name:'prod',
  production:true,
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