---
permalink: /
author_profile: true
title: "Junming Huang - 黄俊铭" 
classes: wide
redirect_from: 
  - /about/
  - /about.html
---
I am a Ph.D. student at the [State Key Lab of CAD&CG](http://www.cad.zju.edu.cn/#), Zhejiang University, under the supervision of Prof. [Weiwei Xu](http://www.cad.zju.edu.cn/home/weiweixu/). Prior to this, I received my B.E. degree from the School of Software at Yunnan University. My primary research interests lie in **Generative Models(including MLLMs and Diffusion Models)** and **Computer Graphics**.

## Publications

{% include base_path %}

<!-- Render publications in alphabetical order by title -->

{% assign sorted_publications = site.publications | sort: 'title' %}
{% for post in sorted_publications %}
{% include archive-single.html%}
{% endfor %}

## Industry Experience

* **Research Intern (Computer Graphics, 3D Generation)** @ [Tencent](https://www.tencent.com/en-us/index.html)<br>
  **Apr 2024 - Present**<br>

  * Developed a diffusion model-guided method for structured building generation using procedural content generation (PCG).
  * A paper accepted by SIGGRAPH 2025.
  * Developed a Unified MLLM for 3D understanding and generation.
* **Research Intern (Computer Graphics, Digital Human Generation)** @ [Kuaishou](https://ir.kuaishou.com/)<br>
  **Apr 2023 - Apr 2024**<br>

  * Led the research and development of a text-driven facial material generation method.
  * A paper accepted by TPAMI and one national invention patent.
