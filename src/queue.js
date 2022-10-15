const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// class Queue {

//   getUnderlyingList() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   enqueue(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   dequeue() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }


class Queue {

  constructor() {
    this.que = {};
  }

  getUnderlyingList() {

    function walkList(list) {
      if (list.next !== null) {
        walkList(list.next);
      }
    }

    walkList(this.que);

    return this.que;

  }

  enqueue(value) {

    function addListItem(list, value) {
      if (list.next !== null) {
        addListItem(list.next, value);
      } else {
        list.next = new ListNode(value);
      }
    }

    function isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }

    if (isEmpty(this.que)) {
      this.que = new ListNode(value);
    } else {
      addListItem(this.que, value);
    }

  }

  dequeue() {

    let result;

    function delListItem(list) {
      let currentItem = list;

      if (list.next !== null) {
        currentItem = list.next;
        delListItem(list.next);
      } else {
        return null;
      }

      return currentItem;
    }

    result = this.que.value;
    this.que = delListItem(this.que);
    
    return result;
  }
}



module.exports = {
  Queue
};
