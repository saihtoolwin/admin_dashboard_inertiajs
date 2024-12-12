<?php

use App\Http\Controllers\Dashboard\LoginController;
use App\Http\Controllers\DashBoard\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::middleware(['guest'])->group(function () {
            Route::get('/login', LoginController::class)->name('login');
        });

        Route::middleware(['auth', 'permission-gates'])->group(function () {
            Route::get('/dashboard', fn() => Inertia::render('Dashboard/Home'))
                ->name('dashboard');

            // Users Management Routes
            Route::prefix('users-management')
                ->name('users-management.')
                ->controller(UserController::class)
                ->group(function () {
                    Route::get('/', 'index')->name('index');
                });
        });
    });

