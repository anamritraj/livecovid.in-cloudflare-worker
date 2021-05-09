import { ROUTES } from "./constants/constants";
import { processCronTrigger } from "./cron-workers/cronWorkers";
import { LiveCovidApiV1Handler } from "./handlers/LiveCovidApiV1Handler";

export class Router {

  static route = async (request: Request): Promise<Response> => {

    const path = new URL(request.url).pathname;
    console.log("Request made to: ", path);
    const API_VERSION_PREFIX = `/${path.split("/")[1]}/`;

    switch (API_VERSION_PREFIX) {
      case ROUTES.V1_PREFIX: return LiveCovidApiV1Handler.handleRequest(path);
    }
    
    return new Response("Not found", {
      status: 404,
      statusText: "NOT_FOUND"
    })
  }
}