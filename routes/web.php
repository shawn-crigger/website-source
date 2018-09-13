<?php



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->post('/api/contact', 'ContactFormController@sendForm');
$app->get('/portfolio/fetch_all', 'PortfolioController@fetchAll');
$app->get('/portfolio/{slug}', 'PortfolioController@show');

$app->get('/{any:.*}', function(){
	return view('index');
});


