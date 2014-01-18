---
layout: post
type: cpb
title: New ADS to BibDesk for Mountain Lion
tags: 
---
At last, you can continue to efficiently ingest astro papers into BibDesk thanks to the latest update to ADS to BibDesk.[^1] I won’t say much about this release, aside from reports by beta-testers that it does indeed work. But I will write again soon about some updates to ADS to BibDesk: shell usage, and a cool method of bulk PDF ingesting to help those getting started with BibDesk. Stay tuned.

[^1]: The bug, if you care to know, was a mysterious consequence of Mountain Lion’s handling of Automator actions that passed data from a Python shell script into a AppleScript. The solution was to embed the AppleScript directly into the Python script (obviating the step of passing the data within Automator). Now when you run ADS to BibDesk, it installs the AppleScript necessary for talking to BibDesk. Look for `~/adsbibdesk_injector.scpt` in your home directory. To see the details, check out the source on GitHub as always.
