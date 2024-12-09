---
title: "Lab Session 3: Auditory Perception"
layout: default
---

# Lab Session 3: Auditory Perception

As part of this lab you will act as a test subject in some simple
auditory psychophysics experiments, which run in your web browser.
You will need to use headphones. Please run the **calibration** test
first and adjust your headphone volume to a safe and comfortable level.

**Privacy note**: You will be given the opportunity to download your results in CSV format.
Your data is not otherwise stored or used in any way except for local presentation to you.


## Experiments

As in week 3, not all of these are strictly *experiments* — some are probably
better thought of as demonstrations.

* [Calibration](experiments/calibration/?home=/lab3.html)
* [Stereo localisation](experiments/stereo/?home=/lab3.html)
* [Pitch sensitivity](experiments/pitch/?home=/lab3.html)
* [Binaural beats](experiments/binaural/?home=/lab3.html)
* [Haas effect](experiments/haas/?home=/lab3.html)


## Demos

In between experiments, we'll probably have a look* at
some famous auditory illusions and effects.

* Missing fundamental
* Shepard tones & scales
* Risset's accelerando
* Deutsch scale illusion
* McGurk effect
* Franssen effect

<small>* To use an inappropriate verb. Recall the ubiquity of
visual language discussed last week!</small>


## Binaural Audio

As Ifat discussed on Tuesday, the brain infers a lot of spatial
information from the patterns of sound detection at each ear.
*Binaural* techniques exploit this ability to produce a highly
spatialised audio experience by delivering different sounds to
each ear, typically via headphones.

Binaural responses vary quite a bit between individuals, but personalisation
is difficult or expensive, so widely available binaural methods tend to use
generic head models. Nevertheless, they can still be very effective.

An awful lot of contemporary binaural material is pretty unimaginative, on a
par with cinema in the 1890s — still caught up in the novelty of capturing
this stuff at all. There's a focus on
[ambient soundscapes](https://soundcloud.com/inauralnthusiast/binaural-enthusiast-thunderstorm)
and [travelogues](https://www.youtube.com/watch?v=7rU1BpdLmk0), plus a
[strong sideline](https://www.youtube.com/watch?v=Yr2bj_G2VfY) in the weirdly
popular niche of [ASMR](https://en.wikipedia.org/wiki/ASMR). But there have also been
more creative applications of the technology, such as:

* [Darkfield](https://www.darkfield.org) started out producing surreal and disturbing
  audio experiences physically located inside shipping containers, before extending
  to online delivery. Their [sample](https://www.darkfield.org/sample) gives a
  flavour, while the BBC-commissioned [Deadhouse](https://www.bbc.co.uk/programmes/p09zr1dk)
  provides a bit more substance (and psychological horror — avoid if you don't
  like that sort of thing).
* [Complicité](https://en.wikipedia.org/wiki/Complicité)'s
  [The Encounter](https://www.complicite.org/work/the-encounter/)
  with binaural sound design by [Gareth Fry](http://www.garethfry.co.uk)
  includes a very entertaining intro to the tech. I can't provide a direct link, but
  have a look at **Example 9** on [Fry's demo page](http://www.garethfry.co.uk/binaural-demo),
  from about 2:50 to 5:00 (or however much longer you feel like).
* The immersiveness of binaural recording doesn't necessarily capture the best qualities
  of audio content such as music — there are long traditions of music recording and sound
  engineering that are good at that. But combining both forms can be productive, as in
  [this example](https://soundcloud.com/binaural-recordings/full-song) from research by
  [Jamie Mackenzie](https://jamie1302207abertay.wordpress.com).


## Discussion Points

* How is audio typically used in software interfaces?
    * [An interesting take on this topic from an app designer](https://www.notboring.software/words/the-sound-of-software)
* Can you distinguish different *classes* of such audio use?
* As noted in the experiments, web audio usually requires explicit
  user authorisation. Why?
* How does audio differ from vision in this respect?


## Extras: Generating Music with Deep Learning

If you are extremely dedicated and/or bored, you could also have a look at the
following tutorial sessions on music generation. These are primarily aimed
at students on the COMP0161 Auditory Computing module — if you are also taking
that module, maybe defer this to next week, if not you might find them
interesting as well. They are implemented as Colab notebooks — click the
"open in Colab" badge to open the corresponding notebook.

(Note: you may receive a warning about the notebooks not being from Google, which
is of course true — they're from me. Only you can decide whether or not to accept
that risk.)

The three sessions build on one another, but data is provided so you can run a
later one without having done its predecessors if you wish.

* **Lab 1: Data** — build a text-encoded dataset of classical piano music
    * [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/comp0161/colab/blob/main/COMP0161_lab1.ipynb)
* **Lab 2: Learning** — train a small GPT-style model to generate music in a similar style
    * [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/comp0161/colab/blob/main/COMP0161_lab2.ipynb)
* **Lab 3: Synthesis & Effects** — tweak the instrument sound and apply a variety of audio effects
    * [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/comp0161/colab/blob/main/COMP0161_lab3.ipynb)
