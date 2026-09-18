namespace LoginApi.Data.Seed
{
    using System.Text.Json;
    using Microsoft.AspNetCore.Identity;

    public static class DatabaseSeeder
    {
        public static async Task SeedAsync(
            UserManager<UserEntity> userManager,
            RoleManager<RoleEntity> roleManager,
            IWebHostEnvironment environment)
        {
            var filePath = Path.Combine(
                environment.ContentRootPath,
                "Data",
                "Seeder",
                "seed.json");

            if (!File.Exists(filePath))
            {
                return;
            }

            var json = await File.ReadAllTextAsync(filePath);

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            var seedData = JsonSerializer.Deserialize<SeedData>(json, options);

            if (seedData == null)
            {
                return;
            }





            foreach (var roleData in seedData.Roles)
            {
                var roleExists = await roleManager.RoleExistsAsync(roleData.Name);

                if (!roleExists)
                {
                    var role = new RoleEntity
                    {
                        Name = roleData.Name
                    };

                    var result = await roleManager.CreateAsync(role);

                    if (!result.Succeeded)
                    {
                        throw new Exception(
                            $"Не вдалося створити роль {roleData.Name}: " +
                            string.Join(", ", result.Errors.Select(e => e.Description)));
                    }
                }
            }




            foreach (var userData in seedData.Users)
            {
                var user = await userManager.FindByEmailAsync(userData.Email);

                if (user == null)
                {
                    user = new UserEntity
                    {
                        UserName = userData.UserName,
                        Email = userData.Email,
                        FirstName = userData.FirstName,
                        LastName = userData.LastName,
                        Image = userData.Image,
                        EmailConfirmed = true
                    };

                    var result = await userManager.CreateAsync(
                        user,
                        userData.Password);

                    if (!result.Succeeded)
                    {
                        throw new Exception(
                            $"Не вдалося створити користувача {userData.Email}: " +
                            string.Join(", ", result.Errors.Select(e => e.Description)));
                    }
                }





                foreach (var role in userData.Roles)
                {
                    var hasRole = await userManager.IsInRoleAsync(user, role);

                    if (!hasRole)
                    {
                        var result = await userManager.AddToRoleAsync(user, role);

                        if (!result.Succeeded)
                        {
                            throw new Exception(
                                $"Не вдалося додати роль {role} " +
                                $"користувачу {userData.Email}: " +
                                string.Join(", ", result.Errors.Select(e => e.Description)));
                        }
                    }
                }
            }
        }
    }
}
