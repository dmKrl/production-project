import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui';

describe('Sidebar UI Testing', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar check button is collapsed', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleButton = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
    test('Sidebar check button is not collapsed', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleButton = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
