import {ReactNode} from 'react';


export interface IMessageProps {
    queueKey?: string,
    renderLoader?: () => ReactNode,
    isVisibleQueueKey?: boolean,
    children: ReactNode
}

