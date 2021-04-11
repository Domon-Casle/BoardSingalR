using System.Collections.Generic;

namespace Domains.Epics
{
    public class EpicsDomain
    {
        private EpicsRepository repo;

        public EpicsDomain()
        {
            repo = new EpicsRepository();
        }

        public IEnumerable<Epic> GetAll()
        {
            return repo.GetAll();
        }
    }
}
