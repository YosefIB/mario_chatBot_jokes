import { insert_jokes } from "../controllers/insert_jokes";
import { jokes } from "../controllers/insert_jokes";


export function render_jokes() {
  //  insert_jokes();
    const print = document.createElement("div");
    if (!print) return console.error();
// getbyid("print_to_screen")
// 
   
  // print.className = "jokes";
//   print.innerHTML += `<div class="joke">
 //   <h2>asdasdsa</h2>
  //  </div>`;

//jokes.foreach {innerhtml += h1- joke num{$id} - br-catagory $catagory the joke is {$text} 

    document.body.appendChild(print);
 
}


// petDiv.className = "pet";
// petDiv.innerHTML = `
// <div class="pet__name">
//     <h2>${pet.name}</h2>
//     <input type="text" value="${pet.name}" onkeyup="handleUpdateName(event, '${pet.id}')">
// </div>
// <img src="${pet.imageUrl}" alt="${pet.name}">
// <p>${pet.species}</p>
// <button onclick="handleDelete('${pet.id}')">Delete</button>
// `;