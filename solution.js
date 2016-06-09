function Node(val){
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(){
  this.head = null;

      this.traverse = function(){
            var current = this.head;
            var nodeList = "";

            nodeList += this.head.val + "-->";
            // console.log(current); //this should be the head node
              while (current.next){
                current = current.next;
                // console.log(current);
                nodeList += current.val +"-->";
                // console.log('i have a node');
              }
                // console.log(current.val + " outof loop");
                console.log(nodeList);
                return current;
      }

      // ##Adding Nodes
      // Create an add method in the SinglyLinkedList class that adds a node to the end of the list.  All you are given is a value.  Do not worry about sorting, just add to the end of the list.

      this.add = function(value){
        if(this.head === null || this.head ==='undefined'){
          //if there is no head for this, then add the item as the head
          //don't traverse.
            this.head = new Node(value);

            return this.head;
        }else{
          var newNode = new Node(value)
            // console.log(this.traverse());
            return this.traverse().next = newNode;
        }
      }

      // ###Bonus: addAtIndex
      // Create an addAtIndex method that adds a node at the index given.  You are also given a value.  For example, given this list:
      // (5) -> (10) -> (12)
      // addAtIndex(1, 20) will produce
      // (5) -> (20) -> (10) -> (12)
      this.addAtIndex = function(numIndex, numValue){
        //loop through SLL until you hit the 'index count'
        //you'll need to point the 'next' from index-1 to the new node
        //then point the new node to the next from index-1
        //all other pointers should work ok
          var current = this.head;
          var counter = 0;
          while (current){
            if (counter === numIndex-1){
              //this is where you would do your insert
              // console.log("insert before: " + current.val);
              var tempNext = current.next;
              var newNode = new Node(numValue);
              current.next = newNode;
              newNode.next = tempNext;
              return current;
            }else {
              current = current.next;
              counter ++;
            }
          }

          // ##Sum
          // Create a sum method that returns the sum of the values in the list.
        }

          this.sum = function(){
            var sum = 0;
            var current = this.head;

            while(current){
              sum += current.val;
              current = current.next;
            }
            return sum;
          }

          this.average = function(){
            var sum =0;
            var count = 0;
            var mean = 0;
            var current = this.head;

            while(current){
              count ++;
              sum += current.val;
              current = current.next;
            }
            return (sum/count);
          }

          // ##ListToArray
          // Create a listToArray method that returns all the values of the list in an array.
          this.listToArray = function(){
            var listArray = [];
            var current = this.head;

            while(current){
              listArray.push(current.val);
              current = current.next;
            }
            return listArray;
          }

          // ##Removing Nodes (Advanced)
          // Create a remove method that takes in a value.  If that value is found in the list, remove its node
          // (do not worry about removing duplicates, just remove the first one you find).
          // Hmm, how would you remove a node from a list if all a list truly is, is a bunch of nodes pointing to
          // one another?
          this.removeNode = function(value){

            var current = this.head;
            var nodeBefore = {};
            var nodeAfter = {};

            while(current){

              if(current.val ===value){
                //this is the one that needs to be eliminated
                nodeAfter=current.next;
                nodeBefore.next = nodeAfter;
              }
              nodeBefore = current;  //if there is no match, set this incase the next one is a match.
              current = current.next;
            }
            console.log("removed " + value);
        }
        //
        // ##Reverse
        // Reverse a node sequence.  Given an SLL object, its .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front. For example...
        // ```javascript
        // node1 = new Node(4);
        // node2 = new Node(3);
        // node3 = new Node(2);
        // node4 = new Node(1);
        //
        // node1.next = node2; // 4=>3
        // node2.next = node3; // 4=>3=>2
        // node3.next = node4; // 4=>3=>2=>1

        this.reverse = function(){
          myArray = [];
          current = this.head;
          strLLString = "";
          while(current){
            myArray.push(current);
            current = current.next;
          }
            // console.log("ll as array: " +myArray);
            //now reverse everything by looping through the array
            this.head = myArray[myArray.length-1];
            // console.log("this head" + this.head);
            current = this.head;
            strLLString += this.head.val + "-->";
            for(var idx=myArray.length-1; idx>0; idx--){
              current.next = myArray[idx-1];
              current = current.next;
              strLLString += current.val +"-->";
            }
            console.log(strLLString);
        }

        // ##hasLoop (Advanced)
        // To help with this challenge, we introduce the idea that we can have multiple runners in our linked list.
        // Remember how we set up a 'current' to traverse the list while preserving the head?  This is an idea of a runner.
        // We can certainly have multiple runners, maybe going at different "speeds", in other words,  one trailing the
        // other by a couple nodes.
        //
        // Scenario: Zubin sends linked lists to Grace, but she doesn't quite trust him.  Is he trying to make her code spin
        //  infinitely?  Given a linked list, determine whether it has a loop, and return a boolean accordingly.
        //  [The linked list does not necessarily have unique values and you can not modify the nodes to have any
        //    additional information, i.e. breadcrumbs]

        this.hasLoop=function(){

          var current = this.head;
          var currentIdx ={};
          var prevIdx = {};

          while(current){
            if(current.next === prevIdx.next){
              return("True: Duplicated node is: " + current.val);
            }else {
              prevIdx = current.next;
              current = current.next;
            }
          }
        }
      }


var sll1 = new SinglyLinkedList();
sll1.add(1);
// console.log(sll1.head.val);  //make sure the head got added!
sll1.add(25);
sll1.add(33);
sll1.add(7);
// console.log(sll1.traverse());
console.log(sll1.traverse());
sll1.addAtIndex(2, 45);
console.log(sll1.traverse());
console.log("sum: " + sll1.sum());
console.log("average: " + sll1.average());
console.log("list array: " + sll1.listToArray());
sll1.removeNode(45);
sll1.removeNode(33);
console.log(sll1.traverse());
sll1.add(45);
sll1.add(33);
sll1.reverse();

node1 = new Node(4);
node2 = new Node(3);
node3 = new Node(2);
node4 = new Node(1);
node5 = new Node(0);

node1.next = node2; // 4=>3
node2.next = node3; // 4=>3=>2
node3.next = node4; // 4=>3=>2=>1
node4.next = node5; // 4=>3=>2=>1=>0
node5.next = node3; // 4=>3=>2=>1=>0=>2

sll2 = new SinglyLinkedList();
sll2.head = node1;
console.log(sll2.hasLoop()); // true
