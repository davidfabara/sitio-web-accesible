<?php 
session_start();
require('funciones/funciones.php');
require('clases/clases.php');
verificar_session(); 
/* Se llama a esa función en funciones.php ya que han sido incluidas con "require".Si no hay usuario que 
haya iniciado una sesión, simplemente se redireccioná a login.php inmediatamente header('location: login.php'); asi por ejemplo un usuario que aunque tenga la url de otro no pueda hacerce pasar como un usuario autor y tratar de modificar, necesita logearse para poder usar una cuenta o a la categoria de autor de una publicación de un usuario 
*/	
require('header.php');

if(isset($_GET['CodNot']) and isset($_GET['CodPost']))
{
	/* TODO: esta funcion se llama desde header.php */
	notificaciones::vistas($_GET['CodNot']);
	/*
    cada notificación es únivoca de ahi CodNot, y verlas y registrarlas individualmente si han sido vistas 
    con la consulta SQL update notificaciones set visto = 1 where CodNot = :CodNot");
	*/
	$post = post::mostrar_por_codigo_post($_GET['CodPost']);
	/*
    El objetivo de $post, es que se atrapará en publicacion.php con como un $_GET['CodPost'], debido 
    precisamente a require('publicacion.php')

    post::mostrar_por_codigo_post(...), implica a la consulta SQL que selecciona y procesa todas las variables
    que implican a los datos del usuario, su foto de perfil,etc... como U.CodUsua, U.nombre, U.foto_perfil, 
    P.CodPost, P.contenido, P.img, P.url, estos datos se atraparán en publicacion.php para mostrar los 
    elementos de las notificaciones basadas igualmente en su identificador unívoco 'CodPost'.La consulta SQL 
    que es procesada en aquel metodo implica "select U.CodUsua, U.nombre, U.foto_perfil, P.CodPost, P.contenido,
     P.img, P.url from usuarios U inner join post P on U.CodUsua = P.CodUsua where P.CodPost = :CodPost 
     ORDER BY P.CodPost DESC");
	*/
	require('publicacion.php'); /*Para actualizar las publicaciones de los usuarios implicados*/
}
 ?>