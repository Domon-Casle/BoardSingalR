using Domains.Enums;
using System;

namespace Domains.Base
{
    public abstract class BaseObject
    {
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Priority Priority { get; set; }
        public TentSize TentSize { get; set; }
        public Status Status { get; set; }
    }
}
