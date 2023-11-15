---
pubDate: 2022-10-15
title: NetVOD 
featured: true
draft: false
tags:
  - php
  - web app
heroImage: ""
description: "Netflix clone made with PHP"
---

# TLDR 
Me and 3 of my classmate made a simple Netflix clone with basic features (accounts, email verifications, xss and sql injection protection ...) in a week for a school project.
source code is available at [github](https://github.com/SLATTY54/NetVOD)
# The official story  - NetVOD: Your Gateway to Cinematic Bliss

Welcome to NetVOD, where cinematic magic meets seamless functionality. Let me take you on a journey through the enticing realms of this Netflix-inspired clone, a creation brought to life using the dynamic trio of PHP, HTML, and CSS.

## The Project's Essence

At the heart of NetVOD lies the ambition to reimagine the streaming experience. It's not just about creating a platform; it's about crafting a virtual cinema where users can indulge in their favorite series, explore new releases, and build a personalized watchlist.

## The Technological Tapestry

Fueling this cinematic venture are the foundational pillars of PHP, HTML, and CSS. No fancy frameworks, just a pure blend of craftsmanship and code, ensuring a robust and straightforward architecture. Dive into the codebase, and you'll find the magic happening in the `src` folder.

## Unveiling Features

### Connecting the Dots in Your Database

Embark on the self-hosting journey by configuring your database through the `config.ini` file. Fill in the blanks with your preferred driver, host, database details, and watch your NetVOD world come to life. Tables like `EnCours`, `episode`, `notation`, `preferences`, `serie`, and `User` form the backbone, orchestrating a seamless symphony of data.

### Crafting Your Own Feature

Adding a new feature is akin to weaving a subplot into the narrative. Create an Action file in the `src/actions` folder, extending the class `Action` and breathing life into it with the `execute` method. Don't forget to update the `Dispatcher.php` switch case, maintaining the harmony within the code.

### The Dashboard Chronicles

Curious about the inner workings? Dive into the dashboard's chronicles, unfolding the project's tapestry through the meticulous documentation: [NetVOD Dashboard](https://docs.google.com/spreadsheets/d/15o8nag7aDmRHYfqtZ0TLzIt0sOVrhL0Pzrb8kCvORQg/edit?usp=sharing).

## User Portal: A Personalized Odyssey

### Welcoming Novices

Embark on your NetVOD journey with two choices at your doorstep. Already a denizen? Log in, immerse yourself in the streaming symphony. A newcomer? Fear not! Create an account, and the cinematic universe unfolds before you.

### Unveiling Series Marvels

Logged in and ready to dive deep? The catalog, a treasure trove of series, awaits your exploration. Click your chosen series, traverse through episodes, and experience the magic in a dedicated video player.

### Cool Chronicles

In the realm of personalization, your profile becomes a canvas. Sculpt it by adding your name, surname, birthdate, and a sprinkle of biography. Engage in the episodic conversations with a commenting system — express your thoughts, rate episodes, and join the community.

And here's the kicker: the power to curate your favorites. Star-studded series? Click the star in the bottom left corner and watch your favorites shine on the homepage.

NetVOD isn't just a platform; it's your personalized cinematic adventure. Dive in, explore, and let the reels of entertainment roll. What will you discover in your NetVOD odyssey?
