using Microsoft.AspNetCore.SignalR;

namespace SakuraChat.Hubs
{
    public class MainHub : Hub
    {
        public async Task SendMessage(string username, string message)
        {
            Console.Write("User: " + username + " Sent: " + message );
            await Clients.All.SendAsync("BroadcastMessage", username, message);
        }
    }
}
