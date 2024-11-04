export default function manifest() {
    return {
        "theme_color": "#8936FF",
        "background_color": "#2EC6FE",
        "icons": [
          {
            "purpose": "maskable",
            "sizes": "512x512",
            "src": "icon512_maskable.png",
            "type": "image/png"
          },
          {
            "purpose": "any",
            "sizes": "512x512",
            "src": "icon512_rounded.png",
            "type": "image/png"
          }
        ],
        "categories": [
            "education",
            "figma",
            "software",
            "nextjs",
            "react",
            "ui",
            "ux"
          ],
        "orientation": "any",
        "display": "standalone",
        "dir": "auto",
        "lang": "en-US",
        "description": "A project to practice implementing a Figma design using React, focused on improving frontend development skills.",
        "name": "Figma UI Clone with Nextjs",
        "short_name": "FigmaWithNextjs"
      }
      
  }