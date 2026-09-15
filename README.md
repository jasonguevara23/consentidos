# Clínica Veterinaria ConSentidos

Proyecto de ejemplo del Módulo I de **Desarrollo de Software V**.
Es el hilo conductor de las Unidades 1 y 2: sobre este sitio se practica
cada comando de Git.

El sitio funciona: abre `index.html` en el navegador y verás la lista de
servicios generada por JavaScript.

## Dónde colocarlo

Copia la carpeta `consentidos` en:

    D:\DSV_Ejemplos\consentidos

Esta ruta se usa en todos los ejemplos de la Unidad 2. Si eliges otra,
recuerda ajustar los comandos `cd`.

## Estructura

    consentidos\
    ├── index.html            22 líneas
    ├── README.md
    ├── .gitignore
    └── assets\
        ├── css\estilos.css   54 líneas
        ├── js\app.js         40 líneas
        └── img\logo.svg

El paquete **no incluye** la carpeta `.git`. Eso es deliberado: el primer
ejercicio de la Unidad 2 es crear el repositorio tú mismo con `git init`.

## Las cuatro versiones del ejemplo

La guía construye el historial en cuatro pasos. Este paquete corresponde al
estado previo a la versión 1.

| Versión | Qué se hace | Mensaje de confirmación |
|---|---|---|
| 1 | Registrar el sitio tal como viene en este paquete | `feat: crear estructura inicial del sitio de ConSentidos` |
| 2 | Agregar la sección de horarios de atención a `index.html` | `feat: agregar seccion de horarios de atencion` |
| 3 | Sustituir `innerHTML = ""` por un bucle en `app.js` | `refactor: vaciar la lista sin reasignar innerHTML` |
| 4 | Insertar el logotipo en el encabezado de `index.html` | `feat: mostrar el logotipo en el encabezado` |

`logo.svg` ya está en la carpeta pero todavía no se usa en el HTML: la
versión 4 consiste precisamente en insertarlo.

### Versión 2 — sección de horarios

Dentro de `<main>`, después de la sección de servicios:

```html
    <section class="horarios">
      <h2>Horarios de atención</h2>
      <p>Lunes a viernes: 8:00 a. m. a 6:00 p. m.</p>
      <p>Sábados: 8:00 a. m. a 12:00 m.</p>
      <p>Domingos y feriados: solo urgencias</p>
    </section>
```

`index.html` pasa de 22 a 28 líneas.

### Versión 3 — el ejemplo de instantánea y diferencia

En `app.js`, dentro de `mostrarServicios`, se reemplaza esta línea:

```js
  contenedor.innerHTML = "";
```

por estas tres:

```js
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
```

`app.js` pasa de 40 a 42 líneas. `git diff --stat` reporta exactamente
**3 inserciones y 1 eliminación**, que es el caso numérico que analiza la
Unidad 1 al distinguir instantánea de diferencia.

En ese punto el proyecto suma 124 líneas: 28 en `index.html`, 54 en
`estilos.css` y 42 en `app.js`.

### Versión 4 — el logotipo

En el encabezado de `index.html`, antes del `<h1>`:

```html
    <img src="assets/img/logo.svg" alt="Logotipo de ConSentidos" class="logo">
```

La regla `.logo` ya está en `estilos.css`, así que no hace falta tocar la
hoja de estilos.

## Nota sobre .gitignore

Viene preparado para un proyecto web e incluye las exclusiones que también
usa el laboratorio del módulo: la carpeta de configuración del editor, los
archivos de espacio de trabajo, las dependencias, los compilados y los
archivos que genera el sistema operativo.
