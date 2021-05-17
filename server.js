const router = require("next/router");
const express = require("express");
const next = require("next");
const nextRoutes = require("next-routes");
const routes = nextRoutes();
const Router = routes.Router;
const Link = routes.Link;
const expressApp = express();
const port = 8080;
const app = next({ dev: false });

const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    /***Your expressApp routes here***/
    expressApp
        .use(async (req, res) => {
            handle(req, res);
        })
        .listen(port, err => {
            if (err) throw err;
            console.log(` Ready on http://localhost:${port}`);
        });
});
