<?php


namespace App\Http\Controllers;
use App\Mail\NewUserNotify;
use App\Mail\sendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;



class HomeController extends Controller
{

public function getindex()
{


return view('welcome');
}

public function  getContact()
{
    $popup =false;
    return view('contact',compact('popup'));
}

    public function  postContact (Request $request)
    {
      $data = [

          "name" => $request->name,
          "email" => $request->email,
          "phone" => $request->phone,
          "subject"=>$request->subject,
           "message"=> $request->message
      ];


        Mail::to('sainigurwinder07@gmail.com')->send(new sendMail($data));
        $popup =true;
        return view('contact',compact('popup'));
    }

    public function  getAbout()
    {
        return view('about');
    }
}
