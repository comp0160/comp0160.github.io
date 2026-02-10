---
title: "Lab Session 5: Scenes & Flow"
layout: default
---

# Lab Session 5: Scenes & Flow

In this session we'll look at the perception of objects and scenes,
how the brain decomposes and aggregates disparate stimuli into
behaviourally-relevant elements, and how this can inform the
design of computational interfaces.

Topics covered will include:

* Gestalt principles
* Grouping and streaming
* Optical flow
* Affordance

There will also be a further opportunity to ask questions about the
[coursework](coursework.html).


## Demos

There are no individual experiments this week, but some of the demos can
be run locally in your browser if you wish. (This is strictly optional.)

Note that these are not user-friendly -- they provide no **affordances** --
but an outline of the controls is provided below.

* [Common Fate](demos/fate/index.html)
    * **double click**: toggle full screen mode
    * **space bar**: toggle pause
    * **a**: fewer groups (min 1)
    * **d**: more groups (max 6)
    * **c**: toggle colour
    * **,**: fewer particles (min 500)
    * **.**: more particles (max 10,000)
    * **l**: increase group compactness
    * **k**: decrease group compactness
* [Starfield](demos/starfield/index.html)
    * **double click**: toggle full screen mode
    * **mouse move**: increase (right) and decrease (left) speed
    * **space bar**: reinitialise current configuration
    * **a**: "classic" starfield, constant z motion
    * **b**: starfield, random z motion
    * **h**: horizontal stargate, constant z motion
    * **w**: vertical stargate, constant z motion
    * **s**: vertical stargate, random forward z motion
    * **d**: vertical stargate, random z motion
    * **f**: vertical stargate, random x, y, z motion
    * **g**: starfield, random x motion
    * **r**: snow storm, mostly random motion
    * **k**: flat plane, constant z motion
    
<!--
* [Optical Flow](demos/flow/index.html) (requires webcam access)
    * **double click**: enter full screen mode
-->

Audio streaming examples are generated using
[Tidal Cycles](https://tidalcycles.org), with
[this script](code/streams-160.tidal).


## Links

* [Interface Hall of Shame](http://hallofshame.gp.co.at/shame.htm).
  Despite being a quarter century old, many of the terrible UI choices
  documented here are still being made today.