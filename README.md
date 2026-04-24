# Sissa's Legend & Powers of 10

An interactive STEM experience exploring the staggering power of exponential growth, from the ancient Indian Legend of Sissa to the vast scales of the universe and the heart of the atom.

## 🚀 Features (v1.4 Update)
- **Accessibility (ARIA)**: Full support for screen readers with semantic roles, `aria-live` regions for real-time counter updates, and improved keyboard navigation.
- **Dynamic Documentation**: The 'DOC' button now automatically detects the active UI language and opens the corresponding documentation (English or Italian).
- **Internationalization (i18n)**: Full support for English and Italian with persistent preferences via `localStorage`.
- **Interactive Storytelling**: A dual-path journey (Macro & Micro) through the "Wheat and Chessboard" problem.

## 🧮 Mathematical Foundation
The project visualizes the geometric progression:
\[ G_n = 2^{n-1} \]
And the total sum of grains:
\[ S = 2^{64} - 1 \]

On the **Micro Scale**, we explore subatomic dimensions using negative powers:
\[ L_n = 0.005 \times 2^{-n} \]

## 🛠️ Technical Details
- **High-Precision Logic**: Uses JavaScript `BigInt` to handle integers up to $18,446,744,073,709,551,615$ without precision loss.
- **Web Speech API**: Integrated narration engine with dynamic voice filtering based on the selected language.
- **PWA Ready**: Offline functionality via Service Worker and full manifest support for mobile installation.
- **Responsive Design**: Built with `vmin` units for a seamless experience across all screen sizes.

## 🌍 Community & Contribution
This is an open-source educational mission. We believe that science should be accessible to everyone, regardless of their language. 

**We need your help!** If you would like to contribute by translating the technical and educational documentation into other languages (French, Spanish, German, etc.), please visit our GitHub repository:
- **Contribute on GitHub:** [https://github.com/pivari/sissa-legend-powers-of-10](https://github.com/pivari/sissa-legend-powers-of-10)

## 📖 Documentation
Detailed educational and technical goals are available in the `/lang` folder:
- [Technical & Scientific Documentation (EN)](lang/documentation-en.html)
- [Documentazione Tecnica e Scientifica (IT)](lang/documentation-it.html)

## 📄 License
Distributed under the MIT License. Created by [pivari.com](https://www.pivari.com).