---
title: 'Interactive Beats'
tagLine: 'Interactive Beats is a browser based sequencer that will make you feel like the Loop Daddy himself.'
coverImage: '/images/Interactive_Beats_cover.webp'
repo: 'https://github.com/JanZaion/interactivebeats/'
visit: 'https://janzaion.github.io/interactivebeats/'
metaTitle: 'Interactive Beats'
metaDescription: 'Interactive Beats is a browser based sequencer that will make you feel like the Loop Daddy himself.'
---

## Motivation

I've been using Ableton Live for a few years now. I love the software and I think that Live being one of the most popular DAWs, if not the most popular DAW, is a bragging right well deserved. One of its killer features is the session view. Session view makes it easy to play with loops and even make a live performance (pun intended). It's basically a grid sequencer, where any slot in the grid can be populated with any available music loop.

![session view](/images/session_view.webp 'session view')

In an effort to market Live, folks at Ableton made an educational site learningmusic.ableton.com. The sequencer right at the homepage that works like a simplified & streamlined version of the session view is what inspired me to create Interactive Beats. After months spent developing [Chord Spawner](https://janzaion.pro/projects/Chord-Spawner) and [Melody Spawner](https://janzaion.pro/projects/Melody-Spawner), Max for Live devices targeted at Live users, I figured I might as well create a piece of music software that 'normies' can enjoy. And thus, Interactive Beats was born.

## Technologies

The most frictionless way to deliver software to 'normies' is, without a doubt, through a web browser. I also wanted to improve my React skills at that time, so choosing React to generate the UI was a forgone conclusion. The track routing and all the stateful visual components are handled by React. With one exception. The FFT visualisation is done buy the Canvas API, a technology for web animation and complex, reactive visualisations. I greatly Canvas enjoy for its performance and broad browser support.

There are many alternatives for React and there are some alternatives for Canvas, but I don't think I would be able to create Interactive Beats without [Tone.js](https://tonejs.github.io/). It's a well-loved library that functions as a wrapper around web-audio API, simplifying it's many methods for working with audio in the browser. Audio playback and semi-sample rate accurate looping is handled entirely by Tone's clock & looping methods. The FFT visualisation receives a data stream from Tone, so there was no need for me to write the FFT math by hand. Even data fetching of audio files when switching tracks is handled & simplified by Tone. My developer experience with Tone was as good as it gets and I highly recommend this library to anyone, who is even considering playing with audio in the browser.

![interactive beats code](/images/ib_tech.webp 'interactive beats code')

Interactive Beats would emit an ear-busting cacophony without semi-sample rate accurate playback. Loops would play off-beat and the whole thing would be unusable. For this, picking the right audio format was crucial. The obvious choice is MP3. It is, however, the incorrect choice. When encoding audio to the MP3 format, 'padding' gets created at the beginning and the end of the MP3 track. It is a small, silent period that takes only a few milliseconds. That is enough to break the rhythm completely. Luckily, there is a paddingless high-quality compression alternative to the MP3 format, the OPUS. OPUS functions similarly to the MP3, except for the padding, so all I had to do was to convert all the tracks to this format.

Or at least that's what I thought. Unfortunately, OPUS is not supported on Apple devices. A huge tradeoff, or at least for now. I wanted Interactive Beats to be as lean as possible, so I wanted some Apple-compatible compression format. But I didn't find any that wouldn't have padding. The solution currently implemented uses browsers Navigator component and has it look at the underlying operating system. If it looks 'iOSish', then it delivers expressionless WAV to the end user (<5MB per 16 loops). Any other device gets the OPUS (<1MB per 16 loops). If you have a better solution to this problem, feel more than welcome to [open a PR](https://github.com/JanZaion/interactivebeats/pulls).

## Music

Now let's get to the fun part. At the time of writing this text, there were 2 tracks available at Interactive Beats, [Phonk](https://janzaion.github.io/interactivebeats/Phonk) and [Discovery](https://janzaion.github.io/interactivebeats/Discovery). The main challenge was to compose all the loops so that they would all interact harmonically. My process for creating both tracks was fairly similar. Live's session view was the perfect playground.

I started by creating a chord progression that would serve as a guide for where all the notes would lie. My device [Chord Spawner](https://janzaion.pro/projects/Chord-Spawner) came quite handy here. I was simply spawning chord progressions until I came up with one that would sound satisfyingly enough and serve as a scaffolding for what I wanted. After a few manual adjustments, the final chord progression would be born and with it, the scaffolding for the whole track.

![interactive beats chords](/images/ib_chords.webp 'interactive beats chords')

The rest is pretty much playing around with different voicing variations of the progressions, routing it through arpeggiators, trying out different melodies and using different sound design ideas with Serum, Vital and various samples I have in my library. Mixing was quite the challenge, since I couldn't simply mix it while listening to it playing all together, as I would with a 'normal' track. I had to always keep in mind where I needed to carve out space for all the other tracks that might and might not play concurrently. Because of this, the perfect mix is not really possible here, but that wasn't the point in the first place.

If you would like to make your 16 loops (or any other multiple of 16) for Interactive Beats, I'd totally love to include them, so please, get in touch.

## Moving Forward

Although there are many ways through which Interactive Beats could be improved on the technical side, I do not plan on doing so in the near future, as I consider the product pretty much finished.

On the musical side, I have a new track in the making as of time of writing this text, and I plan on adding more in the future. Making loops that interact harmonically is a great exercise in music production.

I hope you'll enjoy playing around with Interactive Beats as much as I've enjoyed making it!
