# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alien RPG Core is the foundation, core rules module for playing Alien RPG in Foundry VTT. This module is designed for Foundry VTT v13+ and works with the `alienrpg` game system.

## Architecture

### Root Level
- `module.json` - Foundry VTT module configuration file
- `README.md` - Project documentation
- `.gitattributes` - Git configuration

### Module Files

1. `./styles/`
   - `alien-rpg.css` - Custom styles for the module, referenced in module.json

2. `./packs/` (Not yet created)
   - Will contain Foundry VTT compendium data in binary format

3. `./assets/` (Not yet created)
   - Will contain custom assets used by the module

### Source Materials

The `./sources/` directory contains source materials that are NOT included in the distributed module, but are used to create module content:

1. `./sources/cheat-sheet/`
   - `alien-rpg-cheatsheet.html` - HTML cheat sheet reference page
   - `floating-nav.css` - Styles for the cheat sheet navigation

2. `./sources/html-sources/`
   - HTML versions of chapters extracted from the original PDF sourcebook
   - These are used to create JSON data for Foundry compendiums
   - **Chapter Files:**
     - `1_Space_Is_Hell.html` - Chapter 1
     - `2_Your_Character.html` - Chapter 2
     - `3_Skills_and_Talents.html` - Chapter 3
     - `4_Stealth_and_Combat.html` - Chapter 4
     - `5_Gear_and_Tech.html` - Chapter 5
     - `6_A_Hard_Life_Amongst_the_Stars.html` - Chapter 6
     - `7_Being_the_Game_Mother.html` - Chapter 7
     - `8_Governments_and_Corporations.html` - Chapter 8
     - `9_Systems_and_Planets.html` - Chapter 9
     - `10_Alien_Species.html` - Chapter 10
     - `11_Campaign_Play.html` - Chapter 11
     - `Appendix_Last_Survivor.html` - Last Survivor appendix
     - `Appendix_Life_Paths.html` - Life Paths appendix
     - `Appendix_Upgrades_and_Equipment.html` - Upgrades and Equipment appendix
   - **Subdirectories:**
     - `fonts/` - Contains `ocraext.ttf` font file
     - `images/` - Contains `.webp` and `.svg` images (space combat examples, diagrams, etc.)
     - `styles/` - Contains `alienrpg.css` stylesheet for HTML sources

3. `./sources/interactive-star-map/`
   - Interactive HTML-based star map of the Alien universe
   - `middle-heavens-viewer.html` - Star map viewer interface
   - `middle-heavens-editor.html` - Star map editor interface
   - `map-data.json` - Star system data
   - `Stars_Of_The_Middle_Heavens_2183.jpg` - Background image for the map
   - `start-server.js` - Local development server for the interactive map

## Development Notes

- Source HTML files are converted to Foundry VTT compendium format
- The module targets Foundry VTT version 13 and above
- Compatible with the `alienrpg` game system
