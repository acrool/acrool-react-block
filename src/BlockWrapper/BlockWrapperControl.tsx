import React, {useCallback, useState} from 'react';

import MotionDrawer from '../MotionDrawer';
import {TOnExitComplete} from '../types';
import Message from './_components/Message';
import {IMessageProps} from './types';

interface IProps extends IMessageProps{
    onExitComplete: TOnExitComplete,
}


/**
 * 控制 Block
 * @param status
 * @param code
 * @param path
 * @param children
 * @param onExitComplete
 */
const BlockWrapperControl = ({
    onExitComplete,

    code,
    path,
    children,
}: IProps) => {
    const [isVisible, setVisible] = useState<boolean>(true);

    /**
     * 隱藏
     * handleHidden 動畫結束後 -> onExitComplete
     */
    const handleHidden = useCallback(() => {
        setVisible(false);
    }, []);

    return (
        <MotionDrawer
            isVisible={isVisible}
            onExitComplete={onExitComplete}
        >
            <Message
                onClose={handleHidden}

                code={code}
                path={path}
            >
                {children}
            </Message>
        </MotionDrawer>
    );
};

export default BlockWrapperControl;

