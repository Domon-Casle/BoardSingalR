using Domains.Epics;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BoardApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EpicsController : ControllerBase
    {
        private EpicsDomain domain;

        public EpicsController()
        {
            domain = new EpicsDomain();
        }

        [HttpGet("GetAll")]
        public IEnumerable<Epic> GetAll()
        {
            return domain.GetAll();
        }
    }
}
