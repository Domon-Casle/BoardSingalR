using Domains.Enums;
using System;

namespace Domains.Base
{
    public abstract class BaseObject
    {
        protected string Title { get; set; }
        protected DateTime StartDate { get; set; }
        protected DateTime EndDate { get; set; }
        protected Priority MyProperty { get; set; }
        protected TentSize TentSize { get; set; }
        protected Status Status { get; set; }
    }
}
