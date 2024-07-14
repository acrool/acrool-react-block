import ReactPortal from '@acrool/react-portal';
import React, {useCallback, useEffect, useRef, useState} from 'react';

import styles from './block.module.scss';
import BlockWrapper from './BlockWrapper';
import {rootId} from './config';
import {Queue} from './queue';
import {IBlock, IBlockProps, IItem, THidden, TShow} from './types';


/**
 * Global var
 */
export let block: IBlock;



const Block = (props: IBlockProps) => {
    const [item, setItem] = useState<IItem>();
    const queueRef = useRef<Queue>(new Queue());

    // set global
    useEffect(() => {
        block = {
            show,
            hidden,
        };
    }, []);


    /**
     * 顯示 Block
     * @param newItem
     */
    const show: TShow = useCallback((args) => {
        queueRef.current.add();

        setItem(args);
    }, []);


    /**
     * 刪除 Block 在 Dom 中
     * @param key
     */
    const hidden: THidden = useCallback(() => {
        queueRef.current.remove();
        if(queueRef.current.length > 0){
            return;
        }

        setItem(undefined);
    }, []);


    /**
     * 渲染項目
     */
    const renderBlock = () => {
        const {message, ...itemArg} = item;
        return <BlockWrapper
            onExitComplete={hidden}
            {...itemArg}
        >
            {message}
        </BlockWrapper>;
    };

    return (
        <ReactPortal
            id={props.id || rootId}
            className={styles.root}
        >
            {item && renderBlock()}
        </ReactPortal>
    );
};

export default Block;
