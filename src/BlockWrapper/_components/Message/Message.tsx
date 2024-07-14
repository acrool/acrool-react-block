import CSS from 'csstype';
import React from 'react';

import {IMessageProps} from '../../types';
import styles from './message.module.scss';
import SvgLoading from '../../../assets/loading.svg?react';


interface IProps extends IMessageProps{
    style?: CSS.Properties,
    onClose?: (confirmValue?: string) => void,
}

/**
 * Message
 */
const Message = ({
    style,
    code,
    path,
    children,
}: IProps) => {

    /**
     * 渲染除錯資訊
     */
    const renderInfo = () => {
        const content = [code, path].filter(curr => curr);
        if(content.length === 0){
            return null;
        }

        return <div className={styles.statusCode}>
            {`${content.join(' | ')}`}
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

