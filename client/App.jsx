import * as React from "react";
import { Provider } from "jotai";

import { Counter } from "./Counter";

const LazyChild = React.lazy(() => import("./Child"));

export function App() {
    return (
        <Provider>
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>React 18 Demo</title>
                </head>
                <body>
                    <h1>React 18 SSR Suspense Demo</h1>
                    <React.Suspense fallback="This content takes 5 seconds to load...">
                        <LazyChild />
                    </React.Suspense>
                    <Counter />
                    <script async src="/index.js" type="module"></script>
                </body>
            </html>
        </Provider>
    );
}
