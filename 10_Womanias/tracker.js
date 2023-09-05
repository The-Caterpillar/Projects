
// Period Tracker
const periodForm = document.getElementById("period-form");
const periodList = document.getElementById("period-list");

periodForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);

    const periodDuration = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

    const periodEntry = document.createElement("li");
    periodEntry.textContent = `Period: ${startDate.toDateString()} - ${endDate.toDateString()} (${periodDuration} days)`;
    periodList.appendChild(periodEntry);

    // Clear input fields
    document.getElementById("start-date").value = "";
    document.getElementById("end-date").value = "";
});

// Chatbot
const chatbot = document.getElementById("bot");
const chatHistory = document.createElement("ul");
chatHistory.classList.add("chat-history");
chatbot.appendChild(chatHistory);

function addUserMessage(message) {
    const messageEntry = document.createElement("li");
    messageEntry.textContent = `You: ${message}`;
    chatHistory.appendChild(messageEntry);
}

function addBotMessage(message) {
    const messageEntry = document.createElement("li");
    messageEntry.textContent = `Bot: ${message}`;
    chatHistory.appendChild(messageEntry);
}

// Simulate bot responses
function getBotResponse(userMessage) {
    // Add your bot logic here
    return "I'm a chatbot! How can I assist you today?";
}

// Handle user input and bot responses
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById("user-input");
        const userMessage = userInput.value;

        addUserMessage(userMessage);

        const botResponse = getBotResponse(userMessage);
        addBotMessage(botResponse);

        userInput.value = "";
    }
});