
This example shows how to integrate [react-azure-maps](https://www.npmjs.com/package/react-azure-maps) into your [Next.js](https://nextjs.org/) application.

## Prerequisite

1. Install [react-azure-maps](https://www.npmjs.com/package/react-azure-maps) to your `dependencies`.
```
yarn add react-azure-maps
```

2. Import the following style sheet to your component or page
```js
import 'azure-maps-control/dist/atlas.min.css'
```

3. Since [azure-maps-control](https://www.npmjs.com/package/azure-maps-control) is a client side library and it cannot be imported in your server side code. Therefore, you will need to use [next/dynamic](https://nextjs.org/docs/advanced-features/dynamic-import) to load your Map component at client side.

```ts
// pages/index.tsx
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Home: NextPage = () => <DynamicMap />;

export default Home;
```


## How to run this demo

1. Update your AzureMaps [subscriptionKey](https://docs.microsoft.com/en-us/azure/azure-maps/quick-demo-map-app#get-the-primary-key-for-your-account) in `/components/Map.tsx``

2. Run the development server
```bash
yarn dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

