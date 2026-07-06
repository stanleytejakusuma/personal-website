---
title: Teaching an Agent to Read the Warehouse Bill
description: What I learned building an agent that watches Snowflake spend — outlier detection, root-cause diagnosis, and why the human gate is the most important part of the pipeline.
date: '2026-07-06'
venue: personal
tags:
- Evergreen
- Research
draft: true
---

Every data team eventually meets the same monster: the warehouse bill. It grows quietly, it grows nonlinearly, and by the time someone important asks about it, nobody can say which of the four hundred models actually moved the number.

At my last role the Snowflake bill was big enough to be its own line item, spread across pipelines covering ten-plus blockchains. The traditional answer is a dashboard — spend by warehouse, spend by role, a couple of week-over-week deltas — and a human who is supposed to look at it. The dashboard gets built. The human looks at it for two weeks. Then the human has other work, and the bill goes back to growing in the dark.

So I built the thing I actually wanted: an agent that reads the bill for me, argues with it, and shows up with receipts.

## The shape of the pipeline

The design settled into three stages, and the order matters more than the tooling.

**1. Outlier detection.** Boring statistics, deliberately. Rolling baselines per warehouse and per model, flag anything that steps outside its own history. No LLM involved — you do not want a language model deciding what "expensive" means when a z-score can do it reproducibly. The output of this stage is a short list of "this thing changed" facts.

**2. Root-cause diagnosis.** This is where the agent earns its keep. Given a flagged cost spike, it walks the metadata the way an engineer would: query history for the offending warehouse, the dbt model behind it, the git history of that model, recent schema changes upstream. The difference between "spend went up" and "spend went up because Tuesday's refactor turned an incremental model into a full-refresh" is the difference between a dashboard and a diagnosis. A language model is genuinely good at this part — it reads logs, diffs, and lineage the way it reads anything else, and it writes the narrative a human would have written after an hour of digging.

**3. Auto-drafted remediation, human-gated.** The agent drafts the fix — re-cluster the table, restore the incremental predicate, right-size the warehouse — as a pull request with the diagnosis attached. And then it stops. A human reviews and merges. That gate is not a compromise on the automation; it is the design. The agent's job is to compress an afternoon of investigation into a five-minute review, not to change production data infrastructure on its own authority.

## What surprised me

**The diagnosis is the product.** I expected the value to be in the fixes. It turned out the narrative was the thing people wanted — a paragraph that says *what changed, when, why, and what it costs per week if ignored*. Even when the drafted fix was wrong, the diagnosis was rarely useless.

**False positives are a trust budget.** Every alert that turns out to be "the monthly backfill, same as every month" spends credibility the real alerts need. Most of my iteration time went into the boring stage-one statistics — seasonality, known-noisy warehouses, suppression windows — not the glamorous agent part.

**The human gate is what makes the automation aggressive.** Because nothing ships without review, the agent can afford to be opinionated in its drafts. If it had merge rights, every prompt would have to be written defensively, and the whole system would collapse toward timidity. Constraining the blast radius is what buys the freedom to automate hard.

## The general lesson

None of this is Snowflake-specific. The pattern — deterministic detection, agentic diagnosis, human-gated action — applies anywhere a system produces more telemetry than a team can read: cloud bills, query performance, data quality, probably most of ops. The models are finally good enough to do the middle part. The discipline is keeping them out of the last part.

The bill, for what it's worth, stopped growing in the dark.
