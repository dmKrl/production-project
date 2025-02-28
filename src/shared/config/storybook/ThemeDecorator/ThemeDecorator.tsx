/* eslint-disable arrow-body-style */
import { Story } from '@storybook/react';
import { Theme } from 'shared/lib/useTheme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
