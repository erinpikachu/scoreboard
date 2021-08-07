const players = [
    {
        name: "Guil",
        score: 50,
        id: 0
      },
      {
        name: "Treasure",
        score: 85,
        id: 1
      },
      {
        name: "Ashley",
        score: 95,
        id: 2
      },
      {
        name: "James",
        score: 80,
        id: 3
      }
];

const Header = ( props ) => {
    return (
    <header>
        <h1>{props.title}</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
    </header>
)};

const Player = ( props ) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>

            <Counter score={props.score} />
        </div>
    );
}

const Counter = ( props ) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = ( props ) => {
    return (
        <main className="scoreboard">
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length} />

            {/* Players list */}
            {props.initialPlayers.map( player => 
                <Player 
                    key={player.id.toString()} 
                    name={player.name} 
                    score={player.score} 
                />
            )}
            
        </main>
    )
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);