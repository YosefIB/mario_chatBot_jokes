const messagesContainer = document.getElementById('chatbot-messages') as HTMLDivElement;
if (!messagesContainer)
    throw new Error('Chatbot messages container not found');

let isRequestInProgress = false;   /* כדי לעצור את הצ'ט עד שמקבלים תשובה */

async function getBotResponse(userMessage) {      /*  פונקציה שפונה לשרת של CHATGPT */
    if (isRequestInProgress){
        alert('Please wait before sending another message.');
        return;
    }
    isRequestInProgress = true;
    const apiKey = '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'; // הכנס את המפתח שלך
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    try{
        
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
        }),
    });

    const data = await response.json();
    if (response.ok)
    {
        const botMessage = data.choices[0].message.content;
        addMessage('Bot', botMessage);
     }
     else
     {
        console.error('Error:', data);
        addMessage('Bot', 'Error: ' + (data.error?.message || 'Unknown error.'));

     }
    }
    catch (error){
        console.error('Error:', error);
        addMessage('Bot', 'Error: Unable to get bot response.');
    }
    finally{
        isRequestInProgress = false;
    }
}



function sendMessage() {
    const input = document.getElementById('message') as HTMLInputElement;
    const message = input.value.trim();
    console.log(message);
    if (message) {
        addMessage('User', message);
        getBotResponse(message);
        input.value = '';
    }
}

function addMessage(sender, message) {
    const div = document.createElement('div');
    div.textContent = `${sender}: ${message}`;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function handleAddClient(ev: any) {
    try {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const date = formData.get("date") as string;
        const yearOfBirth = new Date(date).getFullYear();

        const response = await fetch("/api/clients/add-client",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                yearOfBirth,

            })
        })

        if(response.ok){
            const data = await response.json();
            renderToTheDom(data._id ,firstName, lastName, email, phone, yearOfBirth);
            console.log(data);
            console.log("_idClient is:");
            console.log(data._id)
        } 

    } catch (err) {
        console.error(err);
    }
}

function renderToTheDom (_id: string, firstName: string, lastName: string, email: string, phone: string, yearOfBirth){
    try{
    const container = document.getElementById("show");
    if (!container)
        return console.error("Container not found");
    const div = document.createElement("div");
    div.className = "client";
    div.id = `client-${_id}`;
    div.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Year of Birth: ${yearOfBirth}</p>
        <button data-id="${_id}" onclick="handleDeleteClient(event)">Delete</button>
        <button data-id="${_id}" onclick="handleEditClient(event)">Edit</button>
        <p>--------------------------------------------------------------</p>
        <h1>
    `;
    container.appendChild(div);
}
    catch(err){
        console.error(err);
    }
}

async function handleShowClients(){
    try{
        const response = await fetch("/api/clients/get-all-clients");
        if(response.ok){
            const data = await response.json();
            console.log(data);
            data.clients.forEach((client: any) => {
                renderToTheDom(client._id ,client.firstName, client.lastName, client.email, client.phone, client.yearOfBirth);
            });
        }
    }
    catch(err){
        console.error(err);
    }
}

async function handleDeleteClient(event: any){
    try{
        const id = event.target.getAttribute("data-id");
        console.log(id);
        const response = await fetch(`/api/clients/delete-client/${id}`, {
            method: 'DELETE'
        });
        if(response.ok){
            console.log("Client deleted successfully");
            const divToRemove = document.getElementById(`client-${id}`);
            if(divToRemove) divToRemove.remove();
        }
    }
    catch(err){
        console.error(err);
    }
}

async function handleEditClient(event: any){
    try{
        const id = event.target.getAttribute("data-id");
        console.log(id);
        const div = document.getElementById(`client-${id}`);
        if(div){
            const firstName = prompt("Enter new first name:");
            const lastName = prompt("Enter new last name:");
            const email = prompt("Enter new email:");
            const phone = prompt("Enter new phone:");
            const yearOfBirth = prompt("Enter new year of birth:");
    }
    const response = await fetch(`/api/clients/edit-client/${id}`, {
        method: 'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth
        })
    });
}
    catch(err){
        console.error(err);
    }
}

handleShowClients();