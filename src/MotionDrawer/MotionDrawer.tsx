import {motion, Variants} from 'framer-motion';
import {ReactNode} from 'react';

import {IBlockOptions} from '../types';
import styles from './motion-drawer.module.scss';



const maskMotionProps: IBlockOptions = {
    variants: {
        initial: {opacity: 0, transition: {type:'spring'}},
        show: {opacity: 1, transition: {type: 'just'}},
        exit: {opacity: 0},
    },
    transition: {
        duration: .3,
    }
};



const modalVariantsItem: Variants = {
    initial: {opacity: 0, transform: 'scale(0)', transition: {type:'spring'}},
    show: {opacity: 1, transform: 'scale(1)'},
    exit: {opacity: 0},
};

interface IProps {
    children: ReactNode
}


/**
 * 開啟動畫抽屜
 * @param children
 */
const MotionDrawer = ({
    children,
}: IProps) => {

    return <div className={styles.motionDrawer}>
        <motion.div
            className={styles.motionMaskWrapper}
            {...maskMotionProps}
            initial="initial"
            animate="show"
            exit="exit"
        />
        <motion.div
            transition={{type: 'spring', duration: .2}}
            className={styles.motionAnimationWrapper}
            variants={modalVariantsItem}
            initial="initial"
            animate="show"
            exit="exit"
        >
            {children}
        </motion.div>
    </div>;
};


export default MotionDrawer;

