# Sissa's Legend & Powers of 10 | v1.5

An interactive Open Educational Resource (OER) and STEM tool exploring exponential growth and cosmic scales, from the ancient Legend of Sissa to subatomic particles.

## 🚀 Version 1.5 - Key Updates
- **Multilingual Engine (ZH)**: Integrated full support for Simplified Chinese (UI, narrative, and documentation).
- **Mathematical Accuracy**: Added LaTeX support via MathJax for professional rendering of exponential formulas:
  - Macro: $S = \sum_{i=0}^{63} 2^i = 2^{64} - 1$
  - Micro: $L_n = 0.005 \times 2^{-n}$
- **Advanced Accessibility (ARIA)**: Full compliance with ARIA roles (`grid`, `gridcell`, `aria-live`, `aria-modal`) for screen reader optimization and inclusive learning.
- **HarmonyOS Next Support**: Optimized for Huawei's ArkWeb engine with standalone display mode and high-res assets.
- **Expanded Asset Pipeline**: Added `logo512.png` for modern splash screens and PWA validation.
- **OER & MIT License**: Embedded licensing metadata directly in the interface and documentation.

## 🛠 Technical Features
- **Monolithic Core**: All logic, styles, and UI contained in a single high-performance `index.html` (320+ lines).
- **Narrative TTS Engine**: Dynamic voice selection and synchronization for storytelling in EN, IT, and ZH.
- **BigInt Precision**: Native JavaScript `BigInt` used to accurately compute the 64th square ($1.84 \times 10^{19}$ grains).
- **Offline First**: Service Worker (v1.5) caches all localized JSON files, icons, and HTML documentation.
- **Scientific Documentation**: Deep-dive HTML files for each language explaining the physics and math of the "Powers of 10".

## 📂 Project Structure
- `index.html`: The core engine (Logic, Styles, UI, MathJax).
- `sw.js`: Service Worker for offline PWA lifecycle.
- `manifest.json`: Configuration for mobile installation and HarmonyOS support.
- `lang/`:
  - `en.json`, `it.json`, `zh.json`: Localization data.
  - `documentation-en.html`, `documentation-it.html`, `documentation-zh.html`: Educational manuals.
- `logo192.png`, `logo512.png`, `favicon.ico`: High-resolution branding.

## 📜 License & Credits
Released under the **MIT License**. 
This is an **Open Educational Resource (OER)** created for schools, universities, and science enthusiasts.

© 2026 [pivari.com](https://www.pivari.com)