using Domains.Epics;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace BoardApi.Hubs
{
    public class DocumentHub : Hub
    {
        public async Task UpdateEpic(Epic epic, int oldStatus)
        {
            await Clients.Others.SendAsync("UpdateEpic", epic, oldStatus);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }

        public async Task setGroupQA()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "QA");
        }
    }
}
