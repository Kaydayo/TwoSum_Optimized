# TwoSum_Optimized
A function that returns the two numbers that add up to a target in any given array

# Approach to Problem
<table>
    <thead>
      <tr>
        <th>Approach</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>Brute Force</td>
            <td><code>O(N<sup>2</sup>)</code></td>
            <td><code>O(1)</code></td>
        <tr>
            <td>Binary Search</td>
            <td><code>O(N log N)</code></td>
            <td><code>O(1)</code></td>
        </tr>
        <tr>
            <td>Hash Map</td>
            <td><code>O(N)</code></td>
            <td><code>O(N)</code></td>
        </tr>
    </tbody>
  </table>


# Optimal Solution
A brute force approach have a nested for loop where i look for the first pair of indices of two numbers that add up to the target value. However, even though this approach is as simple as it gets, it is not the most optimal solution to the problem  as the time complexity of this solution is a cause for concern with an O(N²) run time

For better efficiency my approach is to avoid the use of nested for loop by adopting a hash map data structure
i have now improved the time complexity of my solution immensely with a run time of O(N). Each element is only being iterated once and ONLY once as i am no longer looping through the entire array for each iteration.

# conclusion
owever, this improvement in performance comes at a great cost. i now have a space complexity of O(N) since i am utilizing a hash map in my solution as a storage buffer for my elements in the input. Now, i am sacrificing space for speed. This is a scenario of tradeoff between space or time where the choice of either increasing space and decreasing speed or vice versa is being considered and immesnely factored.


