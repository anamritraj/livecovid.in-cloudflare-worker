declare const STORE: KVNamespace

export class Store{
  
  static put = async (key: string, value:  string | ReadableStream<any> | ArrayBuffer | FormData) => {
    console.log("Writing to the KV", key, value);
    await STORE.put(key, value);
  }

  static get = async (key: string) => {
    console.log("Getting from KV", key);
    return await STORE.get(key, "text");
  }

  static list = async(prefix: string) => {
    return STORE.list({prefix, cursor:undefined});
  }
}