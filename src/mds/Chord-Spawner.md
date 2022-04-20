---
title: 'Chord Spawner'
tag_line: "Chord Spawner is a Max for Live midi device for instant generation of chord progressions. Get inspired or create a chord progression directly inside Ableton Live's clips."
cover_image: '/images/chordspawner_cover.png'
repo: 'https://www.github.com/'
# links are tricky, always put them in in absolute format if they lead to an external source, / at the end included
download: 'https://www.google.com/'
---

## Instant Chord Progressions

The process is simple:

1. Select a clip in Ableton Live's session view or arrangement view.
2. Edit the setup of Chord Spawner to create the desired chord progression.
3. Click "Render" to spawn the chord progression.

![one click chord progressions](/images/chs1.gif 'one click chord progressions')

Generate basic chord progressions comprised of triads or 7th chords. Render desired progressions instantaniously, until you get the one that fits your track. Utilize advanced features to enrich the basic chord progression with bass notes, voicing that is out of the root position, advanced rhythm patterns and more.

## Text to Midi Chords

The core feature of Chord Spawner is it's text to MIDI functionality. Chord Spawner uses [Scribbletune](https://scribbletune.com/) under the hood and loosly adopts it's pattern language. Within the UI, there are 2 text fields through which you control the chords that you want to spawn and the rhythm pattern of the chord progression.

![text to MIDI](/images/chs2.gif 'text to MIDI')

### Chords Text Field

Chords can be typed in several formats: chord names, arabic and roman numerals and R. Chord names represent the desired chord, ie Cm is C minor, F#M is F# Major. Since Chord Spawner uses Tonal, there is a wide variety of chords supported. The full list of the supported chords is visible via Advanced Chords dropdown menu. Roman numerals work just as one would expect, ie i in C major is C, II in C major is D and so on. Arabic numbers work similarily, except there is no capitalization. Whether the chord is major or minor is simply decided by the selected scale. Finally, R denotes that a random chord from the selected scale is to be rendered.

### Rhythm Pattern Text Field

Rhythm pattern simply denots how long each chord in the progression is, how many spaces chords have between one another and how long these spaces are. 'xxxx' would render 4 chords of equal length, 'x_xxx' would render 4 chords where the first chord is twice as long as the other 3, 'x-xxx' would render 4 chords with a space between the first and the second chord.

For full overview of the pattern language, visit this documentation page.

## Random Chord Generation with Multitude of Parameters

When creating a fully randomized chord progression, like 'R R R R', it is possible to skew the randomly generated chords to a desirable direction. They can repeat themselves or not, take form of triads, 7th chords, or any of the advanced chords, or even follow a Chord Map. In Chord Map you can select which chord is allowed to follow which chord, ie if II is rendered, you can forbid III from following it.

![multitude of parameters](/images/chs3.gif 'multitude of parameters')

## Voicing Algorhythms

Chord progressions in their root position are nice, but moving notes around works better in many cases. Before jumping into Live's piano roll, you can use one of 24 voicing algorhythms to do this. Each algo transposes notes from chords an octave up or down to create a better sounding chord progression.

![voicing algos](/images/chs4.gif 'voicing algos')

## Feature Overview

- Generative creation of chord progressions
- Multitude of parameters that influence the generation process.
- Text to MIDI interfacing with Ableton Live
- Support of arabic and roman numerals
- 24 built-in algorhythms for voicing development
- Ability to save and load a preset setup as .json file

### Requirements

- Ableton Live Suite 10/11 (with Max 8 or higher)
- MacOS or Windows
- Installation size: 44.0 KB
