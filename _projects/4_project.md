---
layout: page
title: Statistical Analysis of Structural Variants and Their Effect on Transcriptional Architecture.
description: Could structural variants be shaping the observed transcriptional network architectures?
img: assets/img/SCNA_graphs.png
importance: 4
category: work
related_publications: espinal-enriquez_rna-seq_2017, garcia-cortes_gene_2020, mermel_gistic20_2011, margolin_aracne_2006
---

## Abstract
Structural variants (SVs) are a very pervasive type of mutations present across cancers. Plenty of research has been done exploring how these aberrations affect differential expression and genomic architecture. However little research has been done concerning the overall effect of this type of mutations in the transcriptional regulatory programs. Building on the work of García-Cortés et al. (2018) and Espinal-Enríquez et al. (2017), we ask whether genes that are significantly copy number mutated are enriched in subtype specific breast cancer mutual information transcriptional networks. 

We use the TCGA breast cancer data to build the networks with ARACNE and to determine which genes are significantly copy number mutated in each subtype using GISTIC2.0 (Mermel et al. 2011; Margolin et al. 2006). Then we perform two sided fisher tests enrichment analysis to determine whether these genes are over or under represented in our cancer transcriptional networks. Furthermore, we explore the question of whether these types of mutations could be shaping the observed network architecture. This question however is discussed but not addressed formally.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SCNA_graphs.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Each column represents a transcriptional network (13k most significant interactions) for each breast cancer molecular subtype (from left to right networks belong to Basal, Her2, LumA and LumB). Nodes dyed blue if said gene were found to be significantly deleted and red if significantly amplified.
</div>

## Want to know more?
- 🚀 Check out the full report [here](/assets/html/SCNAs_proyect_final_report.html).
