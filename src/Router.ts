export class Router{

  route = (request: Request) : Response => {
    
    const path = new URL(request.url).pathname;
    console.log("Request made to: ", path);

    switch(path){
      case "/": return new Response("High there ");
      case "/anand": return new Response("Hi there Anand!");
    }

    return new Response("Not found")
  }
}