using Domains.Epics.Data;
using System.Collections.Generic;

namespace Domains.Epics
{

    public class EpicsRepository
    {
        public IEnumerable<Epic> GetAll()
        {
            return EpicData.BuildEpics();
        }
    }

}
