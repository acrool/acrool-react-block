import CSS from 'csstype';
import {ReactNode} from 'react';


export interface IBlockWrapperProps {
    style?: CSS.Properties
    className?: string
    queueKey: string,
    loader?: ReactNode,
    isVisibleQueueKey?: boolean,
    message?: ReactNode,
    onShow?: (queueKey: string) => void
    onHide?: (queueKey: string) => void
}

