# 2024-05-30: segundo encargo

## Insertando archivos p5.js en HTML

Para insertar archivos p5.js dentro de un archivo HTML, hay que seguir estos pasos:

1. Crear dos archivos en tu editor de código:
    - ```index.html:``` esta será la página predeterminada que se mostrará en tu sitio web.
    - ```sketch.js:``` contendrá tu codigo p5.js.
      
2. Enlazar los archivos:
     - Una vez creados los archivos, incluir ```sketch.js``` y ```p5.min.js``` dentro del archivo ```index.html```.

```html
<!DOCTYPE html>
<html lang="es"></html>
<head>
    <title>Mi sitio web</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.1.2/lib/p5.min.js"></script>
    <script src="sketch.js"></script>
</head>
<body>
    <h1>Bienvenido a mi sitio web</h1>
    <p>Este es el contenido de mi sitio web.</p>
</body>
</html>
```
  - La línea de código ```p5.min.js``` es la responsable de cargar la biblioteca p5.js en la página web. **Es fundamental para ejecutar cualquier sketch de p5.js en un navegador web:**

![html en la web](./htmlWeb.png)

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.1.2/lib/p5.min.js"></script>
```
3. Escribir el código p5.js:
     - En el archivo ```sketch.js```, escribir el código p5.js.
```JavaScript
function setup() {
  createCanvas(windowWidth, 400);
  background(0);
}

function draw() {
  ellipse(100, 100, 50, 50);
}
```
  - El tamaño del lienzo puede variar según las necesidades de visualización en la web. Para utilizar el ancho completo de la pantalla, usamos la función ```windowWidth```, así el sketch se adaptará automáticamente al ancho de la ventana del navegador cuando la ventana sea redimensionada.
```JavaScript
 createCanvas(windowWidth, 400);
```

![js en la web](./jsWeb.png)

- Ejemplo con una animación:

![ejemplo](./ejemplo.gif)