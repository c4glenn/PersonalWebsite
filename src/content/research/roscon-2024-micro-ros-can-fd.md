---
title: "Micro-ROS over CAN-FD: High-Throughput Communication for Robotic Systems"
description: "Demonstrated the use of CAN-FD as a transport layer for Micro-ROS between an Nvidia Jetson and Teensy 4.0, enabling high-throughput communication for resource-constrained robotic systems."
date: "2024-10-01"
authors: ["Philip Smith"]
venue: "ROSCon 2024, Odense, Denmark"
tags: ["Micro-ROS", "CAN-FD", "Embedded Systems", "ROS2", "Teensy", "Nvidia Jetson"]
---

Presented at ROSCon 2024 in Odense, Denmark. This work demonstrates CAN-FD as a practical transport layer for Micro-ROS, bridging a Teensy 4.0 microcontroller with an Nvidia Jetson over a CAN-FD bus.

<div style="padding:56.25% 0 0 0;position:relative;margin-bottom:2rem;">
  <iframe
    src="https://player.vimeo.com/video/1026031720"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

## Overview

CAN-FD (Controller Area Network with Flexible Data-rate) is widely used in automotive and industrial systems for its reliability and deterministic timing. This presentation shows how it can serve as a high-throughput, low-latency transport for Micro-ROS, making it a strong alternative to serial UART for robotics applications that demand real-time communication between embedded controllers and a Linux host.

## Key Points

- CAN-FD supports up to 8 Mbps and frames up to 64 bytes, well-suited for sensor and actuator data
- Demonstrated reliable communication between a Teensy 4.0 (Micro-ROS) and Nvidia Jetson (ROS2)
- Benchmarked throughput and latency against existing Micro-ROS transport options
