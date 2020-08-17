/* Accesibilidad para subir, comandos de voz */
/* Variables globales */
var deletreo = "";
var texto="";
var siguiente="";
responsiveVoice.setDefaultVoice("Spanish Latin American Female");
window.addEventListener('load', ejecutarArtyom);
function ejecutarArtyom() {
        artyom.initialize({
        lang: "es-ES", // idioma nativo para reproducción del lector
        continuous: false, // Evitar el reconocimiento ya que usamos la herramienta annyang
        listen: false, // Iniciar TODO: Esta variable con FALSE permite desactivar el sintetizador de Artyom, pues usamos annyang para ese propósito !
        debug: true, // Muestra un informe en la consola
        speed: 1.0 // Velocidad normal con  1  
        });
        /*
            document.getElementById('subir-submit').onclick=function(){artyom.say("Tu publicación se ha enviado con éxito, visita tu perfil para visualizarla y recuerda hacer click en mostrar todo para ver su contenido")};

        */
        let mensaje=document.getElementById('mensaje_pagina_principal').value;
        artyom.say(mensaje+". Te encuentras en la sección principal, en la sección de cabecera se encuentra el acceso a la página principal, una sección de búsqueda, solicitudes, notificaciones, acceso al perfil, en el cuerpo del documento se encuentra el formulario para enviar una publicación, en la parte inferior una lista de tus publicaciones. Para control por voz pronuncia 'ayuda'. ");
        /*
               document.getElementById('mensaje_sesion_destroy').innerHTML='<?php echo \'mensaje_destruido\';$_SESSION[\'mensaje\']=\'\'; ?>'; 
        */
};
function ejecutar_ayuda() {
    artyom.say( "Te encuentras en la página principal, estructura con una cabecera con accesos directos en la parte superior, en la inferior un cuerpo del documento con la sección para subir una publicación seguido de la lista de publicaciones. Con comandos de voz pronuncia opción 1 o página principal, opción 2 o buscar, opción 3 o publicar, opción 4 o solicitudes, opción 5 o noticias, opción 6 o perfil, opción 7 o cerrar , opción 8 o para ocultar o mostrar el formulario para subir publicación, opción 9 para reproducir las publicaciones existentes, para poner un okay en una publicación pronuncia, poner okay en publicación uno, o dos , según corresponda, para una denuncia en una publicación pronuncia, poner denunciar en publicación uno, o dos , según corresponda. Disponible también comando ayuda para subir y comando ayuda para texto, adicional ayuda para sistemas híbridos, para recibir más ejemplos, pronuncia, ayuda de ejemplos");          
}
function ejecutar_ayuda_subir(){
    artyom.say('Los datos a introducir son: título, autor, fecha, categoría, resumen, introducción, contenido, conclusiones, referencias, subir archivo, y en el caso de agregar una descripción del archivo, pronuncia ese comando, al final se envia todo pronunciando, enviar publicación. Para crear varios párrafos de texto con citas, para el caso de categoría, resumen, introducción, contenido, conclusiones, referencias pronuncia. Ejemplo elemento  (seguido del número de elemento), seguido del tipo de input luego seguido de la palabra con: seguido de la información a suministrar, un ejemplo básico para crear el primer elemento de resumen sería: elemento 1 de resumen con. Seguido del dictado de texto, para crear una cita pronuncia, crear cita para, seguido del input ya sea este resumen, introducción, contenido, conclusiones. Para referencicas, pronuncia, crear referencia');
}
function ejecutar_ayuda_texto(){
    artyom.say("Para crear un texto, pronunciar crear texto seguido del texto a procesar, para deletrear una frase, pronunciar deletrear seguido del carácter a procesar, para pegar la frase de deletrear con el texto, pronuncia pegar deletrear en texto, para el caso de pegar un texto en algún input, pronunciar pegar  texto elemento número seguido del número de elemento seguido del nombre del input, ejm para pegar el texto creado en el primer input de resumen, sería, pegar texto en elemento 1 de resumen, nota: también se puede aplicar este proceso para los comentarios. Nota 2: La creación de texto se hace de forma iterativa, ejm comando, crear texto para acumular varias palabras e ir pegándolo con el deletreo y de esta forma crear frases complejas, para borrar ya sea para texto, deletrear, se pronuncia borrar seguido de alguno de ellos, para más ejemplos, pronuncia, ayuda de ejemplos");
}
function ejecutar_ayuda_ejemplos(){
    artyom.say("Los comandos de voz implican pronunciar palabras lentamente y de forma correcta, como ejemplos. 1. Para crear un texto de prueba, invocamos al comando de voz pronunciando crear texto, en este caso el texto herramientas de accesibilidad, notar que se puede seguir invocando el texto , podemos corregirlo pronunciando corregir texto, esta instrucción nos dará pautas para corregir ese texto. 2. Para deletrear, pronunciar deletrear seguido de la letra a invocar, ejemplo para construir la palabra Fabara lo hacemos con deletrear F mayúscula,  luego deletrear a, luego deletrear b grande, luego deletrear a, luego deletrear ere, luego deletrear a. 3. Para agregar texto en un elemento concreto de forma compleja, por ejemplo al crear una cita para resumen tendremos varios campos nuevos el texto a ingrezar en el 2do elemento de la sección del resumen el texto, texto escrito, pronunciamos elemento 2 de resumen con texto escrito");
}
function ejecutar_ayuda_sistema_hibrido(){
    artyom.say("Para utilizar el teclado braille para suministrar texto y para enfocar elementos con la voz, pronuncia ejemplo, enfocar elemento 1 de resumen, esto posicionará el cursor en el primer elemento de la categoría de resumen, esto aplica para cualquier input concreto");
}
function correccion(num, val){
    /* Corregir elementos de un texto actual */
    var indice=parseInt(num)-1;
    var texto_a_corregir=texto.split(" ");
    if(val==="deletrear")
        val=deletreo;
        texto_a_corregir[indice]=val;
        texto=""; /* variable global texto se actualizará por completo */
        console.log("El valor de texto_a_corregir[indice] es: "+texto_a_corregir[indice]);
        var aux2=texto_a_corregir;
    for(var i=0;i<aux2.length;i++){
        texto+=aux2[i]+" ";
    }
    texto=texto.trim(); //Eliminar los espacios en blanco en las secciones de los extremos de la cadena
    console.log("Posición de corrección:"+(indice+1)+", la corrección sería: "+val);
    artyom.say("Texto actual:"+texto);
    console.log("Texto actual:"+texto);
}
/* TODO: */
if (annyang) {
    annyang.setLanguage('es-ES');
    var commands = {
        'ayuda': () => {
            ejecutar_ayuda();
        },
        'ayuda para subir': () => {
            ejecutar_ayuda_subir();       
        },
        'ayuda para texto': () => {
            ejecutar_ayuda_texto();       
        },
        'ayuda de ejemplos': () => {
            ejecutar_ayuda_ejemplos();      
        },
        'ayuda para sistemas híbridos': () => {
            ejecutar_ayuda_sistema_hibrido();        
        },
        'pausar lector': () => {
            pausar_lector();
        },
        'reanudar lector': () => {
            reanudar_lector();
        },
        'cancelar lector': () => {
            cancelar_lector();
        },
        'leer solicitudes': () => {
            artyom.say(document.getElementsByName('solicitudes-acumuladas')[0].value);        
        },
        'leer notificaciones': () => {
            artyom.say(document.getElementById('notificaciones-acumuladas').value);         
        },
        'leer comentarios de publicación *clave': (clave) => {
            /* TODO: */
            clave=clave.replace('uno','1').replace('un','1').replace('dos','2').replace('tres','3').replace('cuatro','4').replace('cinco','5').replace('seis','6').replace('siete','7').replace('ocho','8').replace('nueve','9').replace(' ','');
            clave=parseInt(clave.charAt(0)); /* Conversión a entero */
            console.log("Lectura de comentarios de publicación "+clave);
            clave=clave-1;
            if(document.body.contains( document.getElementById('speech_post'+clave))){
                if((document.getElementsByName('comentarios-acumulados')[clave].value)!==""){
                    artyom.say(document.getElementsByName('comentarios-acumulados')[clave].value);
                    console.log((document.getElementsByName('comentarios-acumulados')[clave].value));
                }else{
                    artyom.say("No existen comentarios para la publicación"+clave);
                }
            }else{
                artyom.say("Comando no comprendido, volver a intentar");
                console.log("Comando no comprendido, volver a intentar");
            }        
        },
        'opción 1': () => {
            document.getElementById('vinculo_principal').click();        
        },
        'página principal': () => {
            document.getElementById('vinculo_principal').click();           
        },
        'opción 2': (value) => {
            console.log("opcion2 ejecutado");
            artyom.say("Pronunciar buscar, seguido de tu parámetro de búsqueda, para acceder, presionar la tecla enter");          
        },
        'buscar *value': (value) => {
            console.log("Estas buscando "+value+" presiona enter para acceder");
            artyom.say("Estas buscando "+value+" presiona enter para acceder");
            document.getElementById('busqueda').value=value;
            document.getElementById('busqueda').focus();        
        },
        'opción 3': () => {
            document.getElementById('vinculo_principal').click();        
        },
        'publicar': () => {
            document.getElementById('vinculo_principal').click();      
        },
        'opción 4': () => {
            artyom.say(document.getElementsByName('solicitudes-acumuladas')[0].value);   
        },
        'solicitudes': () => {
            artyom.say(document.getElementsByName('solicitudes-acumuladas')[0].value);  
        },
        'opción 5': () => {
            artyom.say(document.getElementById('notificaciones-acumuladas').value);
        },
        'notificaciones': () => {
            artyom.say(document.getElementById('notificaciones-acumuladas').value); 
        },
        'noticias': () => {
            artyom.say(document.getElementById('notificaciones-acumuladas').value); 
        },
        'opción 6': () => {
            console.log("Perfil ejecutado");
            document.getElementById('navegacion_perfil').click();
            //document.getElementById('info-solicitud').click(); 
        },
        'perfil': () => {
            console.log("Perfil ejecutado");
            document.getElementById('navegacion_perfil').click();
            //document.getElementById('info-solicitud').click();
        },
        'opción 7': () => {
            console.log("Cerrar ejecutado");
            document.getElementById('navegacion_cerrar').click();
            //document.getElementById('info-solicitud').click();  
        },
        'cerrar': () => {
            console.log("Cerrar ejecutado");
            artyom.say("Usted ha cerrado la sesión, desplegando a página inicial de login");
            document.getElementById('navegacion_cerrar').click();
            //document.getElementById('info-solicitud').click();   
        },
        'opción 8': () => {
            mostrar_subir();
        },
        'subir publicación': () => {
            mostrar_subir();
        },
        'opción 9': () => {
            console.log("opción 9 ejecutado");
            artyom.say("Pronunciar, reproducir publicación, seguido del número de publicación, ejemplo, reproducir publicación 1");
        },

        'título *value': (value) => {
            artyom.say("Ingresado "+value+" en el campo título");
            document.getElementById('titulo').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('titulo').focus();
        },
        'autor *value': (value) => { 
            artyom.say("Ingrezado "+value+" en el campo autor");
            document.getElementById('autor').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('autor').focus();
        },
        'fecha *value': (value) => {
            artyom.say("El campo fecha tiene la fecha actual asignada, pero puedes modificarla manualmente");
            document.getElementById('fecha').value=value;
            document.getElementById('fecha').focus();
        },
        'categoría *value': (value) => {         
            artyom.say(" Pronuncia categoría seguido del número : 1 para  ciencias generales, 2 para ingeniería, 3 para ciencias sociales, 4 para biología, medicina");
            clave=parseInt(clave.charAt(0)); /* Conversión a entero */
            value=value.replace('uno','1').replace('un','1').replace('dos','2').replace('tres','3').replace('cuatro','4').replace('cinco','5').replace('seis','6').replace('siete','7').replace('ocho','8').replace('nueve','9').replace(' ','');
            value=parseInt(value.charAt(0)); /* Conversión a entero */
            value=value-1;
            document.getElementById('opcion2').focus();
            if(value==0||value==1||value==2||value==3){
                document.getElementById('categoria').children[value].selected=true;
            }
            artyom.say("seleccionado la opción "+(value+1));
            console.log("seleccionado la opción "+(value+1));
        },
        'resumen *value': (value) => {
            artyom.say("Ingrezado "+value+" en el primer elemento de resumen");
            document.getElementById('resumen').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('resumen').focus();
        },
        'introducción *value': (value) => {
            artyom.say("Ingrezado "+value+" en el primer elemento de introducción");
            document.getElementById('introduccion').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('introduccion').focus();
        },
        'contenido *value': (value) => {
            artyom.say("Ingrezado "+value+" en el primer elemento de contenido");
            document.getElementById('contenido').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('contenido').focus();
        },
        'conclusiones *value': (value) => { 
            artyom.say("Ingrezado "+value+" en el primer elemento de conclusiones");
            document.getElementById('conclusiones').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('conclusiones').focus();
        },
        'referencias *value': (value) => {  
            artyom.say("Ingrezado "+value+" en el primer elemento de referencias");
            document.getElementById('referencias').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('referencias').focus();
        },
        'deletrear *value': (value) => {
            /* Técnicas para mejorar la presición de la síntesis de voz para escritura de frases, palabras o letras concretas */
            if(deletreo == "")
                artyom.say("Decir palabras que evoquen el primer carácter para aumentar la presición, ejemplo david para el caracter d");
            if(value.match("abrir paréntesis"))
                value=value.replace(value,'(');
            if(value.match("cerrar paréntesis"))
                value=value.replace(value,')');
            if(value.match("coma"))
                value=value.replace(value,', ');
            if(value.match("punto"))
                value=value.replace(value,'. ');
            if(value.match("espacio"))
                value=value.replace(value,' ');
            if(value.match("barra"))
                value=value.replace(value,'/');
                value=value.replace('be', 'b')
                .replace('ce', 'c')
                .replace('de', 'd')
                .replace('ele', 'l')
                .replace('efe', 'f')
                .replace('ge', 'g')
                .replace('ache', 'h')
                .replace('eme', 'm')
                .replace('eñe', 'ñ')
                .replace('ere', 'r')
                .replace('ese', 's')
                .replace('te', 't')
                .replace('uve', 'v')
                .replace('ye', 'y')
                .replace('zeta','z')
                .replace('guión bajo','_')
                .replace('b grande', 'b')
                .replace('b pequeña', 'v')
                .replace('uno','1').replace('un','1').replace('dos','2').replace('tres','3').replace('cuatro','4').replace('cinco','5').replace('seis','6').replace('siete','7').replace('ocho','8').replace('nueve','9');   
            if (value.match("mayúscula")){
                value=value.toUpperCase()   
            }else{
                value=value.toLowerCase()
            }         
            deletreo += value.charAt(0);
            artyom.say("Dictado actual : "+deletreo);
            console.log("Dictado actual : "+deletreo);
        },
        'crear texto *value': (value) => {
            if(value.match("abrir paréntesis"))
                value=value.replace(value,'(');
            if(value.match("cerrar paréntesis"))
                value=value.replace(value,')');
            if(value.match("coma"))
                value=value.replace(value,', ');
            if(value.match("punto"))
                value=value.replace(value,'. ');
            if(value.match("espacio"))
                value=value.replace(value,' ');
            if(texto===""){
                texto+=value;  
            }else{
                texto+=" "+value;
            }
            texto=texto.charAt(0).toUpperCase() + texto.slice(1); /* Convertir a mayúsculas únicamente el primer caracter de todo el texto */
            artyom.say("Texto actual : "+texto);
            console.log("Texto actual : "+texto);
        },
        'leer deletrear':() => {
            if(deletreo===""){
                artyom.say("Deletreo actual vacío");
            }else{
                artyom.say("Deletreo actual:"+deletreo);
            }
            console.log(deletreo);
        },
        'leer texto':() => {
            if(texto===""){
                artyom.say("Texto actual vacío");
            }else{
                artyom.say("Texto actual:"+texto);
            }
            console.log(texto);
        },
        'pegar deletrear en texto': (value) => {
            texto+=deletreo;
            artyom.say("Texto actual:"+texto);
            console.log("Texto actual:"+texto);
        },
        'borrar deletrear': () => {
            deletreo = '';
            console.log('Deletreo actual es:' + deletreo);
            artyom.say("Deletreo borrado");
        },
        'borrar texto': () => {
            texto = '';
            console.log('Texto actual está vacío');
            artyom.say("Texto actual está vacío");
        },
        'corregir texto': () => {
            artyom.say("Decir el número donde se presente:");
            var texto_a_corregir=texto.split(" ");
            /* split crea un array con argumento separador con el espacio en blanco */
            var aux=texto_a_corregir;
            var acum="";
            for(var i=0;i<aux.length;i++){
                acum+=" elemento "+(i+1)+" "+aux[i];
            /*
                aux apunta a los elementos individuales del array texto_a_corregir
             */
            }
            artyom.say("Como ejemplo, para corregir la primera palabra, decir corregir elemento 1 con, seguido del texto a corregir. La corrección es aplicada a : "+acum);
            console.log("Texto para corregir, el array original es:"+texto_a_corregir);
        },
        'corregir elemento *num con *val': (num,val) => {
            correccion(num,val);
        },        
        'dónde estoy': () => {
            artyom.say("Estas en la sección principal, comando ayuda disponible");
        },
        'acceder': () => {
            $("#submit-input").click();
        }, // Para invocar todos los imput de registro
        'elemento *num de *tipoInput con *val': (num,tipoInput,val) => {
            /* Se puede escribir en los inputs del formulario y sobre los comentarios de una publicación */
            val=val.charAt(0).toUpperCase() + val.slice(1);
            if(tipoInput==="titulo"||tipoInput==="Titulo"||tipoInput==="título"||tipoInput==="Título")
                invocar_input_formulario('titulo', num, val);
            if(tipoInput==="autor"||tipoInput==="Autor")
                invocar_input_formulario('autor', num, val);
            if(tipoInput==="fecha"||tipoInput==="Fecha"||tipoInput==="fecha de publicación"||tipoInput==="Fecha de publicación")
                invocar_input_formulario('fecha', num, val);
            if(tipoInput==="resumen"||tipoInput==="Resumen")
                invocar_input_formulario('resumen', num, val);
            if(tipoInput==="introducción"||tipoInput==="Introducción"||tipoInput==="introduccion"||tipoInput==="Introduccion")
                invocar_input_formulario('introduccion', num, val);
            if(tipoInput==="contenido"||tipoInput==="Contenido")
                invocar_input_formulario('contenido', num, val);          
            if(tipoInput==="conclusiones"||tipoInput==="Conclusiones")
                invocar_input_formulario('conclusiones', num, val);
            if(tipoInput==="referencias"||tipoInput==="Referencias")
                invocar_input_formulario('referencias', num, val);
            if(tipoInput==="comentario"||tipoInput==="Comentario")
                invocar_input_formulario('comentario', num, val);
        },
        'enfocar elemento *num de *tipoInput': (num,tipoInput) => {
            /* Para enfocar en algún input, útil para sistemas híbridos de accesibilidad */         
            if(tipoInput==="titulo"||tipoInput==="Titulo"||tipoInput==="título"||tipoInput==="Título")
                tipoInput='titulo';
            if(tipoInput==="autor"||tipoInput==="Autor")
                tipoInput='autor';
            if(tipoInput==="fecha"||tipoInput==="Fecha"||tipoInput==="fecha de publicación"||tipoInput==="Fecha de publicación")
                tipoInput='fecha';
            if(tipoInput==="resumen"||tipoInput==="Resumen")
                tipoInput='resumen';
            if(tipoInput==="introducción"||tipoInput==="Introducción"||tipoInput==="introduccion"||tipoInput==="Introduccion")
                tipoInput='introduccion';
            if(tipoInput==="contenido"||tipoInput==="Contenido")
                tipoInput='contenido';    
            if(tipoInput==="conclusiones"||tipoInput==="Conclusiones")
                tipoInput='conclusiones';
            if(tipoInput==="referencias"||tipoInput==="Referencias")
                tipoInput='referencias';
            if(tipoInput==="comentario"||tipoInput==="Comentario")
                tipoInput='comentario';
            num=num.trim();
            num=num.replace('uno','1').replace('un','1').replace('una','1').replace('dos','2').replace('tres','3').replace('cuatro','4').replace('cinco','5').replace('seis','6').replace('siete','7').replace('ocho','8').replace('nueve','9');
            console.log("tipoInput es:"+tipoInput+", num ="+num);
            var espacio=" ";
             if(tipoInput==="comentario"){
                 espacio="";
             }
             var num=parseInt(num)-1;
             if (num===0&&tipoInput!="comentario"){
                 num=""; espacio="";
             }
             if(tipoInput==="comentario"){
                 espacio="";
             }
            if(document.body.contains( document.getElementById(tipoInput+ espacio+ num))){
                    artyom.say("Enfocado en"+ tipoInput+" elemento "+(num+1));
                    document.getElementById(tipoInput+ espacio+ num).focus();
            }else{
                    artyom.say("El input no existe, volver a intentar");
                    console.log("El número de elemento es "+num+". El input es: "+tipoInput);
            }
        },
        'pegar *tipoText en elemento *num de *tipoInput': (tipoText,num,tipoInput) => {
            if(tipoText==="texto")
                val=texto;
            if(tipoText==="deletrear")
                val=deletreo;
            if(tipoInput==="titulo"||tipoInput==="Titulo"||tipoInput==="título"||tipoInput==="Título")
                invocar_input_formulario('titulo', num, val);
            if(tipoInput==="autor"||tipoInput==="Autor")
                invocar_input_formulario('autor', num, val);
            if(tipoInput==="fecha"||tipoInput==="Fecha"||tipoInput==="fecha de publicación"||tipoInput==="Fecha de publicación")
                invocar_input_formulario('fecha', num, val);
            if(tipoInput==="resumen"||tipoInput==="Resumen")
                invocar_input_formulario('resumen', num, val);
            if(tipoInput==="introducción"||tipoInput==="Introducción"||tipoInput==="introduccion"||tipoInput==="Introduccion")
                invocar_input_formulario('introduccion', num, val);
            if(tipoInput==="contenido"||tipoInput==="Contenido")
                invocar_input_formulario('contenido', num, val);      
            if(tipoInput==="conclusiones"||tipoInput==="Conclusiones")
                invocar_input_formulario('conclusiones', num, val);
            if(tipoInput==="referencias"||tipoInput==="Referencias")
                invocar_input_formulario('referencias', num, val);
            if(tipoInput==="comentario"||tipoInput==="Comentario")
                invocar_input_formulario('comentario', num, val);
        },
        'enviar publicación': () => {
            artyom.say("Publicación enviada");
            document.getElementById('subir-submit').click();
        },
        'crear cita para *value': (value) => {
            if(value==='resumen'||value==='introducción'||value==='contenido'||value==='conclusiones'){
                artyom.say("Desplegado 9 citas, con comando de voz pronuncia, ejemplo cita  resumen seguido de elemento 1, para cita basada en el autor(cita textual y de menos de 40 palabras), 2, para cita basada en el texto(cita textual y de menos de 40 palabras), 3, para cita basada en el autor(cita textual y de más de 40 palabras), 4, para cita basada en el texto(cita textual y de más de 40 palabras), 5 para cita basada en el texto(parafraseo), 6, para cita basado en el autor(parafraseo), 7,  para autor corporativo, 8, para autor anónimo, 9, para cita de una cita "+". Cita actual para "+value);
                if(value==='resumen')        
                    document.getElementById('citarRes2').click();
                if(value==='introducción')        
                    document.getElementById('citarInt2').click();
                if(value==='contenido')        
                    document.getElementById('citarCont2').click();
                if(value==='conclusiones')        
                    document.getElementById('citarConc2').click();

                console.log("Desplegado una nueva cita para "+value);
            }else{
                artyom.say("Cita en input inexistente, pronunciar nuevamente");
            }
        },
        'cita *tipoTextArea elemento *numElement': (tipoTextArea, numElement) => {
            if(tipoTextArea==='resumen'){
                document.getElementById('opcion'+numElement+"_"+"0").click();
            }
            if(tipoTextArea==='introducción'){
                document.getElementById('opcion'+numElement+"_"+"1").click();
            }
            if(tipoTextArea==='contenido'){
                document.getElementById('opcion'+numElement+"_"+"2").click();
            }
            if(tipoTextArea==='conclusiones'){
                document.getElementById('opcion'+numElement+"_"+"3").click();
            }
            artyom.say("Cita creada para "+tipoTextArea);
        },
        'referencias elemento *numElement': (numElement) => {
                document.getElementById('opcion'+numElement+"_ref_"+"0").click();
                artyom.say("Referencia creada  , con selección de elemento "+numElement);
            /* TODO: */
        },
        'crear referencia': () => {
            artyom.say("Hay 2 referencias existentes, para crear una referencia específica, pronunciar ejemplo referencias elemento 1, para libro con autor, 2, para libro con editor");
            /* TODO: */
            document.getElementById('citarRef2').click();
        },
        'poner okay en publicación *num': (num) => {
            invocar_input_formulario('elementoOk', num, '');
        },
        'poner denunciar en publicación *num': (num) => {
            invocar_input_formulario('elementoDenuncia', num, '');
        },
        'reproducir publicación *value': (value) => {
            var value=value.replace('uno','1').replace('un','1').replace('una','1').replace('dos','2').replace('tres','3').replace('cuatro','4').replace('cinco','5').replace('seis','6').replace('siete','7').replace('ocho','8').replace('nueve','9');
            if(value==='diez'||value==='10'){
                reproducir_publicacion(9);
            }else{
                value=parseInt(value.charAt(0));
                reproducir_publicacion(value-1);
            }
        },
        'descripción de archivo *value': (value) => {
            /* TODO: */
            document.getElementById('descripcionArchivos').click();
            document.getElementById('alt_descripcion').value=value.charAt(0).toUpperCase() + value.slice(1);
            document.getElementById('alt_descripcion').focus();
            artyom.say("Enfocado en el campo de la descripción, se ha ingresado: "+value);
        },
    };
    function reproducir_publicacion(value){
        if(document.body.contains( document.getElementById('speech_post'+value))){
            reproducir_contenido(value);
        }else{
            artyom.say("La publicación nombrada sobrepasa el límite o no existe, volver a intentar");
                console.log("El input es:"+value);
        }
    }
    function invocar_input_formulario(tipoInput,num,val){
       num=num.trim();
       num=num.replace('uno','1').replace('un','1').replace('una','1').replace('dos','2').replace('tres','3').replace('cuatro','4').replace('cinco','5').replace('seis','6').replace('siete','7').replace('ocho','8').replace('nueve','9');
       console.log("tipoInput es:"+tipoInput+", num ="+num+", val="+val);
       var espacio=" ";
        if(tipoInput==="comentario"){
            espacio="";
        }
        var num=parseInt(num)-1;
        if(tipoInput==="elementoOk"||tipoInput==="elementoDenuncia"){
            espacio="";
        }else{
            if (num===0&&tipoInput!="comentario"){
                num=""; espacio="";
            }
        }
           /* Comprobando la existencia del identificador invocado con la voz, para proceder a agregar 
           el valor del input suministrado por invocación asociada con comando de voz 
                   valor=valor.substring(2, valor.length);
            */
        if(document.body.contains( document.getElementById(tipoInput+ espacio+ num))){
            if(tipoInput==="elementoOk"||tipoInput==="elementoDenuncia"){
                document.getElementById(tipoInput+ num).click();
                if(tipoInput==="elementoOk")
                    artyom.say("Has puesto ok en la publicación "+(num+1));
                if(tipoInput==="elementoDenuncia")
                    artyom.say("Has puesto una denuncia en la publicación "+(num+1));
            }else{
                document.getElementById(tipoInput+ espacio+ num).value=val.charAt(0).toUpperCase() + val.slice(1);
                artyom.say("Estas escribiendo en"+ tipoInput+" elemento "+(num+1)+", con:  "+val);
                document.getElementById(tipoInput+ espacio+ num).focus();
            }
        }else{
                artyom.say("El imput no existe, volver a intentar");
                console.log("El tipo input es: ("+tipoInput+") . El número de elemento es "+num+". El input  de texto es: "+val);
        }
           /* Recordar que cada estructura, tanto resumen, contenido, conclusiones, recomendaciones 
           tienen un identificador no indexado por ello si num===0 simplemente queda vacio como si sucede 
           con sus hijos en jerarquia del array tridimensional pero basado en el ID más no en el nombre ejm 
           resumen 1, el cual sería el primer elemento como hijo de resumen*/
    }
    // Añadimos los comandos
    annyang.addCommands(commands);
    // Empezamos la escucha  annyang.start({ autoRestart:true, continuous:false});   en https
    annyang.start();
}
if (!annyang) {
    console.log("El reconocimiento de voz de annyang no es compatible con el navegador");
        artyom.say(
            "El reconocimiento de voz de annyang no es compatible con el navegador, se recomienda Chrome"
        );
}