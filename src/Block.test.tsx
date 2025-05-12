import {act,render} from '@testing-library/react';
import React from 'react';

import Block, {block, defaultKey} from './Block';

// mock MotionDrawer 和 BlockWrapper 以简化测试
jest.mock('./MotionDrawer', () => (props: any) => <div data-testid="motion-drawer">{props.children}</div>);
jest.mock('./BlockWrapper', () => (props: any) => <div data-testid="block-wrapper">{props.message}</div>);
jest.mock('@acrool/react-portal', () => (props: any) => <div data-testid="portal">{props.children}</div>);


describe('Block 组件', () => {
    beforeEach(() => {
    // 每次测试前清空 block 状态
        if (block && block.hideAll) block.hideAll();
    });

    it('初始时不渲染 Block', () => {
        const {queryByTestId} = render(<Block />);
        expect(queryByTestId('block-wrapper')).toBeNull();
    });

    it('调用 show 后渲染 Block', () => {
        render(<Block defaultMessage="Hello" />);
        act(() => {
            block.show({message: 'Test Message'});
        });
        // 断言 BlockWrapper 被渲染
        expect(document.querySelector('[data-testid="block-wrapper"]')?.textContent).toBe('Test Message');
    });

    it('调用 hide 后移除 Block', () => {
        render(<Block defaultMessage="Hello" />);
        act(() => {
            block.show({message: 'Test Message'});
        });
        expect(document.querySelector('[data-testid="block-wrapper"]')).not.toBeNull();
        act(() => {
            block.hide();
        });
        expect(document.querySelector('[data-testid="block-wrapper"]')).toBeNull();
    });

    it('调用 hideAll 后移除所有 Block', () => {
        render(<Block defaultMessage="Hello" />);
        act(() => {
            block.show({message: 'A'});
            block.show({message: 'B'});
        });
        expect(document.querySelector('[data-testid="block-wrapper"]')).not.toBeNull();
        act(() => {
            block.hideAll();
        });
        expect(document.querySelector('[data-testid="block-wrapper"]')).toBeNull();
    });
}); 
