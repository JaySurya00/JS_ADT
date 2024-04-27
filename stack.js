'use strict';

export default class Stack {
    #item=[];
    constructor(val)
    {
        this.#item.unshift(val);
    }

    push(val){
        // this.#item=[val, ...this.#item];
        this.#item.unshift(val);
    }
    pop()
    {
        if(this.#item.isEmpty())
        {
            throw new Error('Stack is empty!');
        }
        return this.#item.shift();
    }
    isEmpty(){
        return this.#item.length ? false: true;
    }
}