---
layout: repositories
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



<!--
## GitHub users
<ul>
{% for u in site.data.github_users.users %}
  <li><a href="{{ u.url }}" target="_blank" rel="noopener">{{ u.title }}</a></li>
{% endfor %}
</ul>

---

## GitHub Repositories

{%- comment -%}
If you want an *automatic* list of *your* public repos, uncomment the block below,
and comment out the “featured list” block. Requires jekyll-github-metadata + token in Actions.
{%- endcomment -%}
{%- assign repos = site.github.public_repositories -%}
{%- if repos and repos.size > 0 -%}
  {%- assign repos = repos
      | where_exp: "r", "r.fork == false"
      | sort: "stargazers_count"
      | reverse -%}
  <ul>
  {%- for r in repos -%}
    <li><a href="{{ r.html_url }}" target="_blank" rel="noopener">{{ r.full_name }}</a></li>
  {%- endfor -%}
  </ul>
{%- else -%}
  {%- comment -%} Fallback to curated list if metadata is unavailable {%- endcomment -%}
  <ul>
  {%- for full in site.data.featured_repos.repos -%}
    {%- assign owner = full | split: "/" | first -%}
    {%- assign name  = full | split: "/" | last  -%}
    <li><a href="https://github.com/{{ owner }}/{{ name }}" target="_blank" rel="noopener">{{ full }}</a></li>
  {%- endfor -%}
  </ul>
{%- endif -%}
-->