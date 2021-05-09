import { KV_CONSTANTS, ROUTES } from "../constants/constants";
import { Store } from "../Store"
import { returnErrorResponse, returnSuccessResponse, standardHeaders } from "./RootHandler";

export class LiveCovidApiV1Handler {

  static handleRequest = async (path: string) => {
    const cacheGetStart = Date.now();
    try{
      let response;
      switch (path) {
        case ROUTES.V1.STATE:
          response = await LiveCovidApiV1Handler.getValueFromKVStore(KV_CONSTANTS.V1.STATE);
          break;
        case ROUTES.V1.STATES_TESTING:
          response = await LiveCovidApiV1Handler.getValueFromKVStore(KV_CONSTANTS.V1.STATES_TESTING);
          break;
        case ROUTES.V1.DISTRICTS:
          response = await LiveCovidApiV1Handler.getValueFromKVStore(KV_CONSTANTS.V1.DISTRICTS);
          break;
        case ROUTES.V1.INDIA_TIMESERIES:
          response = await LiveCovidApiV1Handler.getValueFromKVStore(KV_CONSTANTS.V1.INDIA_TIMESERIES);
          break;
        case ROUTES.V1.RACECHART:
          response = await LiveCovidApiV1Handler.getValueFromKVStore(KV_CONSTANTS.V1.RACECHART);
          break;
        case ROUTES.V1.STATES_TIMESERIES:
          response = await LiveCovidApiV1Handler.getValueFromKVStore(KV_CONSTANTS.V1.STATES_TIMESERIES);
          break;
      }
  
      const cacheGetTimeTaken = Date.now() - cacheGetStart;
  
      if(response){
        return returnSuccessResponse(response, {
          "Server-Timing": `cache;time-taken=${cacheGetTimeTaken}`
        });
      }else{
        throw new Error("Emtpy response");
      }
    }catch{
      return returnErrorResponse();
    }
  }

  static getValueFromKVStore = async (path: string) => {
    return await Store.get(path);
  }
}