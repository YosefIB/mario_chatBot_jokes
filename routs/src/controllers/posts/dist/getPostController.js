"use strict";
exports.__esModule = true;
exports.getPost = void 0;
var postsModels_1 = require("../../model/posts/postsModels");
function getPost(req, res) {
    res.json({ posts: postsModels_1.posts });
}
exports.getPost = getPost;
