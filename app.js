const Header = () => {
    return (
    <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
    </header>
)};

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">Erin</span>
            
            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">69</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
);