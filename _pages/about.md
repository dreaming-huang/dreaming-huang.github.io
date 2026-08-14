---
permalink: /
layout: archive
author_profile: true
title: "Junming Huang"
title_zh: "黄俊铭"
redirect_from: 
  - /about/
  - /about.html
---

<div class="lang-en" markdown="1">

I am a Ph.D. student at the [State Key Lab of CAD&CG](http://www.cad.zju.edu.cn/#), Zhejiang University, under the supervision of Prof. [Weiwei Xu](http://www.cad.zju.edu.cn/home/weiweixu/). Prior to this, I received my B.E. degree from the School of Software at Yunnan University. My primary research interests lie in **Generative Models(including MLLMs and Diffusion Models)**, **Computer Graphics**, and **Embodied AI**.<br>
**Email:** junminghuang [AT] zju.edu.cn

## News

* **May 2026:** 🎉 *CG-MLLM: Captioning and Generating 3D content via Multi-modal Large Language Models* was accepted to **ICML 2026**.
* **Nov 2025:** 🎉 *VividAnimator: An End-to-End Audio and Pose-driven Half-Body Human Animation Framework* was accepted as an **Oral** paper at **WACV 2026**. The oral presentation is available on [YouTube](https://www.youtube.com/watch?v=HSvUCdF0dqE).
* **May 2025:** 🎉 *Physically Based Facial Texture Generation in the Wild* was accepted to **IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) 2025**.
* **Apr 2025:** 🎉 *BuildingBlock: A Hybrid Approach for Structured Building Generation* was accepted to **ACM SIGGRAPH 2025**. The oral presentation is available on [YouTube](https://www.youtube.com/watch?v=iqTd2-4jPDs).

</div>

<div class="lang-zh" markdown="1">

我是浙江大学 [CAD&CG 国家重点实验室](http://www.cad.zju.edu.cn/#)博士生，导师为[许威威](http://www.cad.zju.edu.cn/home/weiweixu/)教授。此前，我于云南大学软件学院获得工学学士学位。主要研究方向为**生成模型（包括多模态大语言模型与扩散模型）**、**计算机图形学**与**具身智能**。<br>
**邮箱：** junminghuang [AT] zju.edu.cn

## 新闻动态

* **2026年5月：** 🎉 *CG-MLLM: Captioning and Generating 3D content via Multi-modal Large Language Models* 被 **ICML 2026** 接收。
* **2025年11月：** 🎉 *VividAnimator: An End-to-End Audio and Pose-driven Half-Body Human Animation Framework* 被 **WACV 2026** 接收为 **Oral** 论文。口头报告视频见 [YouTube](https://www.youtube.com/watch?v=HSvUCdF0dqE)。
* **2025年5月：** 🎉 *Physically Based Facial Texture Generation in the Wild* 被 **IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) 2025** 接收。
* **2025年4月：** 🎉 *BuildingBlock: A Hybrid Approach for Structured Building Generation* 被 **ACM SIGGRAPH 2025** 接收。口头报告视频见 [YouTube](https://www.youtube.com/watch?v=iqTd2-4jPDs)。

</div>

<h2 id="publications">{% include i18n.html en="Publications" zh="论文发表" %}</h2>

{% include base_path %}

{% assign sorted_publications = site.publications | sort: 'date' %}
{% for post in sorted_publications reversed %}
{% include archive-single.html %}
{% endfor %}

<div class="lang-en" markdown="1">

## Industry Experience

* **Research Intern (Computer Graphics, 3D Generation)** @ [Tencent](https://www.tencent.com/en-us/index.html)<br>
  **Apr 2024 - Present**<br>

  * Developed a diffusion model-guided method for structured building generation using procedural content generation (PCG).
  * A paper accepted by SIGGRAPH 2025.
  * Developed a Unified MLLM for 3D understanding and generation.
  * A paper accepted by ICML 2026.
* **Research Intern (Computer Graphics, Digital Human Generation)** @ [Kuaishou](https://ir.kuaishou.com/)<br>
  **Apr 2023 - Apr 2024**<br>

  * Led the research and development of a text-driven facial material generation method.
  * A paper accepted by TPAMI and one national invention patent.

</div>

<div class="lang-zh" markdown="1">

## 实习经历

* **科研实习（计算机图形学、三维生成）** @ [腾讯](https://www.tencent.com/zh-cn/index.html)<br>
  **2024年4月 - 至今**<br>

  * 提出基于扩散模型引导、结合程序化内容生成（PCG）的结构化建筑生成方法。
  * 相关论文被 SIGGRAPH 2025 接收。
  * 研发面向三维理解与生成的统一多模态大语言模型。
  * 相关论文被 ICML 2026 接收。
* **科研实习（计算机图形学、数字人生成）** @ [快手](https://ir.kuaishou.com/)<br>
  **2023年4月 - 2024年4月**<br>

  * 负责文本驱动的面部材质生成方法的研究与开发。
  * 相关论文被 TPAMI 接收，并申请一项国家发明专利。

</div>
