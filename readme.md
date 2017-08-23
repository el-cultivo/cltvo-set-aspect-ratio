# cltvo-set-aspect-ratio

  Funcion para dar ratios fácilmente, en el window.load se puede registar con cualquier selector.

  El nodo que tiene al selector debe también contener el attributo data-ratio con un string en el siguiente formato <width>:<height>

## Instalación
`npm i cltvo-set-aspect-ratios -S`

## Uso

```
//main.js
import $setAspectRatios from 'cltvo-set-aspect-ratios'
$setAspectRatios($, '.my-ratio')//aplica para todos los tags que tenga la clase "my-ratio"
```

html: `<div class="my-ratio" data-ratio="16:9"></div>`

 Con ello, por cada nodo sólo hay que agregar la clase y el data-ratio
