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

Next, note that we have two separete Gemfile setups to manage conflicting dependencies:
One for Jekyll at the base of this project, and another in `assets` for Sass/Compass.

In the base project directory run

    rbenv local 2.0.0-p247
    bundle install
    rbenv rehash

And in a separete terminal for the sass (assets)

    cd assets
    rbenv local 2.0.0-p247
    bundle install
    rbenv rehash

## Commands for Building the Site

To automatically build and server to `localhost:4001`:

    bundle exec jekyll serve --watch

To only build the site:

    bundle exec jekyll build --watch

To generate CSS:

    cd assets
    bundle exec compass watch .


## Info

Copyright 2014 Jonathan Sick. License CC-BY.
