using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace moviehub.Models
{
    public class User
    {
       [Key]
       public int Id { get; set; }
       public string Firstname { get; set; }
       public string Lastname { get; set; }
       public string Email { get; set; }
       public string Password { get; set; }
       public string Street { get; set; }
       public string City { get; set; }
       public string State { get; set; }
       public int Zipcode { get; set; }       
    }
}