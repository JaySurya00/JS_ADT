class Node{
    constructor(val){
        this.data=val;
        this.next= null;
    }
}

class LinkedList{
    constructor(val){
        if(val){
            const node= new Node(val);
            this.head= node;
        }
        this.head=null;
    }

    add(val){
        const node= new Node(val);
        if(!this.head){
            this.head= node;
        }
        else{
            let current= this.head;
            while(current.next){
                current= current.next;
            }
            current.next=node;
        }
    }

    traverse(){
        let current= this.head;
        while(current){
            console.log(current.data);
            current= current.next;
        }
    }
}


const ll= new LinkedList(4);
ll.add(8);
ll.add(1);
ll.add(7);
ll.traverse();