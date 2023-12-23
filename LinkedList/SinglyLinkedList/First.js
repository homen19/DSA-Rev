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
        if(!this.head) {
            this.head = newNode;
        }
        else{
            
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    // Add data at the end of the list
    addNode(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        }
        else{
            let current  = this.head;
            while(current.next) {
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
        if(!this.head) {
            this.head = newNode;
        }
        else if(position <=1 ) {
            newNode.next = this.head;
            this.head = newNode;
            
        }
        else{
            while(current !== null && count < position) {
                prev = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            prev.next = newNode;
        }
    } 
    viewData() {
        let current = this.head;
        while(current) {
            console.log(current.data+" ->");
            current = current.next;
        }
    }
    countNode() {
        let count = 0;
        let current = this.head;
        while(current) {
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
myList.addBegin(5);
myList.viewData();
console.log("total nodes in the list are : "+myList.countNode());
myList.insertGivenPosition(20, 2);
myList.viewData();
