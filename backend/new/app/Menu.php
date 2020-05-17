<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Menu extends Authenticatable implements JWTSubject
{
    use Notifiable;
    protected $fillable = [
        'title',
        'src', 
        'description',
        
      ];
      public function getJWTIdentifier()
      {
          return $this->getKey();
      }
      public function getJWTCustomClaims()
      {
          return [];
      }
}