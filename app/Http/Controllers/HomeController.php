<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;



class HomeController extends Controller
{

public function getindex()
{


return view('welcome');
}

public function  getContact()
{
    return view('contact');
}

    public function  postContact (Request $request)
    {

        return view('index');
    }

    public function  getAbout()
    {
        return view('about');
    }
}
