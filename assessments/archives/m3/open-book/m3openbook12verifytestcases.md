## Test Case Verification and Explanation:

**1. Electricity Bill Calculation**

**Testcase 1:**

* **Input:** 30
* **Expected Output:** 90
* **Explanation:** The first 50 units are charged at ₹3 per unit, so 30 units cost 30 * 3 = ₹90. **This test case is correct.**

**Testcase 2:**

* **Input:** 150
* **Expected Output:** 650
* **Explanation:** 
    * First 50 units: 50 * 3 = ₹150
    * Next 100 units: 100 * 5 = ₹500
    * Total: 150 + 500 = ₹650. **This test case is correct.**

**Testcase 3:**

* **Input:** 300
* **Expected Output:** 2050
* **Explanation:**
    * First 50 units: 50 * 3 = ₹150
    * Next 100 units: 100 * 5 = ₹500
    * Next 100 units: 100 * 8 = ₹800
    * Remaining 50 units: 50 * 10 = ₹500
    * Total: 150 + 500 + 800 + 500 = ₹1950. **This test case is incorrect. The correct output should be 1950, not 2050.**

**2. Sum of Squares of Digits**

**Testcase 1:**

* **Input:** 123
* **Expected Output:** 14
* **Explanation:** 1² + 2² + 3² = 1 + 4 + 9 = 14. **This test case is correct.**

**Testcase 2:**

* **Input:** 99
* **Expected Output:** 162
* **Explanation:** 9² + 9² = 81 + 81 = 162. **This test case is correct.**

**Testcase 3:**

* **Input:** 0
* **Expected Output:** 0
* **Explanation:** 0² = 0. **This test case is correct.**

**Testcase 4:**

* **Input:** 456
* **Expected Output:** 77
* **Explanation:** 4² + 5² + 6² = 16 + 25 + 36 = 77. **This test case is correct.**

**3. Longest Run of Same Number**

**Testcase 1:**

* **Input:** [1, 2, 2, 3, 3, 3, 2, 2]
* **Expected Output:** 3
* **Explanation:** The longest run is the three consecutive 3s. **This test case is correct.**

**Testcase 2:**

* **Input:** [5, 5, 5, 3, 3, 4, 4, 4, 4]
* **Expected Output:** 4
* **Explanation:** The longest run is the four consecutive 4s. **This test case is correct.**

**Testcase 3:**

* **Input:** [1]
* **Expected Output:** 1
* **Explanation:** With only one element, the longest run is 1. **This test case is correct.** 
