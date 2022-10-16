const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

 function removeKFromList(l, k) {

  const arr = [];
  let newList;
  let result;

  function walkList(list) {
    console.debug('value: ', list.value, '   next: ', list.next);
    if (list.next !== null) {
      walkList(list.next);
    }
  }

  function changeList(list, num) {
    if (list.value !== num) {
      arr.push(list.value);
      }
    if (list.next !== null) {
      changeList(list.next, num);
    }
  }

  function findList(list, num) {
    if (list.value === num) {
      result = list;
    }
    if (list.next !== null) {
      findList(list.next, num);
    }
  }

  changeList(l, k);

  newList = new ListNode(arr[0]);

  for(let i = 0; i < arr.length - 1; i++) {
    findList(newList, arr[i]);
    result.next = new ListNode(arr[i + 1]);
  }

  return newList;
}

module.exports = {
  removeKFromList
};
