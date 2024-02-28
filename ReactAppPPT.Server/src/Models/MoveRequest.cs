namespace ReactAppPPT.Server.src.Models
{
    public class MoveRequest
    {
        public string movePlayerOne { get; set; }
        public string movePlayerTwo { get; set; }
        public int playerOneWins { get; set; }
        public int playerTwoWins { get; set; }
    }
}
