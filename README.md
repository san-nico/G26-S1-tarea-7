# Pokedex - Buscador de Pokémon

Aplicación web para explorar y buscar Pokémon mediante la PokéAPI.

## 📋 Descripción

Desarrollada con **HTML**, **CSS**, **JavaScript** y **EJS**. Consume datos de la PokéAPI para mostrar información de los Pokémon.

## ✨ Características

* Listado de 20 Pokémon por página.
* Navegación entre páginas.
* Visualización de detalles en un modal.
* Uso de hash routing para mantener el estado.
* URLs compartibles para páginas y Pokémon específicos.
* Diseño responsive.

## 🚀 Tecnologías

* HTML5
* CSS3
* JavaScript ES6+
* EJS
* PokéAPI v2
* Font Awesome 6.5
* Fetch API

## 🎮 Uso

1. Abrir `index.html` en el navegador.
2. Navegar entre páginas con los botones de paginación o ingresando un número de página.
3. Buscar un Pokémon mediante su ID.
4. Hacer clic en una tarjeta para ver sus detalles.

### Ejemplos de URL

* `#pagina=2`
* `#pokemon=25`

## 🌐 API

**Base URL**

```text
https://pokeapi.co/api/v2/pokemon
```

**Endpoints**

```text
?limit=20&offset=0
/{id}
```

**Documentación**

https://pokeapi.co/docs/v2
