<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');


Route::post('addmenu', 'MenuController@AddToMenu');

Route::get('open', 'MenuController@open');


Route::group(['middleware' => ['jwt.verify']], function() {
Route::get('user', 'UserController@getAuthenticatedUser');
Route::get('close', 'MenuController@closed');
Route::get('menu', 'MenuController@getAuthenticatedUserForMenu');

});

