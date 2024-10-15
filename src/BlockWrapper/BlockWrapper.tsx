import {clsx} from 'clsx';
import CSS from 'csstype';
import React from 'react';

import SvgLoader from '../assets/loader.svg?react';
import styles from './block-wrapper.module.scss';
import {IBlockWrapperProps} from './types';


interface IProps extends IBlockWrapperProps{
    style?: CSS.Properties
    className?: string
}

/**
 * Message
 */
const BlockWrapper = ({
    style,
    className,
    queueKey,
    isVisibleQueueKey = false,
    loader,
    message,
}: IProps) => {

    /**
     * 渲染除錯資訊
     */
    const renderInfo = () => {
        if(!isVisibleQueueKey || !queueKey){
            return null;
        }

        return <div className={styles.statusCode}>
            {queueKey}
        </div>;
    };


    /**
     * 渲染讀取圖標
     */
    const renderLoaderWrapper = () => {
        if(loader){
            return loader;
        }
        return <SvgLoader className={styles.loadingSvg}/>;
    };

    return (
        <div
            className={clsx(styles.blockWrapper, className)}
            style={style}
            role="alert"
        >
            {renderLoaderWrapper()}

            {message && <div className={styles.content} dangerouslySetInnerHTML={{__html: message}}/>}

            {renderInfo()}
        </div>
    );
};

export default BlockWrapper;

