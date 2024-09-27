"use strict";
exports.__esModule = true;
app.use(express.static('public', {
    setHeaders: function (res, path) {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));
require("./style.css");
var render_jokes_ts_1 = require("./view/render_jokes.ts");
render_jokes_ts_1.render_jokes();
