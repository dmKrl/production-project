import { render } from '@testing-library/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import i18nForTest from 'entityes/config/i18n/i18nForTests';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRenderOptions {
    route?: string;
}

export function ComponentRender(
    component: ReactNode,
    options: renderWithRenderOptions = {},
) {
    const { route = '/' } = options;

    return render(
        <StoreProvider>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
