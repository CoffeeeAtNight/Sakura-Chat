using Microsoft.AspNetCore.SignalR;

namespace SakuraChat.Hubs
{
    public class MainHub : Hub
    {
        public async Task SendMessage(string username, string message)
        {
            await Clients.All.SendAsync("BroadcastMessage", username, message);
        }
    }
}
