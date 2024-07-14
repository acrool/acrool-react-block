import {ReactNode} from 'react';


export interface IItem {
    message: ReactNode,
    code?: string,
    path?: string,
}



export interface IBlock {
    show: (args: IShowArgs) => void
    hidden: () => void;
}

interface IShowArgs extends IStatusShowArgs{
    message: ReactNode,
}

interface IStatusShowArgs {
    code?: string,
    path?: string,
}

export type TShow = (args: IShowArgs) => void
export type THidden = () => void;

export type TOnExitComplete = () => void;

export interface IBlockProps {
    id?: string
}
