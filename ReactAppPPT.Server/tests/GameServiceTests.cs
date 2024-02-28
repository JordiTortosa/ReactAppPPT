using ReactAppPPT.Server.src.Services;
using NUnit.Framework;
using ReactAppPPT.Server.src.Models;

namespace ReactAppPPT.Server.tests
{
    [TestFixture]
    public class GameServiceTests
    {

        private GameService _gameService;
        private MoveRequest empate;
        private MoveRequest victoriaJugador1;
        private MoveRequest victoriaJugador2;


        [SetUp]
        public void SetUp() {

            _gameService = new GameService();

            empate = createMoveEmpate("piedra");
            victoriaJugador1 = createMoveVictoria("piedra", "tijera");
            victoriaJugador2 = createMoveVictoria("papel", "tijera");

        }

        [Test]
        public void TestEmpate()
        {

            List<object> result = _gameService.ganador(empate.movePlayerOne, empate.movePlayerTwo, 0, 0);
            Assert.Equals(result[0], "¡Ha sido un empate!");
            Assert.Equals(result[1], 0);
            Assert.Equals(result[2], 0);

        }

        [Test]
        public void TestVictoriaJugador1()
        {

            List<object> result = _gameService.ganador(victoriaJugador1.movePlayerOne, victoriaJugador1.movePlayerTwo, 0, 0);
            Assert.Equals(result[0], "¡El jugador 1 gana!");
            Assert.Equals(result[1], 1);
            Assert.Equals(result[2], 0);

        }

        [Test]
        public void TestVictoriaJugador2()
        {

            List<object> result = _gameService.ganador(victoriaJugador2.movePlayerOne, victoriaJugador2.movePlayerTwo, 0, 0);
            Assert.Equals(result[0], "¡El jugador 2 gana!");
            Assert.Equals(result[1], 0);
            Assert.Equals(result[2], 1);

        }
        public MoveRequest createMoveEmpate(string move)
        {
            MoveRequest empate = new MoveRequest();

            empate.movePlayerOne = move;
            empate.movePlayerTwo = move;

            return empate;

        }
        public MoveRequest createMoveVictoria(string move1, string move2)
        {
            MoveRequest victoria = new MoveRequest();

            victoria.movePlayerOne = move1;
            victoria.movePlayerTwo = move2;
            victoria.playerOneWins = 0;
            victoria.playerTwoWins = 0;
            return victoria;

        }

    } 
}

