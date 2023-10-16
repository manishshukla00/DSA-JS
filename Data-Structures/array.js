const arr = [1, 2, 3, 'vishwash']
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for(let item of arr) {
    console.log(item);
}

/*
 Array - Big-O time complexity

 Insert/remove from end - O(1)
 Insert/Remove from beginning - O(n)
 Access - O(1)
 Search - O(n)
 Push / pop - O(1)
 Shift / unshift / Concat / Slice / Splice - O(n)
 forEach / map / filter / reduce - O(n)
*/