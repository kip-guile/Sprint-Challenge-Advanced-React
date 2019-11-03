import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Player from '../Player.js';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<Player/>);
});


describe('Player component', () => {
    it('can debug the output', () => {
        tools.debug();
    });

    it('shows user information', () => {
        expect(tools.queryByTestId('info')).toBeInTheDocument();
      });

});