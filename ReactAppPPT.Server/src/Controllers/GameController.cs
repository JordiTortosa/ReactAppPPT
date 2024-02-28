// GameController.cs
using Microsoft.AspNetCore.Mvc;
using ReactAppPPT.Server.src.Services;
using ReactAppPPT.Server.src.Models;

namespace ReactAppPPT.Server.src.Controllers
{
    [Route("api/game/")]
    [ApiController]
    public class GameController : ControllerBase
    {
        GameService gameService = new GameService();
        

        [HttpPost("move")]
        public ActionResult<List<object>> MakeMove([FromBody] MoveRequest moveRequest)
        {

            string movePlayerOne = moveRequest.movePlayerOne;
            string movePlayerTwo = moveRequest.movePlayerTwo;

            int playerOneWins = moveRequest.playerOneWins;
            int playerTwoWins = moveRequest.playerTwoWins;

            var result = gameService.ganador(movePlayerOne, movePlayerTwo, playerOneWins, playerTwoWins);
            return result;
        }

    }
  
}