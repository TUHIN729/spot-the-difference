# Lantern Lane — Spot the Difference

![Bounty](https://make.fun/badge/best-spot-the-difference-game-20261121-0451.svg)
![Rank](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/TUHIN729/spot-the-difference/rank.svg)
![Reward](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/TUHIN729/spot-the-difference/reward.svg)

[Bounty page](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451) ·
[Leaderboard](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451/leaderboard)

Two near-identical pictures of a cosy night-market street hang side by side —
but **8 things** are different. Find them all before the 3-minute lantern burns out.

## How to play

- Click a difference in **either** picture to mark it on both panels (green ring + check).
- Each find is **+100** points. A wrong click costs **25** points.
- Stuck? The **Hint** button pulses the next unfound difference (3 hints, **−50** each).
- Finish fast: every second left on the clock is worth **5** bonus points.
- Keys: **H** hint, **R** restart.

## The 8 differences

1. A paper lantern missing in the right picture
2. The cat's tail — up on the left, down on the right
3. A shop window lit on the left, dark on the right
4. A star in the sky, present only on the left
5. The shop sign reads **TEA** on the left, **TOY** on the right
6. A flower — red on the left, yellow on the right
7. A bird on the wire, present only on the left
8. The vendor's umbrella — striped on the left, plain on the right

## Run it

```sh
node serve.ts   # serves game/ at http://localhost:8080
```

The game is one self-contained `game/index.html` — original inline SVG art,
inline CSS and one inline script, no libraries, no network requests.
`?shot=start|play|end` renders a fixed title, mid-game (3 found, 5 to go,
02:31, 300 points) or win frame for screenshots.
