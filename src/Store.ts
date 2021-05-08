declare const STORE: KVNamespace

export class Store{
  
  put = async (key: string, value:  string | ReadableStream<any> | ArrayBuffer | FormData) => {
    STORE.put(key, value);
  }

  get = async (key: string) => {
    STORE.get(key, "text");
  }

  list = async(prefix: string) => {
    STORE.list({prefix, cursor:undefined});
  }
}