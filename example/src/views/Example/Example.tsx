import {block} from '@acrool/react-block';
import AcroolTable from '@acrool/react-table';


const Example = () => {


    return <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start', width: '100%'}}>

        <AcroolTable
            isDark
            isVisiblePaginate={false}
            tableCellMediaSize={768}
            gap="10px"
            title={{
                name: {text: 'Name', col: '450px'},
                use: {text: 'Use', col: true},
            }}
            data={[
                {
                    id: 1,
                    onClickRow: () => {
                        block.show();
                        setTimeout(() => block.hide(), 3000);
                    },
                    field: {
                        name: 'Default',
                        use: 'block.show()',
                    }
                },
                {
                    id: 2,
                    onClickRow: () => {
                        block.show({message: 'Loading and close after 3 seconds ...'});
                        setTimeout(() => block.hide(), 3000);
                    },
                    field: {
                        name: 'Custom Message',
                        use: 'block.show({message: \'Loading and close after 3 seconds ...\'})',
                    }
                },
                {
                    id: 3,
                    onClickRow: () => {
                        block.show({message: 'Call shown 1'});

                        setTimeout(() => block.show({message: 'Call shown 2'}), 1000);
                        setTimeout(() => block.show({message: 'Call shown 3'}), 2000);

                        setTimeout(() => block.hide(), 3000);
                        setTimeout(() => block.hide(), 4000);
                    },
                    field: {
                        name: 'Call shown 3 times but hidden 2 time',
                        use: '',
                    }
                },
                {
                    id: 4,
                    onClickRow: () => {
                        block.show({message: 'Call shown 1'});

                        setTimeout(() => block.show({message: 'Call shown 2'}), 1000);
                        setTimeout(() => block.show({message: 'Call shown 3'}), 2000);

                        setTimeout(() => block.hide(), 3000);
                        setTimeout(() => block.hide(), 4000);
                        setTimeout(() => block.hide(), 5000);
                    },
                    field: {
                        name: 'Call shown 3 times but hide 3 time',
                        use: '',
                    }
                },
                {
                    id: 5,
                    onClickRow: () => {
                        block.show({message: 'Call shown 1'});
                        block.show({message: 'Call shown 2'});
                        block.show({message: 'Call shown 3'});

                        block.hide();

                        setTimeout(() => {
                            block.hide();
                            block.hide();
                        }, 3000);
                    },
                    field: {
                        name: 'Call shown 3 times but hide 3 time and same time',
                        use: '',
                    }
                },
                {
                    id: 6,
                    onClickRow: () => {
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
                    },
                    field: {
                        name: 'Call shown queueKey hidden sort',
                        use: '',
                    }
                },


            ]}

        />


    </div>;
};

export default Example;




