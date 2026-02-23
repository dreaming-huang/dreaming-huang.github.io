---
title: "VividAnimator: An End-to-End Audio and Pose-driven Half-Body Human Animation Framework"
collection: publications
category: conferences
permalink: /publication/VividAnimator
date: 2025-08
venue: 'WACV 2026 Oral'
paperurl: 'https://arxiv.org/pdf/2510.10269'
teaser: VividAnimator.png
author: [Donglin Huang*, Yongyuan Li*, Tianhang Liu*, Junming Huang, Xiaoda Yang, Chi Wang, Weiwei Xu]
---
Donglin Huang*, Yongyuan Li*, Tianhang Liu*, **Junming Huang**, Xiaoda Yang, Chi Wang, Weiwei Xu<br>

Existing for audio- and pose-driven human animation methods often struggle with stiff head movements and blurry hands, primarily due to the weak correlation between audio and head movements and the structural complexity of hands. To address these issues, we propose VividAnimator, an end-to-end framework for generating high-quality, half-body human animations driven by audio and sparse hand pose conditions. Our framework introduces three key innovations. First, to overcome the instability and high cost of online codebook training, we pre-train a Hand Clarity Codebook (HCC) that encodes rich, high-fidelity hand texture priors, significantly mitigating hand degradation. Second, we design a Dual-Stream Audio-Aware Module (DSAA) to model lip synchronization and natural head pose dynamics separately while enabling interaction. Third, we introduce a Pose Calibration Trick (PCT) that refines and aligns pose conditions by relaxing rigid constraints, ensuring smooth and natural gesture transitions. Extensive experiments demonstrate that Vivid Animator achieves state-of-the-art performance, producing videos with superior hand detail, gesture realism, and identity consistency, validated by both quantitative metrics and qualitative evaluations.
