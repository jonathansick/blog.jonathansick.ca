---
layout: post
type: cpb
title: Continuous LaTeX Compilation with a Python Watchdog
tags:
- python
---
I recently came across the Watchdog python package that allows scripts to act on changes in the filesystem.
An obvious application is continuous integration: running make whenever a source file changes.[^1]
Even more pertinent for academics is continuous compilation of LaTeX documents.

Here’s the gist (borrowing ideas from the Watchdog example and this GITS Blog post):

To run, simply execute the script from the same directory as your LaTeX project.
Whenever a file changes in the directory watched by the Observer instance, the `on_any_event()` method of the FileSystemEvenHandler instance is called.
If the event is due to a `*.tex` file, the subprocess module is used to call make.
If you don’t use make files to manage your LaTeX compilation, perhaps a direct to call something like latexmk with

    subprocess.call(''latexmk -f -pdf -bibtex-cond paper.tex'', shell=True)

would work.

[^1]: Other applications are numerous; a Dropbox-style uploader is also possible, for example.
