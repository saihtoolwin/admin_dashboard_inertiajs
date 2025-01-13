<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function roles(){
        return $this->belongsToMany(Role::class);
    }

    public function scopeSearch(Builder $query, ?array $searchKeyword): Builder
    {
        return $query->when(!empty($searchKeyword['search']),function($query) use ($searchKeyword){
            $query->where('name','like','%'.$searchKeyword['search'].'%');
        });
    }

    public function scopeSortBy(Builder $query, string $sort, string $direction): Builder
    {
        if (in_array($sort, ['name', 'phone_number', 'email'])) {
            return $query->orderBy($sort, $direction);
        }

        if (in_array($sort, ['business_name', 'merchant_status', 'verification_status'])) {
            return $query->join('merchant_profiles', 'users.id', '=', 'merchant_profiles.user_id')
                ->orderBy('merchant_profiles.' . $sort, $direction)
                ->select('users.*');
        }

        if (in_array($sort, ['address_line_1', 'address_line_2', 'date_of_birth', 'gender', 'country', 'state', 'city', 'postal_code'])) {
            return $query->join('user_profiles', 'users.id', '=', 'user_profiles.user_id')
                ->orderBy('user_profiles.' . $sort, $direction)
                ->select('users.*');
        }

        return $query->orderBy('id', 'desc');
    }
}
