using LoginApi.Dtos.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LoginApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserManager<UserEntity> _userManager;

    public AuthController(UserManager<UserEntity> userManager)
    {
        _userManager = userManager;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var user = await _userManager.FindByEmailAsync(dto.Email);

        if (user == null)
        {
            return Unauthorized(new
            {
                success = false,
                message = "Invalid email or password"
            });
        }

        var passwordValid = await _userManager.CheckPasswordAsync(
            user,
            dto.Password);

        if (!passwordValid)
        {
            return Unauthorized(new
            {
                success = false,
                message = "Invalid email or password"
            });
        }

        return Ok(new
        {
            success = true,
            message = "Login successful",
            user = new
            {
                user.Id,
                user.Email,
                user.UserName,
                user.FirstName,
                user.LastName,
                user.Image
            }
        });
    }
}