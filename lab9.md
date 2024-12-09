---
title: "Lab Session 9: Experiment Design"
layout: default
---

# Lab Session 9: Experiment Design

For the last 4 weeks we have been looking at the perceptual consequences of
increasingly complex interacting stimuli, in the context of **pseudo-haptic**
effects in a virtual reality environment. The core pseudo-haptic illusion under 
consideration, arising from a mismatch between the *visually*-perceived
movement of  a virtual object and the *kinaesthetic* perception of the 
corresponding limb movement, *seems* to be susceptible to modulation by other
concurrent (visual and auditory) stimuli that the brain integrates into its
understanding of the scene.

In today's lab we add some further variations, because obviously the situation
wasn't complicated enough. But we also, more importantly, consider:

* How on Earth is anyone supposed to investigate such interacting effects in any kind of systematic way?
* How can we pose questions about these phenomena?
* How can we devise experiments that have any hope of helping to answer those questions?

As in weeks 7 & 8 we will implement these experiments in both screen-based and 
headset-based VR settings. One of the things to consider is how the experience
of each environment differs, and what the perceptual consequences of that
might be.

* Would you expect experimental results obtained in one to be transferable
to the other?
* If so, why?
* If not, why not?

The screen-based Unity environments give you more or less unlimited scope
for adjusting the details of an experiment. You have the source code and
can rewrite it at will.

The headset versions are much more prescriptive. This week the
experiment app gives you more (any!) configuration options, and you might choose
to design a sequence of experiments that varies only very specific stimuli
at a time, or all at once. Nevertheless, you are still confined by the options
I have provided for you, and you should think about what that means.

* Are those constraints a problem?
* In what way do they limit what you can try?
* What would you like to do that you can't?

**As in weeks 7 & 8, you should work in pairs or groups for these tasks.**

## Screen Environments

For the screen-based testing, we use yet another variation on the Unity
environment from previous weeks. You may optionally also use an automated
testing version of that environment, which has the same configurable options
as the headset-based version described below.

### Exploration

You will need a new version of the import package, `lab9.unitypackage`. This
can be found in the same zip file as in previous weeks. If you don't have that
already, [download it
here](https://github.com/davidswapp/CD_ratios/archive/refs/heads/main.zip).

Follow the same procedure as in earlier labs to set up your environment:

* Create a new (3D Core) Unity project
* In the menu bar, choose **Assets → Import Package → Custom Package...**, then navigate to and select the `lab9.unitypackage` file
* Click **Import** in the **Import Unity Package** popup
* Open the **CD_ratios** scene from the project browser (**Assets → Scenes**)

There are six draggable objects in the scene: two cubes, two cylinders and two cuboids. Select objects in the **Hierarchy** pane at the upper left and adjust their properties in the **Inspector** at the right. Key attributes for the objects are:

* **Rigidbody → Mass** — this determines the C/D ratio.
* **Transform → Scale** — this determines the size of the object. You can adjust the three dimensions independently if you feel like having less symmetrical objects.
* **Audio Source → AudioClip** — the sound that will be played when you grab the object.
* **Mesh Renderer → Materials** — the colour of the object. (It is possible to specify multiple materials, but just adjusting element 0 should suffice.)

In addition, you can specify audio delays (in seconds) for the objects by selecting **SelectionManager** in the hierarchy and adjusting its bottom six properties in the Inspector.

Press the play button ▶︎ at the top of the window to run the scene. You can then
click on objects to grab and drag them. When doing so, consider:

* How does the object feel?
* Do you get a sense of it having weight as you move it up and down?
* Is that weight greater or less than you expect?
* Is that weight greater or less than the weights of other objects in the scene?

#### Task 1

Play around with all the available properties and consider how they seem, subjectively, to affect your experience of lifting them in the scene.

* Do the different properties of each object interact?
* How might you go about investigating this?

#### Task 2

Imagine that there is nothing else to this lab. There is no VR headset to move
on to. There is no automated experiment project. There is only this Unity
application, which you can adjust at will via the Inspector, or modify with
new code. You must figure out how each adjustable parameter is influencing
users' subjective experience of object weight using only the tools at hand.

* What are your hypotheses?
* What questions do you need to ask about them?
* What data do you need in order to answer those questions?
* How can you get that data?
* Who will be your experimental subjects?
* How many do you need?
* How much commitment from each?
* How can you make the most efficient use of them?
* Is that ethical?
* Will they put up with it?
* Will their responses change over the duration of the experiment?
* Will the data be devalued by boredom/disaffection/other negative mental states?
* Will it be devalued by learning/acclimatisation/habituation/anticipation?
* What analyses does your data collection imply?

### Automated

A Unity project for automated experimentation can be found on [Moodle](https://moodle.ucl.ac.uk/mod/resource/view.php?id=6024747).
(You may need the latest LTS version of Unity [2022.3.19f1] to run
this project.) This project allows you to configure an experiment,
specifying which factors to vary and how many trials to perform,
and it will then run it and save the results. Open the **SettingsScreen**
scene and click play ▶︎. You can configure and execute experiments
until you get bored, each one saving its results to a CSV file.

(Note: the CSVs are saved to the application's *persistent data* folder,
which is probably in some non-obvious place like
`~/Library/Application Support/comp0160/lab_9/`. The full path to each
output file will be logged to the Unity console, so check that if you
have trouble finding your data.)

#### Task 3

Run the app and poke at it to find out what it is doing. Remember you can
look at the code if it'll help. 

These experiments differ in (at least) two important ways from those in
previous weeks.

* How?
* Why?
* Is that even definitely true?
* What are the pros and cons of those differences?

#### Task 4

Consider your hypotheses and questions from Task 2.
If you were using this app in order to investigate those questions, then:

* How might you configure an experiment, or a series of experiments, in order to investigate them?
* What answers would you expect to get?
* What might your experiments be neglecting?

#### Task 5

**Do the experiment, or series of experiments, you came up with in Task 4.**

## Headset Environments

Apps for exploring the effect of various object parameters and for running
automated experiments are pre-installed on the Pico 4 VR headsets. You will use these for Tasks 6–9 below.

Before doing so, you may need to configure (or
reconfigure) the headset's **play boundary**.

If you are starting the headset from a powered down state, or if your present
location is significantly different from its previous setting, it will invite
you to reset the boundary automatically. If not — for example, if you are using
a headset previously used in the seat next to you — you should manually reset
the boundary from the settings screen.

Configure a **Stationary Boundary** to be **Small** and **Sitting**. Ensure
that the floor level is appropriate for your surroundings — try setting
this automatically at first, but if in doubt adjust it manually. Then **Enter VR World**.

If the dock is not visible in the lower part of your vision, open it by pressing
the ○ button on one of your controllers. Choose the **Library** option, and then
in the left hand sidebar of the window that opens, choose **Unknown**. Among the
available options should be apps called **CDratio** and **lab9_experiments** —
run these for the tasks below.

(The headset will probably warn you that the apps are
from unknown developers and might damage your device. This is true,
but run them anyway. Even if you don't trust us, it's our device and
we'll damage it if we want to.)

### Exploration

The **CDratio** app provides an exploratory environment with two blocks whose
properties you can adjust with sliders. The available parameters are:

* Colour
* Brightness
* Audio delay
* Audio frequency
* CD ratio
* Size

In addition, there is a global control for audio **Volume**. Note that this is
auxiliary to the system volume control — if your headset is muted outside the
app, it will remain silent regardless of any changes you make to the in-app
volume.

#### Task 6

Play around with all the available properties and consider how they seem, subjectively, to affect your experience of lifting the blocks in the scene.

* Do the different properties of each object interact?
* Are there any noticeable differences between doing this in the VR setting
  and the onscreen experience of Task 1?

#### Task 7

Revisit the (many) questions of Task 2. What sort of experiment, or sequence of
experiments, would you use to investigate the contributions of these
different factors to a user's perception of object weight in this kind
of virtual scene?

* Can you devise a study that will tell you something
useful?
* Is it feasible?
* Will it still provide useful information for any outcome or is it predicated on a particular expectation?

### Automated

The **lab9_experiments** app, just like the project in Task 3, allows you to
configure an experiment, specifying which factors to vary and how many trials
to perform, and it will then run that experiment and save the results. There
are only so many things you can configure, but that's still a lot of variation.
How are you going to deal with it?

#### Task 8

Go back to the tasks above, especially Tasks 2 & 7. Review the questions.
This is the same again, only more so.

You are the scientist now.

* What are your hypotheses?
* What are your questions?
* What data do you need and how can you gather it?

**Design a set of experiments to get the data to answer your questions.**

#### Task 9

**Do the experiments.**

#### Task 10

**Analyse the data.**

This sounds trivial, but of course is actually very complex and difficult.
There will be an opportunity to discuss this in the lab.

Results will need to be retrieved from the headsets. As in previous weeks,
we will do this after the lab and post the files to Moodle. If you finish
the experiments with a lot of time to spare, ask the tutors — we may be able
to get the data for you sooner so you have a chance to look at it during the session.