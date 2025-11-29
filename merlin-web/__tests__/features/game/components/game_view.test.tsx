import React from 'react'

import {render, screen} from '@testing-library/react'

import GameView from '../../../../src/features/game/components/game_view'
import GameController from '../../../../src/features/game/controllers/game_controller'

test('it displays a text input', () => {
    const controller = new GameController();
    render(<GameView controller={controller}/>);
    expect(screen.getByRole('form')).toHaveFormValues({
        talk: '',
    });
});
