import { RootHandler } from "./handlers/RootHandler";

export class Router{

  static route = async (request: Request) : Promise<Response> => {
    
    const path = new URL(request.url).pathname;
    console.log("Request made to: ", path);

    switch(path){
      case "/": return RootHandler.handleRoot();
      case "/anand": return RootHandler.handleAnand();
    }

    return new Response("Not found")
  }
}