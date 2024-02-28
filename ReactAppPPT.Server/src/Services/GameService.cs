namespace ReactAppPPT.Server.src.Services
{
    public class GameService
    {
        public List<object> ganador(string movePlayerOne, string movePlayerTwo, int playerOneWins, int playerTwoWins)
        {
            string message;
            if (movePlayerOne == "piedra" && movePlayerTwo == "tijera" ||
                movePlayerOne == "papel" && movePlayerTwo == "piedra" ||
                movePlayerOne == "tijera" && movePlayerTwo == "papel")
            {
                playerOneWins++;
                message = "¡El jugador 1 gana!";
            }
            else if (movePlayerTwo == "piedra" && movePlayerOne == "tijera" ||
                     movePlayerTwo == "papel" && movePlayerOne == "piedra" ||
                     movePlayerTwo == "tijera" && movePlayerOne == "papel")
            {
                playerTwoWins++;
                message = "¡El jugador 2 gana!";
            }
            else
            {
                message = "¡Ha sido un empate!";
            }

            return new List<object> { message, playerOneWins, playerTwoWins };
        }
    }
}
