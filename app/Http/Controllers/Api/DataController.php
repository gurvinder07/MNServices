<?php


namespace App\Http\Controllers\Api;

use App\Mail\sendMail;
use App\PersonEnquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;


class DataController extends \App\Http\Controllers\Controller
{


    public function postEmailData(Request $request)
    {
        $data = [

            "firstname" => $request->firstname,
            "lastname"=>$request->lastname,
            "email" => $request->email,
            "phone" => $request->phone,
            "subject"=>$request->subject,
            "message"=> $request->message
        ];

        $Enquiry = new PersonEnquiry();
        $Enquiry->firstname  =  $request->firstname;
        $Enquiry->lastname  =  $request->lastname;
        $Enquiry->email  =  $request->email;
        $Enquiry->phone  =  $request->phone;
        $Enquiry->subject  =  $request->subject;
        $Enquiry->message  =  $request->message;
        $Enquiry->save();
         Mail::to('sainigurwinder07@gmail.com')->send(new sendMail($data));
        return response()->json(['status'=>200,'message'=>"success"]);

    }


}
