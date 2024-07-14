import {ReactNode} from 'react';


export interface IItem {
    message?: ReactNode,
    code?: string,
    path?: string,
}



export interface IBlock {
    show: TShow
    hidden: THidden
}

interface IShowArgs extends IItem{
    queueKey?: string
}


export type TShow = (args?: IShowArgs) => void
export type THidden = (queueKey?: string) => void;

export type TOnExitComplete = () => void;

export interface IBlockProps {
    id?: string
    defaultMessage?: string
}
