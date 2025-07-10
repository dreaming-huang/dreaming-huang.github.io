---
title: "Physically Based Facial Texture Generation in the Wild"
collection: publications
category: manuscripts
permalink: /publication/2025-06-18-Physically_Based_Facial_Texture_Generation_in_the_Wild
excerpt: '	AIGC, Computer Graphics, PBR'
date: 2025-06-18
venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/11039616/metrics#metrics'
---
![67adef1f8c459159a2f4ca9903a6721](https://github.com/user-attachments/assets/534c523b-2276-420e-ba7c-0f06f82f7dfb)<br>
Chi Wang\*, **Junming Huang**\*, Rong Zhang\*, Qi Wang, Haotian Yang, Pengfei Wan, Haibin Huang, Chongyang Ma, Weiwei Xu <br>
*Chi Wang, Junming Huang and Rong Zhang are co-fitst authors.

Automatic 3D facial texture generation has gained significant interest recently. However, existing approaches may lack compatibility with the widely used physically based rendering (PBR) pipeline or rely on 3D data captured by sophisticated systems such as Light Stage. In this paper, we propose a multi-stage framework to achieve text-driven physically based facial texture generation in the wild, which eliminates the reliance on expensive, controlled capture environments.<br>
It is based on FFHQ-UV to pave the way between the normalized UV texture space and facial images captured in unconstrained real-world settings and remove the influence of the background or hair in natural images on PBR texture generation. Specifically, we first integrate differentiable rendering techniques and carefully crafted texture disentanglement regularization to train a generative adversarial network for efficient PBR texture sampling. Then, the latent space of the network is aligned with the text embedding space for flexible text-guided generation. Besides, we design an edge-aware Score Distillation Sampling (EASDS) loss and introduce an EASDS-based PBR texture boosting scheme to achieve more diverse generation and efficient SDS optimization. Experiments demonstrate that our method outperforms existing PBR texture generation methods.
