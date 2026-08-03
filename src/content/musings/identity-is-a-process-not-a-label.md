

---

title: Identity is a process, not a label
description: 'Building pi-king, a tmux-backed session manager for the Pi coding
  agent, I paired sessions using a token written into a tmux user option. Any
  process running as you can rewrite that option. Here is what replaced it.'
date: '2026-08-03'
venue: personal
tags:

- Engineering
subtags:
- tmux
- developer tooling
draft: false

---

I write code through a terminal agent. Who doesn't now? But the primary issue I kept on facing is losing sessions to closed terminals. There was one time, where I had more than three running simultaneously but I had no idea which one was waiting on me. So I built [pi-king](https://github.com/stanleytejakusuma/pi-king) – a tmux-backed session manager for the [Pi coding agent](https://pi.dev): `/bg` hands the current session to tmux and exits and a dashboard lists every session on the machine so you can reattach to any of them with a keypress.

The interesting problem in it isn't backgrounding. It's answering one question correctly: **which tmux session is this Pi session running inside?**

Get that wrong and pressing enter drops you into another else's work.

## The obvious answer, and why it is wrong

My very first implementation stamped a unqiue token on both halves. One on the main non-tmux'd session and the other on the tmux'd session. This creates a racing issue on which session is the latest or, put simply, to trust. To pair them, find the token that appears twice.

This worked immediately but also the problem that causes it.

A tmux user (or another agent) has *write* permission same as the original user (me). Not by tmux, and definitely not by the session that sets it. So the attack (if you want to call it that) is three commands: read the victim's token, write it into a session you control, clear the original.

This is the failure mode worth naming because a guard that detects tampering ONLY when tampering is untidy is certainly not a guard.

## What replaced it

Correlation is now by process id: the pid of the tmux pane, matched against the pid recorded in the session's own status file, and verified by comparing process start times so a recycled pid cannot impersonate a dead one.

A name can be renamed. A token can be copied. A pid cannot be moved.

The property that matters is not secrecy — the pid is public, `ps` will print it for anyone. It is that a pid is not a value anyone assigns. It is allocated by the kernel to a process that actually exists, and holding it requires being that process. The token was a sticker; the pid is a fact about the world.

## Ambiguity fails closed

The second half of the fix is what happens when the answer is unclear.

A pane pid is unique by construction: one pane, one process. So if two rows ever claim the same pane pid, something has been tampered with or something is very wrong. The dashboard discards **both** rows rather than picking one.

There was also a fallback I deleted entirely. When token matching failed, the old code fell back to matching on session name. That fallback is worse than no fallback, because a name is exactly what an attacker gets to choose. Pairing on resemblance is the same mistake as pairing on a sticker, wearing a hat.

An unmatched session now renders as unmatched. It is honest, and it is harmless.

## What this cost, and what it did not

This is not a vulnerability in any interesting sense. It needs code already running as you, and from that position there are easier things to do than relabel tmux sessions. Nobody hit it. I found it reading my own code.

I rewrote it anyway, because knowing which session is which is the entire job of the tool. A supervisor that can be pointed at the wrong process is not a supervisor with a bug — it is not a supervisor.

The rewrite also deleted more code than it added, which is usually the sign that the original design was carrying weight it should not have been.

## The general shape

Every system that pairs two things eventually picks an identifier, and the choice is usually made early and casually — a name, a label, a generated id written into a mutable field. The question worth asking at that moment is not "is this unique?" but:

**Who can write this, and what happens when they lie?**

If the answer is "anyone with local access, and we would not notice," you have chosen a sticker. Pick something that has to be earned rather than assigned, and make ambiguity refuse to resolve rather than guess.

---

pi-king is MIT licensed and on
[GitHub](https://github.com/stanleytejakusuma/pi-king) and
[npm](https://www.npmjs.com/package/pi-king). It needs tmux and nothing else —
no daemon, no config, no network calls.