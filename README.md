# hexo-theme-hannah
- [Preview](http://objectyan.me)

## Installation

### Install

- plugin dependencies:
    - hexo-renderer-sass
    - hexo-generator-feed
    - hexo-renderer-ejs

- clone theme
``` bash
$ git clone https://github.com/objectyan/hexo-theme-hannah.git themes/hannah
```

- modify site config
``` bash
theme: hannah
```

- update favicon ico
    1. replace `themes/hannah/sources/favicon.ico` with your own preference
    2. update theme config `themes/hannah/_config.yml`
        ``` bash
        # Miscelaneous
        favicon: [your own preference url]
        ```
- update head image
    1. use url or source file
        ``` bash
        # headImg url and gravatar
        headImg:
          url: [your head Image url]
        ```
    2. use gravatar logo
        ``` bash
        # headImg url and gravatar
        headImg:
          gravatar:
              email: [your gravatar logo config]
              option: [your gravatar logo config]
        ```