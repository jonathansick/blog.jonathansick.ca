---
layout: post
title: Regarding the iPad and the Astronomer
tags:
- workflow
---
Many would classify me as an Apple fanboy, so I had to get an iPad to fulfill the stereotype. The iPad, and its iOS, is a far different environment than a Mac. There are things you can do more efficiently on an iPad than a Mac. But there are also things where the iPad’s design (and the infancy of its software) make certain tasks difficult. I’d like to use this post to reflect on how I’m using my iPad to do astronomy, and to also propose scripting solutions to better fit the iPad to my workflow.



## Reading papers.

On the Mac, reading papers is done by looking the article up in my BibDesk database (which doubles as my LaTeX bibliography file), and opening the attached PDF in Skim. On the iPad, that beautiful workflow is broken, as there is no BibDesk on the iPad. Sure there is a Papers app for iPad, but I like the open source BibDesk/Skim projects too much to turn away from them on the Mac side.  At the moment, the best I can do is download a file from the Internet (or my iDisk) and read it in GoodReader. Aside from having an unfortunately cheesy name, GoodReader is excellent at displaying and navigating the types of PDFs found on arXiv and published on ADS.

Reading on the iPad is a truly excellent experience. Its screen is the perfect size for reading a virtual piece of letter-sized paper. No longer do I need to be glued to the office chair to study an article (I don’t like the idea of printing articles.)  But while GoodReader is ernest in trying to get papers into its storage as easily as possible, there is no frictionless transfer of files from my Mac to GoodReader on the iPad. Clearly this is something that I will need to script…

### Reading papers: a scripting proposal

In BibDesk, I could imagine throwing articles into a static folder called ‘Sync to iPad’. An AppleScript would run that could either: a) copy the paper’s PDF to my iDisk server for later download in good reader, or b) have the file prepared for an iTunes file transfer the next time the iPad is physically connected to my laptop (which it rarely is). I suppose that both methods could be implemented.

## Discovering papers.

I expected the iPad to be a great way to read papers. What I didn’t expect was how great it was for reading RSS feeds.

At first I used NetNewsWire, because I also used that software on the Mac. Then I discovered Reedle, and was blown away at its slick and efficient interface for cleanly reading blog posts. Its so good that I’ve stopped reading RSS on my Macs. But I also use RSS to keep up with the day’s arXiv submissions, and the latest published journal articles on ADS.

While its a pleasure to find interesting articles on my iPad, how do I get these catches into BibDesk? I wrote, and maintain, an OS X service for importing arXiv and ADS articles into BibDesk, but obviously this solution doesn’t immediately work here. I need a glue layer between reading an article’s abstract on my iPad, and importing that article into BibDesk.  My original solution is to use Reedle’s emailing function to email myself a link to that article. Then I can use ADS to BibDesk as usual to import the article.

### Discovering papers: a scripting proposal

I think there might be a slicker hack. If I star an article in Reedle, that star should be synced by Google Reader. I could write a script on my Mac to look for my starred ADS and arXiv articles, and use the essence of the ADS to BibDesk service to import those starred articles into my BibDesk database. I will need to work out the exact implementation, but I think it should be doable.

## OmniFocus, and the nightly review.

Before falling asleep, I invariably come up with some research idea that I wanted to explore the next day. Often, these ideas would be forgotten by the morning. I don’t keep my research notebook at the bedstand, but now my ipad is always handy. So I started up writing these notes as a ‘daily plan’ in Simplenote. When I was done brain-dumping ideas and tasks for the next day, I would email the note to myself to follow from my work computer the next day. This worked well, and the act of constantly reviewing my progress and outlining things to try was really invigorating. The problem was that I couldn’t achieve all I wanted from each day’s plan. Then I found out that OmniFocus was headed for the iPad.  I had tried OmniFocus on the when it first came out, but I fell off the bandwagon of getting things done (well, I still got things done, but only with my ad hoc organizational skills). The beauty of OmniFocus, though, is that you can write down as many lofty research goals and tasks as you want, and OmniFocus will remember them for you. Thus when you review your projects in OmniFocus, you can tap into that well of ideas as the time is available. The problem with OmniFocus on the Mac alone was that it wasn’t everywhere I was. But now that I’m in the habit of using my iPad right before sleep, it fits naturally into my life. And because it syncs automatically to my macs, I can keep track of those projects while both in my thinking and working moods.    One thing I would like to do is make an Applescript that creates OmniFocus tasks out of BibDesk papers. Then I won’t forget to read those arXiv papers I come across, but don’t have time to immediately digest.

This post was inspired in part by the Omni Groups post on how people use their iPad for productivity.

***

Postscript.
Shawn Blanc wrote a similar framework for linking the iPad into a task-management workflow with his "tttask" proposal. I wrote a script to integrate iA write with a latex writing project. At this time, I haven’t implemented any of the above scripting proposals.
