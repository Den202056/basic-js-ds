const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class BinarySearchTree {

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class NodeTree {
  constructor(data, type='default', parent=null) {
      this.data = data;
      this.type = type;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {

  currentRoot = null;

  root() {
    return this.currentRoot;
  }

  add(data) {
    let currentParent = this.currentRoot;

    function addList(node) {
      if (data > node.data) {
        if (node.right !== null) {
          addList(node.right);
        } else {
          if (node.type !== 'root') node.type = 'node';
          node.right = new NodeTree(data, 'leaf', node.data);
        }
      } else {
        if (node.left !== null) {
          addList(node.left);
        } else {
          if (node.type !== 'root') node.type = 'node';
          node.left = new NodeTree(data, 'leaf', node.data);
        }
      }
    }

    if (currentParent === null) {
      this.currentRoot = new NodeTree(data, 'root');
    } else {
      addList(currentParent);
    }
  }

  has(data) {
    let flag = false;

    function hasList(node, d) {
      if (node.data === d) {
        flag = true;
      } else {
        if (node.left !== null) {
          hasList(node.left, d);
        }
        if (node.right !== null) {
          hasList(node.right, d);
        }
      }
    }

    if (this.currentRoot !== null) hasList(this.currentRoot, data);

    return flag;
  }

  find(data) {
    let result = null;

    function findList(node, d) {
      if (node.data === d) {
        result = node;
      } else {
        if (node.left !== null) {
          findList(node.left, d);
        }
        if (node.right !== null) {
          findList(node.right, d);
        }
      }
    }
    if (this.currentRoot !== null) findList(this.currentRoot, data);
    return result;
  }

  remove(data) {
  }

  min() {
    
    let result = null;
    let currentParent = this.currentRoot;
    let min;

    function minList(node) {
      min = node.data;
      if (min > node.data) {
        if (node.right !== null) {
          minList(node.right);
        } else {
          result = min;
        }
      } else {
        if (node.left !== null) {
          minList(node.left);
        } else {
          result = min;
        }
      }
    }

    if (this.currentRoot !== null) {
      min = currentParent.data;
      minList(currentParent);
    } else {
      result = null;
    }
    return result;
  }

  max() {

    let max = this.currentRoot.data;

    function maxList(node, d) {
      if (max < node.data) max = node.data;
      if (node.data === d) {
        max = node.data;
      } else {
        if (node.left !== null) {
          maxList(node.left, d);
        }
        if (node.right !== null) {
          maxList(node.right, d);
        }
      }
    }

    if (this.currentRoot !== null) maxList(this.currentRoot, Infinity);
    return max;
  }
}

module.exports = {
  BinarySearchTree
};