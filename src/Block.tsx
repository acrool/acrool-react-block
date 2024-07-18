import ReactPortal from '@acrool/react-portal';
import {AnimatePresence} from 'framer-motion';
import React, {useCallback} from 'react';

import styles from './block.module.scss';
import BlockWrapper from './BlockWrapper';
import {rootId} from './config';
import MotionDrawer from './MotionDrawer';
import {IBlock, IBlockProps, IRow, THide, THideAll, TShow} from './types';
import {removeByIndex} from './utils';


/**
 * Global var
 */
export let block: IBlock;


interface IState {
    rows: IRow[]
}
export const defaultKey = 'globalBlock';

class Block extends React.Component<IBlockProps, IState> {
    state: IState = {
        rows: []
    };

    constructor(props) {
        super(props);

        block = {
            show: this.show,
            hide: this.hide,
            hideAll: this.hideAll,
        };
    }

    /**
     * 顯示 Block
     * @param args
     */
    show: TShow = (args) => {
        this.setState(prev => {
            return {
                rows: [...prev.rows, {queueKey: defaultKey, ...args}]
            };
        });

    };


    /**
     * 刪除 Block 在 Dom 中
     * @param queueKey
     */
    hide: THide = (queueKey = defaultKey) => {

        this.setState(prev => {
            const index = prev.rows.findIndex(row => row.queueKey === queueKey);
            return {
                rows: removeByIndex(prev.rows, index),
            };
        });

    };


    /**
     * 刪除 所有Block 在 Dom 中
     */
    hideAll: THideAll = () => {
        this.setState({rows: []});
    };


    /**
     * 渲染項目
     */
    renderBlock = () => {
        const {rows} = this.state;
        const currentRow = rows?.[rows.length - 1];

        if (!currentRow) {
            return null;
        }

        const {message, ...itemArg} = currentRow;

        return <MotionDrawer>
            <BlockWrapper
                isVisibleQueueKey={this.props.isVisibleQueueKey}
                renderLoader={this.props.renderLoader}
                message={message ?? this.props.defaultMessage}
                {...itemArg}
            />
        </MotionDrawer>;

    };

    render() {
        return (
            <ReactPortal
                id={this.props.id || rootId}
                className={styles.root}
            >
                <AnimatePresence>
                    {this.renderBlock()}
                </AnimatePresence>
            </ReactPortal>
        );
    }
}

export default Block;
