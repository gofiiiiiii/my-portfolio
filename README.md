# Portfolio — Gopi Krishna N

Personal portfolio site. React + Vite + Tailwind, deployed to Azure App Service.

Showcases 20 applied machine learning, computer vision, NLP and full stack projects,
each with results measured on held-out data. Source for all of them:
**[gopi-krishna-ai/internship-projects](https://github.com/gopi-krishna-ai/internship-projects)**

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Structure

| Path | What it holds |
|---|---|
| `src/App.jsx` | The whole page — nav, hero, about, projects, skills, contact |
| `src/data/projects.js` | Project list, metrics, skills and stats. **Edit this to add a project** — no component changes needed |
| `src/index.css` | Tailwind entry, plus the dark background and reduced-motion handling |

Every metric in `projects.js` matches the corresponding `model/metrics.json` in the
projects repository. If you update a model, update the number here too.
