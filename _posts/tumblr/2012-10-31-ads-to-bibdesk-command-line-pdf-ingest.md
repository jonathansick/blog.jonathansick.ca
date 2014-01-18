---
layout: post
type: article
title: 'ADS to BibDesk: Command Line & PDF Ingest'
tags:
- adsbibdesk
---
In the last few weeks I’ve been rolling out improvements to the venerable ADS to BibDesk service. Today I’m announcing version 3.0.6. What’s new?

- A full-fledged command line edition, installable with pip,
- A PDF ingest mode, great for getting your legacy folder of PDFs into BibDesk, and
- Lots of bug fixes to make ADS to BibDesk more robust against the peculiarities of some papers.

## The Command Line Edition

It is now possible to run ADS to BibDesk from the command line. This opens up new possibilities for hacking your own workflows: from automatic scripts to integration with Mac OS X launchers like Alfred. To get started, you can pip-install the latest release (you may need to run this as sudo):

    pip install adsbibdesk


Then check out the help:

    adsbibdesk --help


The command line edition takes the very same tokens as the Service edition: an ADS or arXiv URL, an ADS bibcode, an arXiv pre-print ID, or a DOI. For example:

    adsbibdesk 1998ApJ...500..525S


## Ingesting a Folder of PDFs

BibDesk is becoming more popular with astronomers. One request I’ve received from new users is an easier way to add folders-full of papers downloaded from ADS and arXiv into BibDesk (with matching the BibTeX and abstract data). ADS to BibDesk is good at downloading papers, BibTeX and abstracts; the challenge here is reliably identifying a paper given its PDF.

The approach I’ve taken is borrowed from an older script by Dr Lucy Kim. The first step is to extract text from a PDF, and second, to extract a DOI string from that text. ADS to BibDesk can then act on that DOI as usual.

To extract text from a PDF, I’ve opted for the pdf2json program.[^1] It can easily be installed with Homebrew on your Mac. Before you try the PDF ingest mode, go ahead and install pdf2json.

Next, we need to extract a DOI from the paper’s text: a perfect job for regular expressions. The solution is written by Alix Axel in this excellent StackOverflow post, and the Python implementation is:

    import re
    regStr = r''\b(10[.][0-9]{4,}(?:[.][0-9]+)*/(?:(?!["&\''<>])\S)+)\b''
    pattern = re.compile(regStr)
    doiMatches = pattern.findall(paperTxtData)


Reading through that StackOverflow post, it appears that DOI is a tricky format to parse. Fortunately, this regular expression seems to work with the astronomical literature.

You can give this PDF ingest workflow a try via:

    adsbibdesk -p my_pdf_dir/


where `my_pdf_dir/` is a directory containing PDFs that you want to ingest into BibDesk.

Note that DOIs are not present in all papers; particularly ones only a few years old. You can easily find the DOI text on the first page of newer papers.

## Bug Fixes

Personally, I’m most excited about some of the bugs we’ve been able to fix (mostly with the prodding of Issues posted on GitHub).

First, we’ve fixed a lot of problems caused by unicode characters and LaTeX markup in BibTeX data. The point of failure was how this data was escaped and passed via pipes between the Python scraper code and the AppleScript interface script to BibDesk. The solution was simple: don’t try to escape characters passed on the command line—just pass data through a temporary file.

The second bug was harder to identify. Some papers would work fine with the command line edition, but crash the Service edition. Thanks to a bug report we determined that the problem is triggered by papers with quotation marks in the paper title, such as The “True” Column Density Distribution in Star-Forming Molecular Clouds. It turns out the problem was ultimately with the HTML served by ADS. Abstract pages are laden with helpful metadata, but these metadata fields are not escaped! Thus in the header of the aforementioned paper’s HTML page you’ll find the line:

    <meta name="dc.title" content="The "True" Column Density Distribution in Star-Forming Molecular Clouds" />


Those extra unescaped quotation marks break the HTMLParser module in Python—except not always. With the command line edition I run Python 2.7.3, whose HTMLParser is robust against this type of malformed HTML. But the Service edition uses the default Python provided by Apple (version 2.7.1 for Mountain Lion). In this version of Python, HTMLParser is stopped cold by such HTML errors. To make HTMLParser happy, ADS to BibDesk pre-processes the ADS HTML to remove these metadata lines.

## Roadmap

My wish-list for future updates includes: integrating the arXiv-updater script into the command line interface, and being more careful when updating papers to not lose BibTeX data (e.g. the notes field). In the meantime, I have papers to write. But do tweet me, @jonathansick, or post an Issue to GitHub if you have problems or suggestions.


[^1]: I find that pdf2json loses word spaces in its output. If you know of a better text extraction program, I’m open to suggestions. Tweet @jonathansick.
