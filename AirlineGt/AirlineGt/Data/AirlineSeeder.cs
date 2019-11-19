using AirlineGt.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineGt.Data
{
    public class AirlineSeeder
    {
            private readonly AirlineContext ctx;
            private readonly UserManager<Usuario> userManager;


            public AirlineSeeder(AirlineContext ctx, UserManager<Usuario> UserManager) //admin todos los usuarios
            {
                this.ctx = ctx;
                userManager = UserManager;
            }

            public async Task LoginsAsync()
            {
                ctx.Database.EnsureCreated();     //indica que la bd esta creada y se ejecuta cuando la bd esta up

                //inserta usuario con la BD esta lista y levantada.
                Usuario user = await userManager.FindByEmailAsync("cperez@gmail.com");        //await se usa por la operacion asincrona, este metodo espera que todos los datos lleguen

                if (user == null)
                {
                    user = new Usuario()
                    {
                        LastName = "Carlos",
                        FirstName = "Perez",
                        Email = "cperez@gmail.com",
                        UserName = "CPerez"
                    };


                    var result = await userManager.CreateAsync(user, "P@ssw0rd");
                    if (result != IdentityResult.Success)
                    {
                        throw new InvalidOperationException("No se creo correctamente el usuario");
                    }

                }
            }

        }
    }
