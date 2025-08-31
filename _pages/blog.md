---


# _pages/blog.md


---
layout: page
title: Blog
permalink: /blog/
---


{% if paginator and paginator.posts %}
<ul>
{% for post in paginator.posts %}
<li>
<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
<small>— {{ post.date | date_to_string }}</small>
</li>
{% endfor %}
</ul>
{% else %}
<ul>
{% for post in site.posts %}
<li>
<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
<small>— {{ post.date | date_to_string }}</small>
</li>
{% endfor %}
</ul>
{% endif %}


---