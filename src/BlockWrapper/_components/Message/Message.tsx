import CSS from 'csstype';
import React from 'react';

import SvgLoader from '../../../assets/loader.svg?react';
import {IMessageProps} from '../../types';
import styles from './message.module.scss';


interface IProps extends IMessageProps{
    style?: CSS.Properties,
    onClose?: (confirmValue?: string) => void,
}

/**
 * Message
 */
const Message = ({
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
            className={styles.message}
            style={style}
            role="alert"
        >
            {renderLoaderWrapper()}
            {children && <div className={styles.content} dangerouslySetInnerHTML={{__html: children}}/>}

            {renderInfo()}
        </div>
    );
};

export default Message;

