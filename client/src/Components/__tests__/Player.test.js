import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Player from '../Player.js';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<Player/>);
});


describe('Counter component', () => {
    it('can debug the output', () => {
        tools.debug();
    });

    it('shows user information', () => {
        const elementWithinformation = tools.queryByText(/Country/i);
        expect(elementWithinformation).toBeInTheDocument();
      });

});