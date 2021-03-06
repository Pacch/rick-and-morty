

## Rick and Morty

una aplicacion para buscar los personajes de Rick and Morty

- Demo [https://rick-and-morty-blush.vercel.app](https://rick-and-morty-blush.vercel.app).

#### Instalacion:  

clonar este repositorio. Nececitas `node` y `npm` instalado globalmente.


InstalaciΓ³n:
```
yarn install
```  

ejecutar test  
```
yarn test 
```
Levantar servidor
```
yarn start 
```

## Imagenes del proyecto


![241089193_207572731351905_9046596609163907940_n](https://user-images.githubusercontent.com/8399289/131635527-9d7bfe4b-b726-4fe3-a570-b87ead393a4f.png)


## Estructura de carpetas

 π __rick\-and\-morty__
   - π [README.md](README.md)
   - π [package.json](package.json)
   - π __public__
     - π [favicon.ico](public/favicon.ico)
     - π [index.html](public/index.html)
   - π __src__
     - π __@domain__
       - π __Character__
         - π __Entities__
         - π __Infrastructure__
         - π __Repositories__
         - π __UseCases__
       - π __\_config__
       - π __\_shared__
         - π __Fetcher__
     - π __assets__
       - π __images__
     - π __components__
       - π __BackToTop__
         - π [index.test.tsx](src/components/BackToTop/index.test.tsx)
         - π [index.tsx](src/components/BackToTop/index.tsx)
       - π __Button__
       - π __Icon__
       - π __Layout__
       - π __Loading__
       - π __PageNotFound__
     - π __features__
       - π __Home__
         - π __components__
           - π __CardItem__
             - π [index.test.tsx](src/features/Home/components/CardItem/index.test.tsx)
             - π [index.tsx](src/features/Home/components/CardItem/index.tsx)    
           - π __Characters__
           - π __LoadingCard__
           - π __LoadingCards__
           - π __Pagination__
           - π __SearchForm__
         - π __hooks__
       - π __types__
     - π __helpers__
     - π __hooks__
     - π __routes__
     - π __state__
     - π __styles__