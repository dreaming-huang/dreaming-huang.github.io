---
title: "BuildingBlock: A Hybrid Approach for Structured Building Generation"
collection: publications
category: conferences
permalink: /publication/BuildingBlock
excerpt: 'AIGC, Computer Graphics, Game'
date: 2025-05-06
venue: 'ACM SIGGRAPH 2025'
paperurl: 'https://arxiv.org/pdf/2505.04051'
teaser: buildingblock_teaser.png
---
<br>
**Junming Huang**\*, Chi Wang\*, Letian Li, Changxin Huang, Qiang Dai, Weiwei Xu
*Junming Huang and Chi Wang are co-fitst authors.

Three-dimensional building generation is vital for applications in gaming, virtual reality, and digital twins, yet current methods face challenges in producing diverse, structured, and hierarchically coherent buildings. We propose a hybrid approach that integrates generative models, procedural content generation (PCG), and large language models (LLMs) to address these limitations. Specifically, our method introduces a two-phase pipeline: the Layout Generation Phase (LGP) and the Building Construction Phase (BCP).<br>
LGP reframes box-based layout generation as a point-cloud generation task, utilizing a newly constructed architectural dataset and a Transformer-based diffusion model to create globally consistent layouts. With LLMs, these layouts are extended into rule-based hierarchical designs, seamlessly incorporating component styles and spatial structures.<br>
The BCP leverages these layouts to guide PCG, enabling local-customizable, high-quality structured building generation. Experimental results demonstrate our method’s effectiveness in generating diverse and hierarchically structured buildings, achieving state-of-the-art results on multiple benchmarks, and paving the way for scalable and intuitive architectural workflows.
