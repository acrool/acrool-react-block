import {ReactNode} from 'react';

import {IBlockWrapperProps} from './BlockWrapper';
import {Transition, Variant} from "framer-motion";


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

type TVariantKey = 'initial'|'show'|'exit'
export type TAnimationVariants = Record<TVariantKey, Variant>;

export interface IBlockOptions {
    variants?: TAnimationVariants
    transition?: Transition
    className?: string
    isEnableHideWithClickMask?: boolean
}
