// function showRegisterLoginMenu(){
//     try{
//         const button = document.getElementById('loginRegisterButton') as HTMLElement;
//         const openMenu = document.getElementById('openMenu') as HTMLElement;

//         button.addEventListener('mouseenter', () => {
//             openMenu.style.display = 'block'; // הצג את האלמנט
//         });

//         // button.addEventListener('mouseleave', () => {
//         // openMenu.style.display = 'none'; // החבא את האלמנט
//         // });
//     }
//     catch(error){
//         console.error('Error:', error);
//     }
// }
alert("asd");
// showRegisterLoginMenu()

// import React, { useState } from 'react';
// import Chatbot from 'react-chatbot';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// function MyChatbot() {
//   const [messages, setMessages] = useState([]);

//   const handleUserInput = async (userInput) => {
//     setMessages([...messages, { role: 'user', content: userInput }]);

//     const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: userInput,
//       max_tokens: 100,
//       n: 1,
//       stop: null,
//       temperature: 0.5,
//     });

//     setMessages([...messages, { role: 'assistant', content: response.data.choices[0].text }]);
//   };

//   return (
//     <Chatbot
//       steps={[
//         {
//           id: 'greet',
//           message: 'Hello, how can I help you?',
//         },
//       ]}
//       user={{ avatar: 'bot', name: 'Chatbot' }}
//       handleUserInput={handleUserInput}
//       messages={messages}
//     />
//   );
// }

// MyChatbot();


const newMessage = document.createElement('p');
newMessage.textContent = 'הודעה חדשה';
const chatContainer = document.getElementById('chat-container');
chatContainer.appendChild(newMessage);
const chatContainer = document.getElementById('chat-container');
chatContainer.innerHTML += '<p>הודעה חדשה</p>';
