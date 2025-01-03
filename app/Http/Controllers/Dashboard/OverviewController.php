<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OverviewController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Dashboard/Overview/Index');
    }
}
