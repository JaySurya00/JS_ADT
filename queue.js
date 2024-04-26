'use stict';

export default class Queue{
    #item= [];
    constructor(val){
        if(val)
        {
            this.#item.push(val);
        }
    }
    push(val){
        this.#item.push(val);
    }
    pop()
    {
        if(this.isEmpty())
        {
            return;
        }
        const front= this.#item.shift();
        return front;
    }
    front()
    {
        return this.#item[0];
    }
    back()
    {
        return this.#item.at(-1);
    }
    isEmpty(){
        if(this.#item.length)
        {
            return false;
        }
        return true;
    }
}


