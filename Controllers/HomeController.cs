using Microsoft.AspNetCore.Mvc;

namespace VueCore.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("message")]
        public JsonResult GetMessage()
        {
            return Json(new
            {
                message = "Hello, Client!"
            });
        }
    }
}