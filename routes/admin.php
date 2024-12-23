<?php

use App\Http\Controllers\Dashboard\LoginController;
use App\Http\Controllers\Dashboard\OverviewController;
use App\Http\Controllers\DashBoard\UserController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::middleware(['guest'])->group(function () {
            Route::get('/login', LoginController::class)->name('login');
        });

        Route::middleware(['auth', 'permission-gates'])->group(function () {
            Route::get('/dashboard',OverviewController::class)
                ->name('dashboard');

            // Users Management Routes
            Route::prefix('users-management')
                ->name('users-management.')
                ->controller(UserController::class)
                ->group(function () {
                    Route::get('/', 'index')->name('index');
                    Route::get('/create', 'create')->name('create');
                    Route::post('/store', 'store')->name('store');
                });

            // Roles Management
            Route::prefix('roles')->name('roles.')->controller(RoleController::class)->group(function(){
                Route::get('/','index')->name('index');
            });
        });
    });

