# Repository changes
* Convert README to markdown

# Sources of problems
## Large / Recurring
* [Project Euler](https://projecteuler.net/archives)
* [Reddit: Daily Programmer](https://www.reddit.com/r/dailyprogrammer)
## Other / one-off
* The algorithmic challenges described in [this Reddit thread](https://www.reddit.com/r/javascript/comments/3rb88w/ten_questions_ive_been_asked_most_more_than_once/)

# Efficiency
* project_euler/005.js - Spending a few cycles to find the largest prime factors of max_divisor would eliminate the need to test for those.
* project_euler/023.js - I spent a lot of time on this one doing little optimizations that ultimately cut the computation time significantly (including cutting the time to generate abundant_sums by over 98%. However, this still takes 95 seconds to run on my MBP, so I’ll be coming back to it to make further adjustments.
## More efficient prime number generation
* project_eulser/007.js - Replace brute forced prime generator with more efficient prime generating algorithm.
* project_euler/010.js - Further evidence of the need for a more efficient prime generation algorithm.
* project_euler/035.js - Not too bad since I'm only going to 1M once and not checking primeness each time. Should still improve.
