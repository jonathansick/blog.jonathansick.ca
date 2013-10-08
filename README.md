# blog.jonathansick.ca

This is the repository for [blog.jonathansick.ca](http://blog.jonathansick.ca).

## Ruby Setup

First get `rbenv` and `bundle`.

    brew update
    brew install rbenv
    brew install rbenv-gem-rehash
    brew install ruby-build
    rbenv install 1.9.3-p392
    rbenv install 2.0.0-p247

In this project repo run

    rbenv local 2.0.0-p247
    bundle install

## Commands for Building the Site

To automatically build and server to `localhost:4001`:

    jekyll serve --watch

To only build the site:

    jekyll build --watch

To generate CSS:

    bundle exec compass watch assets/

### Note on Jankness

You'll note that Jekyll is run through the system Ruby, while compass is run through the `rbenv` environment.
This lets us use the latest compass to get vertical rhythm, while using the system's Jekyll, which works.
The problem is that posix-spawn-0.3.6 generates a segmentation fault while running through a vendor install in rbenv.

    posix-spawn-0.3.6/lib/posix_spawn_ext.bundle: [BUG] Segmentation


***

Copyright 2013 Jonathan Sick. License CC-BY.
