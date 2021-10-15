import * as React from 'react';

import express from "express";
import { renderToPipeableStream } from "react-dom/server";

import { App } from "../client/App";

const server = express();

server.use(express.static("./public"));

server.get("/", function (_request, response) {
    const { pipe, abort } = renderToPipeableStream(
        <App />
    );

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(`<!DOCTYPE html>`);

    pipe(response);
});

server.listen(3001, function () {
    console.log("Running...");
});
