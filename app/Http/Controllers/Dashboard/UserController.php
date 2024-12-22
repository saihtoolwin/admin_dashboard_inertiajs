<?php

namespace App\Http\Controllers\DashBoard;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class UserController extends Controller
{
    protected $users;
    protected $roles;
    public function __construct(User $user,Role $role)
    {
        $this->users = $user;
        $this->roles = $role;
    }
    public function index()
    {
        abort_if(Gate::denies("user_access"), HttpFoundationResponse::HTTP_FORBIDDEN,"403 Forbidden");
        $users = $this->users->with('roles')->sortBy(request('sort', 'id'), request('direction', 'desc'))
            ->paginate(request('per_page', 10))->withQueryString();;
        // dd($users);
        return Inertia::render('Dashboard/UserManagement/Index',compact('users'));
    }
}
