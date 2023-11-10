---
layout: page
title: Microbiome-Analysis Software Tools for Qiime2
description: Microbiome-analysis software tool development with reproducibility at its core.
img: assets/img/qiime2.jpeg
importance: 5
category: work
related_publications: 10.1093/molbev/msab199
---
# What I do
Since August 2023 I am working at the [Food Systems Biotechnology](https://fsb.ethz.ch/) group as a software engineer. My work in this group consist of developing and integrating bioinfomratics tools for metagenome-analysis with [Qiime2](https://qiime2.org/).

Qiime2 is potent microbiome analysis tool that prioritizes transparency and reproducibility. It does so by featuring automated data tracking, a semantic type system, and a plugin system for expanded functionality. 

My responsibilities in the devolving team include:
- 🔧 adding new functionalities to already existing plugins
- 👀 reviewing issues and PRs

For example I recently added BUSCO to the [q2-moshpit](https://github.com/bokulich-lab/q2-moshpit) plugin (Manni, 2021). BUSCO is a tool to quantify the quality of assembled metagenomes based on the presence of universal single-copy orthologues. The goal was to build a wrapper for the existing tool to make it available within Qiime2. Furthermore we sought to present the results through costume interactive visualizations like [this one](/assets/html/busco_example/index.html).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/busco_og.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example output from BUSCO analysis (image original from <a href='https://busco.ezlab.org/busco_userguide.html#citation'>BUSCO's User Web-page</a>).
</div>

## Want to learn more?
- 🚀 Check out the [Food Systems Biotechnology GitHub organization](https://github.com/bokulich-lab).
