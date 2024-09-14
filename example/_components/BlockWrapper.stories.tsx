import {BlockWrapper} from '@acrool/react-block';
import {Flex} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import {createElement} from 'react';

import Loader from '../src/components/Loader';



const meta = {
    title: 'Components/BlockWrapper',
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
    render: function Render(args) {

        return <Flex className="gap-2" style={{background: '#000'}}>
            <BlockWrapper {...args}/>
        </Flex>;
    },
};


export const WithRenderLoader: Story = {
    args: {},
    render: function Render(args) {

        return <Flex className="gap-2" style={{background: '#000'}}>
            <BlockWrapper
                {...args}
                renderLoader={() => createElement(Loader, {width: '30px', height: '30px'}, null)}
            />
        </Flex>;
    },
};
