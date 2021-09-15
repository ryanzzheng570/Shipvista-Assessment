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
                LastWateringTime = DateTime.Now.AddDays(-7),
                name = "Plant 1"
            },

            new Plants
            {
                Id = 2,
                LastWateringTime = DateTime.Now.AddDays(-5),
                name = "Plant 2"
            },
            new Plants
            {
                Id = 3,
                LastWateringTime = DateTime.Now.AddDays(-2),
                name = "Plant 3"
            },
            new Plants
            {
                Id = 4,
                LastWateringTime = DateTime.Now.AddHours(-2),
                name = "Plant 4"
            },
            new Plants
            {
                Id = 5,
                LastWateringTime = DateTime.Now,
                name = "Plant 5"
            },


        };

        [HttpGet]
        public IEnumerable<Plants> Get()
        {
            return plants;
        }
    }
}
