//Objective is to decode a string based on it's pattern and parentheses

let s = "2[abc]3[cd]ef"


//O(n) solution where n is the length of the string
//We use a stack to keep track of what needs to be repeated

let stack = []
    
for (let char of s) {
    if (char != ']') {
        stack.push(char)
        continue
    }
    
    let curr = stack.pop()
    let string = ''
    
    //get all the characters inside the []
    while (curr != '[') {
        
        //NOT 'string += curr' since we want the curr to come first
        //'bc' not 'cb'
        string = curr + string
        curr = stack.pop()
    }
    
    let count = ''
    curr = stack.pop()
    
    //While it's a number we're passing
    while (!Number.isNaN(Number(curr))) {
        
        //Same idea as before... we want '13' not '31' repeats
        count = curr + count
        curr = stack.pop()
    }
    
    //A filter for the answer to the previous decoding
    //In our last pop statement, we pop out the 'aaa' from before,
    //which we have to put back in
    stack.push(curr)
    stack.push(string.repeat(Number(count)))
}

return stack.join('')