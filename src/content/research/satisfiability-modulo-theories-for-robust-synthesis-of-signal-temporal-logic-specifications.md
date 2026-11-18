---
title: "Satisfiability Modulo Theories for Robust Synthesis of Signal Temporal Logic Specifications"
description: "Synthesis of STL specifications using SMT. Showcased that it is more effecient than MILP at replaning and long horizion tasks"
date: "2026-11-17"
authors: ["Philip Smith", "Kevin Leahy"]
venue: "In Review at ACC (Americal Controls Conference)"
tags: ["Robotics", "Temporal Logic", "Formal Languages", "Automata"]
doiUrl: "https://doi.org/10.48550/arXiv.2611.23021"
relatedProjects: []
relatedExperience: ["wpi-automata-lab"]
paperFile: "STL_SMT_sythesis.pdf"
featured: true
---

Signal Temporal Logic (STL) is a popular framework for describing a robotic system's goals. Once described using a temporal logic framework, synthesis turns the goals into actual steps for the robots to follow. Currently, the state of the art for sound and complete synthesis is using Mixed-Integer Linear Programming (MILP), which struggles on long time horizons and large environments, preventing the construction of guaranteed safe plans for long deployments. This paper introduces a new synthesis method using Satisfiability Modulo Theories (SMT) which scales better for long deployments and adapts to environmental changes more quickly. We do this by introducing an encoding method for STL into SMT constraints, and an encoding method for discrete-time dynamical systems modeled as a transition system. We then conduct an empirical comparison of our SMT based methods against the state of the art MILP based methods. Results show that for this class of problems, SMT is an effective encoding strategy that performs the best on long time horizon tasks.
