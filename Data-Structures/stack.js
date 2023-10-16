class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        return this.items.push(element)
    }
    
    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        return this.items.toString()
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
stack.push(20)
stack.push(10)
stack.push(30)
stack.push(40)
console.log(stack.peek());
stack.print()