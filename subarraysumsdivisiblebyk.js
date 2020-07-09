//Objective is to see how many subarrays' sums in a 1D array are divisible by K

let A = [4,5,0,-2,-3,1], K = 5


//O(n) solution that uses a hashmap to keep track of the # of times a mod
//appears in the array

let map = {}
let count = 0
let sum = 0
    
for (let i = 0; i < A.length; i++) {
    sum += A[i]
        
    //Mod it twice for negative values
    let mod = ((sum % K) + K) % K
    //Increment the # of times a mod appears
    map[mod] = (map[mod] + 1) || 1
}
    
for (let i = 0; i < K; i++) {
    if (map[i] > 1) {
        //nC2
        count += (map[i] * (map[i] - 1)) / 2
    }
}
 
//Add on however many times the mod '0' occurred
return count + (map[0] || 0)