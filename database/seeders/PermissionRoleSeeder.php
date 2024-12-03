<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionRoleSeeder extends Seeder
{
    
    public function run(): void
    {
        $admin_permissions = Permission::all();
        Role::findOrFail(1)->permissions()->sync($admin_permissions->pluck('id'));

        $developer_permissions = $admin_permissions->filter(function ($permission) {
            return $permission->title !== 'user_access';
        });

        Role::findOrFail(2)->permissions()->sync($developer_permissions->pluck('id'));
    }
}
