import {block} from '@acrool/react-block';
import type {Meta, StoryObj} from '@storybook/react';

import Button from '../../atoms/Button';



const meta = {
    title: 'Primary/block',
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'toast show method'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
    render: function Render(args) {

        return <Button
            color="primary"
            onClick={() => block.show()}
        >
            Show
        </Button>;
    },
};

export const WithMessage: Story = {
    args: {},
    render: function Render(args) {

        return <Button
            color="primary"
            onClick={() => {
                block.show({message: 'Loading and close after 3 seconds ...'});
            }}
        >
            Show
        </Button>;
    },
};




export const WithMultiShow: Story = {
    args: {},
    render: function Render(args) {

        return <div>
            <p>Call shown 3 times but hide 2 time</p>

            <Button
                color="primary"
                onClick={() => {
                    block.show({message: 'Call shown 1'});

                    setTimeout(() => block.show({message: 'Call shown 2'}), 1000);
                    setTimeout(() => block.show({message: 'Call shown 3'}), 2000);

                    setTimeout(() => block.hide(), 3000);
                    setTimeout(() => block.hide(), 4000);
                }}
            >
                Show
            </Button>
        </div>;

    },
};

export const WithOverHide: Story = {
    args: {},
    render: function Render(args) {

        return <div>
            <p>Call shown 3 times but hide 3 time</p>

            <Button
                color="primary"
                onClick={() => {
                    block.show({message: 'Call shown 1'});

                    setTimeout(() => block.show({message: 'Call shown 2'}), 1000);
                    setTimeout(() => block.show({message: 'Call shown 3'}), 2000);

                    setTimeout(() => block.hide(), 3000);
                    setTimeout(() => block.hide(), 4000);
                    setTimeout(() => block.hide(), 5000);
                }}
            >
                Show
            </Button>
        </div>;
    },
};



export const WithOverHidePromise: Story = {
    args: {},
    render: function Render(args) {

        return <div>
            <p>Call shown 3 times but hide 3 time and same time</p>

            <Button
                color="primary"
                onClick={() => {
                    block.show({message: 'Call shown 1'});
                    block.show({message: 'Call shown 2'});
                    block.show({message: 'Call shown 3'});

                    block.hide();

                    setTimeout(() => {
                        block.hide();
                        block.hide();
                    }, 3000);
                }}
            >
                Show
            </Button>
        </div>;
    },
};


export const WithHideSort: Story = {
    args: {},
    render: function Render(args) {

        return <div>
            <p>Call shown queueKey hide sort</p>

            <Button
                color="primary"
                onClick={() => {
                    block.show({message: 'Call shown 1'});
                    block.show({message: 'Call shown 2'});
                    block.show({message: 'Call shown 3', queueKey: 'call1'});

                    setTimeout(() => {
                        block.hide('call1');
                    },1000);

                    setTimeout(() => {
                        block.hide();
                        block.hide();
                    }, 3000);
                }}
            >
                Show
            </Button>
        </div>;
    },
};


