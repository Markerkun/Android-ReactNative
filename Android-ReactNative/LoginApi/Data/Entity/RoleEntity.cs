using Microsoft.AspNetCore.Identity;

public class RoleEntity : IdentityRole<int>
{
	public ICollection<UserRoleEntity>? UserRoles { get; set; }
}