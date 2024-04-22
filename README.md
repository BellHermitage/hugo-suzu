# Suzu

The Hugo theme powering [Suzunaan](https://suzunaan.org) and its side-projects.
The official home of this theme is on [Suzu's git](https://git.suzunaan.org/Suzunaan/hugo-suzu);
please use that repository to open issues, contribute and so on.

## Design philosophy

The driving philosophy behind the theme is "old-web looking", in a way that does
not burden users' connection and accessibility, but is still good looking.

## Features

 - ATOM (RSS) generation.
 - Old-web banners.

## Site parameters

The theme can be configured in your `hugo.toml` like so:

```toml
[params]

# Relative file path to the logo.
# Optional. Default: none
logo = 'assets/logo.svg'

# A message that will appear in the footer.
# Optional. Default: none
subtitle = 'I <3 indie web'

# An array of old-web buttons to display under the footer.
# The buttons must be inside the 'assets/buttons' folder.
# The order used here is the order in which they will be displayed.
# Some buttons are already present inside the theme.
# Optional. Default: none
webbuttons = ['foo.png', 'bar.png', 'transnow2.gif']

[params.contacts]

# The name of the author(s).
# Optional. Default: none
name = 'Your name'

# The email of the author(s).
# Optional. Default: none
email = 'you@example.com'

# `params.subsites` is an array of sites to display in the footer.
# Optional. Default: none
[[params.subsites]]
name = 'Name of subsite 1'
link = 'foo.example.com'

[[params.subsites]]
name = 'Name of subsite 2'
link = 'bar.example.com'
```

## Front-matter parameters

Other than Hugo's defaults, a page can accept the following parameters inside
its front-matter:

```
# Don't show the page in the main page and/or archive.
# Optional. Default: false
ignore = false

# Don't show the meta-information for a post.
# Optional. Default: false
hideMeta = false
```

## Enabling ATOM

Insert the following inside your `hugo.toml`:

```toml
[outputs]
home = ['HTML', 'ATOM']
section = ['HTML']
taxonomy = ['HTML']

[outputFormats.ATOM]
name = 'ATOM'
baseName = 'feed'
mediaType = 'application/atom+xml'

[mediaTypes."application/atom+xml"]
suffixes = ["atom"]
```
