//Model
class User {
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
     constructor(name: string, phone: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
 }
 }

// initialization
const userlocalStorage = localStorage.getItem("users");
let users: User[];
try {
    users = userlocalStorage ? JSON.parse(userlocalStorage) : [];
} catch (error) {
    console.error("Error parsing users from localStorage:", error);
    users = [];
}


const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const send_text = document.getElementById("masseges_to_the_user") as HTMLInputElement;
if (!email || !password || !send_text) throw new Error


// Controller
function check_login(event: Event){
    try{
        event.preventDefault();
        // check if the user is logged in
        for(let i=0; i<users.length; i++){
            if(users[i].email === email.value && users[i].password === password.value){
                send_text.textContent = "You are logged in!";
                // const nextPage = "../userMenu/userMenu.html";
                window.location.href = "http://localhost:3000/mainPage";
                let enterUser = users[i].name;

                let userIn= users[i];

                localStorage.setItem("username_login_in", JSON.stringify(userIn));
                localStorage.setItem('enterUser', JSON.stringify(enterUser));
                console.log(`the user `+ enterUser +  `is logged in`);
                break;
            }
        }

        send_text.textContent = "Invalid email or password!";

    }
    catch(error){
        console.error("Error while accessing local storage: ", error);
    }
}

function register(){
    window.location.href = "http://localhost:3000/register";
}

// View



const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // הצגת הודעת המשתמש בצ'אט
    appendMessage('user', userMessage);
    userInput.value = '';

    try {
        // שליחת הודעת המשתמש לשרת וקבלת תשובת הבוט
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();
        appendMessage('bot', data.botResponse);
    } catch (error) {
        appendMessage('bot', 'שגיאה בחיבור לשרת.');
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // גלילה לתחתית הצ'אט
}