<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/users', function (Request $request) {
    return User::all();
});




Route::get('/profile/{id}', [App\Http\Controllers\ProfileController::class, 'profile']);
Route::put('/user/community/bdsm_add/{id}', [App\Http\Controllers\CommunitiesController::class, 'bdsm_add']);
Route::put('/user/community/bdsm_remove/{id}', [App\Http\Controllers\CommunitiesController::class, 'bdsm_remove']);