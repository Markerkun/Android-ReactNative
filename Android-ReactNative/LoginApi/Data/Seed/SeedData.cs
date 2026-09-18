namespace LoginApi.Data.Seed
{
    public class SeedData
    {
        public List<SeedRole> Roles { get; set; } = new();
        public List<SeedUser> Users { get; set; } = new();
    }

    public class SeedRole
    {
        public string Name { get; set; } = string.Empty;
    }

    public class SeedUser
    {
        public string Email { get; set; } = string.Empty;

        public string UserName { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Image { get; set; }

        public List<string> Roles { get; set; } = new();
    }
}
