---
title: "COMP0160 Coursework Assignment"
layout: default
---

# COMP0160 2025/26 Individual Coursework Assignment


## Summary

Your task is to **design part of the interface for a complex application**. You are not expected to implement the app or to create polished graphics for it. You will instead submit a **written report** describing your design and critically assessing it.

The steps of this task are outlined below:

* Choose a small component of the functionality of a cloud-based media editing app.
* Analyse the interface requirements for this functionality.
* Explain any perceptual issues that affect accessibility.
* Propose and simulate an interface for the functionality.
* Explain how your design decisions account for perception and accessibility.
* Test and evaluate the usability of your design.
* Discuss the effectiveness of your choices and suggest improvements.


## Background

Media creation and editing software is typically complex and perceptually demanding, with detailed user interfaces densely packed with information and lots of fiddly controls. Your new startup, **Fictitious Studios**, aims to make rich media editing available to everyone via its suite of cloud-based apps, known collectively as **Fictitious CS**. Among the domains targeted by this suite will be:

* podcast production (cf. [Audition](https://www.adobe.com/uk/products/audition.html), [Audacity](https://www.audacityteam.org/))
* video editing (cf. [Final Cut Pro](https://www.apple.com/uk/final-cut-pro/), [Premiere](https://www.adobe.com/uk/products/premiere.html))
* 3d modeling (cf. [Blender](https://www.blender.org/), [SketchUp](https://www.sketchup.com/))
* music production (cf. [Logic Pro](https://www.apple.com/uk/logic-pro/), [Ableton Live](https://www.ableton.com/en/live/))
* image editing (cf. [Photoshop](https://www.adobe.com/uk/products/photoshop.html), [Gimp](https://www.gimp.org/))
* vector graphics (cf. [Illustrator](https://www.adobe.com/uk/products/illustrator.html), [Inkscape](https://inkscape.org/))
* presentations (cf. [PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint/), [Keynote](https://www.apple.com/uk/keynote/))

(The products mentioned are intended only as examples. You do not need to model your app on any of them.)

**You** are the product lead responsible for the design of one of these apps. Choose a topic with which you are familiar and focus on a **small, relatively self-contained piece of functionality**. (If you are not familiar with any of these you are welcome to choose something not on the list but be sure to define it clearly.) The scope and level of detail are up to you, but bear in mind the limited size of the report.


## Constraints

Your app should be designed for deployment to **at least one of**:

* web browser
* mobile device
* desktop computer
* VR headset

You may propose a unified design that works on multiple platforms if you wish.

The design should be implementable with only widely-available mainstream technology as of early 2026. You may posit the use of assistive devices such as screen readers and voice recognition, but **not** custom hardware or speculative methods such as direct brain interfaces or general AIs that magically "understand" what you want.

We recommend that you do not propose a ChatGPT-style language interface to your app. In most cases this is just an abdication of your responsibility as a designer and will be marked as such. If you insist on doing so, you must carefully explain why this is the right way to provide access to your chosen functionality. **Be specific** as to what it will do and how.

## Design

It is common to distinguish **user experience** (UX) from **user interface** (UI) in software design, with the latter more concerned with details of visual appearance. This is a somewhat slippery distinction, and for the purposes of this assignment we are not concerned with such nuances of job title. You have some latitude as to where you locate yourself on the UX-UI design spectrum. However, we are primarily interested in your **analysis and insight** rather than in slick aesthetics, and the marking will reflect this.

You may use whatever means you prefer to lay out and trial your design. If you are comfortable with tools such as [wireframe.cc](http://wireframe.cc/), [Figma](https://www.figma.com/) or [Sketch](https://www.sketch.com/), feel free to use those. Alternatively, lay your design out in PowerPoint or just **sketch it on paper with a sharpie**.


## Testing

You should attempt to get feedback on your design from users other than yourself. Clearly the degree to which you can do this is limited — you do not have the time or resources for large scale testing, and your design will probably be implemented in only the most rudimentary fashion. Your testing paradigm will most likely be something along the lines of [Hallway](https://en.wikipedia.org/wiki/Usability_testing#Hallway_testing) or [Guerrilla Testing](https://xd.adobe.com/ideas/process/user-testing/hallway-usability-test-guerrilla-testing/). But however constrained and *ad hoc* it may have to be, try to approach it **purposefully**. What are you trying to find out? How will you do so?

You may collaborate with other COMP0160 students to test out each other's designs, but if so ensure you are each working on unrelated pieces of functionality to avoid the risk of inadvertent plagiarism.


## Report Format

Your submission must be **a single document in PDF format**. It should consist of **no more than 6 sides of A4 <u>and</u> no more than 1000 words**, including all figures, tables and references. We suggest that you do not waste space on title pages, contents, lists of figures and tables, appendices and other extraneous matter, but if you choose to they all count towards your total. Body text should be no smaller than 12pt, spaced for easy reading. If you have created an online wireframe, prototype or mockup demonstrating your UI you may include a link to it, but your report should be complete and comprehensible without it.

**Be succinct and readable. If your report exceeds the maximum length, only the first 6 pages will be marked. If it is illegible or incomprehensible you will lose marks.**

You may assume your readership is reasonably well informed about software development, user interface idioms and accessibility, but they are not experts in your target domain or chosen functionality. You will need to explain these clearly in terms that will be understood by an educated layperson. Avoid obscure terminology or jargon.

**IMPORTANT: Your report is a <u>design</u> document. It is <u>not</u> a sales brochure or piece of marketing material. Explain and justify your choices, don't tell us they're great. We are not interested in claims of how revolutionary or groundbreaking your design is. Focus on demonstrating what it does.**

A suggested report structure is given below. This is not a strict prescription — you may organise the material differently if you think doing so presents your design more clearly. However, you should aim to cover all these bases and bear in mind the [Marking Criteria](#marking) below.

1. **Introduction**: Outline the application context. What is the purpose of this app? Who is its audience? To what platform(s) will it be deployed?
2. **Requirements**: Define the specific task or piece of functionality you have chosen. What objects or data are being manipulated? What tasks does the user need to be able to perform with them? What constraints does this impose on your interface? What perceptual challenges does it entail?
3. **Proposed Design**: Show and explain your proposed interface solution. How does it address your identified requirements? What are the thought processes underlying your decisions? How does your choice of platform inform your design?
4. **Testing & Evaluation**: Explain your testing process. What information have you gained from it? How did your design perform?
5. **Critical Analysis**: Review your proposed design in the light of the testing results. What are its strengths and weaknesses? How well does it achieve your requirements? How well does it meet the expectations of your audience?
6. **Conclusion & Future Work**: What have you learned? Suggest possible improvements for future iterations of this process.

**IMPORTANT: Submissions are anonymised. DO NOT include your name anywhere in the report, including the filename.**

## Use of Generative AI

This coursework falls under [Category 2](https://www.ucl.ac.uk/teaching-learning/generative-ai-hub/using-ai-tools-assessment#%20AI%20tools%20can%20be%20used%20in%20an%20assistive%20role*) of the UCL classification of assignments with respect to Generative AI: you may use AI tools in an assistive capacity, but the substance of the work must be yours.

Specifically, the following uses are allowed:

* Assistance with grammar, spelling and prose style for text originally written by you[^note]
* Simple data analysis, summary statistics, graph plotting
* Generation of exemplar or placeholder images

The following uses are **not** allowed:

* Writing any significant part of the report from scratch
* Suggesting functionality
* Generating interface layouts
* Identifying usability problems
* Coming up with arguments to justify design choices
* Simulating user feedback

For example, if you are designing a photo editing app you could use MidJourney or DALL-E to generate the image being edited, but not to sketch the user interface of the app.

If you are still unclear whether your intended use of GenAI is permitted, <a href="mailto:m.caldwell@ucl.ac.uk?subject=COMP0160 Coursework">ask</a>.

**IMPORTANT: You must provide a statement in your report explicitly documenting all uses of GenAI, specifying the systems and/or models used and what they were used for. This statement counts towards your page and word limits. It is not worth any marks in itself.**

[^note]: While grammar and style assistance is *permitted*, we strongly
    encourage you *not* to use AI for this. It almost certainly won't
    be to your benefit. If you insist on doing it anyway, prompt carefully,
    edit carefully, and **check the word count afterwards**. ChatGPT is
    insufferably verbose and will never use one word when twenty will do.


## <a name="marking"></a>Marking Criteria

100 marks are available for this coursework, which will contribute 30% of your overall grade for the module. The marks will be apportioned as follows:

* Requirements Analysis (20 marks)
* Design Rationale (20 marks)
* Testing & Evaluation (15 marks)
* Critical Discussion (20 marks)
* Accessibility (15 marks)
* Presentation (10 marks)

There is no single correct answer to this task. As indicated earlier, we are more interested in problem solving and clarity of thought than pretty pictures. We do not expect anything approaching a polished final product.

## Submission

Submit your report via [Moodle](https://moodle.ucl.ac.uk/course/view.php?id=48901). The [submission page](https://moodle.ucl.ac.uk/mod/assign/view.php?id=7331266) will be available from 5 Feb 2026. Deadline for submissions is **20 March 2026 at 1600 GMT**.


