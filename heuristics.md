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

**Description:** Working backward starts with the exact result you want and asks which condition would make the previous moment possible. Continue toward something you already know or can do, then read the chain forward. A distant goal becomes smaller requirements and may reveal a missing step. This searches for a route, not a proof. A necessary condition must be present, but may still be insufficient, so check every forward link.

**Example:** You must submit a science poster Friday. Uploading requires an exported file; that requires text and images to fit; layout requires a draft and sources; submission requires teacher feedback. Your first list had no feedback time, so schedule draft Tuesday, layout Wednesday, feedback Thursday, upload Friday. The backward chain exposed the gap; checking forward keeps a draft from being mistaken for the finished poster.

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

**Description:** An analogy is a comparison between situations that share important relationships. Instead of matching topics or copying an answer, identify what depends on what, what is limited, and what counts as success. Map those roles from a solved problem to the new one, then test differences that could break the match. The method can suggest a useful route when the subject feels unfamiliar, but surface resemblance alone is weak evidence. The relationships matter, not the decoration.

**Example:** A board-game level requires keys before doors open. Use that structure to plan a group presentation: keys become sources, doors slides, and the final gate rehearsal. Several people can gather sources at once, so adjust the analogy instead of copying game moves. The map shows that a missing source blocks a slide, while parallel research saves time. The dependency pattern helped; the game’s theme did not.

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

**Description:** Break a large problem into smaller tasks with clear outputs, then combine those outputs and check the connections. Mark dependencies, meaning tasks that cannot start until another result exists. This reduces overload and makes work shareable, but it does not stop parts affecting one another: good pieces can clash when joined. The final check must still test the original goal and all constraints.

**Example:** Planning a class film night feels like one huge job. Split it into permission and room, film choice, snacks, timing, and publicity. Permission comes before booking, and the film length sets the finish time. Two students choose snacks separately, but their lists exceed the budget, so the class combines them and removes one item. Dividing the work makes ownership clear; reconnecting the pieces catches the budget and timing conflicts.

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

**Example:** Your team predicts that folded strips will strengthen a paper bridge. Build the same 20-centimeter bridge with three strips, then five, changing only their number. Add identical books one by one until each version collapses: three strips hold four books, while five hold eight. Capacity is the measured outcome, not a guess. The second test supports using more strips, but it does not prove that every bridge needs five.

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

**Example:** Your group has a valid study schedule for five subjects, but three tests land on one evening. Swapping two blocks improves the score by giving each test review time. After three swaps, nearby versions are worse. Save it and rebuild from another subject order. The second plan spreads review sessions around the fixed tests; deadlines and subjects stay fixed. One score prevents choosing a prettier but weaker plan.

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

**Example:** Your class wants to raise 100 euros by selling snacks. A quick estimate uses 20 students, 3 items each, and 2 euros per item: 20 × 3 × 2 = 120 euros. If some sell only 2 and others sell 4, a rough range is 80 to 160 euros. The range shows the target is plausible, while exact costs and unsold snacks still need checking.

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

**Description:** Estimate a task in two ways. First split it into non-overlapping pieces and use a comparable rate, such as minutes per edited clip. Add shared work like coordination and uploading. Then compare the total with a similar whole task. A mismatch is a clue to investigate, not an error to hide. Remember that effort, the amount of work, differs from elapsed time, the calendar time from start to finish, when people work in parallel.

**Example:** A class podcast has four interviews. Earlier edits averaged 15 minutes each, so editing is about 4 × 15 = 60 minutes. Add 30 minutes for the shared introduction and upload: 90 minutes of effort. Two students can edit in parallel, so elapsed time may be closer to 60 minutes. If the last whole podcast took 2 hours, compare the difference and update the rate after this episode.

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

**Description:** Treat your first judgment as a hypothesis, not a verdict. Availability is the pull of an example that is easy to remember; representativeness is judging by resemblance; anchoring is being pulled toward the first number. Ask which shortcut is operating, seek comparable data and evidence against your first idea, then make a second estimate by another route. Compare both and state what remains uncertain.

**Example:** After two late buses, you predict half of your next ten trips will be late. The vivid delays make risk feel larger. Ten earlier trips include two late ones, so 20 percent fits that small sample better than 50. Weather could change the result, so keep uncertainty instead of declaring buses reliable. The check corrected an impression without proving the future.

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

**Description:** Constraint relaxation means temporarily solving an easier version of the same problem by removing or weakening one rule. Keep the goal, inspect what the relaxed answer violates, and restore the original rules before delivering anything. This can reveal a hidden bottleneck or a useful bound. It is a model for thinking, not permission to ignore real safety, legal, or accessibility requirements.

**Example:** Your group must finish a video, but everyone must attend every work session. Temporarily remove that rule in a planning sheet: two pairs edit scenes, then meet for a 20-minute recording. This reveals shared editing as the bottleneck. Restore the original rule and redesign around one longer session with everyone present; the relaxed version was only a clue. If a teacher changes requirements, record that separately. Safety and permissions were never relaxed.

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

**Description:** Continuous relaxation temporarily lets whole or yes/no choices take fractional values, while keeping the other limits and goal. The easier calculation can show which choices matter and give a bound or target. Fractions are only clues: rounding may break capacity, budget, or exact totals, and a nearby whole-number solution may not exist. Finish by testing actual whole choices against every original rule.

**Example:** With 6 hours, booths A, B, C need 4, 3, 2 hours and earn 8, 6, 3 points; each is all-or-nothing. Keeping 0 ≤ A, B, C ≤ 1, relaxation chooses A = 1 and B = 2/3: 6 hours, 12 points. Rounding B up needs 7 hours and fails. Whole choices give A + C: 6 hours, 11 points, valid.

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

**Description:** A bound is a limit that the true answer cannot cross. When seeking the smallest result, a relaxed problem can give a lower bound and a valid solution an upper bound; when seeking the largest, reverse them. If the two values match, you have proved the answer is best possible. If they differ, the gap tells you how much uncertainty remains. The bound must be justified, not guessed from an approximate calculation.

**Example:** Find the shortest route between three school stops. Ignoring one difficult rule, the relaxed problem’s shortest route is 8 minutes, so no route obeying every rule can be shorter. A valid route takes 10 minutes. The best is between 8 and 10, leaving a 2-minute gap; do not claim 8 is achievable. If a valid 8-minute route appears, matching bounds prove optimality.

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

**Description:** A trade-off appears when improving one preference worsens another. Separate hard constraints, which may not be broken, from soft targets that can be exchanged. Give each soft violation a measurable penalty and weight, combine those costs with the normal score, and see how changing weights changes the choice. The numbers organize a decision; arbitrary penalties do not prove that the result is mathematically best.

**Example:** Your team chooses a rehearsal time. Room and Friday upload are hard constraints. Attendance is soft: charge 5 points per absent member and 1 point per 15 minutes late. Plan A includes everyone but ends 45 minutes late, costing 3. Plan B ends on time but misses one member, costing 5. A wins under these weights. If attendance matters more, raise its penalty; it never excuses missing the room or deadline.

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

**Description:** Add restrictions gradually when a candidate fails. A new restriction, sometimes called a cut, should describe the failure generally and exclude that invalid pattern while preserving every valid answer. Re-solve and repeat. This keeps a large model manageable, but a rule based only on taste can remove a legitimate solution. The process may end with a valid candidate or show that no candidate survives.

**Example:** A simplified timetable lets one student attend two meetings at once. Add a rule: no student occupies overlapping sessions. A later candidate puts a recorder in a room without an outlet, though the assignment requires wall-powered equipment; require an outlet for every recording. Check each rule comes from the assignment, not personal taste. The cut removes invalid schedules while preserving valid ones; another solve gives a workable timetable.

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

**Description:** This method means deciding a long plan one block at a time instead of fixing every detail immediately. Settle the first stage, sketch what comes later, and check that enough time, space, or materials remain. A block is a group of related decisions, while feasibility means the remaining work still fits the rules. If a later stage becomes impossible, change an earlier choice. Early choices can trap you, and the method does not guarantee the best plan.

**Example:** For example, Maja has four hours for a school fair: setup, games, and cleanup. Decorations take 2.5 hours; later blocks need 1.25 hours and 1 hour, so 4.75 hours cannot fit. She backtracks, chooses decorations taking 1.5 hours, and leaves 1.5 hours for games plus 1 hour for cleanup. The revised schedule uses all four hours and remains feasible.

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

**Description:** A high-level plan chooses the direction, while a detailed check tests whether actual tasks, time, people, and cost fit. Alternate between them: propose a strategy, work out a concrete version, turn failures into specific feedback, and revise. Feedback means information from the details that changes the bigger plan, not a vague feeling. This helps when a clever idea fails during execution. Matching the two levels still does not prove success.

**Example:** For example, four students plan a science video no longer than six minutes: a 1-minute introduction, 3-minute live experiment, and 2-minute conclusion. The lab is available for 20 minutes, but setup takes 12 and filming 15, so the experiment needs 27. They revise the big plan to a prepared 30-second demonstration, already assembled before booking, filmed in 5 minutes. Recording the other sections takes 14 minutes, so filming uses 19 minutes.

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

**Example:** For example, in a tournament where every player meets every other once, start small. Two players create 1 game, three create 3, and four create 6. Each new player adds one game against every earlier player, so 20 players create 1 + 2 + ... + 19 = 190 games. The small cases revealed the repeated step, but would not prove a different tournament rule.

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

**Description:** Turn a vague difficulty into a question with a clear goal, known facts, and real constraints. Separate facts from assumptions: a fact is given or checked; an assumption is treated as true without checking. This prevents solving a precise version of the wrong question. Ask what counts as success, what information is missing, and whether a rule is real or merely customary. Review the framing after solving.

**Example:** For example, a class asks, ‘Can everyone reach the museum by 9:00?’ Clarify ‘everyone’ as 28 students plus 2 teachers. A bus leaves at 8:10, takes 35 minutes, and has 30 seats. The school requires a seat for each person, so the group fits exactly and arrives at 8:45. If only 28 seats can be used, two people lack seats and another route is needed. Naming the seat rule prevents an answer to the wrong question.

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

**Description:** Change the representation by describing the same problem as a picture, table, equation, physical model, or new variables. A good representation makes a hidden relationship easier to see. Label quantities and carry every condition across, or you may change the problem silently. This helps with dense word problems and tangled dependencies. An exact transformation preserves the question, but an approximation needs a separate check. A sketch suggests an answer, not proof.

**Example:** For example, the words say that a rectangle has perimeter 26 cm and length 3 cm more than its width. Let the width be w and the length w + 3. The equation 2w + 2(w + 3) = 26 becomes 4w + 6 = 26, so w = 5 and the length is 8. Checking gives 2 × 5 + 2 × 8 = 26. Replacing words with variables exposed the relationship without changing the conditions.

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

**Description:** Attach units to measured quantities and test simple boundary cases before trusting a formula. Units identify the kind of result: distance divided by time gives speed, not time per distance. Boundary cases include zero, one, equal values, and allowed minimum or maximum values. They can reveal a reversed operation or a model’s limits, although passing them does not prove correctness. Never divide by a forbidden input, such as zero time.

**Example:** For example, a cyclist travels 18 km in 1.5 hours, so speed is 18 ÷ 1.5 = 12 km/h. Reversing the division gives 0.083 hours per kilometre, exposing the mistake. Testing 0 km gives 0 km/h; testing 36 km in 1.5 hours gives 24 km/h. Zero hours is forbidden because division by zero is undefined.

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

**Description:** Use symmetry when swapping, rotating, reflecting, or relabeling parts leaves every rule and the goal unchanged. Group genuinely equivalent cases, solve one representative, and transfer the result. This avoids repeated work in geometry, counting, arrangements, and games with interchangeable pieces. Check the rules first: a labelled seat, different colour, or special player can destroy apparent symmetry. A symmetric picture does not guarantee a symmetric solution.

**Example:** For example, four named players sit around an unlabelled circular table, and the clockwise order matters, so a reflection is different. Rotating everyone gives the same arrangement; fix Ania and arrange the other three clockwise: 3 × 2 × 1 = 6. If one chair is labelled ‘near the door’, rotations differ too. Any player can occupy it, with 3! arrangements left, giving 4 × 6 = 24. The rules, not the circle’s appearance, decide the real symmetry.

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

**Description:** List each feasible choice, its outcomes, costs, and opportunities you give up. An outcome is a possible result, a trade-off is a gain paired with giving up something else, and probability is a justified estimate of how often a result may occur. Use probability-weighted averages only with evidence; an unknown chance is not automatically 50 percent. Compare downside outcomes too, and keep value judgments visible instead of hiding them in one score.

**Example:** For example, Rita compares study plans. Plan A takes two hours; from four similar quizzes she estimates 75% for 80 points and 25% for 60. Its rough expected score is 0.75 × 80 + 0.25 × 60 = 75. Plan B takes one hour, but its chance is unknown, not 50%. She may test it, but cannot calculate an average from a made-up probability. If 60 is unacceptable, the average alone is not enough.

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

**Description:** Map a problem as a system, not isolated parts. Draw participants as nodes, then connect dependencies and influences with arrows. Look for a bottleneck, the point limiting the process, feedback loops, and incentives. An incentive is a reason making someone more likely to choose an action. This helps predict side effects. The map is a model, not proof of causation, so test a limited change and check the whole result.

**Example:** For example, four students send slides to one editor. The teacher awards one point per slide, so students add more; the editor becomes a bottleneck and gets 18 repeated slides late. They map students, slides, editing, and deadline, then ask the teacher to approve a pilot: grade one coherent deck and cap students at three slides. The teacher agrees. They finish 12 non-repeated slides on time. This pilot suggests the rule helped, but cannot prove it caused all improvements.

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

**Description:** Use several small experiments to discover a possible pattern, then find why it should hold. A pattern is a repeated relationship; a proof explains why it must continue under the stated rules. Record examples consistently, test an awkward case, and state the suspected range. Different rules can match the first few results, so examples support a conjecture but do not establish a universal claim. If a test fails, refine the rule.

**Example:** For example, a row of connected square tiles uses 4 sticks for one square, 7 for two, and 10 for three. The differences suggest adding 3, so eight squares should use 4 + 7 × 3 = 25 sticks. Structurally, each new square shares one side and adds three sticks. That explains any straight row. The numbers alone could fit another rule, so the pattern was not proof.

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

**Description:** Separate assumptions from the exact conclusion, then test its opposite. A contradiction occurs when the assumptions plus the negated conclusion force something impossible. A counterexample is one valid case satisfying the assumptions but breaking the conclusion. Use contradiction to support a universal claim and a counterexample to reject or narrow one. Not finding a counterexample proves nothing; in empirical work, conflict may reveal a bad model.

**Example:** For example, claim: ‘Every multiple of 4 is even.’ If a number were both a multiple of 4 and odd, it would be divisible by 2 and leave remainder 1, impossible; the claim survives for whole numbers. Claim: ‘Every number ending in 5 is prime.’ Counterexample 15 ends in 5 but is divisible by 3 and 5. This valid case does not create a contradiction; it breaks the conclusion.

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

**Description:** Choose an actual smallest, largest, first, last, or most constrained object. Its extreme position rules out possibilities that an arbitrary object would allow. In a finite set, check that the extreme exists, then ask whether a proposed arrangement forces something even smaller or larger. This can turn a complicated existence argument into a short contradiction. It is not substituting a huge value or approaching a limit; use an object really present.

**Example:** For example, five players have scores 12, 8, 15, 10, and 9. Pick the largest, 15. The claim that every player can be followed by someone with a higher score cannot work, because no listed score exceeds 15. The extreme player gives the stopping point. In a longer finite ranking, this avoids checking everyone. An infinite collection with no largest element would need another argument.

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

**Description:** The pigeonhole principle says that if more objects go into fewer labeled categories, some category receives at least two. The categories are the slots; the objects might be people, dates, files, or game pieces. The method helps prove that a repetition or collision cannot be avoided, even when you cannot identify which category it will be. For a stronger conclusion, compare the number of objects with the capacity of every category, not just with the number of categories.

**Example:** A class has 25 students. Sort birthdays by calendar month, giving 12 slots; each birthday belongs to one. If every month held at most two birthdays, there could be at most 12 × 2 = 24 students. Since there are 25, at least one month has three or more birthdays. We know it exists, but the principle does not tell us which month.

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

**Description:** An invariant is a property unchanged by every legal move. Define the moves, then test candidates such as parity, a remainder, a total, or color balance. Different values at the start and target make the target impossible. Equal values are only a necessary test, not a route: states can share an invariant yet lie in disconnected parts of a game. Reachability needs further reasoning about the available moves.

**Example:** Three switches start at 000, where 1 means on. The only move flips switches 1 and 2 together. The number of switches that are on keeps even parity: flipping two changes the count by +2, 0, or -2. Target 100 has one on, so it is impossible. Target 101 has two on, so parity matches, but from 000 the only states are 000 and 110; repeating returns to 000. Thus 101 is also unreachable.

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

**Description:** A monovariant is a number attached to the current state that never increases or never decreases during legal steps. It can show direction of progress, rule out a target, or support a termination proof. Finite stopping needs more than monotonicity: a discrete bound, such as a nonnegative integer dropping by at least 1 whenever the process continues. A bounded real number may move strictly one way forever; unchanged-score moves may also create a cycle.

**Example:** Start with a positive real x = 1 and replace it by x/2 each round, stopping only at x = 0. It strictly decreases but stays above 0. After n rounds x = 1/2^n, still positive for every finite n, so this never stops. In a different process, a pile of 12 marbles loses at least one marble each active move; its integer monovariant reaches 0 within 12 moves.

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

**Description:** A recurrence is a rule for calculating one case from earlier cases. Mathematical induction is a proof method: check starting cases, then show that a claim for the needed earlier size implies it for the next. Both build large cases from small ones, but recurrence produces values whereas induction justifies a statement for every allowed whole-number size. The step uses only justified cases, and the base covers every size the rule needs.

**Example:** Count routes for a robot climbing n steps with jumps of 1 or 2. Let a(n) be the number of routes, with a(1) = 1 and a(2) = 2. The last jump comes from n-1 or n-2, so a(n) = a(n-1) + a(n-2); thus a(3) = 3 and a(4) = 5. This recurrence computes values. It does not prove a formula for every n. Induction would check the base cases and prove the step for arbitrary n.

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

**Description:** The complement is the set of all allowed outcomes that fail the condition you want. If success is hard to describe but failure is simple, count the whole set and subtract the failures. In probability, use P(success) = 1 - P(failure), but first specify the model. Dividing favorable outcomes by all outcomes works only when the elementary outcomes are equally likely. Failure cases must also be disjoint, or overlaps need correcting.

**Example:** Roll a fair six-sided die twice and ask for at least one six. The complement is no six on either roll. There are 6 × 6 = 36 equally likely ordered outcomes; 5 × 5 = 25 have no six. Thus success has 36 - 25 = 11 outcomes, so P = 11/36. Counting a six on each roll separately would double-count the outcome with two sixes.

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

**Description:** Double counting means counting one clearly defined set from two viewpoints. Because both methods describe the same objects, their totals must agree. This can reveal a formula, replace a hard count with an easier one, or catch an error. Decide first whether order matters and whether each object appears once or several times in each count. If one method lists choices, check whether later choices were already forced; treating them as independent creates overcounting.

**Example:** Six students each shake hands with every other student once. Each meets 5 others, giving 6 × 5 = 30 handshake ends. An actual handshake has two ends, so every handshake was counted twice: 30/2 = 15. Directly choosing two participants also gives 6 × 5 / 2 = 15. Agreement confirms the total; forgetting to divide by 2 would report 30.

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

**Description:** An auxiliary object is a new line, variable, subtotal, diagram, or intermediate target that the problem did not ask for. Add it for a specific reason: it should expose a relationship linking the given information to the goal. Define it precisely and check that it is allowed. It is a bridge, not an extra assumption; if it cannot exist or merely repeats the desired conclusion, the argument fails. Translate the result back to the original question.

**Example:** A rectangular school court is 6 m by 8 m. Draw the diagonal to make a right triangle. For such a triangle, the Pythagorean rule says the square of the longest side equals the sum of the other squares: d² = 6² + 8² = 100, so d = 10 m. The added line connected the known sides to the requested distance without changing the court.

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

**Description:** An exhaustive case search writes every allowed possibility in a controlled order, usually as a table or branching list. Exhaustive means no option is omitted; disjoint means no option appears in two branches. Use a strong quick condition first to cross out impossible cases, and keep the reason for each deletion. This helps when the remaining search is small. If you inspect only some candidates, you may find a solution, but cannot claim no other solution exists.

**Example:** A four-digit locker code uses 1, 2, 3, 4 once each, must end even, and must have first digit smaller than second. Split by last digit. For last 2, testing the inequality leaves 1342, 1432, 3412. For last 4, it leaves 1234, 1324, 2314. These branches are disjoint, and only 2 or 4 can be last, so the six codes cover every possibility. Each satisfies the rules, proving there are exactly six.

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

**Description:** An aggregate is a total, difference, ratio, or position rather than every individual value. Start by underlining exactly what the question asks. Then combine the given relationships so extra unknowns cancel or become irrelevant. This saves work and avoids inventing information the data do not contain. Still check uniqueness: a fixed total does not determine its parts, and if two valid setups give different requested quantities, the problem is genuinely underdetermined.

**Example:** A rectangle has perimeter 28 cm, and the question asks for length plus width. If the sides are a and b, 2a + 2b = 28, so a + b = 14 cm. There is no need to find each side: 6 by 8 and 5 by 9 both fit the perimeter, yet each has sum 14. The requested aggregate is fixed while the individual sides are not.

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

**Description:** A greedy method builds a candidate by choosing what looks best now according to a simple local rule. It quickly produces a route, schedule, or allocation when checking every possibility is expensive. Then inspect the complete result and compare alternatives or improve it. Greedy is a way to find a candidate, not a proof that it is best. A locally attractive move can leave an awkward remainder, an expensive final step, or no legal continuation.

**Example:** A game must make exactly 6 points using tokens worth 1, 3, and 4, with as few tokens as possible. Greedy takes 4 first, then 1 and 1, for 3 tokens. Two 3-point tokens make 6 in 2. The greedy answer is valid but not optimal; proving a best answer needs a separate argument or comparison.

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

**Example:** You want to improve a quiz score. Your first plan is rereading notes for 30 minutes. A 10-question self-test gives 2 correct answers. Reviewing the misses shows definitions were not recalled, although examples made sense, so the issue is recalling definitions rather than reading time. You switch to flashcards and practice questions, then score 7/10 on a similar test. The numbers do not prove mastery, but they show why the revised plan is more promising.

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

**Description:** Generalization replaces one fixed detail with a variable and studies a family of related cases. A parameter is a symbol whose allowed values must be stated. This can reveal a formula or structure hidden by one example, but testing several values is not a proof. A valid general claim needs an argument covering its full scope, such as every positive integer in a stated range, plus any exceptions. Only then substitute the original value.

**Example:** For the first n odd numbers, test 1 = 1² and 1 + 3 = 2². To prove the pattern for every positive integer n, assume the first n sum to n². The next odd number, 2n + 1, gives n² + 2n + 1 = (n + 1)². The base and this step cover every positive n. Therefore the first 4 sum to 4² = 16; a few examples alone would not prove the formula.

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
