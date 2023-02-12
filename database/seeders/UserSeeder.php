<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['name' => 'Fernando', 'lastname'=>'Giroto', 'username' => 'fernandocgiroto' , 'birthday' => '28-05-1990', 'profile_img'=> 'http://[::1]:5173/resources/js/img/perfil.jpeg', 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatem atque natus error qui illo cumque architecto odit reiciendis temporibus similique enim quasi aperiam obcaecati sunt deserunt. Atque, nesciunt laboriosam.' , 'locale' => 'Rio de Janeiro', 'email'=>'fernando@gmail.com', 'password' => Hash::make('123456')],
        ];


        foreach($users as $user){
            DB::table('users')->insert([
                'name' => $user['name'],
                'lastname' => $user['lastname'],
                'username' => $user['username'],
                'email' => $user['email'],
                'password' => $user['password'],
                'profile_img' => $user['profile_img'],
                'description' => $user['description'],
                'locale' => $user['locale'],
                'birthday' => $user['birthday'],
                'locale' => $user['locale']
            ]);
        }

        User::factory()->count(5)->create();


    }
}
