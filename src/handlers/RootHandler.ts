import { Store } from "../Store"

export const standardHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*'
};

export class RootHandler{
  static handleRoot = async () => {

    let response = await fetch(`https://api.rootnet.in/covid19-in/stats/history`);
    if (response.status === 200) {
      console.log(response.status);
      let data = await response.text();
      await Store.put("key", data);
    } else {
      await Store.put("key", "There was an error fetching the information from the API");
    }
    return new Response("Saved the data");
  }
}

export const returnSuccessResponse = (response: string, headers: {[key: string]: string}) => {
  return new Response(response, {
    statusText: "OK",
    status: 200,
    headers: {
      ...standardHeaders,
      ...headers
    }
  })
}
export const returnErrorResponse = (headers?: {[key: string]: string}) => {
  return new Response(`{"msg": "There was an error from the API"}`, {
    status: 500,
    statusText: "FAILED",
    headers: {
      ...headers
    }
  })
}