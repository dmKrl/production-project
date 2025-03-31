import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemeContext';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextTitle = Template.bind({});
TextTitle.args = {
    title: 'Some Title',
    text: 'Description Description Description',
};

export const TextTitleErrors = Template.bind({});
TextTitleErrors.args = {
    title: 'Some Title',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};

export const TextTitleDark = Template.bind({});
TextTitleDark.args = {
    title: 'Some Title',
    text: 'Description Description Description',
};
TextTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextTitleErrorsDark = Template.bind({});
TextTitleErrorsDark.args = {
    title: 'Some Title',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};
TextTitleErrorsDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Some Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description',
};
