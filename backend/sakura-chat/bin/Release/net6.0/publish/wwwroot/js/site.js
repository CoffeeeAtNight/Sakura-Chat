if (location.pathname.includes("Privacy"))
{
    const username = sessionStorage.getItem("sakurachat_username");
    if (username == "") window.location.href = "/";

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/chat")
        .build();

    connection.on("BroadcastMessage", (username, message) => {
        const messagesList = document.getElementById("messages");
        const li = document.createElement("li");
        li.textContent = `${username}: ${message}`;
        messagesList.appendChild(li);
    });

    document.getElementById("sendMessageBtn").addEventListener("click", () => {
        const message = document.getElementById("inputMessage").value;
        connection.invoke("SendMessage", username, message);
    });

    connection.start().then(() => {
        console.log("Connection established.");
    }).catch(err => {
        console.error("Error while establishing connection:", err);
    });
}