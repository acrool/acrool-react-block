/**
 * 是否不播放動畫
 * - 環境不支援 Web Animations API (例如測試環境)
 * - 使用者開啟「減少動態效果」
 */
export const checkIsSkipMotion = (): boolean => {
    if(typeof Element === 'undefined' || typeof Element.prototype.animate !== 'function') return true;
    return typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
