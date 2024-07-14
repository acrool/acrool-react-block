import {ReactNode} from 'react';


export interface IBlockWrapperProps {
    queueKey: string,
    renderLoader?: () => ReactNode,
    isVisibleQueueKey?: boolean,
    message?: ReactNode,
}

