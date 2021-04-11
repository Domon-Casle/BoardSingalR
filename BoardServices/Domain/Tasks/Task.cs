using Domains.Base;

namespace Domains.Tasks
{
    public class Task: BaseObject
    {
        public string DevResource { get; set; }
        public string QAResource { get; set; }
    }
}
