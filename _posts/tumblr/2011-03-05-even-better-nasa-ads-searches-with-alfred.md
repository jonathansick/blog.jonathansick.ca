---
layout: post
type: cpb
title: Even better NASA ADS searches with Alfred
tags:
- mac
---
The internet is awesome. No more than ten hours after posting about using Alfred to query NASA ADS did my friend, and NYU graduate student, Daniel Foreman-Mackey figure out an even better way to query ADS.

In the last post I mentioned that Alfred used only a single search field, making a seamingly straightforward author-year search a bit clumsy. Dan fixed this by hosting a page on GitHub that parses author and year from a search and feeds that into the ADS advanced query page, making for fast and accurate searches. Its a thing of JavaScript beauty.

With the new custom search (see below), you can search for

an author, say: ads courteau,
a couple of authors: ads widrow courteau,
author(s) and a year: ads widrow courteau 2007, or
author(s) and a year range: ads widrow courteau 1986 2011.
You can also use logic such as or. See Dan’s readme for complete details.

Here then, is the new Alfred custom search for ADS (it will auto-install in your Alfred app). Thanks Dan!

Of course, once you’ve found your paper in ADS, why not download it straight into BibDesk with the ADS to BibDesk script?
