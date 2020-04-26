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
    > update config path for `themes/hannah/_config.yml`
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
- archive style
    > update config path for `_config.yml`
    1. use list
        ```bash
        # archive posts
        archive_generator:
          per_page: 15
          yearly: true
          monthly: false
          daily: false
        ```
    2. use time-line
       ```bash
        # archive posts
        archive_generator:
          per_page: 0
          yearly: true
          monthly: false
          daily: false
       ```
- update Analytics
    > update config path for `themes/hannah/_config.yml`
    1. use baidu
        ``` bash
        # Baidu Analytics
        baidu_analytics: [your app secret]
        ```
    2. use google
        ``` bash
        # Google Analytics
        google_analytics: [your app secret]
        ```
- update Comments
    > update config path for `themes/hannah/_config.yml`
    1. use Disqus
        ``` bash
        # Disqus Comments
        disqus_shortname: [your app secret]
        ```
    2. use Changyan
        ``` bash
        # Changyan Comments
        changyan_comments:
          appid: [your app id]
          appsecret: [your app secret]
        ```