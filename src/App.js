import React, { useEffect, useState } from "react";
import chatbot from './chatbotimage.png';
import './App.css';
import { ThemeProvider } from 'styled-components';
import ChatbotIndex from "./components/ChatbotIndex.js";


function App() {
  const [ChatBot, setChatBot] = useState(<ChatbotIndex />);

  useEffect(() => {
    setChatBot(<ChatbotIndex/>);
  },[]);


  const theme = {
    background: '#f4f4f4',
    fontFamily: `"Montserrat", sans-serif`,
    headerBgColor: '#000',
    headerFontColor: '#E7EDEE',
    headerFontSize: '20px',
    headerTitle: '10px',
    botBubbleColor: '#DCDCDC',
    userBubbleColor: '#000',
    userFontColor: '#f4f4f4',
    userFontSize: '5px',
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={chatbot} className="App-logo" alt="logo" />
        <p>
         React simple chat bot library
        </p>
        <a
          className="App-link"
          href="https://lucasbassetti.com.br/react-simple-chatbot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Simple Chatbot
        </a>
      </header>
      <ThemeProvider theme={theme}>{ ChatBot }</ThemeProvider>
    </div>
  );
}

export default App;
