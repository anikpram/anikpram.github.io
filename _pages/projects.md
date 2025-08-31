# _pages/projects.md


---
layout: page
title: Projects
permalink: /projects/
---


<div class="projects">
{% for p in site.data.projects %}
<div class="project-card">
<img src="{{ p.image | default: '/assets/img/project-placeholder.jpg' }}" alt="{{ p.title }}">
<h3>{{ p.title }}</h3>
<p>{{ p.description }}</p>
<p class="links">
{% if p.github %}<a href="{{ p.github }}">GitHub</a>{% endif %}
{% if p.link %} · <a href="{{ p.link }}">Project</a>{% endif %}
</p>
{% if p.tags %}<span class="tags">{{ p.tags | join: ', ' }}</span>{% endif %}
</div>
{% endfor %}
</div>


---