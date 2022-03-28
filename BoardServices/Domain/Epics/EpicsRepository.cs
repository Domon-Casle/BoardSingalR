using Domains.Epics.Data;
using System.Collections.Generic;

namespace Domains.Epics
{

    public class EpicsRepository
    {
        private static List<Epic> epics;

        public IEnumerable<Epic> GetAll()
        {
            epics = epics != null ? epics : EpicData.BuildEpics();
            return epics;
        }

        public IEnumerable<Epic> Update(Epic epic)
        {
            var changedEpic = epics.Find(x => x.Id == epic.Id);
            changedEpic.Status = epic.Status;
            return epics;
        }
    }

}
