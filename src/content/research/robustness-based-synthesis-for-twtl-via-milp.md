---
title: "Robustness-Based Synthesis for Time Window Temporal Logic Specifications via Mixed-Integer Linear Programming"
description: "Synthesis of TWTL specifications using MILP. Showcased that it is more effecient than STL for lots of sequential tasks."
date: "2026-06-29"
authors: ["Philip Smith", "Ahmad Ahmad", "Kevin Leahy"]
venue: "Prepub"
tags: ["Robotics", "Temporal Logic", "Formal Languages", "Automata"]
doiUrl: "https://doi.org/10.48550/arXiv.2606.30820"
relatedProjects: []
relatedExperience: ["wpi-automata-lab"]
paperFile: "TWTL_MILP_synthesis.pdf"
featured: true
---

Time Window Temporal Logic (TWTL) is a rich specification language for cyber-physical systems that can compactly express sequential tasks with explicit timing constraints. In this paper, we consider the problem of synthesizing control inputs for discrete-time linear systems subject to TWTL task specifications. Building on the quantitative semantics (robustness) recently introduced for TWTL in [1], we encode the robust satisfaction of a TWTL formula as a set of Mixed-Integer Linear constraints and pose synthesis as a Mixed Integer Linear Program (MILP) that maximizes the robustness degree. We prove that any feasible solution with positive objective value guarantees Boolean satisfaction of the specification. We address two synthesis settings: an *open-loop* formulation that optimizes the full control sequence from the initial state, and a *closed-loop* receding-horizon Model Predictive Controller (MPC) formulation that re-solves the MILP at each step using the current measured state. A key feature of our MPC formulation is a *task-adaptive horizon* that exploits the TWTL Deterministic Finite Automaton (DFA) to determine the active sub-task at each step, limiting the prediction horizon to the remaining window of the current task rather than the full formula horizon, this makes each re-solve significantly cheaper than the initial open-loop solve.
