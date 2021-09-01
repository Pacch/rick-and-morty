

## Rick and Morty

una aplicacion para buscar los personajes de Rick and Morty
```
Demo [https://rick-and-morty-blush.vercel.app](https://rick-and-morty-blush.vercel.app)._
```
#### Instalacion:  

clonar este repositorio. Nececitas `node` y `npm` instalado globalmente.


Instalación:
```
npm install o yarn install
```  

Correr test  
```
npm test o yarn test 
```
Levantar servidor
```
npm start  o yarn start 
```

## Imagenes del proyecto


[ ![241089193_207572731351905_9046596609163907940_n](https://user-images.githubusercontent.com/8399289/131635527-9d7bfe4b-b726-4fe3-a570-b87ead393a4f.png) ]


## Estructura de carpetas

 📂 __rick\-and\-morty__
   - 📄 [README.md](README.md)
   - 📄 [package.json](package.json)
   - 📂 __public__
     - 📄 [favicon.ico](public/favicon.ico)
     - 📄 [index.html](public/index.html)
   - 📂 __src__
     - 📂 __@domain__
       - 📂 __Character__
         - 📂 __Entities__
         - 📂 __Infrastructure__
         - 📂 __Repositories__
         - 📂 __UseCases__
       - 📂 __\_config__
       - 📂 __\_shared__
         - 📂 __Fetcher__
     - 📂 __assets__
       - 📂 __images__
     - 📂 __components__
       - 📂 __BackToTop__
         - 📄 [index.test.tsx](src/components/BackToTop/index.test.tsx)
         - 📄 [index.tsx](src/components/BackToTop/index.tsx)
       - 📂 __Button__
       - 📂 __Icon__
       - 📂 __Layout__
       - 📂 __Loading__
       - 📂 __PageNotFound__
     - 📂 __features__
       - 📂 __Home__
         - 📂 __components__
           - 📂 __CardItem__
             - 📄 [index.test.tsx](src/features/Home/components/CardItem/index.test.tsx)
             - 📄 [index.tsx](src/features/Home/components/CardItem/index.tsx)    
           - 📂 __Characters__
           - 📂 __LoadingCard__
           - 📂 __LoadingCards__
           - 📂 __Pagination__
           - 📂 __SearchForm__
         - 📂 __hooks__
       - 📂 __types__
     - 📂 __helpers__
     - 📂 __hooks__
     - 📂 __routes__
     - 📂 __state__
     - 📂 __styles__