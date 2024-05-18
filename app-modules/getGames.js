async function getGames () {
  const games = await fetch('http://localhost:3105/api/games');
  console.log(games)
}

module.exports = getGames;