Here's how to solve this problem:

**1. Total Possible Committees**

*  Without any restrictions, there are  ³⁰C₅ = 142,506 ways to choose a committee of 5 from 30 people.

**2. Committees with No Members from a Group**

*  We need to subtract the committees that don't have at least one member from each group.  Let's count how many committees leave out one group entirely:
    * There are 3 ways to choose the group to leave out.
    * For each of those choices, there are ²⁵C₅ = 53,130 ways to choose 5 members from the remaining 2 groups.

**3. Committees with No Members from Two Groups**

* There's only one way to choose two groups to leave out. 
* There are ²⁰C₅ = 15,504 ways to choose 5 members from the remaining group.

**4. The Final Calculation**

* **Total committees with at least one member from each group:** 
  * ³⁰C₅ - (3 * ²⁵C₅) + (1 * ²⁰C₅) = 142,506 - (3 * 53,130) + 15,504 = **15,620** 

**Therefore, there are 15,620 committees of 5 that can be formed with at least one member from each group.** 
