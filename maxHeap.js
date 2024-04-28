'use strict';

class maxHeap{
    #heap=[];
    constructor(val){
        this.#heap.push(val);
    }

    //Methods//

    push(val){
        this.#heap.push(val);
        this.#heapifyUp();
    }
    pop(){
        let lastIndex= this.#heap.length -1;
        this.#swap(0,lastIndex);
        this.#heap.pop();
        this.heapifyDown();
    }
    peek(){

    }

    //Heapify Algorithm//

    #heapifyUp(){
        let index= this.#heap.length-1;
        while(this.#getParentIndex(index)>=0 && this.#heap[this.#getParentIndex(index)]<this.#heap[index]){
            let parentIndex= this.#getParentIndex(index);
            this.#swap(index, parentIndex);
            index=parentIndex;
        }
    }

    heapifyDown(){
        let index= 0;
        while(this.#hasLeftChild(index)){
            let childIndex= this.#getLeftChildIndex(index);
            if(this.#hasRightChild(index) && this.#heap[this.#getRightChildIndex(index)]>this.#heap[this.#getLeftChildIndex(index)]){
                childIndex= this.#getRightChildIndex(index);
            }
            if(this.#heap[index]===this.#heap[childIndex]){
                break;
            }
            this.#swap(index, childIndex);
            index= childIndex;
        }

    }

    //Helper function//

    #swap(index1, index2){
        let val1=this.#heap[index1];
        this.#heap[index1]=this.#heap[index2];
        this.#heap[index2]=val1;
    }

    #getParentIndex(index){
        let parentIndex= Math.ceil(index/2)-1;
        return parentIndex;
    }

    #hasLeftChild(index){
        if(this.#getLeftChildIndex(index)<this.#heap.length){
            return true;
        }
        return false;
    }

    #getLeftChildIndex(index){
        return 2*index+1;
    }

    #hasRightChild(index){
        let rightChildIndex= this.#getRightChildIndex(index);
        if(rightChildIndex<this.#heap.length){
            return true;
        }
        return false;
    }
    #getRightChildIndex(index){
        return 2*index+2;
    }

    printHeap(){
        this.#heap.forEach((val, index, arr)=>{
            console.log(val);
        })
    }

}
