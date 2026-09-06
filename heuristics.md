# Practical problem solving heuristics

A heuristic is a useful way to look for a solution, not a guarantee that the solution is correct or best. This guide collects reusable schemes from the non-HTML documents in this folder. Each scheme explains when to use it and what to do next.

The procedures are plain-language adaptations, not quotations. Examples outside mathematics illustrate how a scheme might transfer; they are not claims that the sources tested it in those settings. Similar ideas are combined rather than repeated. Short source codes point to the document review at the end.

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

**Description:** Start with the result you want and ask what would have to be true immediately before it. Turn a distant goal into a chain of requirements.

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

**Description:** Find an earlier problem with the same underlying relationships, even if its subject looks different. Transfer the method, not just the answer.

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

**Description:** Replace one large task with smaller tasks whose results can be combined.

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

**Description:** Try a candidate, learn from the result, and choose the next attempt deliberately.

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

**Description:** Start with an acceptable solution and improve it through small changes. If small changes stop helping, explore a different starting point or a larger change.

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

**Description:** Use rounded quantities and simple relationships to find the approximate size of an answer.

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

**Description:** Build an estimate from smaller pieces, then cross-check it against real examples or a rate measured in similar work.

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

**Description:** Treat an immediate judgment as a starting hypothesis. Check whether vivid memories, stereotypes, or the first number you saw are driving it.

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

**Description:** Solve a less restricted version to discover what is possible and which conditions cause the difficulty. This is constraint relaxation.

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

**Description:** Temporarily let indivisible choices take fractional values. The easier problem may reveal a useful target or bound. This is continuous relaxation.

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

**Description:** Put the best possible answer between a proven limit and the value of a solution that actually works.

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

**Description:** In a working model, attach a cost to violating a negotiable target instead of treating every target as absolute. This exposes trade-offs and may separate a tangled problem into smaller ones.

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

**Description:** Start with a manageable model, inspect its proposed answer, and add a justified rule that excludes the specific invalid pattern. Repeat rather than writing every possible restriction upfront.

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

**Description:** Make a large sequence of decisions in blocks. Settle one block while using a simpler model of what comes later.

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

**Description:** Choose a high-level plan, test whether its details can work, and use specific feedback to improve the plan.

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

**Description:** Reduce the size or complexity of the problem while keeping the relationship you want to understand.

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

**Description:** Turn a vague difficulty into a question with a clear goal, known information, and explicit conditions.

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

**Description:** Describe the same problem in a form that makes its relationships easier to see: a picture, table, equation, physical model, or a different set of variables.

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

**Description:** Test whether an answer has the right kind of quantity and behaves sensibly in simple boundary situations.

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

**Description:** If swapping, rotating, reflecting, or relabeling parts leaves the problem unchanged, work with one representative of each genuinely different case.

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

**Description:** Make alternatives explicit, including what each one gives up. Separate your choices from events you do not control.

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

**Description:** Look beyond individual parts. A problem may be caused by dependencies, limited flow, feedback, or people responding to one another's incentives.

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

**Description:** Use examples to discover a possible rule, then look for the reason it should hold.

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

**Description:** When a claim is hard to establish directly, ask what would happen if it were false. Alternatively, try to build a case that obeys the assumptions but breaks the conclusion.

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

**Description:** Pick the smallest, largest, first, last, or most constrained object. Its extreme position gives you information unavailable for an arbitrary object.

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

**Description:** If there are more objects than available categories, at least one category must contain multiple objects. This is the pigeonhole principle.

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

**Description:** Look for a quantity or property preserved by every allowed move. This is an invariant.

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

**Description:** Find a measure that never increases or never decreases. This is a monovariant; it can reveal progress, rule out a target, or help prove that a process stops.

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

**Description:** Replace a global problem with a rule connecting one size to earlier sizes. Use recurrence to compute results or induction to prove a claim for all sizes.

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

**Description:** When the desired cases are complicated, describe the unwanted cases and remove them from the whole.

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

**Description:** Two different ways of counting the same objects must give the same total. A one-to-one mapping can also replace a difficult count with an easier one.

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

**Description:** Introduce something not explicitly requested, such as a line, variable, subtotal, or intermediate goal, to connect the known facts with the desired result.

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

**Description:** Turn a manageable search into a table or branching list. Use each condition to remove cases instead of guessing repeatedly.

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

**Description:** You may be able to determine a total, difference, ratio, or position without discovering every individual value.

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

**Description:** Build a candidate by repeatedly taking the most attractive next step according to a simple rule.

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

**Description:** Monitor your reasoning while you work, not only after obtaining an answer. Being busy is not the same as making progress.

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

**Description:** Replace a specific number or object with a variable and investigate a family of related problems. A more general statement can reveal a relationship hidden by the original details.

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
