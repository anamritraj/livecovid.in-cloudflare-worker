# livecovid.in API Workers

API for [livecovid.in-webapp](https://github.com/anamritraj/livecovid.in-webapp) which uses data from [livecovid.in-api](https://github.com/anamritraj/livecovind.in-api).

The reason why this exists is because I personally own a very teeny tiny server, and it was not able to respond within resonable time limits given the traffic these days. So this is an attempt to not buy more server capacity and save some bucks. (Which I think is inevitable).

This works by using cloudflare workers which is a pretty neat. What we are essentially doing in this repo is calling the source API(api.livecovid.in) and caching that data to cloudflare's global CDN (KV store, as they call it) for fast access.

To update these caches I am utilizing cron triggers which is another fetaure of cloudflare workers which enables you to run scripts at predefined intervals and update the cache(KV store) if you want to.

## 🔋 Getting Started


To start development..

1. Clone the repo to your local machine.
1. Setup [Wrangler](https://github.com/cloudflare/wrangler) which is the recommended way to deploy workers directly from your command line.

If you are not already familiar with the tool, I recommend that you install the tool and configure it to work with your [Cloudflare account](https://dash.cloudflare.com). Documentation can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

1. Create a new file `worker.toml` file in the root of the project. Copy the contents from `worker.toml.example` file
    ```bash
    cp worker.toml.example  worker.toml
    ```

1. Now since you already have `wrangler` cli installed, use this to get your accountID and add it in the `wrangler.toml` file.

    ```bash
    wrangler whoami
    ```
1. Generate KV namespaces using below command and add to your `wrangler.toml` file.

    ```bash
    wrangler kv:namespace create "YOUR_STORE_NAME"
    wrangler kv:namespace create "PROD_YOUR_STORE_NAME"
    ```
1. Finally you can test it locally using
    ```bash
    wrangler dev
    ```
7. Once you are ready, you can deploy to a `workers.dev` domain using
   ```bash
    wrangler publish
   ```
   You will see a URL in the output.
### 🧪 Testing

This template comes with mocha tests which simply test that the request handler can handle each request method. `npm test` will run your tests.

### ✏️ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `npm run format`.

### 👀 Previewing and Publishing

For information on how to preview and publish your worker, please see the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## 🤢 Issues

If you run into issues with this project, please feel free to file an issue [here](https://github.com/anamritraj/livecovid.in-cloudflare-worker/issues). 

If the problem is with Wrangler, please file an issue [here](https://github.com/cloudflare/wrangler/issues).

## Disclaimer

This is not an official government project. This is not associated in any way with my employer. I am not getting paid to do this. Also, I have no intentions of making money from this. This is created to keep people informed about the current state of Covid-19 in the country. If you need help, please call the emergency numbers listed on the [website here](https://www.mohfw.gov.in/) or call 100.

If you feel any information is missing or there is any error, please feel free to create [an issue](https://github.com/anamritraj/livecovid.in-webapp/issues/new) or reach out to me directly on [Twitter](https://twitter.com/anamritraj) and I would be happy to assist.

## Credits

This would not have been possible without the awesome guys at https://github.com/covid19india. I was initially scraping the MoHFW website, but then I got to know about them and since then this project internally calls their API. They are doing really awesome work maintaining a crowdsourced database of patients. Thanks to them for all the hard work!

## Meta

Anand – [@anamritraj](https://twitter.com/anamritraj) | [https://anandamritraj.in](anandamritraj.in) 

Distributed under the MIT license. See ``LICENSE`` for more information.