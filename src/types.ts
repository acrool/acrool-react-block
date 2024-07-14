import {ReactNode} from 'react';

import {IBlockWrapperProps} from './BlockWrapper';


export interface IRow extends IBlockWrapperProps{
}



export interface IBlock {
    show: TShow
    hidden: THidden
    hiddenAll: THiddenAll
}

interface IShowArgs extends IRow{
}


export type TShow = (args?: IShowArgs) => void
export type THidden = (queueKey?: string) => void;
export type THiddenAll = () => void;


export interface IBlockProps {
    id?: string
    defaultMessage?: string
    isVisibleQueueKey?: boolean
    renderLoader?: () => ReactNode
}
