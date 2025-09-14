---
layout: page
title: "Repositories"
permalink: /repositories/
nav: true
nav_order: 4   # adjust as you like
---

{% assign repos = site.github.public_repositories 
  | where_exp: "r", "r.fork == false" 
  | sort: "stargazers_count" 
  | reverse %}

<ul class="repo-list">
{% for r in repos %}
  <li class="repo-item">
    <h3><a href="{{ r.html_url }}" target="_blank" rel="noopener">{{ r.name }}</a></h3>
    <p>{{ r.description }}</p>
    <p>
      <small>
        {{ r.language }} • ⭐ {{ r.stargazers_count }} • 🍴 {{ r.forks_count }} • Updated {{ r.pushed_at | date: "%b %d, %Y" }}
      </small>
    </p>
  </li>
{% endfor %}
</ul>