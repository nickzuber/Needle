
// # Needle object that contains all core data structures

'use strict';

const SinglyLinkedList = require('./lib/singlyLinkedList.js');
const Queue = require('./lib/queue.js');
const Stack = require('./lib/stack.js');
const DoublyLinkedList = require('./lib/doublyLinkedList.js');
const BinaryHeap = require('./lib/binaryHeap.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;
Needle.Queue = Queue;
Needle.Stack = Stack;
Needle.DoublyLinkedList = DoublyLinkedList;
Needle.BinaryHeap = BinaryHeap;

exports = module.exports = Needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}