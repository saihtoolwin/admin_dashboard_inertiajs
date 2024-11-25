<?php

use App\Http\Controllers\Dashboard\LoginController;
use Illuminate\Support\Facades\Route;


Route::get('/admin/login', LoginController::class)->middleware(['guest'])->name('login');
Route::get('/', function () {
    return view('app');
});
require __DIR__.'/admin.php';