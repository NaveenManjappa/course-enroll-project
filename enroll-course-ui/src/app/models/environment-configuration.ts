export interface EnvironmentConfiguration {
  env_name:string;
  production:boolean;
  apiUrl:string;
  apiEndpoints:{
    userProfile:string;
  },
  azb2cConfig:{
    clientId:string;
    readScopeUrl:string;
    scopeUrls:string[];
    writeScopeUrl:string;
    apiEndpointUrl:string;
  },
  cacheTimeInMins:number;
}