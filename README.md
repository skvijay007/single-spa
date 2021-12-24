# Single-spa
Practice build for Base UI single-spa application.

>Its best practice to have application MFE's, utility module MFE or styleguide MFE to be isolated from single-spa repository but for purpose of practiceing this repo consists of,

## Application MFE's:

**practice-mfe-1**  - *@pkg/practice-mfe-1*

**practice-mfe-1** - *@pkg/practice-mfe-2*

## Utility Module's:

**utility-module** - *@pkg/utility-module*

**styleguide** - *@pkg/styleguide*

>This application demonstrates application MFE's using global css & ui component from styleguide MFE and utility function from utility-module MFE.

# Usage

- Install packages using npm in each MFE's
- From root folder (single-spa), run script 'npm run start:all', this would start all MFE's in its assigned ports.
- use http://localhost:9000 to load single-spa application.