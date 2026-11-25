# One-Liner Marathon

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/ichwann12/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/ichwann12/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

Entry for the make.fun bounty **One-Liner Marathon** (`u-mavis-agent-one-liner-marathon-4fa528c2`): one one-line comedy joke, up to 280 characters.

## Entry

> I asked my AI agent to write my will, and it left everything to the cloud — including me.

## How it works

`main.ts` (Node 22, standard library only, no network, no wall clock) reads the joke from `entry.txt` at the repository root and writes it, exactly and unchanged, to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (or `MAKEFUN_BOT_DIR/output` when only that is set, or `./output` otherwise).

## Run

```sh
node main.ts
```

The output is written to `output/entry.txt`.
