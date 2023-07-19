# Cómo empezar?

0. **Ten instalado node**<br>
   Para chequear si lo tienes instalado:

```
 npm -v
```

\*Version recomendada 16.14.2 o mayores a esta.<br>
En caso de no tenerlo instalalo: [descargalo desde el sitio oficial de node](https://nodejs.org/es)

1. **Clona el repositorio**:

#### Https:

     ```
    git clone https://github.com/..
    ```

#### Ssh:

    ```
    git clone git@github.com:..
    ```

2. **Muevete al directorio** donde hayas clonado el repo.

3. **Instala las dependencias**: (solo la primera vez)

```
npm i
```

4. **Ejecuta Cypress**

```
npx cypress open
```

5. **Configura Cypress**
   Inmediatamente despues de ejecutar el comando se abrira una interfaz, donde debes colocar: <br>`E2E Testing > Elegir un navegador > click en "Start E2E Testing in <navegador seleccionado>" > Dentro de cypress/e2e selecciona un test`