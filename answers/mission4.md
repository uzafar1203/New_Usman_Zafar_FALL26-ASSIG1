# Mission 4: Report it and brief the owner

## Commit history

Output of `git log --oneline`:

```
usman@MacBook-Pro-5 New_Usman_Zafar_FALL26-ASSIG1 % git log --oneline
33b66b4 (HEAD -> assignment1, origin/assignment1) images for mission 2
a59834f finished mission 2
0cba313 complete mission 1 and 3 answers#
176d92d complete mission 3 attack
b5d4735 answered mission 1 questions
870385d added mission 0 and 1 images
bae72cf Implemented normalizeService(raw) and  parseStatusReport(jsonText) functions
8fc7bcd answer to mission0
cfd3b47 ignore node_modules
d890ff1 (origin/main, origin/HEAD, main) first push with the assignment files
294714d Initial commit
```

Pick your **best** commit message and your **worst** one. Which of the 7 rules does the worst one break?

> My best commit message is complete mission 3 attack because it is short, specific, and clearly describes what changed. My worst commit message is answer to mission0 because it is vague and does not clearly describe the change. It breaks the rule that a commit message should clearly and specifically describe what the commit does

## Pull Request

PR link, inside your fork:

> https://github.com/...

## Creating value: the risk brief

The Operations Manager who owns the portal is not a developer. Write a brief of **120 to 180 words** addressed to them. It must answer:

1. What you proved, in terms of **impact** on operators and on the campus, not in terms of code.
2. Why "it uses HTTPS and validates its data" did **not** protect them.
3. The single most important change the backend team must make, stated concretely.
4. One honest limit of your engagement: what you did **not** test.

> During this assessment, I demonstrated that an attacker who can run JavaScript in an operator's browser could interfere with how the portal behaves and what the operator sees. I was able to prevent access to a destructive action and make unhealthy services appear healthy, even while the real service returned an outage. This could cause operators to miss or delay responding to a campus service disruption.

HTTPS does not prevent this because it protects data while it travels between the browser and server; it does not protect the page after attacker-controlled code is already running in the browser. Data validation also did not stop the attack because the forged data was deliberately made to pass the portal's validation rules.

The most important change is to enforce authorization for destructive actions on the backend for every request rather than trusting the browser. This assessment did not test whether the backend itself could be compromised or bypassed directly.

## Reflection

In one or two sentences: which concept from Units 1.1 to 1.3 do you understand much better now, and what made it click?

> I understand much better why client-side code cannot be trusted for security. It clicked when I was able to change the portal's behavior and displayed data entirely from the browser while still producing data that passed its validation.
