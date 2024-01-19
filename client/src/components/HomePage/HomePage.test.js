import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('should always return true test', () => {
        expect(true).toBe(true);
    });

    // it('should return LATEST ADDED as heading', () => {
    //     render(<HomePage />);
    //     // const heading = screen.getByTestId('heading');

    //     // expect(heading).toBeInTheDocument();

    //     screen.debug();
    // });
});