---
pubDate: 2023-06-08
title: RMI Ray Tracing
featured: true
draft: false
tags:
  - java
  - web
  - astro
  
heroImage: ""
description: "Distribued processing with java-RMI"
---
# TLDR
2 of my classmate and I created a ray tracing program in java. We used java-RMI to distribute the processing on multiple computers.
I built a website to showcase the project and explain how it works its available [here](https://ray-tracing-rendu.vercel.app/).
 
# Project Overview

## Prelude

This project sets sail into the realms of distributed programming, specifically exploring the intricacies of parallel computation. Our focal point? Parallelizing data. This approach becomes crucial when tackling computations that surpass the capabilities of a personal computer. With access to an array of machines, we can break down a hefty calculation into bite-sized pieces, distributing them across machines to orchestrate the final result.

## Key Questions

To navigate this parallel journey, we must conceive a strategy for partitioning and assigning computation tasks to various machines. Once the results are in, a method must be crafted to reassemble them into the grand finale.

## Ray Tracing Unveiled

Ray tracing stands as a CPU-intensive computation, an image synthesis algorithm that meticulously calculates a scene pixel by pixel, ultimately producing a stunning image. The scene is a canvas painted with geometric shapes and illuminated by light sources.

### Key Inquiry

Crucially, the program must undergo testing by tweaking its parameters (via the command line) and observing the execution time relative to the size of the computed image. A curve showcasing the calculation time against image size becomes a valuable tool in understanding the program's efficiency.

## Let's Speed Things Up

To compute a high-resolution image, parallelizing calculations across a cluster of machines becomes the preferred route. Our scenario unfolds as follows:

1. A set of computation nodes, each capable of calculating a fragment of a scene.
2. A node server facilitating the retrieval of computation node coordinates.
3. A program slicing the computation, fetching available node coordinates, dispatching a calculation to each, and presenting the final result.

### Key Challenges

Illustrating the architecture through a schematic representation is pivotal. Identify fixed and ephemeral processes, data types exchanged between processes, and the strategy for parallel computation. Finally, implement this distributed application, ensuring that computation indeed takes the accelerated route.

---