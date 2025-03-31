import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemeContext';
import { LoginForm } from './LoginForm';

export default {
    title: 'shared/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [StoreDecorator({
    login: { username: 'admin', password: '123' },
})];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {};
LoginFormWithError.decorators = [StoreDecorator({
    login: { username: 'admin', password: '12223', error: 'Error message' },
})];

export const LoginFormIsLoading = Template.bind({});
LoginFormIsLoading.args = {};
LoginFormIsLoading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [
    StoreDecorator({
        login: { username: 'admin', password: '123' },
    }),
    ThemeDecorator(Theme.DARK),
];
