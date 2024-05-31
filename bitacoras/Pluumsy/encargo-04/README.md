# Desarrollo galería de imágenes
## 2024-05-31: encargo 4 

### **Objetivo**:
Crear un sistema de galería de imágenes utilizando herramientas de programación que permita a los usuarios cargar imágenes y visualizarlas en una interfaz amigable.


----
### Desarrollo

![imagen formulario](encargo-04/imagenesReadme/IMG_0673.jpg)

 ### Node.js:
Es un entorno de ejecución de JavaScript de lado del servidor construido sobre el motor de JavaScript V8 de Google Chrome. Node.js proporciona un entorno de ejecución altamente eficiente y asíncrono, lo que lo hace ideal para aplicaciones de red escalables y de alta concurrencia.

 **npm**: Responde a las siglas de Node Package Manager o manejador de paquetes de node, es la herramienta por defecto de JavaScript para la tarea de compartir e instalar paquetes.
 



### Paquetes npm

- **express**: es el framework backend más popular para Node.js, y es una parte extensa del ecosistema JavaScript. Está diseñado para construir aplicaciones web.
- **ejs**: Easy Java Simulators (en adelante, Ejs) es una herramienta de software diseñada para la creación de simulaciones discretas por ordenador.
- **fs-extra**:   agrega métodos de sistema de archivos que no están incluidos en el fsmódulo nativo y agrega soporte de promesa a los fsmétodos.
- **Mongoose**: es una biblioteca de programación orientada a objetos - JavaScript que crea una conexión entre MongoDB  y el entorno de ejecución de JavaScript Node.js 
- **Morgan**: ayuda en la consola lo que recibo en el servidor 
- **Multer**: es un middleware de node.js para el manejo multipart/form-data, que se utiliza principalmente para cargar archivos .

- **Uuid**: Permite generar un id aleatorio

### MongoDB
 Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.

-----
### Creación de archivos
- **index.js**: maneja el inicio de la aplicación, el enrutamiento y otras funciones.
- **database.js**: hacer conexión con la base de datos.

### Creación de carpetas Carpetas
- Models: para guardar los modelos.
- Public: para guardar imágenes públicas.
- Routes: para definir las rutas del servidor. 
- Views: para formulario en donde se subirán imágenes, imágenes listadas.
------
### Elaboración de rutas

- Se crea un enrutador de Express para manejar las solicitudes HTTP entrantes.
- Se importa el modelo de imagen desde el archivo correspondiente en el directorio de modelos.
- Se definen varias rutas para mostrar páginas y manejar la subida y eliminación de imágenes.

### Creación del formulario
![imagen formulario](imagenesReadme/IMG_1259.jpg)

- Se utiliza Bootstrap para el diseño responsivo y la apariencia del formulario de carga de imágenes.
- El formulario tiene un campo de entrada de archivos que permite a los usuarios seleccionar una imagen para subir.

### Almacenar en la base de datos
- Se define un esquema de Mongoose para el modelo de imagen, que describe la estructura de datos de un documento de imagen.
- El esquema incluye campos como título, descripción, nombre de archivo, tipo de archivo, tamaño y fecha de creación.
- El modelo de imagen se exporta para que pueda ser utilizado por otros archivos de la aplicación para interactuar con la base de datos MongoDB.

-----
### ¿Cómo subirla?
![imagen formulario](imagenesReadme/subida2.jpg)

