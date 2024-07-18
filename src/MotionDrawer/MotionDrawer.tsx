import {motion, Variants} from 'framer-motion';
import {ReactNode} from 'react';

import styles from './motion-drawer.module.scss';


const spring = {
    damping: .2,
};

const maskVariantsItem: Variants = {
    initial: {opacity: 0, transition: {type:'spring'}},
    show: {opacity: 1},
    exit: {opacity: 0},
};

const modalVariantsItem: Variants = {
    initial: {opacity: 0, transform: 'scale(0)'},
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


    return <motion.div
        className={styles.motionDrawer}
        transition={spring}
        variants={maskVariantsItem}
        initial="initial"
        animate="show"
        exit="exit"
    >
        <div className={styles.motionScrollWrapper}>
            <motion.div
                variants={modalVariantsItem}
                transition={{type: 'spring', duration: 0.5}}
            >
                {children}
            </motion.div>
        </div>
    </motion.div>;

};


export default MotionDrawer;

