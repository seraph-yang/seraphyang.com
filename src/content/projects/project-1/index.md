---
title: "Y86 Simulator"
summary: "My OCS35 semester 2 final project which simulates a Y86 assembler and processor."
date: "May 19 2024"
draft: false
tags:
- Java
- Assembly
- C
repoUrl: https://github.com/seraph-yang/y86-simulator
---

Project consists of two parts, an assembler and processor.

### Assembler
Translates assembly language into machine code. Converts human-readable C code into hexadecimal code that the CPU can read.

Assembler supports:
- 1 : 1 mapping of instructions to encodings
- resolves symbolic names
- supports the following directives
    - .pos x
    - .align x
    - .long x

### Processor
Simulates the 5 sequential stages of the Y86 processor. Shows how the simulator reads each line from memory and pipelines through every stage.

Processor shows the following stages:
- fetch
- decode
- execute
- memory
- writeback
- pc update

Processor also shows state of temporary storage registers after each instruction.