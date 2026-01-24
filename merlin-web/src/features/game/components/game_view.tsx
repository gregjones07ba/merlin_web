import type GameController from '../controllers/game_controller'

interface GameViewProps {
    controller: GameController;
}

const GameView = ({controller}: GameViewProps) => {
    return (
        <main>
            <form name='act'>
                <input type='text' name='talk'></input>
            </form>
        </main>
    );
}

export default GameView;
