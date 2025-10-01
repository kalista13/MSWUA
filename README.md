# Mission SpaceWalker Official Website Repository

This is the official repository for the Mission SpaceWalker (MSWUA) website, a student-led space technology team at the University of Alberta.  

Developed by: Angela, Kalista  
Designed by: Angela, Kalista, Rosebud, Surabhi

## Project Structure

Editable content for the website is stored in the `src/data/` folder:

- Team members: `src/data/team/2024-2025/teamInfoData.tsx`
- Project/About info: `src/data/projectAboutData.tsx`

Each file contains an array of entries. Editing them updates what is displayed on the site.

## Editing Content

### Adding a new entry
1. Open the relevant data file.
2. Copy an existing entry block (`{ ... },`).
3. Paste it below the last entry.
4. Update the fields (e.g., name, role, description, image).

### Editing an entry
- Open the file and update the text or image inside the block.

### Deleting an entry
- Remove the entire block (`{ ... },`) from the file and save.

## Media and Assets

All images used on the website are stored in the `src/assets/images/` folder.  
Each type of content has its own subfolder:

- **Team member images** → `src/assets/images/team/2024-2025/`  
  - Example import:  
    ```ts
    import Alex from "../../../assets/images/team/2024-2025/alex.png";
    ```

- **Project images** → `src/assets/images/photos/{project-name}/`  
  Each project has its own subfolder (e.g. `can-rgx-v`, `can-sbx`, etc).  
  - Example import:  
    ```ts
    import canRgxVImg4 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-4.png";
    import canSbxImg2 from "../assets/images/photos/can-sbx/can-sbx-img-2.png";
    ```

When adding new content:
1. Place the image in the correct subfolder.  
2. Add a new import statement at the top of the relevant data file.  
3. Reference the imported image inside the new entry block.

## Development Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/mission-spacewalker/website.git
   cd website
