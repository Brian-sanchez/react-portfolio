# Proposed Maintenance Tasks

## 1. Fix typographical error in experience translations
* **Type:** Typo correction
* **Issue:** The English translation for the experience section spells "Work" as "Woek", which leaks into the UI.
* **Location:** `public/translations/i18n/experience/en.json`, `title1` entry.
* **Proposed fix:** Update the string to read "What Work Experience I Have" to present polished copy in the experience heading.

## 2. Restore missing "experience" namespace in the i18n setup
* **Type:** Bug fix
* **Issue:** The i18n configuration omits the `experience` namespace even though the Experience component calls `useTranslation(["experience"])`. This prevents the section from loading its localized strings and instead falls back to raw keys.
* **Location:** `src/i18n.js`, namespace array in the `.init` call.
* **Proposed fix:** Add `"experience"` to the namespace list (and any other missing sections) so the translation files under `public/translations/i18n/experience/` are available at runtime.

## 3. Replace boilerplate README with project-specific documentation
* **Type:** Documentation alignment
* **Issue:** The README still contains the default Create React App text and does not describe the portfolio, its structure, or how to work with translations and contact form integrations, which misleads contributors.
* **Location:** `README.md`.
* **Proposed fix:** Rewrite the README to summarize the portfolio features, setup steps (including environment variables for EmailJS if needed), and how to manage localization assets.

## 4. Update the obsolete smoke test for the App shell
* **Type:** Test improvement
* **Issue:** `src/App.test.js` still checks for the "learn react" link from the CRA starter template, but the portfolio no longer renders that element, so the test fails.
* **Location:** `src/App.test.js`.
* **Proposed fix:** Replace the assertion with one that queries for stable content that the portfolio actually renders (for example, the main header title) to keep the smoke test meaningful.
