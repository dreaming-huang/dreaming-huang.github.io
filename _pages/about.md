---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am a Master's student in Software Engineering at the [State Key Lab of CAD&CG](http://www.cad.zju.edu.cn/#), Zhejiang University, fortunate to be supervised by Prof. [Weiwei Xu](http://www.cad.zju.edu.cn/home/weiweixu/). My primary research interests lie in **Generative Models (AIGC)**, **Computer Graphics**, and **Computer Vision**.

## Education
BSc in Software Engineering,  Yunnan University  ,*2019-2023* <br>
MS  in Software Engineering, Zhejiang University ,*2023-2026*

## Industry Experience
* **Research Intern (Computer Graphics, Building Generation)** @ [Tencent](https://www.tencent.com/en-us/index.html)<br>
    *Apr 2024 - Present*
    * Developed a diffusion model-guided method for structured building generation using procedural content generation (PCG).

* **Research Intern (Computer Graphics, Digital Human Generation)** @ [Kuaishou](https://ir.kuaishou.com/)<br>
    *Apr 2023 - Apr 2024*
    * Led the research and development of a text-driven facial material generation method.

## Publications
{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<!-- Render publications in alphabetical order by title -->
{% assign sorted_publications = site.publications | sort: 'title' %}
{% for post in sorted_publications %}
  {% include archive-single.html %}
{% endfor %}
