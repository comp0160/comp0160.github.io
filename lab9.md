---
title: "Lab Session 9: Experiment Design"
layout: default
---

# Lab Session 9: Experiment Design

For the last few weeks we have been looking at the perceptual consequences of
increasingly complex interacting stimuli, in the context of pseudo-haptic
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

Once again we will implement these experiments in both screen-based and 
headset-based VR settings. One of the things to consider is how the experience
of each environment differs, and what the perceptual consequences of that
might be.

* Would you expect experimental results obtained in one to be transferable
to the other?
* If so, why?
* If not, why not?

The screen-based Unity environments you have used so far give you more or less
unlimited scope for adjusting the details of an experiment. You have access to
the parameters. You control what is onscreen. You have the source code and can
rewrite it at will.

The headset versions are much more prescriptive. This week the experiment app
gives you more (any!) configuration options, and you might choose
to design a sequence of experiments that varies only very specific stimuli
at a time, or all at once. Nevertheless, you are still confined by the options
I have provided for you, and you should think about what that means.

* Are those constraints a problem?
* In what way do they limit what you can try?
* What, if anything, would you like to do that you can't?

**As in previous sessions, you should work in pairs or groups for these tasks.**

## Screen Environments

In previous weeks you have used a Unity environment in which you manually
altered object attributes in the inspector. This a straightforward and
very versatile approach, but it is unwieldy to manage and there may be a
risk of the experimenter's expectations influencing the subject.

A useful alternative is to have software run the experiment automatically.
You saw this approach in action on the VR headsets, for which manual
experimentation is impractical. This week we will apply similar approaches
onscreen as well.

### Coding Example

We will begin with an example of setting up and coding such an experiment
in Unity.

<small>(Note: this demo was promised a few weeks ago but deferred due to illness.)</small>

The experimental setup in this case is very simple, considering only variations
in a single object attribute, **mass**, which you will recall determines the C/D
ratio. However, the same general idea can be used for more elaborate experiments,
and you'll get to try a more elaborate version below.

A couple of things to note:

* The final version of the code will be provided after the session, you do not
  need to write it down as we go.
* You are not required to do any coding yourselves and we will not focus
  on that too much. But even if you have no interest in that, try to
  think about the consequences of the experimental choices being made here.


### Project Setup

The main screen-based project this week is an automated experiment manager similar
to that developed above, but with much more configurability.

Once again, you will need to set this up in a new Unity project. The process this
time is a little more fiddly than before, mostly because this project uses
multiple scenes. But the initial stages should be familiar by now:

Launch the **Unity Hub** application and sign into your Unity account if you have not
already done so. Create a new project for this session:

* Select the **Universal 3D** project template if it is not selected already.
* Give your project a name and optionally a location.
* Uncheck the **Connect to Unity Cloud** option.

Download [lab9.zip](unity/lab9.zip) and unzip it. Locate the `lab9.unitypackage`
file inside the resulting folder.

* In the menu bar, choose **Assets → Import Package → Custom Package...**, then navigate
  to and select the `lab9.unitypackage` file
* Click **Import** in the **Import Unity Package** popup
* Open the **SettingsScreen** scene from the project browser (**Assets → Scenes**)

Make sure the **Game** panel is open in the viewer area. You should see a form with
some controls and text. However, the text display needs some supporting resources and also,
somewhat exasperatingly, seems to need a couple of run ups before it will work properly.

In the **Hierarchy** window, select **Canvas → Headline**. This should bring up a dialog
saying that you need to import starter assets for TMPro. Click the button to do so.

Now, run the scene. You will probably see that there are lot of blank spaces on the
onscreen form.

Stop the scene running. You *should* now see that the form text is populated, at least
with placeholders like **Experiment Settings [XXXX]**. If you run it at this point
you should be able to configure an experiment, but it will fail when you try to start it.
This is because the program can't find the scenes which implement the experiments. To make
them available, they need to be added to the scene list.

* Choose **File → Build Profiles** from the main menu.
* Select **Scene List** in the sidebar of the Build Profiles window.
* Click **Add Open Scenes**. **Scenes/SettingsScreen** should be added to the list.
* Leaving the Build Profiles window open, go to **Assets → Scenes** in the project browser.
* Double-click on **CD_ratios_2afc** to open it.
* Click **Add Open Scenes** again. It should add **Scenes/CD_ratios_afc**.
* Do the same with **CD_ratios_single**.
* The top entry in the scenes list is probably **Scenes/SampleScene**. Select this and delete it.
* Close the Build Profiles window and reopen the SettingsScreen scene.

You should now be able to run this scene to configure an experiment, then press
**Start Experiment** to run it.

As with the headset experiments from last week, this project assigns a random 4-letter
code to each experiment and saves the data as a CSV file with this code as the filename.
The CSVs are saved to the application's *persistent data* folder, which is typically in
some non-obvious place like `~/Library/Application Support/comp0160/lab_9/`
or `C:\Users\Matt\AppData\LocalLow\DefaultCompany\`. The full path to each
output file will be logged to the Unity console, so check that if you
have trouble finding your data.

### Task 1: Experiment Design

The experiment project you set up above allows you to configure the following
experimental parameters:

* How many trials to run
* The range of object masses (ie, C/D ratios) to include
* The range of object sizes to include
* What different sounds to play, if any
* Whether to vary the object colours
* Whether to evaluate a single object in isolation or compare two side by side

<details><summary>Note</summary>
The UI describes the latter as 2AFC, but it's worth noting that the
single object trial is really also 2AFC, since each object must be
rated as one of two options -- heavy or light.
</details>

Given that these are the options at your disposal, you are tasked
with designing an experiment that will tell you *something* about
the subjects' perceptual responses to this environment. Once again
you should consider some or all of the following:

* What are your hypotheses?
* What questions do you need to ask about them?
* What data do you need in order to answer those questions?
* How will you get that data?
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
* What features, if any, are lacking from the current project that would improve your experiment?
* How might you add them?

### Task 2: Data Collection

Having figured out your experiment, perform it on each other and gather the data.
As in previous weeks, you may each do separate experiments or design one collectively
that you then all participate in.

If you have time, **do the data analysis**. Does it show what you expect? Does it show
anything at all?

## Headset Environments

Apps for exploring the effect of various object parameters and for running
automated experiments are pre-installed on the Pico 4 VR headsets. You will use these for Tasks 3–5 below.

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

(The headset will warn you that the apps are
from unknown developers and might damage your device. This is true,
but run them anyway. Even if you don't trust us, it's our device and
we'll damage it if we want to.)

### Task 3: Exploration

The **CDratio** app provides an exploratory environment with two blocks whose
properties you can adjust with sliders, similar to those you used last week.
The available parameters this time are:

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

Play around with all the available properties and consider how they seem, subjectively,
to affect your experience of lifting the blocks in the scene.

* Do the different properties of each object interact?
* Are there any noticeable differences between doing this in the VR setting
  and the onscreen experiences last week and in the experiments above?

### Task 4: Experiment Design

The **lab9_experiments** app, just like the screen-based project, allows you to
configure an experiment, specifying which factors to vary and how many trials
to perform, and it will then run that experiment and save the results. There
are only so many things you can configure, but that's still a lot of variation.
How are you going to deal with it?

Go back to Task 1 above. Review the questions.

**Design a set of experiments to perform on the headset.**

You may wish to reuse your previous design unchanged. Or maybe you'd like to revise
it in the light of your results the first time around. Perhaps the headset environment
is different enough that you'd like to change your hypothesis? The choice is yours.

### Task 5: Data Collection

**Do the experiments.**

### Task 6: Data Analysis

**Analyse the data.**

Like last week, results will need to be retrieved from the headsets. We will again,
do this after the lab and post the files to Moodle, so you probably won't have the
chance to do any analysis during the session. But if you finish
the experiments with a lot of time to spare, ask the tutors — we may be able
to get the data for you sooner so you have a chance to look at it during the
session.