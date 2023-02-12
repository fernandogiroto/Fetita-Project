<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Community;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CommunitiesController extends Controller
{
    
    public function bdsm_add($id){
        $user = User::findOrFail($id);
        $user->bdsm = 1;
        $user->save();
        return $user;
    }

    public function bdsm_remove($id){
        $user = User::findOrFail($id);
        $user->bdsm = 0;
        $user->save();
        return $user;
    }
    
}
