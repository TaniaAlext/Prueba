let swLocation ="sw.js"
//En le primer if se identifica si el navegador trabaja con serviceworker
if(navigator.serviceWorker){
    //en el segundo if se identifica en que servidor se corre la pagina
    if(window.location.href.includes("localhost"))
    swLocation="/sw.js"
    //registra l UBICACION 
    navigator.serviceWorker.register(swLocation);
}