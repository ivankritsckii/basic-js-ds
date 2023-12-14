const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roote = null
  }

  root() {
    return this.roote
  }

  add(data) {
    let newNode = new Node(data);
    if (this.roote === null) {
        this.roote = newNode;
    } else {
        this.insertNode(this.roote, newNode);
    }
}
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}

  has(data, root = this.roote) {
    if (root === null) {
      return false;
  } else if (data < root.data) {
      return this.has(data, root.left);
  } else if (data > root.data) {
      return this.has(data, root.right);
  } else {
      return true;
  }
  }

  find(data, root = this.roote) {
    if (root === null) {
      return null;
  } else if (data < root.data) {
      return this.find(data, root.left);
  } else if (data > root.data) {
      return this.find(data, root.right);
  } else {
      return root;
  }
  }

  remove(data) {
    this.roote = this.removeNode(this.roote, data);
    
  }
  removeNode(node, data) {
    if (node === null) {
        return null;
    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    // если данные такие как данные корня, удаляем узел
    } else {
        // удаляем узел без потомков (листовой узел (leaf) или крайний)
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // удаляем узел с одним потомком
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }

        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}
   minNode(node) {
  if (node.left === null)
      return node;
  else
      return this.minNode(node.left);
}

  min(root = this.roote) {
    if(root.left===null){
      return root.data
    }
    else{
      return this.min(root.left)
    }
  }

  max(root = this.roote) {
    if(root.right===null){
      return root.data
    }
    else{
      return this.max(root.right)
    }
  }
}

class Node {
  constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};