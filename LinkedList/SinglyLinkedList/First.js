class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class First {
    constructor() {
        this.head = null;
    }
    // Add data at the beginning
    addBegin(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {

            newNode.next = this.head;
            this.head = newNode;
        }
    }
    // Add data at the end of the list
    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    // add node in the given position
    insertGivenPosition(data, position) {
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;
        let prev = null;
        if (!this.head) {
            this.head = newNode;
        }
        else if (position <= 1) {
            newNode.next = this.head;
            this.head = newNode;

        }
        else {
            while (current !== null && count < position) {
                prev = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            prev.next = newNode;
        }
    }

    // insert Node in sorted linked list
    // this function will work if only the list data are sorted 
    insertSortedList(data) {
        let newNode = new Node(data);
        let current = this.head;
        if (data < this.head.data) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            while (current.next && data > current.next.data) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;

        }

    }

    deleteFirstNode() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        else {
            this.head = this.head.next;
        }

    }
    delteIntermediateNode(position) {
        let current = this.head;
        let prev = null;
        let count = 0;
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        else {
            while (current !== null && count < position) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
        }
    }
    reverseList() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    viewData() {
        let current = this.head;
        while (current) {
            console.log(current.data + " ->");
            current = current.next;
        }
    }
    countNode() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}
const myList = new First()
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
// myList.addBegin(5);
myList.viewData();
// console.log("total nodes in the list are : "+myList.countNode());
// myList.insertGivenPosition(20, 2);
// myList.viewData();
// myList.deleteFirstNode();
// console.log("After deleting first node the list are : ");
// myList.viewData();
// console.log("After deleted the intermediate node that is 3 position");
// myList.delteIntermediateNode(2);
// myList.viewData();
// // reversing the list
// console.log("After reverse the list is :");
// myList.reverseList();
// myList.viewData();

// insertioin in the sorted linked list 

myList.insertSortedList(5);
myList.viewData();


