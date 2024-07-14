import ReactPortal from '@acrool/react-portal';
import {removeFind} from 'bear-jsutils/array';
import {AnimatePresence} from 'framer-motion';
import React, {useCallback, useEffect, useState} from 'react';

import styles from './block.module.scss';
import BlockWrapper from './BlockWrapper';
import {rootId} from './config';
import MotionDrawer from './MotionDrawer';
import {IBlock, IBlockProps, IRow, THidden, THiddenAll, TShow} from './types';


/**
 * Global var
 */
export let block: IBlock;

export const defaultKey = 'globalBlock';

const Block = (props: IBlockProps) => {
    const [rows, setRows] = useState<IRow[]>([]);

    // set global
    useEffect(() => {
        block = {
            show,
            hidden,
            hiddenAll,
        };
    }, []);


    /**
     * 顯示 Block
     * @param newItem
     */
    const show: TShow = useCallback((args) => {
        setRows(prevRows => [...prevRows, {queueKey: defaultKey, ...args}]);

    }, []);


    /**
     * 刪除 Block 在 Dom 中
     * @param key
     */
    const hidden: THidden = useCallback((queueKey = defaultKey) => {
        setRows(prevRows => {
            return removeFind(prevRows, curr => curr.queueKey === queueKey);
        });
    }, []);


    /**
     * 刪除 所有Block 在 Dom 中
     * @param key
     */
    const hiddenAll: THiddenAll = useCallback(() => {
        setRows([]);
    }, []);


    /**
     * 渲染項目
     */
    const renderBlock = () => {
        const currentRow = rows?.[rows.length -1];

        if(!currentRow){
            return null;
        }

        const {message, ...itemArg} = currentRow;

        return <MotionDrawer>
            <BlockWrapper
                isVisibleQueueKey={props.isVisibleQueueKey}
                renderLoader={props.renderLoader}
                message={message ?? props.defaultMessage}
                {...itemArg}
            />
        </MotionDrawer>;

    };

    return (
        <ReactPortal
            id={props.id || rootId}
            className={styles.root}
        >
            <AnimatePresence>
                {renderBlock()}
            </AnimatePresence>
        </ReactPortal>
    );
};

export default Block;
