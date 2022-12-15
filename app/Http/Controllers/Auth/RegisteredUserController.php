<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        $savedHLImagePath = $request->file('hl_image')->store('hl_image', 'public');
        $savedMAINImagePath = $request->file('main_image')->store('main_image', 'public');
        $savedEMBImagePath = $request->file('emb_img')->store('emb_img', 'public');

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'title' => ['required', 'max:32'],
            'hl_image' => [
                'required',
                //'file', // ファイルがアップロードされている
                //'image', // 画像ファイルである
                'max:2000', // ファイル容量が2000kb以下である
                //'mimes:jpeg,jpg,png', // 形式はjpegかpng
                //'dimensions:min_width=300,min_height=300,max_width=1200,max_height=1200', // 画像の解像度が300px * 300px ~ 1200px * 1200px
            ],
            'main_image' => [
                'required',
                //'file', // ファイルがアップロードされている
                //'image', // 画像ファイルである
                'max:2000', // ファイル容量が2000kb以下である
                //'mimes:jpeg,jpg,png', // 形式はjpegかpng
                //'dimensions:min_width=300,min_height=300,max_width=1200,max_height=1200', // 画像の解像度が300px * 300px ~ 1200px * 1200px
            ],

            'body' => ['required', 'max:20000'],
            'kokopoi_question' => ['required', 'max:40'],
            'kokopoi_answer' => ['required', 'max:100'],
            'emb_img_title' => ['required', 'max:40'],

            'emb_img' => [
                'required',
                //'file', // ファイルがアップロードされている
                //'image', // 画像ファイルである
                'max:2000', // ファイル容量が2000kb以下である
                //'mimes:jpeg,jpg,png', // 形式はjpegかpng
                //'dimensions:min_width=300,min_height=300,max_width=1200,max_height=1200', // 画像の解像度が300px * 300px ~ 1200px * 1200px
            ],

        ]);



        $user = User::create([
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'title' => $request->title,
            'hl_image' => $savedHLImagePath,
            'main_image' => $savedMAINImagePath,
            'body' => $request->body,
            'kokopoi_question' => $request->kokopoi_question,
            'kokopoi_answer' => $request->kokopoi_answer,
            'emb_img_title' => $request->emb_img_title,
            'emb_img' => $savedEMBImagePath,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
