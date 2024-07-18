import {ReactNode} from 'react';

import {IBlockWrapperProps} from './BlockWrapper';


export interface IRow extends IBlockWrapperProps{
}



export interface IBlock {
    show: TShow
    hide: THide
    hideAll: THideAll
}

interface IShowArgs extends IRow{
}


export type TShow = (args?: IShowArgs) => void
export type THide = (queueKey?: string) => void;
export type THideAll = () => void;


export interface IBlockProps {
    id?: string
    defaultMessage?: string
    isVisibleQueueKey?: boolean
    renderLoader?: () => ReactNode
}
