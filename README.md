# Axiom Digital — axiomadigital.tech

Sitio bilingüe (ES/EN) en Astro + Tailwind, listo para Cloudflare Pages.

## Antes de nada: 4 valores que hay que rellenar

Todo lo editable está en un solo archivo: **`src/config.ts`**

| Valor | Qué poner | Dónde se saca |
|---|---|---|
| `TELEGRAM_URL` | El enlace de tu bot | `https://t.me/nombre_de_tu_bot` |
| `WEB3FORMS_KEY` | La access key del formulario | web3forms.com → pones tu correo → te la manda |
| `CONTACT_EMAIL` | Tu correo de Namecheap | el buzón de Private Email |
| `LINKEDIN_URL` | Tu perfil | tu URL de LinkedIn |

Sin la key de Web3Forms el formulario no envía nada. Es gratis y no requiere cuenta:
en su web pones el correo de destino (el de Namecheap) y te devuelven la key.

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`

## Publicar

```bash
npm run build
```

Genera `dist/`. En Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Luego conectas el dominio `axiomadigital.tech` desde el panel

## Estructura

```
src/
  config.ts              ← los 4 valores de arriba
  i18n/ui.ts             ← TODO el texto, en ES y EN
  layouts/Layout.astro   ← head, meta tags, SEO
  components/
    Nav.astro            ← navbar + selector de idioma + CTA fijo en móvil
    Hero.astro           ← titular, demo del asistente, barra de proyectos
    Services.astro       ← dolores + los 3 servicios
    Cases.astro          ← Kalkulos, Nexum, Asistente + testimonios
    ProcessFaq.astro     ← 4 pasos + las 10 preguntas
    Contact.astro        ← formulario vertical + envío a Web3Forms
    Footer.astro
  pages/
    index.astro          ← español (/)
    en/index.astro       ← inglés (/en/)
```

## Cambiar textos

Todo el copy vive en `src/i18n/ui.ts`, con las dos versiones juntas.
Las FAQ están abajo del mismo archivo, en el objeto `faq`.
No hay texto suelto dentro de los componentes.

## Imágenes

Van en `public/`. Falta subir:

- `og.png` — 1200×630, es la imagen que se ve al compartir el enlace
- Las de secciones cuando las elijamos (sin marcas de agua)

## Pendientes anotados

- Datos legales mínimos en el footer (decidir qué poner)
- Keep-alive de Supabase con GitHub Actions, si algún día hace falta base de datos
