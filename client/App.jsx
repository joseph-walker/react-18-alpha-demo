import * as React from "react";

const Child = React.lazy(() => import("./Child"));

export function App() {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>React 18 Demo</title>
            </head>
            <body>
                <React.Suspense fallback="Loading...">
                    <Child />
                </React.Suspense>
                <script async src="/index.js" type="module"></script>
            </body>
        </html>
    );
}
