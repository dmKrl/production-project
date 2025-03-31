import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

export default {
    title: 'widget/Navbar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightWithAuthData = Template.bind({});
LightWithAuthData.args = {};
LightWithAuthData.decorators = [StoreDecorator({ user: { authData: { id: 1, username: 'username' } } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const DarkWithAuthData = Template.bind({});
DarkWithAuthData.args = {};
DarkWithAuthData.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'username' } } }),
    ThemeDecorator(Theme.DARK),
];
