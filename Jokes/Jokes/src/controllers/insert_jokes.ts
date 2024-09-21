interface Joke {
    id: number;
    joke: string;
    catagory: string;
}

export const jokes : Joke[] = [];

export function insert_jokes(){
    // const the_joke = document.getElementById("input_joke") as HTMLInputElement;
    // if (!the_joke) return console.error();

    const form = document.getElementById("form");
    if (!form) return console.error();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const the_joke = document.getElementById("input_joke") as HTMLInputElement;
        if (!the_joke) return console.error();

        const the_category = document.getElementById("select_catagory") as HTMLSelectElement;
        if (!the_category) return console.error();

        jokes.push({
            id: jokes.length + 1,
            joke: the_joke.value,
            catagory: the_category.value

        });

       console.log(jokes);

    });
        
    
    }