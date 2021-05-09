import { Store } from "../Store";
import {URL_CONSTANTS, KV_CONSTANTS} from "../constants/constants"
export const processCronTrigger = async () => {
  console.log("Processing the cron event..");
  await fetchFromOriginAndSaveInKV(URL_CONSTANTS.V1.STATE, KV_CONSTANTS.V1.STATE);
  await fetchFromOriginAndSaveInKV(URL_CONSTANTS.V1.STATES_TESTING, KV_CONSTANTS.V1.STATES_TESTING);
  await fetchFromOriginAndSaveInKV(URL_CONSTANTS.V1.DISTRICTS, KV_CONSTANTS.V1.DISTRICTS);
  await fetchFromOriginAndSaveInKV(URL_CONSTANTS.V1.INDIA_TIMESERIES, KV_CONSTANTS.V1.INDIA_TIMESERIES);
  await fetchFromOriginAndSaveInKV(URL_CONSTANTS.V1.RACECHART, KV_CONSTANTS.V1.RACECHART);
  await fetchFromOriginAndSaveInKV(URL_CONSTANTS.V1.STATES_TIMESERIES, KV_CONSTANTS.V1.STATES_TIMESERIES);
  console.log("Completed all and saved in KV..");
  return new Response('OK');
}

const fetchFromOriginAndSaveInKV = async(originUrl: string, KVKey: string) => {
  let response = await fetch(originUrl);
  if(response.status === 200){
    console.log("Got data from : ", originUrl);
    let data = await response.text();
    await Store.put(KVKey, data);
  }else{
    console.log("There was an error in fetching response from origin: ", originUrl);
  }
}