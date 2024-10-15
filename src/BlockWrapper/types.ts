import {ReactNode} from 'react';


export interface IBlockWrapperProps {
    queueKey: string,
    loader?: ReactNode,
    isVisibleQueueKey?: boolean,
    message?: ReactNode,
    onShow?: (queueKey: string) => void
    onHide?: (queueKey: string) => void
}

