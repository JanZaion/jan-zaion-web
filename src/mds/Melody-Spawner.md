---
title: 'Melody Spawner'
tag_line: "Melody Spawner is a Max for Live midi device for generation and development of monophonic melodies. Get inspired or create a melody outright directly inside Ableton Live's clips."
cover_image: '/images/melodyspawner_cover.png'
repo: 'https://www.github.com/'
download: 'https://www.google.com/'
---

## Instant Melodies

The process is simple:

1. Select a clip in Ableton Live's session view or arrangement view.
2. Edit the setup of Melody Spawner to create the desired melody.
3. Click "Render" to spawn the melody.

![Instant Melodies](/images/ms1.gif 'Instant Melodies')

You can repeat the process until you are satisfied with the spawned melody. The melody is rendered instantaneously. Thanks to Melody Spawner's randomization features, it is possible to create countless monophonic melodies of near infinite variety. Taking odvantage of Notes and Rhythm pattern language is key to get maximum bang out of Melody Spawner. There are many built-in melody and rhythm presets designed to help you understand the pattern language quickly.

## Text to Midi

The core feature of Melody Spawner is it's text to MIDI functionality. Melody Spawner uses [Scribbletune](https://scribbletune.com/) under the hood and loosly adopts it's pattern language. Within the UI, there are 2 text fields with which you control the melodic and the rhythmic pattern of the rendered melody.

![Text to Midi](/images/ms2.gif 'Text to Midi')

### Notes Text Field

Notes can be typed in several formats: note names, numbers and R. Note names simply represent the desired note, ie C1, D#4, E3. Numbers denote the distance between the root note within the selected scale and the desired note, ie when inputing 1 while C Major is selected, D gets rendered. R stands for random, meaning if R is inputed to the notes text field, random note whithin the selected scale gets rendered. The randomization is further controlled by other parameters.

### Rhythm Pattern Text Field

Rhythm pattern simply denots how long each note in the pattern is, how many spaces notes have between one another and how long these spaces are. 'xxxx' would render 4 notes of equal length, 'x_xxx' would render 4 notes where the first note is twice as long as the other 3, 'x-xxx' would render 4 notes with a space between the first and the second note.

For full overview of the pattern language, visit this documentation page.

## In-Key Melody Generation

Melody Spawner can spawn a whole new melody out of selected parameters based on a fully randomized pattern like 'R R R R'. The key step is to select the right parameters to increase the likelyhood that the melody you desicre will be created. You can choose from dozens of scales in which you want the melody to be created. You can choose whether the notes in melody will be ascending, descending, or in any order, whether they will repeat themselves or not and how high or how low they can go. Through combination of these parameters, it is possible to create melodies of near infinite variety and get inspired very quickly.

![n-Key Melody Generation](/images/ms3.gif 'n-Key Melody Generation')

## Pattern Language to MIDI & MIDI to Pattern Language

Once you create your melody, you can make all the tweeks you want in Ableton Live's piano roll. But what if you create a melody, then perform some tweaks in the piano roll and then want to further manipulate it with Melody Spawner? No problem, it is possible to not only render the melody from the text format to midi, but also from Live's clip to the Melody Spawner's pattern language. It can be done via simple button click, or even as a fully automated real-time synchronization.

![Pattern Language to MIDI & MIDI to Pattern Language](/images/ms4.gif 'Pattern Language to MIDI & MIDI to Pattern Language')

## Composition Algorhythms

Single melodic motif is nice, but it usually isn't enough. A melodic motif needs to be developed. There is multidute of algorhythms within Melody Spawner that can develop a melody pitchwise, rhythmwise, or both. Implement well known compositional techniques like inversion, retrograde, ascending sequence or descending sequence with a click of a button. Morover, there are some utility algorhythms like transposing the whole melody by 1 step within a selected scale or to generate rhythmical pattern out of thin air.

![Composition Algorhythms](/images/ms5.gif 'Composition Algorhythms')

## Feature Overview

- Generative creation of monophonic melodies
- Multitude of parameters that influence the generation process.
- Text to MIDI and MIDI to text interfacing with Ableton Live
- Built-in algorhythms for melody development
- 25 note presets and 22 rhythm presets
- Ability to save and load a preset as .json file
