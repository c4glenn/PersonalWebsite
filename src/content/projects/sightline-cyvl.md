---
title: "SightLine — CYVL Physical AI Hackathon"
description: "1st place at CYVL's Physical AI Hackathon. Automated tool that audits dangerous blind corners at every stop-controlled intersection in a city overnight, using LiDAR infrastructure data, crash history, and AASHTO sight triangle standards."
startDate: "2026-06"
endDate: "2026-06"
tags: ["LiDAR", "GIS", "Python", "Vercel", "Autodesk API", "AASHTO", "Hackathon", "Computer Vision"]
repoUrl: "https://github.com/shibuwu/cyvl_hack_2026"
liveUrl: "https://sightline-cyvl.vercel.app/"
featured: true
---

**Team:** Philip Smith, Pranay Katyal, Rohan Walia, Shibani S.

**Award:** 🥇 1st Place, CYVL Physical AI Hackathon (Somerville, MA)

## The Problem

In 2026, sight-distance audits at stop-controlled intersections are still done manually. A consultant walks a street, checks one corner, writes a report. Every stop sign approach has a legally defined zone — the AASHTO sight triangle — that a driver must be able to see across before pulling out. When a tree, a wall, or a sign blocks that zone, the driver is committing to traffic blind.

Cities are legally liable for this. The AASHTO standard has existed for decades. The data to automate it already exists. We connected the dots.

## What We Built

Using Cyvl's infrastructure data, MassDOT crash reports from the last 5 years, and the Autodesk API, SightLine:

1. **Screened all 1,187 stop-controlled approaches in Somerville** overnight
2. **Built AASHTO-compliant sight triangles** anchored on real painted stop bars
3. **Cross-referenced 5 years of crash history** to rank the worst corners
4. **Rendered 3D LiDAR scenes** showing the exact points and objects a driver can't see through

The worst corner we found had **18 prior crashes** and a confirmed obstructed sightline — not a model score, actual physical proof.

## Tech

- Cyvl's LiDAR infrastructure dataset for point cloud geometry
- MassDOT crash report database (5 years) for risk ranking
- Autodesk API for 3D scene rendering
- Python for sight triangle computation and data pipeline
- Vercel for the web viewer
