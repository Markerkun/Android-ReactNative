using LoginApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoginApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
        const string testEmail = "admin@gmail.com";
        const string testPassword = "123456";

        if (request.Email == testEmail &&
            request.Password == testPassword)
        {
            return Ok(new LoginResponse
            {
                Success = true,
                Message = "Login successful"
            });
        }

        return Unauthorized(new LoginResponse
        {
            Success = false,
            Message = "Invalid email or password"
        });
    }
}