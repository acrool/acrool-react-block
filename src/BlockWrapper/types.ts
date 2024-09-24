import {ReactNode} from 'react';


export interface IBlockWrapperProps {
    queueKey: string,
    renderLoader?: () => ReactNode,
    isVisibleQueueKey?: boolean,
    message?: ReactNode,
    onShow?: (queueKey: string) => void
    onHide?: (queueKey: string) => void
}

