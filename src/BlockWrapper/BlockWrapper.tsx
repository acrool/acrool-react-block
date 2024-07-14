import CSS from 'csstype';
import React from 'react';

import SvgLoader from '../assets/loader.svg?react';
import styles from './block-wrapper.module.scss';
import {IBlockWrapperProps} from './types';


interface IProps extends IBlockWrapperProps{
    style?: CSS.Properties,
    onClose?: (confirmValue?: string) => void,
}

/**
 * Message
 */
const BlockWrapper = ({
    style,
    queueKey,
    isVisibleQueueKey = false,
    renderLoader,
    children,
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
        if(renderLoader){
            return renderLoader();
        }
        return <SvgLoader className={styles.loadingSvg}/>;
    };

    return (
        <div
            className={styles.blockWrapper}
            style={style}
            role="alert"
        >
            {renderLoaderWrapper()}

            {children && <div className={styles.content} dangerouslySetInnerHTML={{__html: children}}/>}

            {renderInfo()}
        </div>
    );
};

export default BlockWrapper;

