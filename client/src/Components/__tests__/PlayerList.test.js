import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerList from '../PlayerList';


let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayerList/>);
});


describe('PlayerList component', () => {
    it('can debug the output', () => {
        tools.debug();
    });

    it('shows user information', () => {
        expect(tools.queryByTestId('info-m')).toBeInTheDocument();
      });

});