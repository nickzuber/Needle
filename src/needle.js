
// # Needle object that contains all core data structures

'use strict';

const SinglyLinkedList = require('./lib/singlyLinkedList.js');
const Queue = require('./lib/queue.js');
const Stack = require('./lib/stack.js');
const DoublyLinkedList = require('./lib/doublyLinkedList.js');
const BinaryHeap = require('./lib/binaryHeap.js');
const BinarySearchTree = require('./lib/binarySearchTree.js');
const Hashmap = require('./lib/hashmap.js');
const SortedArray = require('./lib/sortedArray.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;
Needle.Queue = Queue;
Needle.Stack = Stack;
Needle.DoublyLinkedList = DoublyLinkedList;
Needle.BinaryHeap = BinaryHeap;
Needle.BinarySearchTree = BinarySearchTree;
Needle.Hashmap = Hashmap;
Needle.SortedArray = SortedArray;

exports = module.exports = Needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}