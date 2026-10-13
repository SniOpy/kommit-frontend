# kommit-frontend

Frontend de Kommit : une application React + TypeScript (Vite, Tailwind, shadcn/ui) qui consomme l'API du repo `kommit-backend`.

## Arborescence

Cette arborescence évolue avec le projet : ce fichier doit être mis à jour à chaque modification de la structure du repo.

```
kommit-frontend/
├── CLAUDE.md
├── .claude/
│   ├── rules/            # règles de code du repo
│   └── skills/           # skills du repo
├── docs/
│   └── TECH.md           # stack technique
├── public/               # fichiers servis tels quels
├── src/
│   ├── main.tsx          # point d'entrée
│   ├── App.tsx           # assemblage de l'app
│   └── index.css         # feuille de style globale (Tailwind)
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

Le découpage de `src/` est décrit dans `.claude/rules/architecture-frontend.md`.
