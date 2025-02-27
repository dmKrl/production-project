import { render } from '@testing-library/react';
import i18nForTest from 'entities/config/i18n/i18nForTests';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {component}
        </I18nextProvider>,
    );
}
