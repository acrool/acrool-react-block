import {ReactNode} from 'react';


export interface IRow {
    queueKey?: string
    message?: ReactNode,
}



export interface IBlock {
    show: TShow
    hidden: THidden
}

interface IShowArgs extends IRow{
}


export type TShow = (args?: IShowArgs) => void
export type THidden = (queueKey?: string) => void;

export type TOnExitComplete = () => void;

export interface IBlockProps {
    id?: string
    defaultMessage?: string
    isVisibleQueueKey?: boolean
}
