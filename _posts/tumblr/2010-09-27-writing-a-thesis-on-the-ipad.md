---
layout: post
title: Writing a thesis on the iPad
tags:
- workflow
---
Suppose you’re writing a major manuscript: a thesis, let’s say. Naturally to write a hundred pages of the thesis, you’ll agonize over every last detail in the text. And while you could chain yourself to your office desk for the next two months to finish that thesis, you’ll probably want to work on it from home, and elsewhere. So you decided to commit your thesis to a Git repository. Brilliant! Now you can easily keep multiple working copies of that thesis on your laptop at home, or your workstation at the university. You can even tag and branch the thesis in its various states as you decide how to structure your document. All the while, you’re working on your traditional Mac or Linux computers.

But what about the iPad?

Sure you can dream of the day when you pull a sleek tablet from your bag, or from the nightstand, and start pecking away whenever and where-ever inspiration comes. What you need is a way to make your iPad an extra node in the network of computers that have a live copy of your thesis.

Alas, there’s not exactly an app for that.

The closest we can come is to use an iPad text editor that hosts its files on Dropbox. Then Dropbox acts as an intermediary between the friendly file systems on your Mac, and the myseterious one that lurks beneath the iOS.

Last week, Information Architects released a brilliant text editor for the iPad: iA Writer. It has a beautiful sense of typography, and its software keyboard is eminantly serviceable for the writer. For example, all punctuation is available along the top row of the keyboard. And there are clever buttons for skipping the cursor character by character, or word by word. Do read the iA write-up on Writer.

But still, how do we get a thesis into Writer on the iPad? Since Writer stores and broadcasts its files on Dropbox, we have a good start. But there is a catch: Writer only sees text files within the Dropbox/Writer directory of Dropbox. It doesn’t (yet) have any sense of folder hierarchy. As such, we can’t just have a Git repository checked out in Dropbox. Or at best, we can only have one Git project served to Writer at a time.

My work-around is a Python script: writer.py. From a git repository with a latex manuscript type:

writer.py -s

This will send all .tex files to the Writer directory in Dropbox. To support multiple projects, the base directory of the Git repository is prepended to the file name. For example, msc/abstract.tex will be copied as msc_abstract.txt.

After you’ve edited the manuscript on the iPad, and you’re ready to pick up on the changes at your workstation, type

writer.py -g

This will ‘get’ all the text files for the project from Dropbox and copy them back into the Git repository.

And that’s it. Here’s the script as a Github snippet.

 
