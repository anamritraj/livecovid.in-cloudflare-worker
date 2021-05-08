import { Store } from "../Store"

export class RootHandler{
  static handleRoot = async () => {
    await Store.put("key", "root value");
    return new Response("Edited the KV pair");
  }

  static handleAnand = async () => {
    const response = await Store.get("key");
    return new Response("got response from kv: " + response );
  }
}