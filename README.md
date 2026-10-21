# folio. Currículum personal en Astro

Proyecto estático construido con Astro. Contenido en español, tema blanco predeterminado, tema negro opcional y formato de impresión para guardar como PDF.

## Personalizar

Edita `src/data/perfil.js`. Los textos actuales son campos de ejemplo; reemplázalos por tus datos reales. Puedes añadir o quitar experiencia, estudios, proyectos y habilidades. Deja `email`, `github`, `linkedin` o la URL de un proyecto vacíos para ocultar sus enlaces. Usa URLs completas con `https://`.

El contenido se genera durante la compilación: se puede leer sin JavaScript. JavaScript solo controla el tema y la impresión. El tema claro se usa en la primera visita; si eliges oscuro, se recuerda en ese navegador. Esta preferencia es independiente de la versión HTML anterior.

## Ejecutar localmente

Requiere Node.js 22.12 o superior compatible con Astro y npm.

```sh
npm ci
npm run dev
```

Abre la URL que muestra la terminal. Para comprobar la versión de producción:

```sh
npm run build
npm run preview
```

## Publicar en GitHub Pages

1. Crea un repositorio público nuevo (por ejemplo `mi-cv` o `TU-USUARIO.github.io`).
2. Sube el CONTENIDO de esta carpeta: `package.json` debe quedar en la raíz del repositorio. Incluye `package-lock.json`, `src`, `astro.config.mjs` y, especialmente, `.github/workflows/deploy.yml`. No subas el ZIP como un único archivo.
3. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**. Esta versión Astro NO usa “Deploy from a branch”.
4. El workflow se ejecuta al guardar cambios en `main`. Si ya subiste todo, ve a **Actions → Publicar currículum → Run workflow**.
5. Espera a que termine. El enlace público aparece en Settings → Pages y en el despliegue.

El workflow toma de GitHub Pages la URL y la subruta del repositorio automáticamente. Funciona tanto con `TU-USUARIO.github.io` como con `mi-cv`. Para actualizar el CV, modifica `src/data/perfil.js` y guarda el cambio en `main`.

Si usas Git desde tu ordenador, crea primero el repositorio vacío y sigue los comandos que GitHub muestra para subir un proyecto existente; `git add .` incluirá también la carpeta oculta `.github`.

Documentación oficial: https://docs.astro.build/es/guides/deploy/github/

## Diseño y archivos

- `src/pages/index.astro`: plantilla y contenido generado en Astro.
- `src/data/perfil.js`: tus datos.
- `src/styles/global.css`: colores, composición adaptable e impresión.
- `.github/workflows/deploy.yml`: compilación y publicación.

Se recuperó el primer diseño: barra siempre a la izquierda, presentación sin serif y proyectos con ilustraciones geométricas. La marca es folio, con la firma pequeña made by diego lobos. En pantallas estrechas la barra se hace más angosta, pero no pasa arriba. No se incorporó código, fotografías, logotipos, fuentes ni otros archivos del ZIP de Astrofy. Esto describe la implementación; no constituye una garantía legal sobre derechos de terceros.

El botón Guardar CV / PDF abre la impresión del navegador: selecciona Guardar como PDF. El proyecto está preparado para publicar, pero todavía no está subido ni desplegado en tu cuenta.


## Verificación de esta entrega

Compilación estática comprobada con Astro 6.4.8 en raíz y subruta /mi-cv. Por una restricción del compilador nativo en este entorno Windows, la verificación local usó esbuild WebAssembly. Esa adaptación no forma parte del proyecto entregado, que conserva las dependencias estándar para GitHub Actions. Tema claro inicial y persistencia del tema oscuro comprobados en navegador. El despliegue real en GitHub queda pendiente.


