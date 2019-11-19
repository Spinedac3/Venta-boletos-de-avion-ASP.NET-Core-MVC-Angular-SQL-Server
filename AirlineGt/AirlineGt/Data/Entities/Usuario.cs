using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data.Entities
{
    public class Usuario : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
