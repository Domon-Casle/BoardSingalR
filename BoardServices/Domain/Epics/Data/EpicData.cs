using Domains.Enums;
using System;
using System.Collections.Generic;

namespace Domains.Epics.Data
{
    public static class EpicData
    {
        public static List<Epic> BuildEpics()
        {
            var epics = new List<Epic>
            {
                new Epic()
                {
                    PrimaryStakeHolder = "Phil",
                    Title = "Board",
                    Status = Status.Todo,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(7),
                    Priority = Priority.Medium,
                    TentSize = TentSize.Large
                },

                new Epic()
                {
                    PrimaryStakeHolder = "JD",
                    Title = "App",
                    Status = Status.Todo,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(2),
                    Priority = Priority.Low,
                    TentSize = TentSize.Small
                },

                new Epic()
                {
                    PrimaryStakeHolder = "Matt",
                    Title = "WebSite",
                    Status = Status.Todo,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddMonths(1),
                    Priority = Priority.High,
                    TentSize = TentSize.Medium
                },

                new Epic()
                {
                    PrimaryStakeHolder = "Phil",
                    Title = "Setup",
                    Status = Status.InProgress,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddMonths(1),
                    Priority = Priority.High,
                    TentSize = TentSize.Medium
                },

                new Epic()
                {
                    PrimaryStakeHolder = "JD",
                    Title = "Ideas",
                    Status = Status.Done,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now,
                    Priority = Priority.High,
                    TentSize = TentSize.Medium
                }
            };

            return epics;
        }
    }
}
