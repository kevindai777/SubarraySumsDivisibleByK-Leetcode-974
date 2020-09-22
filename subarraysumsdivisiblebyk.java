//Java Solution

class Solution {
    public int subarraysDivByK(int[] A, int K) {
        Map<Integer, Integer> map = new HashMap<>();
        int sum = 0;
        int count = 0;
        
        for (int num : A) {
            sum += num;
            
            int mod = ((sum % K) + K) % K;
            map.put(mod, map.getOrDefault(mod, 0) + 1);
        }
        
        for (int key : map.keySet()) {
            if (map.get(key) > 1) {
                count += (map.get(key)) * (map.get(key) - 1) / 2;
            }
        }
        
        return count + map.getOrDefault(0, 0);
    }
}