using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipvistaAssessment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlantsController : ControllerBase
    {
        private static Plants[] plants = new Plants[]
        {
            new Plants
            {
                Id = 1,
                LastWateringTime = DateTime.Now.AddDays(-7)
            },

            new Plants
            {
                Id = 2,
                LastWateringTime = DateTime.Now.AddDays(-5)
            },
            new Plants
            {
                Id = 3,
                LastWateringTime = DateTime.Now.AddDays(-2)
            },
            new Plants
            {
                Id = 4,
                LastWateringTime = DateTime.Now
            },
            new Plants
            {
                Id = 5,
                LastWateringTime = DateTime.Now
            },


        };

        [HttpGet]
        public IEnumerable<Plants> Get()
        {
            return plants;
        }
    }
}
