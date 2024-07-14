import CSS from 'csstype';
import React from 'react';

import SvgLoading from '../../../assets/loading.svg?react';
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

    return (
        <div
            className={styles.message}
            style={style}
            role="alert"
        >
            <SvgLoading className={styles.loadingSvg} width={30}/>

            {children && <div className={styles.content} dangerouslySetInnerHTML={{__html: children}}/>}

            {renderInfo()}
        </div>
    );
};

export default Message;

