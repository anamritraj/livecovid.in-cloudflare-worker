export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`Anand Amrit raj: ${request.method}`)
}
