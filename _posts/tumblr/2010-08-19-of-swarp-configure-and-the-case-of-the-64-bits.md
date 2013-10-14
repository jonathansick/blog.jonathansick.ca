---
layout: post
title: Of swarp, configure, and the case of the 64 bits.
tags:
- astronomy
- pipeline
---
Ran into a “File positioning error” as I attempted to resample a 2.2 GB mosaic with Swarp (just another day at the office). It turns out I was running out of address space in my 32-bit Swarp process. But why was I using a 32-bit Swarp install on my 64-bit machine?



I plodded along to make a new 64-bit Swarp binary. To configure I ran:



./configure CFLAGS=-m64 --enable-threads




But looking at the Makefiles (three of them in the src directory and its descendants), CFLAGS still lacked a -m64 flag!



After I manually added -m64 to the CFLAGS of those make files, I made (make’d?) the binary, and was relieved to see



% file /usr/local/bin/swarp
/usr/local/bin/swarp: Mach-O 64-bit executable x86_64




What’s up with configure, eh?



Update.



Now that Swarp is 64-bit, it flies! Before it would read chunks of pixels at a time, creating an agonizing hard drive read-write bottleneck. Now it just gulps the entire 2 GB+ into physical memory in one go, and writes out a resampled image at 120 MB/s. I don’t have benchmarks for the 32-bit binary, but this certainly feels much better.



Next up, a 64-bit SAOImage DS9 on the Mac…
