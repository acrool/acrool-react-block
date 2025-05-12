import { removeByIndex } from './utils'

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3)
})

describe('removeByIndex', () => {
    it('正常移除指定 index', () => {
        expect(removeByIndex([1,2,3], 1)).toEqual([1,3])
    })
    it('index 越界時回傳原陣列', () => {
        expect(removeByIndex([1,2,3], 5)).toEqual([1,2,3])
    })
    it('index 為 -1 時回傳原陣列', () => {
        expect(removeByIndex([1,2,3], -1)).toEqual([1,2,3])
    })
    it('空陣列時回傳空陣列', () => {
        expect(removeByIndex([], 0)).toEqual([])
    })
    it('移除第一個元素', () => {
        expect(removeByIndex([1,2,3], 0)).toEqual([2,3])
    })
    it('移除最後一個元素', () => {
        expect(removeByIndex([1,2,3], 2)).toEqual([1,2])
    })
})

export {}
