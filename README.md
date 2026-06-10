# CV Generator

Este repositorio mantiene múltiples variantes del CV según el tipo de búsqueda.

## Branches

- `main`: versión principal orientada a DevOps/Cloud.
- `python-aws`: versión orientada a Python Backend + AWS.

## Flujo recomendado

1. Actualizar contenido base en `main`.
2. Llevar cambios compartidos a otras variantes con `git cherry-pick <commit>`.
3. Ajustar el enfoque de cada branch sin perder consistencia.

## Build local

```bash
pnpm tsx index.ts
```

Genera:

- `inaqui-paladino-cv-es.pdf`
- `inaqui-paladino-cv-en.pdf`

## Deploy

El workflow de GitHub Actions (`.github/workflows/cv-build-upload.yml`) está configurado para correr **solo con push a `main`**.
