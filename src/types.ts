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
    loader?: ReactNode
    containerSelector?: () => HTMLElement | null
    onShow?: (queueKey: string) => void
    onHide?: (queueKey: string) => void
}

export type TBlockEase = 'linear'|'easeIn'|'easeOut'|'easeInOut'|[number, number, number, number];

/**
 * 一段動畫 (Web Animations API 的關鍵影格與選項，由 motion mini 播放)
 */
export interface IBlockAnimation {
    keyframes: Record<string, string | number | Array<string | number>>
    options?: {
        duration?: number,
        delay?: number,
        ease?: TBlockEase,
    }
}
