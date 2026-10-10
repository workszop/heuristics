# Practical problem solving heuristics

A heuristic is a useful way to look for a solution, not a guarantee that the solution is correct or best. This guide collects reusable schemes from the non-HTML documents in this folder. Each scheme explains when to use it and what to do next.

The procedures are plain-language adaptations, not quotations. Examples outside mathematics illustrate how a scheme might transfer; they are not claims that the sources tested it in those settings. Similar ideas are combined rather than repeated. Short source codes point to the document review at the end.

The expanded explanations are written for readers aged about 13–16. Each scheme includes an illustrative example created for this guide, not a quotation or a case study attributed to the source documents.

## How to use this guide

Write down what you are trying to achieve, what you know, and which conditions a valid answer must satisfy. Choose one scheme that matches your obstacle. Record what you try and what it teaches you. Check the result against the original problem before accepting it.

Use the schemes as a menu, not a checklist to complete in order. You may need to return to the framing, switch methods, or combine two approaches. A heuristic helps you discover an answer; a proof, an appropriate test, or a feasibility check establishes what you can claim about it.

### Quick chooser

| Your obstacle | Start with |
|---|---|
| The question is vague or seems to lack information | 17: Clarify the problem; 34: Find only what is asked |
| You understand the goal but cannot see a route | 1: Work backward; 2: Analogy; 32: Add an intermediate object |
| The problem is too large or tangled | 3: Break into parts; 16: Try a small instance; 18: Change representation |
| Constraints make every attempt fail | 9: Relax a constraint; 10: Allow fractions; 13: Add justified restrictions |
| You need a rough answer or a reality check | 6: Estimate the scale; 7: Use comparable cases; 19: Check units and limits |
| Many answers work, but you want a better one | 5: Improve and restart; 11: Use bounds; 35: Try a greedy first pass |
| The plan has stages or several decision levels | 14: Commit in stages; 15: Check the details against the big plan |
| Options involve uncertainty or conflicting interests | 8: Check biases; 12: Price trade-offs; 21: Compare outcomes; 22: Map interactions |
| You need to explore a pattern or general rule | 23: Experiment and explain; 29: Recurrence or induction; 37: Generalize |
| You suspect a claim or target is impossible | 24: Test the opposite; 25: Use an extreme element; 27: Find an invariant |
| The problem involves counting or arrangements | 20: Symmetry; 26: Pigeonholes; 30: Complement; 31: Count twice; 33: Systematic cases |
| A process repeats, or your own work has stalled | 28: Track one-way change; 36: Review progress and revise the plan |

## Schemes

### 1. Work backward from the goal

**Description:** Start from the exact result you want and ask: what must be ready just before it? Then ask the same about that step, and keep going back until you reach something you already know or can do today. A distant goal breaks into small requirements, and gaps in the plan show up. Finally read the chain forward from the start and check every link, because something you need is not always enough on its own.

**Example:** You must hand in a science poster on Friday, and today is Monday. Work backward: handing in needs the finished poster, the poster needs its layout, and the layout needs a draft and sources, which you can start on now. Then a gap shows up: the teacher must see the poster before the hand-in, and the plan has no day for it. So plan from the end: teacher feedback Thursday, layout Wednesday, draft Tuesday, sources Monday. Last, read the plan forward: sources feed the draft, the draft feeds the layout, the layout goes to the teacher, and the feedback gives the final poster.

**Useful for:** Planning, finding missing prerequisites, solving equations, and constructing proofs.

**Procedure:**
1. Describe the finished result precisely.
2. Ask, "What would be enough to make this happen?"
3. Repeat that question for each new requirement until you reach something already known or achievable.
4. Reverse the chain and carry out the steps from the actual starting point.
5. Check every forward step. A condition that is necessary for success may not be enough to produce it.

**Watch out:** Backward reasoning can suggest a route without proving that the route works.

**Sources:** [S1](#s1); [S4](#s4), section 2.2, the penultimate-step strategy, p. 27.

### 2. Reuse the structure of a solved problem

**Description:** An analogy: the new problem works like one you have already solved – a different story, the same relationships. Do not copy the answer or match only the topic. Find what depends on what, what is limited and what you want. Match each part of the solved problem to a part of the new one, then reuse the method, because the same relationships make the same method work. Before you trust the match, check the differences that could break it.

**Example:** You have already solved this: tap A fills a pool in 3 hours and tap B in 6 hours. Together they need 2 hours, because in one hour A fills 1/3 of the pool and B 1/6, which is 1/2 together. New problem: Ola paints a fence in 3 hours and Kuba in 6. The story differs, the structure is the same: each painter is a tap, the fence is the pool, and the rates add up. So 1/3 + 1/6 = 1/2 of the fence per hour, which is 2 hours. One difference must be checked: this works only if they paint at the same time without getting in each other's way, for example with two brushes.

**Useful for:** Unfamiliar problems, design, troubleshooting, and learning a new subject.

**Procedure:**
1. List the main objects, relationships, constraints, and goal in the current problem.
2. Find a solved problem with a similar structure.
3. Map each important part of that problem to a part of this one.
4. Adapt its solution method.
5. Identify differences that could break the analogy and test them first.

**Watch out:** Similar appearance is weak evidence. The relationships that made the earlier solution work must also apply here.

**Sources:** [S1](#s1).

### 3. Break the problem into parts

**Description:** When a problem is too big to grasp at once, split it into smaller tasks and write down what each one should produce. Note which task must wait for another result: you cannot book a room before you have permission. Small tasks are easier to start and easy to share between people. Then join the results and check the connections, because parts that work alone can clash together. The final check must test the original goal and all the conditions.

**Example:** A class wants a film night, which looks like one huge job. Split it into five parts: permission, room, film, snacks, announcement. Mark what must wait: the room comes after permission, and the announcement needs the film and the room. One student plans the drinks and another the food, each list costing 6 euros; the class budget is 10 euros. Joined, the lists cost 12 euros, so the class drops one 2-euro item and gets exactly 10. Splitting shows who does what; only checking the whole catches the budget.

**Useful for:** Projects, complex calculations, system design, and multi-stage investigations.

**Procedure:**
1. Separate the problem into parts with clear outputs.
2. Mark which parts depend on other parts.
3. Solve an independent part or an important prerequisite first.
4. Combine the partial results, including the work needed to connect them.
5. Test the whole result against the original goal and constraints.

**Watch out:** The parts may interact. Several good local solutions do not automatically make a good overall solution.

**Sources:** [S1](#s1).

### 4. Use controlled trial and error

**Description:** Controlled trial and error means each attempt is a small experiment: choose a plausible candidate, predict an outcome, test it safely, and record what the result teaches you. Change one relevant feature when possible, so you can connect cause and effect. A failed attempt is useful when it rules out an option; repeating random guesses is not. Use this only where the cost and risk are limited.

**Example:** Your team predicts that folded paper strips make a paper bridge stronger. You build two identical 20-centimeter bridges, one with three strips and one with five, so the number of strips is the only difference. Then you add identical books one by one until each bridge collapses: three strips hold four books, five strips hold eight. Since nothing else changed, the extra books most likely come from the strips. The prediction held in this test, because you counted the books. It does not prove that every bridge needs five strips.

**Useful for:** Troubleshooting, prototypes, and small searches where tests are cheap and safe.

**Procedure:**
1. Define a clear test for success.
2. Choose a plausible candidate and predict what should happen.
3. Test it with limited cost and risk.
4. Record what worked, what failed, and what the failure rules out.
5. Change one relevant feature when possible, then test again. Stop repeating attempts that teach you nothing.

**Watch out:** Unrecorded changes make it hard to know what caused an improvement. Do not experiment on an irreversible or dangerous system without safeguards.

**Sources:** [S1](#s1).

### 5. Improve a workable solution and escape dead ends

**Description:** Start with any solution that meets the hard requirements, then improve it through nearby changes, such as swapping two items. Keep changes that improve the chosen score. If small changes stop helping, you may be at a local optimum, meaning nothing nearby is better, so save the best version and restart or make a larger change. This search can find a better answer without proving it is the best possible one.

**Example:** A class has five evenings, Monday to Friday, to study five subjects, one subject per evening. The tests are fixed: Maths on Wednesday, Physics on Thursday, Biology on Friday. A plan scores one point for each test whose subject is studied the evening before. Start with Maths, Physics, History, Biology, Geography: only Biology fits, score 1. Swapping Monday and Tuesday puts Maths on Tuesday: score 2. Now every swap of neighbouring evenings gives just 1 (only a bigger change, such as swapping Monday with Wednesday, would help): a local optimum. Restart from History, Geography, Maths, Physics, Biology (score 0). Three swaps give History, Maths, Physics, Biology, Geography: score 3, the maximum possible, since there are only three tests.

**Useful for:** Schedules, layouts, routes, resource allocation, and designs with many possible answers.

**Procedure:**
1. Define what makes one valid solution better than another.
2. Build a feasible starting solution.
3. Try nearby changes and keep useful improvements.
4. When progress stops, keep a copy of the best solution and try a restart or a larger change.
5. Compare the best candidates using the same criteria and stop at a stated time or quality limit.

**Watch out:** Being better than all nearby alternatives does not mean being best overall. Preserve hard constraints while searching.

**Sources:** [S1](#s1), "Improvement heuristics" and "Meta-heuristic methods"; [S3](#s3), sections 7.2 and 8.2. This is a manual adaptation, not a full specification of those algorithms.

### 6. Estimate the scale before calculating precisely

**Description:** An order-of-magnitude estimate asks roughly how large a result is before you spend time on exact arithmetic. Round uncertain inputs, keep units, state assumptions, and use a low and high case to create a range. This catches a misplaced zero or an unrealistic plan early. It is a reality check, not an exact answer, guarantee, or fixed price; use a rigorous calculation when the decision needs one.

**Example:** Your class wants to raise 100 euros by selling snacks. A quick estimate: 20 students, 3 snacks each, 2 euros per snack, so 20 × 3 × 2 = 120 euros. Some students will sell only 2 snacks and others 4, which gives 20 × 2 × 2 = 80 euros at the low end and 20 × 4 × 2 = 160 euros at the high end. The range from 80 to 160 contains 100, so the goal is realistic. If an exact calculation later gave 1200 euros, the estimate would show at once that an extra zero slipped in. Costs and unsold snacks still need checking.

**Useful for:** Early planning, quick feasibility checks, and catching implausible calculations.

**Procedure:**
1. State the quantity and its unit.
2. Break it into quantities that are easier to estimate.
3. Choose rounded values and write down the assumptions behind them.
4. Combine the values, checking that the units make sense.
5. Change uncertain inputs to plausible low and high values. Report an approximate range rather than invented precision.

**Watch out:** An estimate is not an exact result, a guarantee, or a fixed-price commitment. Use a more rigorous method when the decision requires one.

**Sources:** [S1](#s1), "What is Estimation?" and "Improving Estimation Accuracy."

### 7. Estimate from parts and comparable cases

**Description:** Estimate a task in two ways, then compare. First split it into pieces that do not overlap and price each piece from similar past work, such as minutes per edited clip. Add work that belongs to the whole, like a shared introduction. Then compare the total with how long a similar whole task took; if they differ, look for the reason. Two routes that agree make it more trustworthy. Also keep two numbers apart: effort is everyone's working time added up, while elapsed time runs from start to finish and is shorter when people work in parallel.

**Example:** A class podcast has four interviews, and you estimate the editing. One interview took 15 minutes to edit before, so 4 × 15 = 60 minutes. Add 30 minutes for the shared introduction and upload: 90 minutes of effort. Two students each edit two interviews (30 minutes), then one of them adds the introduction and uploads (30 minutes), so the clock shows 30 + 30 = 60 minutes. The last podcast, also with four interviews, took 120 minutes of effort. The 30-minute gap has a reason: back then the teacher also asked for corrections, and this time there is no such step. So 90 minutes looks believable. After finishing, write down the real time and fix the 15-minute rate.

**Useful for:** Effort, capacity, quantity, and cost estimates where relevant past data exist.

**Procedure:**
1. Divide the work into non-overlapping pieces.
2. Estimate each piece using comparable completed work or a relevant rate, such as time per unit.
3. Include coordination, integration, and other work that does not belong to a single piece.
4. Compare the total with the result for a similar whole task. Investigate large differences.
5. After completion, compare estimate with outcome and update the assumptions for next time.

**Watch out:** Effort and elapsed time are different. Parallel work, dependencies, and shared risks affect the total; unfamiliar work may not fit historical rates.

**Sources:** [S1](#s1), "Improving Estimation Accuracy" and "Business."

### 8. Check whether a mental shortcut is misleading you

**Description:** Your first answer may come from a mental shortcut. The most common one is availability: what is easy to remember feels more frequent than it is, like two late buses you just waited for. Others are judging by resemblance and clinging to the first number you heard. So treat the first answer as a guess to test. Ask which shortcut may be behind it, look for data about similar cases, including data against your guess, and estimate the same thing by another route. Compare both answers and say what you still do not know.

**Example:** Your school bus was late two times in a row, so you guess that half of the next ten trips, 5, will be late. Those two delays are easy to remember because they were annoying: that is availability. Second route: your notes on the last ten trips show only 2 late ones, the same two you remember. That is 20 percent, a better fit than 50. Ten trips is a small sample and rain could change the result, so you do not say ‘the bus is punctual’ but ‘about 2 trips in 10 are late, not certain’. The check corrected an impression without predicting the future.

**Useful for:** Uncertain judgments, interpreting evidence, and reviewing estimates.

**Procedure:**
1. Write down your first answer and why it feels plausible.
2. Ask whether it mainly comes from a recent or memorable example, a resemblance, or an initial number.
3. Seek relevant data and comparable cases, including evidence against your first answer.
4. Make a second estimate or explanation by a different route, without simply adjusting the first.
5. Compare the results and state what remains uncertain.

**Watch out:** Availability, representativeness, and anchoring describe possible judgment shortcuts, not reliable procedures for establishing truth.

**Sources:** [S1](#s1), "Examples of Common Heuristics" and "Limitations."

### 9. Temporarily remove a difficult constraint

**Description:** Pick one rule that makes the task hard and, on a draft only, pretend it does not exist. For a duty rota that could be ‘nobody two days in a row’. Now the task is easy, so you get a complete draft quickly. Then check the draft against the dropped rule: the places that break it show where the real difficulty is. Restore the rule and repair only those places. Sometimes the draft also shows how good an answer could be at best (see heuristic 11). Safety, legal and accessibility rules are never dropped from the final result.

**Example:** A class needs a duty rota for Monday to Friday: 2 students per day, each of five students (A–E) on duty exactly twice, and nobody two days in a row. All three rules together are hard to juggle. Drop the last one for a moment and fill the table at once: Mon A B, Tue A C, Wed D E, Thu E B, Fri C D. Now check the dropped rule: A works Mon and Tue, E works Wed and Thu. Only two students are the problem. Swap A on Tuesday with E on Wednesday: Tue E C, Wed D A. Check again: every rule holds, and the draft only showed where the trouble was.

**Useful for:** Overconstrained plans, allocation, scheduling, and optimization.

**Procedure:**
1. List the original constraints, separating actual requirements from assumptions or conventions.
2. Choose one difficult constraint and explicitly remove or weaken it in a working model.
3. Solve that version while keeping the original goal unchanged.
4. Inspect which original constraints the result violates.
5. Restore them one at a time, adapting the solution or using the result only as a bound or clue.

**Watch out:** A relaxed solution may be impossible in the real problem. Relax safety requirements only in a model, never by silently dropping them from the delivered result.

**Sources:** [S2](#s2), "Constraint Relaxation."

### 10. Allow fractions first, then restore whole choices

**Description:** Some choices cannot be split: a booth is built whole or not at all, a bus is hired whole, a person is not assigned by halves. With several such choices you would have to test many combinations. So pretend for a moment that splitting is allowed: half a booth takes half the time and earns half the points. Then you only take, one by one, whatever pays most per hour, and the result shows the most you could possibly get (the ceiling). Finally return to whole choices and test real combinations, because a rounded fraction can break the limit.

**Example:** The student council has 6 hours to prepare booths for the school fair and wants the most points. Booth A takes 4 hours and earns 8 points, B 3 hours and 6 points, C 2 hours and 3 points. Pretend booths can be halved: A and B earn 2 points per hour, C only 1.5. Take all of A and 2/3 of B for the last 2 hours (4 points), 12 in all. Every real plan is also allowed in the pretend version, where 12 is the maximum, so none beats it. Whole booths: A + B needs 7 hours, too many; A + C fits in 6 hours for 11 points, beating B + C (9) and A (8).

**Useful for:** Selecting items, assigning resources, and planning quantities that must eventually be whole numbers.

**Procedure:**
1. Identify the whole-number or yes/no decisions.
2. Allow fractions within the same limits, preserving the other constraints and the objective.
3. Solve the relaxed version.
4. Search for feasible whole-number choices using the result as guidance.
5. Recheck every original constraint and compare the final value with the relaxed bound.

**Watch out:** Rounding can violate a budget, capacity, or exact total. A nearby integer solution may not exist, and the best valid solution may be far away.

**Sources:** [S2](#s2), "Continuous Relaxation" and "Linear (LP) Relaxation."

### 11. Use bounds to judge how much improvement is possible

**Description:** A bound is a value beyond which the best answer cannot lie. Looking for the shortest route, drop a rule, for example ‘stay on the streets’, and solve that task. Every real route is allowed there too, so its best answer is shorter or equal: a lower bound. A real route you find shows the best is at most that long: an upper bound. The best answer lies between them, and the gap shows how much more you can gain. If they meet, it is proved best. For the biggest result, swap roles. Every bound must be justified, not guessed.

**Example:** You cycle from home to school and look for the shortest route along the streets. Drop the street rule: in a straight line the distance is 8 km. Every street route is also allowed in that easier version, so none can be shorter: 8 km is a lower bound. You find a street route of 10 km, so the best one is at most 10 km. The best street route lies between 8 and 10 km, and further searching can save at most 2 km. Later you find a 9 km route: the range shrinks to 8–9 km. A street route of exactly 8 km would prove itself best at once; otherwise you need a better lower bound.

**Useful for:** Optimization, feasibility checks, and deciding whether further search is worthwhile.

**Procedure:**
1. State whether you are minimizing something, such as distance, or maximizing it, such as output.
2. Obtain a proven bound, for example by solving a valid constraint relaxation to optimality.
3. Find a solution satisfying all original constraints and measure its value.
4. For minimization, the relaxed optimum is a lower bound and the feasible value is an upper bound. For maximization, reverse those roles.
5. Compare the gap. If both values agree, you have established optimality; otherwise report the remaining gap honestly.

**Watch out:** An arbitrary approximate solution to the relaxed problem is not automatically a certified bound. Changing the objective requires a separate justification of the bound.

**Sources:** [S2](#s2), "Mathematical problem relaxation" and "Concluding Remarks."

### 12. Put an explicit cost on a trade-off

**Description:** Sometimes you cannot satisfy every wish at once: improving one result makes another worse. First split the requirements into hard rules that may never be broken and soft wishes that you may trade. Then give each soft wish a price: some penalty points for each unit of failure. Penalty points put different losses on one scale, so you can add them up and compare plans. Try other prices to see whether the choice changes. The numbers only organize the decision; they do not prove the winner is mathematically best.

**Example:** A school band must pick a rehearsal plan. Two rules are hard: the room is booked and the recording is uploaded on Friday. Two wishes are soft and get prices: 5 penalty points for each absent member and 1 point for each 15 minutes the rehearsal runs past its planned 18:00 end. Plan A waits until everyone arrives and ends at 18:45: 3 × 1 = 3 points. Plan B starts on time without one member and ends at 18:00: 1 × 5 = 5 points. A wins, 3 to 5. If an absence cost only 2 points, B would win with 2, so state the prices openly. No price lets you skip the room or the Friday upload.

**Useful for:** Balancing preferences in schedules, resource use, and designs.

**Procedure:**
1. Separate non-negotiable constraints from targets you are allowed to trade off.
2. Define how to measure a target violation and assign it an explicit weight.
3. Compare candidate solutions using the original score plus the weighted violation costs.
4. Change the weights and see which choices change.
5. Present the trade-offs and check all non-negotiable constraints before choosing.

**Watch out:** A penalty is not permission to break a hard requirement. This is a practical penalty-model adaptation of the source's Lagrangian discussion, not a formal Lagrangian algorithm; arbitrary penalty scores do not certify optimization bounds.

**Sources:** [S2](#s2), "Lagrangian Relaxation."

### 13. Add missing restrictions as failures reveal them

**Description:** Start with a simplified version of the problem that has only the basic rules, and find any answer to it. Test that answer against the real situation. When it fails, work out why and add one general rule that rules out this kind of mistake, not just this one answer. Such a rule is called a cut, because it cuts off bad candidates. Then look for a new answer and repeat. Each rule must follow from the task and keep every valid answer; a rule based on taste can throw away a good solution.

**Example:** A school has three clubs (robotics, chess, choir) and two rooms, the lab and the hall, each free at 15:00 and 16:00. Basic rule: every club gets a room and a time, and no room is booked twice at once. The first draft puts robotics and chess at 15:00, but one student attends both. New general rule: clubs sharing a member never meet together. The next draft puts robotics in the hall, which has no sockets for the robots. New rule: robotics only in the lab. Both rules come from the facts, so no valid timetable is lost. The third draft passes: robotics in the lab and choir in the hall at 15:00, chess in the hall at 16:00.

**Useful for:** Complex planning models, configuration, and searches with many constraints.

**Procedure:**
1. Solve a simplified version of the problem.
2. Test the candidate against the original requirements.
3. Identify why it fails and express that failure as a general restriction.
4. Check that the restriction preserves every valid solution, then add it.
5. Solve again until the candidate passes or the model shows that no candidate can work.

**Watch out:** Do not forbid a merely unfamiliar answer. A valid restriction must follow from the original problem, not from your preferences.

**Sources:** [S2](#s2), "Cutting Plane Methods." This is the human-scale pattern behind the formal method.

### 14. Commit in stages while keeping later choices flexible

**Description:** Decide a long plan one block at a time instead of fixing every detail at once. A block is a group of related decisions, such as decorations, games or cleanup. Settle the first block in detail, sketch the later ones roughly, and check that enough time, space and materials remain for them. If a later block no longer fits, go back and change an earlier choice. Early choices can trap you, and the method does not guarantee the best plan.

**Example:** Maja has the school hall for 4 hours to decorate it for the fair, run the games and clean up. She decides one stage (block) at a time. First she picks the decorations: the rich set takes 2.5 hours. For the later stages she only sketches rough times: games 1.5 hours, cleanup 1 hour. She checks: 2.5 + 1.5 + 1 = 5 hours, one more than she has. So she goes back to the first choice: simple decorations take 1.5 hours, and 1.5 + 1.5 + 1 = 4 hours fits exactly. Without that check she would have found the problem only during the fair.

**Useful for:** Multi-stage schedules and plans too large to settle in full at once.

**Procedure:**
1. Divide decisions into stages or logical blocks.
2. Keep earlier decisions fixed, require valid discrete choices in the current block, and simplify later blocks.
3. Solve the current subproblem and check whether later work can still fit.
4. Fix the current block and move to the next.
5. If a later block becomes impossible, revisit earlier commitments rather than pretending the full plan works.

**Watch out:** Early choices can trap later stages. This is a heuristic, not a guarantee of feasibility or optimality.

**Sources:** [S2](#s2), "Relax-and-Fix Heuristics."

### 15. Alternate the big plan with detailed feasibility checks

**Description:** A big plan sets the direction, but it can look fine until you work out the details. So go back and forth: propose a plan, then check the real tasks, time, people and cost it needs. If something does not fit, name the exact part that causes it and use that fact to change the plan. Such feedback is a specific fact from the details, not a vague feeling that it will not work. Repeat until both levels agree. Agreement still does not guarantee success, so check the whole at the end.

**Example:** Four students plan a science video. The big plan: film the whole experiment live in the school lab, which they have for only 20 minutes. Detail check: setting up the experiment takes 12 minutes and filming it 10, so 12 + 10 = 22 minutes, 2 more than they have. The feedback is specific: the setup does not fit in the lab. They revise the big plan: assemble the experiment at home and only plug it in at school, which takes 4 minutes. New check: 4 + 10 = 14 minutes, so 6 minutes remain for a retake. Plan and details now agree.

**Useful for:** Location choices, staffing plans, system design, and other decisions with a strategic layer and an operational layer.

**Procedure:**
1. Separate high-level choices from the detailed work they imply.
2. Propose a high-level plan.
3. Work out the details under those choices, checking feasibility and cost.
4. If the details fail, identify the particular high-level combination responsible. Feed that restriction or cost information back into the plan.
5. Repeat until both levels agree, then check the complete solution.

**Watch out:** Feedback must be justified and specific enough to improve the next proposal. This manual adaptation does not inherit the mathematical guarantees of formal decomposition algorithms.

**Sources:** [S2](#s2), "Benders Decomposition."

### 16. Solve a small or simple instance first

**Description:** A small instance is a reduced version of the same problem: fewer objects, smaller numbers, or simpler rules, while keeping the relationship you want to understand. Solve it, compare it with a slightly larger case, and look for steps that stay the same. This gives a foothold when the original feels tangled. It suggests a reusable method, not proof for every size; restore the original size and check the actual rules.

**Example:** A tournament has 20 players, and every player meets every other player exactly once. How many games is that? Start small: two players play 1 game, three play 3, four play 6. What repeats: each new player plays one game against every player already there, so going from 3 players to 4 adds 3 games. With 20 players the last newcomer adds 19, so the total is 1 + 2 + … + 19, all whole numbers from 1 to 19 added up: 190 games. The small cases found the pattern and the newcomer idea explains it. It holds only while every pair plays once; with other tournament rules, check again.

**Useful for:** Unfamiliar rules, counting, learning, prototypes, and finding a first foothold.

**Procedure:**
1. Replace large numbers, many objects, or several dimensions with a manageable case.
2. Solve that case completely and record the important steps.
3. Try a slightly larger or less convenient case.
4. Identify what stayed the same and propose a reusable method.
5. Restore the original size and check why the method still applies.

**Watch out:** Making a smaller instance is not necessarily a formal optimization relaxation. Success in a special case is a clue, not proof of the general claim.

**Sources:** [S2](#s2), "Problem Relaxation in K-12 Math Problem-Solving," practical classroom strategies; [S3](#s3), section 5.

### 17. Clarify the problem and challenge hidden assumptions

**Description:** Before solving, make the question exact. Write down the goal, meaning what you will accept as success, the facts you are given, and the limits that really apply. List your assumptions separately: things you treat as true without checking. Ask whether a rule is real or only a habit. This matters because a perfect solution to a slightly different question helps nobody. After solving, return to the question and check that your answer is about the one that was asked.

**Example:** A class asks: ‘Can everyone get to the museum by 9:00?’ First decide who ‘everyone’ is: 28 students and 2 teachers, 30 people. The bus leaves at 8:10 and drives for 35 minutes, so it arrives at 8:45, in time. The school rule is one seat for every person, and this bus has only 28 seats. It is easy to assume silently that two people can stand and answer ‘yes’. Check that assumption against the rule: it fails, so 2 people have no seat and the answer is ‘no’, even though the time is fine. The class needs a bigger bus or a second one. Naming the assumption showed which question you were really answering.

**Useful for:** Almost any problem, especially disagreements about what needs solving.

**Procedure:**
1. State the question in your own words and describe what would count as success.
2. List the unknowns, the given facts, and the constraints.
3. Mark assumptions separately from facts. Ask which limits are real and which are habits or conventions.
4. Check whether the information is sufficient, contradictory, or irrelevant.
5. Choose a first plan, carry it out with checks, and review both the answer and the method.

**Watch out:** Solving a neatly stated question is not useful if it is the wrong question. Confirm that the framing still serves the original goal.

**Sources:** [S3](#s3), sections 3, 5, and 6; [S2](#s2), the four problem-solving stages; [S5](#s5), pp. 220-223, including the need to move back between stages.

### 18. Change the representation

**Description:** Describe the same problem in another form: a picture, a table, an equation, or a model made of objects. The new form should make a hidden relationship easier to see, for example when letters stand for unknown numbers. Label every quantity and carry over every condition from the text, which means each fact in the words must appear in the new form, otherwise you end up solving a different problem. A sketch suggests an answer but does not prove it.

**Example:** A rectangle has a perimeter of 26 cm, and its length is 3 cm more than its width. In words this is hard to hold in your head, so draw the rectangle and label the width w and the length w + 3. The perimeter is two widths and two lengths: 2w + 2(w + 3) = 26, which simplifies to 4w + 6 = 26. Then 4w = 20, so w = 5 and the length is 8. Check: 2 × 5 + 2 × 8 = 26, and 8 is 3 more than 5. The picture and the letters turned the words into an equation without dropping either condition.

**Useful for:** Dense verbal problems, awkward algebra, spatial relationships, and tangled dependencies.

**Procedure:**
1. Identify what is hard to see in the current representation.
2. Choose a form that exposes it, such as a diagram for spatial relationships or a table for cases.
3. Label every important quantity and translate all constraints.
4. Solve or explore the new representation.
5. Translate the result back and check that nothing was lost or added.

**Watch out:** An equivalent transformation preserves the problem. An approximation changes it and needs a separate check; a sketch is not proof of an exact relationship.

**Sources:** [S3](#s3), section 5, "Substitution or transformation" and "Abstraction"; [S2](#s2), concrete models.

### 19. Check units and extreme cases

**Description:** Write the unit next to every measured quantity and try simple extreme cases before you trust a formula. Units tell you what kind of result you get: distance divided by time gives speed, while time divided by distance gives hours per kilometre. Simple cases are zero, one, equal values, and the smallest or largest allowed input. They can expose a reversed operation or a limit of the model, but passing them does not prove the formula right. Never feed in forbidden input, such as dividing by zero hours.

**Example:** A cyclist rides 18 km in 1.5 hours, and you want the speed. It is easy to divide the wrong way and compute 1.5 ÷ 18, which is about 0.083. Write the units: hours divided by kilometres is hours per kilometre, not speed, so the division is reversed. The right calculation is 18 ÷ 1.5 = 12 km/h. Now try extremes: 0 km in 1.5 hours gives 0 km/h, as it should: no distance, no speed. And 36 km, twice as far, in the same time gives 24 km/h, twice as fast, as it should. Zero hours is not tested, because division by zero is not defined.

**Useful for:** Formulas, estimates, models, and catching errors before detailed calculation.

**Procedure:**
1. Attach units to all measured quantities and verify that both sides of each equation have compatible units.
2. Check simple inputs such as zero, one, equal quantities, or an empty case when allowed.
3. Examine what happens near the allowed minimum or maximum, or as a quantity becomes very large.
4. Compare the behavior with what the original situation requires.
5. Investigate any mismatch, including whether the model stops applying at that boundary.

**Watch out:** Passing these checks does not prove correctness. Do not demand meaningful behavior outside a model's stated domain.

**Sources:** [S3](#s3), section 5, "Dimensional analysis" and "Limiting cases."

### 20. Use symmetry to avoid repeated work

**Description:** Look for symmetry: a change that breaks no rule and does not change the goal, such as moving everyone along by one seat, swapping two identical pieces, or renaming things. If different cases become the same after such a change, count or solve only one of them and copy the result to the rest. First check the rules: a marked seat, a different colour or a special player can destroy the symmetry.

**Example:** Four friends, Ania, Bartek, Celina and Darek, sit at a round table with no marked seats. An arrangement is the clockwise order of people around the table, so when everybody moves one seat clockwise, nothing has changed. There are 4 such moves, so counting all 4 × 3 × 2 × 1 = 24 seatings counts every arrangement 4 times. Instead, put Ania in any seat, which removes the moving, and place the other three in 3 × 2 × 1 = 6 ways. Check: 24 ÷ 4 = 6. If one chair were marked ‘by the door’, moving everyone would change who sits there, so all 24 seatings would be different.

**Useful for:** Geometry, counting, arrangements, and optimization with interchangeable elements.

**Procedure:**
1. Find transformations that preserve all rules and the goal.
2. Group cases that those transformations make equivalent.
3. Solve one representative from each group.
4. Translate the result to the equivalent cases.
5. If counting, account for group sizes carefully; some configurations have more symmetry than others.

**Watch out:** A symmetric problem need not have only symmetric solutions. Distinguishing constraints can destroy an apparent symmetry.

**Sources:** [S3](#s3), section 5, "Symmetry reduction."

### 21. Compare choices through outcomes and trade-offs

**Description:** For each choice, write down what you may gain, what you may lose, and what you give up. If the result is uncertain, list the possible outcomes. Give an outcome a probability, a justified estimate of how often it happens, only when you have evidence: not knowing is not the same as 50 percent. With probabilities you can compute an expected score, the average result if the choice were repeated many times. Also check the worst outcome, because a single average hides it.

**Example:** Rita must choose between two ways of studying for a test. Plan A takes two hours. In four similar quizzes after studying this way she scored 80 points three times and 60 once, so she estimates 75% for 80 points and 25% for 60. Her expected score, the average over many repeats, is 0.75 × 80 + 0.25 × 60 = 75 points. Plan B takes one hour, but she has no quizzes to judge it, so its chance is unknown, not 50%. She could try it, but she cannot compute an average from an invented probability. And if 60 points is too low for her because it would not pass, the average of 75 does not settle the choice.

**Useful for:** Decisions with uncertainty, competing objectives, or several plausible options.

**Procedure:**
1. List feasible options, including doing nothing when relevant.
2. Draw the important possible outcomes for each option.
3. Record benefits, costs, foregone alternatives, and any probability estimates you can justify.
4. Compare outcomes using consistent criteria. Where numerical values and probabilities are meaningful, calculate probability-weighted totals.
5. Vary uncertain assumptions and check downside outcomes before deciding.

**Watch out:** A favorable average can hide an unacceptable loss. Do not invent probabilities or hide value judgments inside a single score.

**Sources:** [S3](#s3), sections 7.3 and 9.

### 22. Map interactions and incentives

**Description:** Draw the problem as a map: people or parts as dots, and arrows for who passes work or influence to whom. On the map look for the bottleneck, the spot that limits the speed of the whole process, and for incentives, the rewards that make people choose a certain action. Such a map helps predict side effects of a change. It shows connections, not causes, so try a small change first and check the result as a whole.

**Example:** Four students each send 4 or 5 slides to one classmate, the editor, who assembles the presentation before the deadline. The teacher gives one point per slide, so everyone sends more and more. The editor gets 18 slides late, many repeating the same content, and cannot finish. The map shows why: the point per slide is the incentive that floods the editor, the bottleneck. The students ask the teacher for a trial: grade the whole presentation and allow at most 3 slides per student. Now 4 × 3 = 12 slides arrive without repeats and the editor finishes on time. One trial suggests the rule helped, but does not prove it caused every improvement.

**Useful for:** Organizational problems, process bottlenecks, coordination, and changes with side effects.

**Procedure:**
1. Draw the important components or participants as nodes.
2. Connect them with dependencies, flows, or influences and label the direction.
3. Look for bottlenecks, feedback loops, and competing goals.
4. Predict how a proposed change would affect the rest of the system and how other participants might respond.
5. Test a limited change and check the whole-system result, not just the improved part.

**Watch out:** A network diagram is a model, not evidence that a causal link exists. Do not assume people have identical information or behave exactly as your model predicts.

**Sources:** [S3](#s3), sections 8.1 and 8.4. The procedure is a practical adaptation of these perspectives.

### 23. Experiment, find a pattern, then explain it

**Description:** Run a few small experiments to discover a possible pattern, then find the reason it should hold. A pattern is a repeated relationship; a proof explains why it must hold under the given rules. Record examples in a consistent way. The first few results fit many different rules, so examples suggest a rule but do not prove it always works. If a test fails, fix the rule instead of hiding the exception.

**Example:** Squares are made from matchsticks and placed in a row so that neighbors share a side. One square needs 4 matchsticks, two need 7, three need 10. Each time 3 more are added, so eight squares should need 4 + 7 × 3 (the first square plus 7 more) = 25 matchsticks. Why? A new square already shares one side with the previous one, so only three matchsticks are added. That explains any straight row. The numbers 4, 7 and 10 alone would not be proof, because other rules fit them too.

**Useful for:** Sequences, repeated processes, counting, and exploring unfamiliar systems.

**Procedure:**
1. Produce several small examples and record them in a consistent table or diagram.
2. Look for repetitions, differences, ratios, or other stable relationships.
3. State the suspected rule precisely, including where you think it applies.
4. Test deliberately awkward cases rather than only examples likely to agree.
5. If the rule survives, explain or prove it from the problem's structure. If it fails, use the failure to refine the rule.

**Watch out:** Many different rules can fit the same early examples. Evidence from examples and a general proof are different things.

**Sources:** [S4](#s4), section 2.2, especially pp. 26-33, and section 6.1, p. 195; [S3](#s3), sections 4 and 6.

### 24. Test the opposite and search for a counterexample

**Description:** To check a claim, try to break it. If you suspect it is false, look for a counterexample: one case that meets the starting conditions but not the conclusion. One is enough to reject the claim. If you suspect it is true, assume the opposite and follow the consequences. If they lead to something impossible, the opposite is out and the claim stays (this is a proof by contradiction). Not finding a counterexample after a few tries proves nothing.

**Example:** Claim 1: ‘Every number ending in 5 is prime.’ The example 5 fits, but one example proves nothing, so look for a case that breaks it. The number 15 ends in 5 and 15 = 3 × 5, so it is not prime. One counterexample is enough to reject the claim. Claim 2: ‘There is no largest whole number.’ Assume the opposite: there is a largest one, N. But N + 1 is also a whole number, and it is larger than N. A largest number that is not the largest is impossible, so the opposite fails and the claim stays.

**Useful for:** Proofs, reviewing universal claims, and exposing faulty rules.

**Procedure:**
1. Write the assumptions and the exact conclusion separately.
2. Negate the conclusion carefully. For example, the opposite of "every case works" is "at least one case fails."
3. Explore that possibility while keeping the original assumptions.
4. If it forces a genuine contradiction, explain why the negated conclusion is impossible.
5. If you find a valid counterexample instead, reject or narrow the original claim.

**Watch out:** Failure to find a counterexample is not proof. In empirical problems, a conflict may show that the model or an assumption is wrong rather than establish a universal truth.

**Sources:** [S4](#s4), section 2.3, pp. 41-44.

### 25. Focus on an extreme element

**Description:** Pick an extreme member of the group: the tallest person, the smallest number, the first or last step. A member at the end of the scale cannot have things that an ordinary member could have, so one look at it can replace checking everyone. First make sure it exists (a finite group always has a tallest). Then ask what the claim would demand of it. If it demands something even bigger or smaller, you have a contradiction. Pick someone who really is in the group, not an imagined person taller than everyone.

**Example:** Five friends stand in a circle. Each says: ‘The person on my right is taller than me.’ Can all five be telling the truth? You do not need to know anyone's height or try every arrangement. Take the tallest person. If she is telling the truth, her right neighbor is taller than the tallest person in the circle, which is impossible. So at least one friend is wrong. The same argument works for a circle of any size.

**Useful for:** Existence proofs, arrangements, ordered data, and reducing complicated cases.

**Procedure:**
1. Choose an ordering or a quantity to minimize or maximize.
2. Check that an extreme object actually exists.
3. Select it and write down what its extreme status rules out.
4. Ask whether a proposed configuration would force an even smaller or larger object, contradicting that choice.
5. Use the resulting restriction to solve or reduce the problem.

**Watch out:** An infinite collection need not have a minimum or maximum. This scheme selects an actual extreme object; it is different from testing a formula at a limiting value.

**Sources:** [S4](#s4), section 3.2, pp. 73-83.

### 26. Show that something must share a slot

**Description:** The pigeonhole principle says: if you put more objects into fewer categories, some category gets at least two objects. The objects can be people, dates, files or game pieces; the categories are whatever you sort them by. This lets you prove that a repetition or collision cannot be avoided, even when you cannot say which category it will happen in. For a stronger claim, multiply the number of categories by 2: more than 12 × 2 objects in 12 categories force some category to hold at least 3.

**Example:** In a class of 25 students, can you be sure that at least three were born in the same month? Sort the students by birth month. That gives 12 categories, and each student fits exactly one. Try to refute it. Suppose every month had at most 2 students. Then the class would have at most 12 × 2 = 24 students. But there are 25, so some month has at least 3. You know such a month exists without checking a single birthday, though the principle does not say which month it is.

**Useful for:** Proving unavoidable repetitions, collisions, close pairs, and capacity limits.

**Procedure:**
1. Decide which objects you will place into categories.
2. Define the categories so that sharing one gives a useful relationship.
3. Assign every object to exactly one category, handling boundaries explicitly.
4. Compare object count with category count or capacity. More than `k × m` objects in `m` categories forces some category to contain at least `k + 1` objects.
5. Translate the shared category back into the result you need.

**Watch out:** The hard part is choosing useful categories. The principle guarantees that a shared category exists, not necessarily which one it is.

**Sources:** [S4](#s4), section 3.3, pp. 84-91.

### 27. Find something that cannot change

**Description:** An invariant is something that no allowed move can change, such as the parity (odd or even) of the number of switches that are on, a total or a remainder. Write down the moves, pick a candidate property and check that every move keeps it. If the start and the target have different values of it, the target cannot be reached. If the values match, you have learned nothing yet: the target may still be out of reach for other reasons, so you must study the moves further.

**Example:** Three switches are all off: 000, where 1 means on. The only allowed move flips switches 1 and 2 together. Can you reach 100? Count the switches that are on. A move flips two switches, and each one adds 1 or removes 1, so the count changes by +2, 0 or -2 and stays even. State 100 has one switch on, an odd number, so it is impossible. What about 101? Two on is even, so parity does not forbid it, yet from 000 you can only reach 110 and then return to 000, because switch 3 never changes. So 101 is impossible too: matching parity was not enough.

**Useful for:** Transformation puzzles, reachability, bookkeeping, and checking repeated operations.

**Procedure:**
1. Define the allowed moves precisely.
2. Test candidate invariants such as a total, difference, parity, remainder, or color balance.
3. Prove that each type of move preserves the chosen property.
4. Compare its value at the start and in the desired end state.
5. If they differ, the target is impossible under those moves. If they agree, continue searching using the invariant as a check.

**Watch out:** Matching an invariant does not establish reachability. You must test every allowed move, not just the ones in your first examples.

**Sources:** [S4](#s4), section 3.4, pp. 92-102; the coloring example in section 2.4, pp. 54-55.

### 28. Track a quantity that moves only one way

**Description:** Find a number that describes the current situation and changes in only one direction under every allowed move: it only goes down, or it only goes up. Such a number shows progress, can rule out a goal, or prove that a process ends. Falling alone does not guarantee an end, because a number can fall ever more slowly and never reach zero. So check two things: whether it drops by at least 1 in every move, and whether it cannot go below 0, like the number of tokens in a pile.

**Example:** Two players share a pile of 12 tokens. In each move a player takes 1, 2 or 3 tokens, and the game ends when the pile is empty. Will it end, and how many moves can it last? Watch the number of tokens: every move lowers it by at least 1, and it cannot fall below 0. So after at most 12 moves (if everyone takes just one) the pile is empty. A number halved each round (1, 1/2, 1/4...) also keeps falling, but it never reaches 0, because the steps get smaller. That is why ‘at least 1 per move’ matters.

**Useful for:** Repeated procedures, games, iterative improvement, and termination arguments.

**Procedure:**
1. Define a numerical measure of the current state.
2. Check how every allowed move changes it.
3. Establish its direction of change and any lower or upper bound.
4. To prove stopping, show that progress cannot continue forever, for example because a nonnegative integer decreases by at least one at each active step.
5. Identify the states where progress stops and check that they satisfy the desired conclusion.

**Watch out:** A decreasing real number can keep decreasing forever. A bounded monotone score alone does not prove finite termination, and unchanged-score moves may still cycle.

**Sources:** [S4](#s4), section 3.4, "Monovariants," pp. 102-106.

### 29. Build the large case from smaller cases

**Description:** Work out the smallest cases by hand, then build each bigger case from smaller ones you already have. Ask: how can the last move into this size be made? Every way leads back to a smaller case that is already solved, so the answers add up step by step. A rule that calculates each answer from earlier ones is called a recurrence. Proving that the pattern holds for every size is a different task (induction).

**Example:** A robot climbs a staircase, and every jump goes up 1 or 2 steps. How many routes lead to step 4? Count small cases by hand: to step 1 there is 1 route (jump 1), to step 2 there are 2 (1 + 1, or 2). The last jump into step 3 starts from step 2 (jump 1) or step 1 (jump 2), so routes to step 3 equal those to step 2 plus those to step 1: 2 + 1 = 3. Likewise for step 4: 3 + 2 = 5. Listing: 1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1, 2 + 2 – five.

**Useful for:** Counting, sequences, recursive procedures, and proofs indexed by whole numbers.

**Procedure:**
1. Define the result or claim for size `n` precisely.
2. Solve all required starting cases.
3. Explain how a larger case reduces to smaller cases, or how correct smaller cases establish the next one.
4. For counting, ensure that the construction covers every case without duplicates. For proof, justify the step for an arbitrary allowed size.
5. Combine the starting cases with the step; check that no size is skipped.

**Watch out:** Assuming the very case you are trying to prove is circular. An induction step without the needed starting cases establishes nothing on its own.

**Sources:** [S4](#s4), section 2.3, pp. 45-50, and section 6.4, pp. 214-217.

### 30. Solve or count the complement

**Description:** When a problem says ‘at least one’, count the opposite instead: the outcomes where it never happens. These form the complement. Take the number of all possible outcomes and subtract the complement. This is easier because ‘none’ is one simple condition, while ‘at least one’ hides several cases at once. A probability is the number of good outcomes divided by the number of all outcomes, but only when every outcome is equally likely, as with a fair die.

**Example:** You roll a fair die twice and want at least one six. Counting that directly needs three cases: a six on the first roll, on the second, or on both. Count the opposite instead: no six at all. Each result is a pair (first roll, second roll), so there are 6 × 6 = 36 pairs, all equally likely. Without a six each roll has 5 options: 5 × 5 = 25 pairs. So at least one six appears in 36 − 25 = 11 pairs, a probability of 11/36. Adding the pairs with a six on the first roll (6) and on the second (6) would give 12, because the pair (6, 6) is counted twice.

**Useful for:** Counting, probability, and requirements such as "at least one" or "not all."

**Procedure:**
1. Define the complete set of allowed possibilities.
2. State exactly which possibilities fail the desired condition.
3. Check that success and failure are disjoint and together cover the whole set.
4. Count the whole set and subtract the failures, or use `P(success) = 1 - P(failure)` with the correct probability model.
5. Check edge cases and whether any failures were counted more than once.

**Watch out:** Dividing counts to obtain a probability requires equally likely outcomes. Overlapping failure categories cannot simply be added.

**Sources:** [S4](#s4), section 6.3, pp. 207-208.

### 31. Count the same thing in two ways

**Description:** Count the same thing twice, from two different viewpoints. Both counts describe the same objects, so the results must match. This can turn a hard count into an easy one, and a mismatch reveals a mistake. Before you start, decide what exactly counts as one object and whether order matters. Also ask whether one object can be counted more than once; if so, correct for it afterwards.

**Example:** Six students greet each other with a handshake, every pair exactly once. How many handshakes are there? First way, one by one: the first student shakes 5 new hands, the second only 4 new ones, then 3, 2 and 1, so 5 + 4 + 3 + 2 + 1 = 15. Second way, by ends: each of the 6 students shakes 5 hands, giving 6 × 5 = 30 handshake ends. Every handshake has two ends, one for each person, so it was counted twice: 30 / 2 = 15. Both ways give 15, so the answer is confirmed. Had you got 15 and 30, the mismatch would reveal a mistake – here, forgetting to divide by 2.

**Useful for:** Counting identities, audits, consistency checks, and translating arrangements into simpler codes.

**Procedure:**
1. Define exactly what is being counted and whether order matters.
2. Count it by one grouping or viewpoint.
3. Count it independently by another viewpoint, or construct a reversible mapping to easier objects.
4. Verify that both routes include every valid object with the same multiplicity.
5. Equate the totals or use the easier count. Investigate any disagreement.

**Watch out:** Redundant choices create overcounting. Once earlier choices determine a later one, it is no longer an independent choice.

**Sources:** [S4](#s4), section 6.1, pp. 191-192, and section 6.2, especially pp. 199-200.

### 32. Add a helpful object or intermediate quantity

**Description:** When the facts you have do not connect to what you want, add something the problem did not ask for: draw a line, name an unknown with a letter, or work out a subtotal. Choose it so that it links what you know to what you want. It is a bridge, not a new assumption: it must be possible to draw it, and it must not assume the very thing you want to show. At the end, return to the original question.

**Example:** A rectangular school court is 6 m by 8 m. How far is it from one corner to the opposite one? The sides alone do not give that distance, so draw the diagonal. It cuts the court into two right triangles, and in each the diagonal is the longest side. By the Pythagorean rule, the square of the longest side equals the sum of the squares of the other two: d² = 6² + 8² = 36 + 64 = 100 (d² means d × d). Since 10 × 10 = 100, d = 10 m. The added line only helped the calculation; it did not change the court.

**Useful for:** Geometry, awkward expressions, and problems where the givens seem disconnected from the goal.

**Procedure:**
1. Ask what relationship would make the final step easy.
2. Introduce an object or quantity designed to expose that relationship.
3. Define it precisely and verify that it exists in the allowed setting.
4. Use it to form smaller claims connecting the givens to the target.
5. Translate the conclusion back so the final answer does not depend on an unjustified construction.

**Watch out:** A useful-looking construction may be impossible or smuggle in the desired conclusion. Adding clutter without a purpose rarely helps.

**Sources:** [S4](#s4), section 8.4, pp. 282-284; [S3](#s3), section 5, auxiliary variables and constructions.

### 33. List cases systematically and eliminate impossibilities

**Description:** Write down all possibilities in a fixed order, for example in a table or a branching list, and cross out those that break a rule. Start with the rule that crosses out the most at once, and note the reason for every deletion. Split the possibilities so that each lands in exactly one branch: nothing is missing and nothing repeats. This works when the full list is short enough to write. If you check only part of it, you may find a solution, but you cannot say there are no others.

**Example:** A locker code uses the digits 1, 2, 3, 4, each exactly once. Rules: the last digit is even, and the first digit is smaller than the second. Split by the last digit. Ending in 1 or 3 is crossed out at once, because those digits are odd. Ending in 2: the first three places hold 1, 3, 4 in 6 orders. Cross out 3142, 4132 and 4312, where the first digit is bigger than the second; 1342, 1432 and 3412 stay. Ending in 4 works the same way and leaves 1234, 1324 and 2314. The branches cannot overlap and together cover every allowed ending, so there are exactly six codes.

**Useful for:** Logic puzzles, small configuration searches, ordering problems, and finding all solutions.

**Procedure:**
1. Define the possible choices or states and a consistent way to write each one.
2. Split the search into cases that cover every possibility without duplication.
3. Apply the strongest or cheapest checks first and cross out cases that violate them.
4. For each remaining case, continue with the next undecided choice. Keep the reasons for exclusions.
5. Check every surviving answer against all conditions. If claiming there are no others, explain why the search was complete.

**Watch out:** The list can grow too large. If you switch to a limited search, say that unexamined candidates remain; finding no answer in a partial search is not proof of impossibility.

**Sources:** [S5](#s5), pp. 285-286, exhaustive route enumeration, and pp. 331-332, the different-color cars problem; [S3](#s3), section 6, orderly listing and elimination.

### 34. Find only the quantity the question asks for

**Description:** Read exactly what the question asks for. Often it is only a total, a difference, a ratio or a position, not every number separately. Write down what you know and combine it so that the unknowns you do not need disappear. This saves work and stops you from inventing facts the data do not contain. At the end ask whether the answer is fixed: if two cases that both fit the data give different answers to the question, the data are not enough.

**Example:** A rectangular garden is fenced with 28 m of fence. How many metres are length and width together? You could hunt for each side, but the data do not give them: 6 by 8 and 5 by 9 both need 28 m (2 · 6 + 2 · 8 = 28 and 2 · 5 + 2 · 9 = 28). The fence runs along two lengths and two widths, so 2 lengths + 2 widths = 28 m, and one of each is half: 14 m. Check: 6 + 8 = 14 and 5 + 9 = 14. Asked for the area instead, the gardens disagree (48 and 45 m²), so that question would lack data.

**Useful for:** Problems that appear underdetermined, long calculations, and questions about aggregate quantities.

**Procedure:**
1. Underline the exact quantity requested.
2. Ask whether your current plan is solving for extra information you do not need.
3. Combine known relations to isolate the requested quantity directly.
4. Look for cancellation, pairing, fixed totals, or enough information to rule out every other answer.
5. Verify that the requested quantity is fixed even if some individual values remain unknown.

**Watch out:** A fixed total does not determine its separate parts. If several valid configurations produce different requested values, the information really is insufficient.

**Sources:** [S5](#s5), pp. 322-323, summing angles without finding each angle, and p. 332, finding the first car without reconstructing the entire order; [S4](#s4), section 3.4, the tournament example on p. 102.

### 35. Use a greedy choice as a first pass

**Description:** A greedy method builds an answer step by step, each time taking what looks best right now by a simple rule, such as the biggest token that still fits or the closest stop on a route. It quickly gives a first candidate when checking every possibility would take too long. Then look at the whole result and try to improve it. A good-looking move can leave an awkward remainder or a dead end, so a greedy answer is a candidate, not proof that nothing better exists.

**Example:** In a game you must collect exactly 6 points using as few tokens as possible. Tokens are worth 1, 3 and 4 points, and you may use each kind as often as you like. The greedy rule: always take the biggest token that still fits. Take 4 (2 points remain), then 3 does not fit, so 1 and 1: 3 tokens in all. But two 3-point tokens also make 6, so the greedy answer is valid but not the best: the big token left a remainder of 2 that only small tokens can fill. Two is the minimum, since no single token is worth 6.

**Useful for:** Quickly producing a first route, ordering, or allocation when a full search is too expensive.

**Procedure:**
1. Define a local rule, such as choosing the nearest unvisited stop.
2. At each step, choose the best available option under that rule without breaking an immediate hard constraint.
3. Continue until you have a complete candidate or cannot proceed.
4. Check the complete result, including requirements such as returning to the starting point.
5. Compare with another starting choice, a local improvement, or a bound before accepting it.

**Watch out:** The best next move can force an expensive later move or a dead end. Greedy construction needs a separate proof before you can call its answer optimal.

**Sources:** [S5](#s5), pp. 285-286. In its four-city example, nearest-neighbor construction gives 635 km while exhaustive comparison finds a 625 km route.

### 36. Check progress and change the plan deliberately

**Description:** Monitoring means pausing during a solution to compare evidence with the plan. Ask what the attempt established, what remains unknown, and why the next step should help. This separates missing knowledge from a bad strategy or a misread condition. Continue when an attempt produces information; otherwise change a reasoned part of the plan, not randomly or just because time was spent. Finish by checking the answer and recording the reusable lesson.

**Example:** You have a quiz next week. You read your notes for 30 minutes, then take a 10-question practice test and get 2 right. Instead of reading more, you check the 8 mistakes: 6 were definitions you could not recall, while the example questions went fine. So the problem is recalling, not reading time. You switch to flashcards of definitions plus practice questions, and a similar test gives 7/10. That does not prove mastery, but it shows the new plan works better than the first. You note the lesson: after reading, test yourself with questions.

**Useful for:** Long investigations, repeated failed attempts, learning, and any problem without an obvious method.

**Procedure:**
1. State what your current attempt is meant to establish.
2. At a useful checkpoint, ask, "What have I learned? What remains unknown? Why should this next step help?"
3. Separate a lack of knowledge from a poor strategy or a mistaken reading of the problem.
4. Continue if the attempt is productive; otherwise return to the relevant earlier stage, obtain missing knowledge, or choose a different scheme.
5. At the end, verify the answer and record the reusable insight, the failed assumption, and when this method would be useful again.

**Watch out:** Do not switch methods at every difficulty, but do not keep a plan merely because you have already spent time on it. These schemes cannot replace necessary subject knowledge.

**Sources:** [S5](#s5), pp. 27-28, 48-50, and 220-226, on self-monitoring, cyclical problem solving, and the interaction of knowledge, strategies, control, and beliefs.

### 37. Generalize to reveal the structure

**Description:** Generalizing means replacing one fixed number with a letter, such as n for any whole number from 1 up, and studying the whole family of similar cases. A pattern seen in a few cases is only a guess. To be sure, show that it holds for the first case and that, whenever it holds for one case, it holds for the next one; then it holds for all, like a row of falling dominoes. Only then put the original number into the general result.

**Example:** What is 1 + 3 + 5 + 7, the first four odd numbers? Small cases: 1 = 1 × 1, 1 + 3 = 2 × 2. Guess: n odd numbers add up to n². Picture an n × n square of dots. It grows in L-shaped layers of 1, 3, 5… dots; the next has 2n + 1 (7 when n = 3) and completes an (n + 1) × (n + 1) square. If the first n odd numbers add up to n², adding 2n + 1 gives n² + 2n + 1 = (n + 1)². It holds for 1 and passes from each case to the next, so always. For four numbers: 16.

**Useful for:** Unexplained numerical patterns, reusable formulas, and problems with arbitrary-looking constants.

**Procedure:**
1. Identify a fixed detail that may be hiding the structure.
2. Replace it with a parameter while stating the allowed values.
3. Compare several members of the new family, including the original case.
4. Seek a relationship or argument valid across the family and identify exceptional cases.
5. Justify that relationship, then substitute the original value to answer the original question.

**Watch out:** A wider claim may be harder or false. If generalization creates more confusion, return to a simpler instance and preserve any partial insight.

**Sources:** [S4](#s4), section 2.2, Example 2.2.2, p. 28, replacing a fixed constant with a parameter; [S3](#s3), section 3, abstraction and generalization.

## Combining schemes in practice

These examples illustrate use of the guide; they are not additional source case studies.

- **Plan a small workshop:** Define success and constraints (17), work backward from the event (1), break preparation into tasks (3), and estimate from comparable work (7). Check whether the complete schedule fits, not just each task separately.
- **Investigate a recurring software failure:** State the exact failure (17), reproduce it in a smaller case (16), and run controlled tests (4). Record each result and change the hypothesis when the evidence stops supporting it (36).
- **Check whether a transformation is possible:** Write the allowed moves (17), experiment on small cases (23), and look for a preserved quantity (27). If the start and target differ on that quantity, explain why every legal move preserves it before declaring the target impossible.

## A reusable working note

Copy these prompts when starting a problem:

- **Goal and success test:**
- **Known facts and unknowns:**
- **Hard constraints and untested assumptions:**
- **Chosen scheme and why it fits:**
- **Next action and what it should teach me:**
- **Result and evidence:**
- **What still needs checking:**
- **Continue, revise, or stop:**
- **Reusable lesson:**

## Source review in reading order

All five non-HTML subject documents in the folder are represented below. The three Word documents were read in full as text. The two long PDFs received method-focused reviews of the sections and examples specified below. Their exercise collections and literature reviews were not exhaustively worked through. Source texts were left unchanged.

<a id="s1"></a>
### S1 Heuristics and estimation

**Document:** [/home/andrzey/git-claude/heuristics/heuristics&estimation_in_problem_solving_2024_12_19.docx](/home/andrzey/git-claude/heuristics/heuristics&estimation_in_problem_solving_2024_12_19.docx)

**Reviewed:** All body text, including the bibliography. Main contributions: working backward, analogy, decomposition, trial and error, iterative improvement, estimation, calibration, and warnings about biased judgments. The bibliography is part of the supplied document, not a set of independently verified sources.

**Selection:** Preserved actionable general methods. Treated availability, representativeness, and anchoring as things to check rather than advice to follow. Omitted broad claims about professional applications and research effectiveness because they do not add a reusable procedure.

<a id="s2"></a>
### S2 Problem relaxation

**Document:** [/home/andrzey/git-claude/heuristics/problem_relaxation_2025_01_04.docx](/home/andrzey/git-claude/heuristics/problem_relaxation_2025_01_04.docx)

**Reviewed:** All body text, including the initial survey, the additional mathematical techniques, and both educational sections. Main contributions: constraint and continuous relaxation, bounds, penalties, iterative restrictions, staged commitment, feedback between planning levels, and simpler instances.

**Selection and corrections:** Kept general procedures rather than specialist solver recipes. Distinguished an easier teaching example from a formal relaxation. Did not repeat claims that every convex problem has a unique optimum or that naive rounding produces a valid answer. Excluded faulty examples: unfolding a cube does not turn a surface path into an edge-only path; the equations `5c + 3d = 100` and `c + d = 25` force `c = d = 12.5`, so they have no integer solution; the claimed semicircle rule for arbitrary shapes under a parabola is unsupported. The fence-post example also mixes fixed-perimeter reasoning with factor pairs. These examples should not be used as instructions.

<a id="s3"></a>
### S3 Mathematical thinking and problem solving

**Document:** [/home/andrzey/git-claude/heuristics/problem‑solving_heuristics_2026_04_26.docx](/home/andrzey/git-claude/heuristics/problem‑solving_heuristics_2026_04_26.docx)

**Reviewed:** All ten sections. Main contributions: explicit framing, the understand-plan-execute-review cycle, representation, units, limiting cases, symmetry, structured decisions, and systems and incentive models. Its discussion of evolutionary search and escaping local optima reinforces scheme 5; analogy and decomposition reinforce schemes 2 and 3.

**Selection:** Turned the broad perspectives into clearly labeled human-scale procedures. Did not present named search algorithms as interchangeable or repeat the blanket claim that none can guarantee optimality. Omitted broad historical claims and chemical metaphors where they did not add a distinct, testable action.

<a id="s4"></a>
### S4 The art and craft of problem solving

**Document:** [/home/andrzey/git-claude/heuristics/the-art-and-craft-of-problem-solving.pdf](/home/andrzey/git-claude/heuristics/the-art-and-craft-of-problem-solving.pdf)

**Author and edition:** Paul Zeitz, second edition. Page references above use printed page numbers, not PDF viewer positions.

**Reviewed for reusable methods:** Contents and reading guidance; the methodological discussions and selected worked examples in sections 2.2-2.4, 3.2-3.4, 6.1-6.4, and 8.4. Checked a rendered extreme-principle geometry page against the extracted text. Main additions: conjecture testing, contradiction, extreme elements, pigeonholes, invariants, monovariants, induction and recurrence, complements, double counting, and auxiliary constructions.

**Selection:** This is a method-focused review, not a solution or transcription of the book's exercise collection. Specialized algebra, number theory, calculus, and geometry tools are outside this guide unless they expose a broadly reusable scheme. The book also reinforces working backward, simplifying, changing representation, symmetry, and graph-based thinking already covered above.

<a id="s5"></a>
### S5 Heuristics for teaching and learning mathematics

**Document:** [/home/andrzey/git-claude/heuristics/Heuristics in Problem Solving for the Teaching and Learning of Mathematics.pdf](</home/andrzey/git-claude/heuristics/Heuristics in Problem Solving for the Teaching and Learning of Mathematics.pdf>)

**Author and date:** Nuno Álvaro Ferreira Rodrigues, doctoral thesis, University of Coimbra, 2015. Page references above use printed page numbers.

**Reviewed for reusable methods:** Abstract, contents, selected metacognition and problem-solving discussions on pp. 27-28 and 48-50, the conclusion around pp. 212-213, and the annex's outline and methodological guidance on pp. 215-226. Examined selected worked examples on pp. 236-237, 252-253, 285-286, 320-333, and the final visual paradox discussion on pp. 402-405. Visually checked the cyclical-process diagram on p. 223 and the route-method comparison on p. 285.

**Main contributions:** Systematic enumeration and elimination, solving only for the requested quantity, greedy construction with a clear counterexample to optimality, and monitoring and revising the solving process. Earlier schemes are reinforced through concrete examples of representation, relaxation, auxiliary constructions, symmetry, and extreme choices.

**Selection:** Treated the annex as a source of worked reasoning patterns, not as a reason to copy every mathematical exercise or historical anecdote. The thesis reports limitations in its short classroom intervention, so this guide does not claim that learning a list of heuristics alone guarantees improved performance. Practice, subject knowledge, and reviewing one's reasoning remain necessary.
