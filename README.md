# React Book

La aplicación se encuentra alojada en un repositori de github [github-repository](https://github.com/kvzon1984/React-Book).

## Levantar aplicación

Para poder levantar la aplicación lo promero es crear una carpeta donde guste y descargar o clonar la rama master desde github.

Nota: En el caso de descargar la aplicación debe descomprimir el archivo

Abra el archivo en su editor de texto favorito y dirijase a la raiz del proyecto

## Instalar paquetes (Dependencias)

Una vez en la raiz del proyecto necesitamos instalar las dependecias

Abra una terminal copie y pegue el siguiente comando:

```bash
npm install
```

    Nota: esto generara un fichero node_modules y un archivo package-lock.json en la raiz del proyecto

## Levantando el proyecto

Ya estamos en condiciones para levantar el proyecto

Para levantar el proyecto copie y pegue el siguiente comando:

```bash
npm start
```

Esto ejecuta la aplicación en modo de desarrollo.
Abra su navegador web y pegue la siguiente url http://localhost:3000 para verlo en su navegador.

## Corriendo los test unitarios

Para correr los test debe parar la terminal si es que esta corriendo **cltr + c** y bastaria con simplemente estando en la raiz del proyecto copiar y pegar el siguiente código en la terminal:

```bash
npm test
```

Pasa salir del modo test presione **cltr + c**

## Dependencias Utilizadas (Paquetes)

#### "@fortawesome":
Paquete que permite crear y administrar íconos, aumentando la velocidad del sitio web ya que carga solo los íconos que se utilizan en la aplicación. Iconos personalizados entre otros beneficios. [Mas información](https://fontawesome.com/)

#### "@headlessui":
Es un conjunto de componentes de interfaz de usuario completamente accesibles y sin estilo, diseñados para integrarse a la perfección con Tailwind CSS. [Mas información](https://headlessui.com/)

#### "tailwindcss":
Es una herramienta que nos permite dar estilos a nuestros sitios web de forma mas rapida y simple. [Mas información](https://tailwindcss.com/)

#### "@testing-library":
Utilidades de prueba simples y completas que fomentan las buenas prácticas de prueba, es una herramienta para poder realizar los test de una forma en el un usuario interactua con la aplicación . [Mas información](https://testing-library.com/)

#### "axios":
Axios es un cliente HTTP simple basado en promesas para el navegador y node.js. Axios proporciona una biblioteca fácil de usar en un paquete pequeño con una interfaz muy extensible. [Mas información](https://axios-http.com/)

#### "date-fns":
date-fns proporciona el conjunto de herramientas más completo, pero simple y consistente para manipular fechas de JavaScript en un navegador y Node.js. [Mas información](https://date-fns.org/)

#### "formik":
Formik es la biblioteca de formularios de código abierto más popular del mundo para React y React Native, Formik viene con soluciones probadas en batalla para validación de entrada, formateo, enmascaramiento, arreglos y manejo de errores. Esto significa que pasa menos tiempo escribiendo código de formulario y más tiempo construyendo su próxima gran cosa. [Mas información](https://formik.org/)

#### "react-router-dom":
React Router es una librería que se utiliza bastante con React y que nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación. Al igual que el propio React, esta librería (react router) usa una metodología declarativa en vez de imperativa. Es decir, mantiene los principios básicos de React y escribe un código declarativo para manejar los cambios producidos en la URL. [Mas información](https://reactrouter.com/en/main)

#### "react-table":
Se trata de una de las librerías más utilizadas para la creación y gestión de tablas con React. [Mas información](https://tanstack.com/table/v8/?from=reactTableV7&original=https://github.com/TanStack/table/tree/v7/docs/src/pages/)

#### "sweetalert2":
Es una libreria que nos permite manejar ventanas emergentes de javascript esto nos permite personalizar los cuadros emergentes de nuestra aplicación. [Mas información](https://sweetalert2.github.io/)

#### "jest":
Jest es un marco de prueba de JavaScript encantador que se centra en la simplicidad. [Mas información](https://jestjs.io/)


## Observaciones

### ¿Porque decidí las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Bueno, lo que realicé fue crear 3 carpetas: Component, Context y Helpers. Esto me ayuda a separar la lógica y las vistas, y a su vez me ayuda en el desarrollo de los tests, ya que hace más fácil probar los componentes.

- **Component:** contiene en su interior todos los archivos que son una vista (pages, screen) de la aplicación.

- **Context:** En su interior están todos los archivos que, ya sea, crean el contexto como el proveedor de estos contextos.

- **Helpers:** Esta carpeta tiene los archivos más pequeños, como por ejemplo, componentes de botones, inputs, footer; en pocas palabras, son los componentes que se utilizan en las vistas.

Es importante mencionar que esta estructura mejora la organización del proyecto y facilita el mantenimiento a medida que crece la aplicación. Además, al utilizar un nombre consistente para las carpetas, es más sencillo para otros desarrolladores entender la estructura y colaborar en el proyecto de manera efectiva.

### ¿Hay alguna mejora que dejaste pendiente de hacer en su envío?

De todas maneras, habrían muchas cosas por mejorar. Una de ellas es incluir Storybook, ya que se me hizo poco el tiempo para poder leer más sobre esta tecnología.

Además, implementar TypeScript, esto me permitiría prever errores a futuros y crear entidades del cómo se verán los libros una vez consumida la API, sin importar de dónde vengan.

Es importante tener en cuenta que el uso de TypeScript en el desarrollo de la aplicación proporciona una capa adicional de seguridad en el tipado, lo que facilita la detección temprana de errores y aumenta la calidad y robustez del código. También permite una mejor documentación del código y una mayor facilidad para refactorizar y mantener el proyecto a medida que este crece.

En resumen, estas mejoras en la aplicación contribuirían a una mejor experiencia de desarrollo y un código más sólido y escalable.


### ¿Qué harías de manera diferente si se le asignara más tiempo?


Sí, lo que haría distinto sería partir desde un principio e implementar TypeScript. Aunque inicialmente lo intenté, llegué a un punto en el que lo deseché y comencé otro proyecto sin TypeScript, ya que todavía me cuesta manejar los tipos de manera adecuada.

Implementar TypeScript desde el inicio del proyecto me proporcionaría una mayor seguridad y claridad en el código al definir los tipos de datos de manera explícita. También facilitaría la identificación de posibles errores en tiempo de desarrollo y mejoraría la documentación del código, lo que sería especialmente valioso a medida que la aplicación crece y se vuelve más compleja.

Aunque el aprendizaje de TypeScript puede requerir tiempo y esfuerzo, los beneficios a largo plazo en términos de mantenibilidad y calidad del código justificarían la inversión inicial. Por lo tanto, en futuros proyectos, priorizaría la implementación de TypeScript desde el inicio y me esforzaría por mejorar mi comprensión y manejo de los tipos para aprovechar al máximo sus ventajas.

### Dependencias adicionales

Se agregaron algunas dependencias que no estaban en los requerimientos originales, las cuales son:

- @fortawesome: Esta librería nos permite trabajar de una mejor forma con iconos, facilitando la incorporación de iconografía de manera rápida y sencilla a la aplicación.

- date-fns: Se utilizó esta dependencia para trabajar con fechas de una manera más sencilla. Se empleó para dar formato a las fechas y hacerlas más legibles y comprensibles para los usuarios.

- sweetalert2: Es importante mantener al cliente informado sobre las acciones y procesos que se llevan a cabo en la aplicación. Esta librería nos permite manejar las alertas o ventanas emergentes de una manera simple y rápida, mejorando la experiencia del usuario.

Estas dependencias adicionales se incluyeron para agregar funcionalidades y mejorar la usabilidad de la aplicación en general. Al utilizarlas, se pudo lograr un desarrollo más eficiente y una mejor experiencia para los usuarios.



