<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    
    public function run(): void
    {
       $permissions=[
            [
                'id'    => 1,
                'title' => 'user_access',
            ],
            [
                'id'    => 2,
                'title' => 'user_create',
            ],
            [
                'id'    => 3,
                'title' => 'user_edit',
            ],
            [
                'id'    => 4,
                'title' => 'user_show',
            ],
            [
                'id'    => 5,
                'title' => 'user_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_create',
            ],
            [
                'id'    => 7,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 8,
                'title' => 'permission_show',
            ],
            [
                'id'    => 9,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 10,
                'title' => 'permission_access',
            ],
            [
                'id'    => 11,
                'title' => 'role_create',
            ],
            [
                'id'    => 12,
                'title' => 'role_edit',
            ],
            [
                'id'    => 13,
                'title' => 'role_show',
            ],
            [
                'id'    => 14,
                'title' => 'role_delete',
            ],
            [
                'id'    => 15,
                'title' => 'role_access',
            ],
            
        ];

        Permission::insert($permissions);
    }
}
