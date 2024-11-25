<?php

use App\Http\Controllers\Dashboard\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->name('admin.')->group(function (){

    Route::get('/login', LoginController::class)->middleware(['guest'])->name('login');

    Route::middleware(['auth'])->group(function (){
        Route::get('/dashboard', function () {
            // dd('He');
            return Inertia::render('Dashboard/Home');
        })->name('dashboard');
    });
});

