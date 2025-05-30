import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import i18n from './i18nForSb';

export const LanguageDecorator = (story: () => Story) => {
    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                {story()}
            </I18nextProvider>
        </Suspense>
    );
};
