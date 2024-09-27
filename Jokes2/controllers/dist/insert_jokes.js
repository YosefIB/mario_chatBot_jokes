"use strict";
exports.__esModule = true;
exports.insert_jokes = exports.jokes = void 0;
exports.jokes = [];
function insert_jokes() {
    // const the_joke = document.getElementById("input_joke") as HTMLInputElement;
    // if (!the_joke) return console.error();
    var form = document.getElementById("form");
    if (!form)
        return console.error();
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var the_joke = document.getElementById("input_joke");
        if (!the_joke)
            return console.error();
        var the_category = document.getElementById("select_catagory");
        if (!the_category)
            return console.error();
        exports.jokes.push({
            id: exports.jokes.length + 1,
            joke: the_joke.value,
            catagory: the_category.value
        });
        console.log(exports.jokes);
        //function render the aray to the dom , render_array , call the function
    });
}
exports.insert_jokes = insert_jokes;
