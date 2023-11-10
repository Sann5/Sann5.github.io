---
layout: page
title: Modeling Neural Populations with Mixture Models
description: Modeling computation in the brain through Mixture Model parameter inference.
img: assets/img/leanred_weights2.png
importance: 2
category: work
related_publications: Moraitis_2022, keck_feedforward_2012
---

## Abstract
A Winner Takes it All Network (WTAn) is a special kind of artificial neural network for classification that has been studied in computational neuroscience because it provides a simple model for a common connectivity pattern in the brain cortex. Interestingly it has been shown that WTAns are analogous to the online K-means algorithm. 

One of the known issues with online K-means/WTAns is the uneven membership assignment, where occasionally and depending on initialization one centroid is assigned responsibility over multiple clusters of data points while others are left without any.

By generalizing the online K-means to a Gaussian Mixture parameter inference problem we find a natural solution to this problem without compromising the formulation of the problem using a WTAn. Furthermore using a Poisson Mixture Model we formulate an algorithm that we think is more fitting to represent neural populations and their dynamics. 

Finally, we do some simulations and demonstrate the potential of the proposed algorithm. This work is very similar to "Keck, 2012" and "Moraitis T., 2022"  specially in terms of the theory behind it, but the proposed algorithm differs from those proposed in these papers. We argue that the framework used here and in the aforementioned papers provide a probabilistic interpretation of the underlying learning process.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/lerned_weights.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generative fields for each one of the 50 neurons after 30 epochs of training.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/WTAnet.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic representation of the WTAn and its associated weight matrix.
</div>

## Want to know more?
- 🚀 Check out the [GitHub repo](https://github.com/Sann5/neural_populations). You can find a copy of the written report of the project there. 