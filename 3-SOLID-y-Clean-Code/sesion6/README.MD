## Configuración node.js y ts

Esta es una de la formas de comenzar un proyecto con node.js y ts.

1. Primero hay que correr el comando `npm init` o `npm init -y` (para crearlo de forma predeterminda). El cual nos descarga la carpeta de node_modules y también crea el archivo `package.josn`.

   #### configuración del package.json:

   ```json
   {
     "name": "firstprojectnode",
     "version": "1.0.0",
     "description": "",
     "main": "index.js", //archivo que inicializará los demás.
     "scripts": {
       "build": "tsc", //Equivalente a npx tsc (si tengo ts local o gobalmente),compila todo lo de src de ts a js.
       "start": "node ./dist/index.js", //corre el JS compilado en dist/index.js
       "dev": "tsx ./src/index.ts" // para ver cambios en tiempo real de ts.
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "type": "module", //Se pone module para usar export & import.
     "devDependencies": {
       //aparecen al instalar ts y types/node que nos indica el tsconfig
       "@types/node": "24.6.0",
       "ts-node": "10.9.2",
       "typescript": "5.9.2"
     }
   }
   ```

2. Luego instalamos TypeScript con el comando `npm install -D typescript` o `npm i -D typescript`. El **-D** del comando le indica a npm que lo instale en la sección de dependencias.

   Después podremos ejecutar el comando de `npx tsc --init` para inicializar TypeScript y que se nos cree el archivo de tsconfig.json y hacemos los siguientes cambios en ese archivo (los cambios son los que tienen `--->` en el comentario):

   ```json
   {
     // Visit https://aka.ms/tsconfig to read more about this file
     "compilerOptions": {
       // File Layout
       "rootDir": "./src", //---> descomento esta que indica donde estará mi código fuente.
       "outDir": "./dist", //---> descomento esta que indica donde saldrá el código compilado.
       // Environment Settings
       // See also https://aka.ms/tsconfig/module
       "module": "nodenext", //---> Le dice a TypeScript qué tipo de sistema de módulos usar al compilar
       "target": "esnext", //----> significa "Compila al JavaScript más moderno posible según el entorno actual"
       "esModuleInterop": true, //
       // For nodejs:
       "lib": ["esnext"], //---> descomento esta para node
       //descomento "types": ["node"] y elimino el que esta descomentado
       "types": ["node"], //---> agrego esta para que trabaje con node
       // and npm install -D @types/node --> corro este comando luego para que ts entienda a node y sus variables.
       // Other Outputs
       "sourceMap": true,
       "declaration": true,
       "declarationMap": true,
       // Stricter Typechecking Options
       "noUncheckedIndexedAccess": true,
       "exactOptionalPropertyTypes": true,
       // Style Options
       // "noImplicitReturns": true,
       // "noImplicitOverride": true,
       // "noUnusedLocals": true,
       // "noUnusedParameters": true,
       // "noFallthroughCasesInSwitch": true,
       // "noPropertyAccessFromIndexSignature": true,
       // Recommended Options
       "strict": true
       //"jsx": "react-jsx", ----> esta linea no es necesaria porque es para react.
       //"verbatimModuleSyntax": true,----> estas líneas son utiles en front.
       //"isolatedModules": true,----> estas líneas son utiles en front.
       //"noUncheckedSideEffectImports": true,----> estas líneas son utiles en front.
       //"moduleDetection": "force",  ---> eliminar.
       //"skipLibCheck": true ----> eliminar
     }
   }
   ```

   Una vez ya tenemos el tsconfig.json de esta manera corremor el comando `npm install -D @types/node` que el mismo archivo ya nos indica para que ts pueda entender los comandos, variables y funciones que vienen en node.js

3. instalamos tsx con el comando `npm i -D tsx`para correr el archivo index.ts (o main.ts) como si fuera js, pero solo como dependencia de desarrollo ya que esto no es recomendable y no se usa en producción.

4. Finalmente creamos la carpeta `/src` y podremos organizar y crear todos los archivos de nuestro proyecto ahí.

#### Luego ya podemos ejecutar los comandos:

````bash
npm run build   # compila TS -> JS en dist (crea la carpeta dist si no existe)
npm start       # corre el JS compilado en dist/index.js
npm run dev     # opcional: mantiene TS en watch mode y recompila al cambiar```
````
