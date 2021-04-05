using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace BoardApi.Hubs
{
    public class DocumentHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
