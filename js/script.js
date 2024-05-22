document.addEventListener('DOMContentLoaded', () => {
    const numJogadoresInput = document.getElementById('numJogadores');
    const dificuldadeSelect = document.getElementById('dificuldade');
    const modoJogoSelect = document.getElementById('modoJogo');
    const startGameButton = document.getElementById('startGame');
    const gameSection = document.getElementById('game');
    const configSection = document.getElementById('config');
    const roundDisplay = document.getElementById('round');
    const playerTurnDisplay = document.getElementById('playerTurn');
    const wordDisplay = document.getElementById('word');
    const guessInput = document.getElementById('guess');
    const submitGuessButton = document.getElementById('submitGuess');
    const feedbackDisplay = document.getElementById('feedback');
    const remainingChancesDisplay = document.getElementById('remainingChances');

    let jogadores = [];
    let dificuldade = 1;
    let modoJogo = [];
    let palavraAtual = '';
    let letrasReveladas = [];
    let chances = [];
    let currentPlayerIndex = 0;
    let currentRound = 1;

    const brawlers = ["Shelly", "Nita", "Colt", "Bull", "Jessie", "Brock", "Dynamike", "Bo", "Tick", "8-BIT", "Emz", "El Primo", "Barley", "Poco", "Rosa", "Rico", "Darryl", "Penny", "Carl", "Jacky", "Piper", "Pam", "Frank", "Bibi", "Bea", "Mortis", "Tara", "Gene", "Max", "Mr. P", "Sprout", "Byron", "Spike", "Crow", "Leon", "Sandy", "Gale", "Surge", "Colette", "Lou", "Nani", "Belle", "Gale", "Buzz", "Squeak", "Kit", "RT", "Griff", "Amber", "Grom", "Gus", "Edgar"];
    const mapas = ["Crystal Arcade", "Dry Season", "Gem Grab", "Bounty", "Heist", "Brawl Ball", "Siege", "Hot Zone", "Solo Showdown", "Duo Showdown", "Big Game", "Robo Rumble", "Boss Fight", "Super City Rampage", "Takedown", "Present Plunder", "Basket Brawl", "Hold the Trophy", "Volley Brawl"];
    const modosDeJogo = ["Gem Grab", "Bounty", "Heist", "Brawl Ball", "Siege", "Hot Zone", "Solo Showdown", "Duo Showdown", "Big Game", "Robo Rumble", "Boss Fight", "Super City Rampage", "Takedown", "Present Plunder", "Basket Brawl", "Hold the Trophy", "Volley Brawl"];
    const skins = ["Shelly (Pink)", "Nita (Panda)", "Colt (Rockstar)", "Bull (Viking)", "Jessie (Dragon Knight)", "Brock (Beach)", "Dynamike (Spicy)", "Bo (Pink)", "Tick (Pirate)", "8-BIT (Phoenix)", "
