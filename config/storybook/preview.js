import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/shared/lib/useTheme/ThemeContext';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import { LanguageDecorator } from '../../src/shared/config/storybook/LanguageDecorator/LanguageDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
// addDecorator(LanguageDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
