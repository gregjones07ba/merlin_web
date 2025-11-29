import GameController from '../controllers/game_controller';
import GameView from './game_view'

const Game = () => {
    const controller = new GameController();

    return (
        <div>
            <GameView controller={controller}/>
        </div>
    );
}

export default Game;
