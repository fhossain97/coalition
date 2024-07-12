# Farhana Hossain Coalition Technologies Assessment

## File Structure and explanation

1. lib/types.ts (Lib Folder)

- contains health data for patient for type reference

2. /src/components
   \*\* Center Section

- Contains the graph for a patient's pressure types along with the diagnostic list.
- Please ensure to click the graph to have data displayed on the specifics.

\*\* Layout

- Contains the navbar. For this project this isn't needed, however, if multiple pages were built it would be needed.

\*\* Left Section

- Contains all the patients in a list format

\*\* Navbar

- Top mock navigation bar

\*\* Right Section

- Contains specified patient card info and the lab results. For the purposes of this project, only Jessica Taylor's information was displayed. However, clicking each patient should result in their information populating.

3. /src/pages/index.tsx

- The home page with the full layout of the web page (divided the page into 4 parts: navbar on top and three sections below)

4. /src/server/api/routers/patients.ts

- Backend logic where API is called

5. /.env.local

- Sensitive information stored
