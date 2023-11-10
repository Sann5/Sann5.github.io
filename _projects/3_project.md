---
layout: page
title: Statistical Analysis of International SARS-CoV-2 Incidence Data
description: How applicable is the Huisman method (for effective reproductive number estimation) on data from different countries?
img: assets/img/insidence_dist.png
importance: 3
category: work
related_publications: Huisman2020.11.26.20239368
---
## Abstract
The effective reproductive number is an important statistic that was widely used during the pandemic to make public policy decisions. Huisman and collaborators proposed a robust method to estimate the effective reproductive number of SARS-CoV-2 using incidence data (Huisman et al., 2022). The method assumes by default that the data follows a gamma distribution. Deviations from this assumption are known to affect the accuracy of the method. 

The overarching goal was to gauge how applicable the method in question is. Concretely I set out and explore incidence data from different countries to build distributions, analyze them, and compare them.

I found that there were noticeable differences in the distribution of the data from different countries (compared to the assumed gamma distribution), which in turn caused noticeable differences in the effective reproductive number estimates when accounting for the empirical distributions. This in turn allowed us to accurately characterize the applicability of the estimation method.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/insidence_dist.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Distribution of delays for every country. All delays are with respect to onset date. Dashed lines indicate the mean of the distribution.
</div>

## Want to know more?
- 🚀 Check out the full report [here](/assets/pdf/SARS_COV2_report.pdf)