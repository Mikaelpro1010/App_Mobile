import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const API_KEY = "AIzaSyArPQMjVASSz6kCTJYJ3HN807Kt3vhdrm8";
  const MODEL_NAME = "gemini-1.5-pro-latest";

  const runChat = async () => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chat.sendMessage(inputText);
    const response = result.response;
    setResponseText(response.text());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat Screen</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5, width: '80%' }}
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button
        title="Send"
        onPress={runChat}
      />
      {responseText !== '' && (
        <Text style={{ margin: 10, padding: 5, borderWidth: 1, width: '80%', textAlign: 'center' }}>
          {responseText}
        </Text>
      )}
    </View>
  );
};

export default Chatbot;
