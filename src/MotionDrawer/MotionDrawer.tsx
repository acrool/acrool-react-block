import {usePresence} from 'motion/react';
import {useAnimate} from 'motion/react-mini';
import {ReactNode, useEffect, useLayoutEffect, useRef} from 'react';

import {IBlockAnimation} from '../types';
import styles from './motion-drawer.module.scss';
import {checkIsSkipMotion} from './utils';


/**
 * 在 client 用 useLayoutEffect，讓進場動畫在第一次繪製前就啟動 (否則會先以最終樣子閃一格)；
 * SSR 退回 useEffect 以免警告
 */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;


/**
 * 遮罩: 淡入、淡出
 */
const maskMotion: Record<'enter'|'exit', IBlockAnimation> = {
    enter: {keyframes: {opacity: [0, 1]}, options: {duration: .3}},
    exit: {keyframes: {opacity: 0}, options: {duration: .2}},
};

/**
 * 讀取圖示與訊息: 由小放大淡入，淡出
 */
const contentMotion: Record<'enter'|'exit', IBlockAnimation> = {
    enter: {keyframes: {opacity: [0, 1], transform: ['scale(0)', 'scale(1)']}, options: {duration: .2, ease: [.22, 1.2, .36, 1]}},
    exit: {keyframes: {opacity: 0}, options: {duration: .2}},
};


interface IProps {
    children: ReactNode
}


/**
 * 開啟動畫抽屜
 *
 * 離場後才移除節點由 AnimatePresence + usePresence 處理 (需放在 AnimatePresence 內)，
 * 動畫由 motion mini (Web Animations API) 播放
 * @param children
 */
const MotionDrawer = ({
    children,
}: IProps) => {
    const [isPresent, safeToRemove] = usePresence();
    const [, animate] = useAnimate();
    const maskRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // 離場動畫結束時用來確認「是否仍在離場」：離場途中又被開啟的話，舊的離場不可以把節點移除
    const isPresentRef = useRef(isPresent);
    isPresentRef.current = isPresent;

    useIsomorphicLayoutEffect(() => {
        if(checkIsSkipMotion()){
            if(!isPresent) safeToRemove?.();
            return;
        }

        const step = isPresent ? 'enter': 'exit';
        const animations: Array<Promise<unknown>> = [];
        if(maskRef.current){
            animations.push(animate(maskRef.current, maskMotion[step].keyframes, maskMotion[step].options).finished);
        }
        if(contentRef.current){
            animations.push(animate(contentRef.current, contentMotion[step].keyframes, contentMotion[step].options).finished);
        }

        if(!isPresent){
            // 離場動畫播完才讓 AnimatePresence 移除節點；動畫被中斷時也要移除，避免節點殘留
            Promise.all(animations)
                .catch(() => undefined)
                .then(() => {
                    if(!isPresentRef.current) safeToRemove?.();
                });
        }
    }, [isPresent]);

    return <div className={styles.motionDrawer} data-exiting={isPresent ? undefined: ''}>
        <div ref={maskRef} className={styles.motionMaskWrapper}/>
        <div ref={contentRef} className={styles.motionAnimationWrapper}>
            {children}
        </div>
    </div>;
};


export default MotionDrawer;
