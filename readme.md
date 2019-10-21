# SoundCloud Sorter
A small script for Tampermonkey based on [SoundCloud Extensions by xerg0n](https://github.com/xerg0n/soundcloud_extentions).

![alt text](preview.png "Sorting buttons between repeat buttond and track scrubber")

Adds sorting by likes and plays buttons to the SoundCloud control bar with custom icons. Works for /likes, /tracks and /reposts. On /likes, the waveform view has to be active. Scroll down to load some (or all) tracks, then press a button to sort them.

## Installation
* Install Tampermonkey for [Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox) or [Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
* open `sc-sort.js` in [raw mode](https://raw.githubusercontent.com/nchlsschndr/soundcloud-sorter/master/sc-sort.js)
* Create new script and copy the contents from `sc-sort.js`
* Click File -> Save

## Planned Features
* preload songs
* show buttons only if page contains sortable tracks