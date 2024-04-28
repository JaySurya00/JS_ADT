'use strict'

class minHeap{
    #heap=[];
    constructor(val)
    {
        this.#heap.push(val);
    }
    push(val){
        this.#heap.push(val);
        this.#heapifyUp();
        return;
    }
    pop(){
        const minVal= this.#heap[0];
        this.#swap(this.#heap.length -1, 0);
        this.#heap.pop();
        this.#heapifyDown();
        return minVal;
    }
    peek(){
        if(!this.#heap.length)
        {
            return null;
        }
        return this.#heap[0];

    }


    //Heapify_Algo//

    #heapifyUp(){
        let index= this.#heap.length -1;
        while(this.hasParentIndex(index) && this.#heap[this.parentIndex(index)]>this.#heap[index])
        {
            this.#swap(index, this.parentIndex(index));
            index= this.parentIndex(index);
        }
    }

    #heapifyDown(){
        let index=0;
        while(this.hasLeftChild(index))
        {
            let smallerChildIndex=this.leftChildIndex(index);
            if(this.hasRightChild(index) && this.#heap[this.rightChildIndex(index)]<this.#heap[smallerChildIndex])
            {
                smallerChildIndex= this.rightChildIndex(index); 
            }
            if(this.#heap[index]<this.#heap[smallerChildIndex]) break;
            this.swap(smallerChildIndex,index);
            index= smallerChildIndex;
        }
    }


    //Helper function//

    hasParentIndex(index){
        let parentIndex= this.parentIndex(index);
        if(parentIndex<0){
            return false;
        }
        return true;
    }

    parentIndex(index){
        let parentIndex= Math.ceil(index/2)-1;
        if(parentIndex<0 || parentIndex>this.#heap.length){
            return;
        }
        return parentIndex;
    }

    hasLeftChild(index){
        const lIndex= this.leftChildIndex(index);
        if(lIndex>this.#heap.length)
        {
            return false;
        }
        return true;
    }

    leftChildIndex(index){
        const leftChildIndex= 2*index+1;
        return leftChildIndex;
    }

    hasRightChild(index){
        const rIndex= this.rightChildIndex(index);
        if(rIndex>this.#heap.length)
        {
            return false;
        }
        return true;
    }

    rightChildIndex(index){
        const rightChildIndex= 2*index+2;
        return rightChildIndex;
    }
    

    #swap(index, parentIndex)
    {
        let a= this.#heap[index];
        this.#heap[index]=this.#heap[parentIndex];
        this.#heap[parentIndex]=a;
    }
    print(){
        this.#heap.forEach((val)=>console.log(val));
    }
}

