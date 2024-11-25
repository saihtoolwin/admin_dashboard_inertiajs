<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Inertia\ResponseFactory;

class LoginController extends Controller
{
    public function __invoke(): Response|ResponseFactory
    {
        return Inertia::render('Dashboard/Login');
    }
}
