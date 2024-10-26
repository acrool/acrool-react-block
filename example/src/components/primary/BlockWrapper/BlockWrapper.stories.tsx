import {BlockWrapper} from '@acrool/react-block';
import type {Meta, StoryObj} from '@storybook/react';

import Loader from '../../atoms/Loader';



const meta = {
    title: 'Primary/BlockWrapper',
    component: BlockWrapper,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        message: 'loading...'
    },
} satisfies Meta<typeof BlockWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
};


export const WithRenderLoader: Story = {
    args: {
        loader: <Loader width="30px" height="30px"/>
    },
};
