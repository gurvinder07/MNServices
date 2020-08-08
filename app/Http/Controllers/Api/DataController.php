<?php


namespace App\Http\Controllers\Api;

use App\Application;
use App\Mail\sendMail;
use App\MilitaryService;
use App\PersonEnquiry;
use App\ReferenceInfo;
use App\SchoolingInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;


class DataController extends \App\Http\Controllers\Controller
{


    public function saveNewApplicationForm(Request $request)
    {
        $application = new Application();
        $application->firstName = $request->firstName;
        $application->lastName  = $request->lastName;
        $application->date = $request->date;
        $application->address = $request->address;
        $application->unit = $request->unit;
        $application->city = $request->city;
        $application->phone = $request->phone;
        $application->email = $request->email;
        $application->sin = $request->sin;
        $application->salary = $request->salary;
        $application->position = $request->position;
        $application->iscitizen = $request->iscitizen;
        $application->uswork = $request->uswork;
        $application->workedBefore = $request->workedBefore;
        $application->workedBeforeExplanation = $request->workedBeforeExplanation;
        $application->convictions = $request->convictions;
        $application->convictionsExplanation = $request->convictionsExplanation;
        $application->signature = $request->signature;
        $application->signedOn = $request->signedOn;
        $application->save();


        $schooling = $request->schoolingInfo;
        if($schooling != null)
        {   foreach ($schooling as $school) {
            $school = json_decode(json_encode($school), true);
            $schl = new SchoolingInfo($school);
            $schl->application_id = $application->id;
            $schl->save();
        }
        }
        $references = $request->referenceInfo;
        if($references != null) {
         foreach ($references as $referenceinfo) {
         $data = json_decode(json_encode($referenceinfo), true);
         $ref = new ReferenceInfo($data);
         $ref->application_id = $application->id;
         $ref->save();
             }

        }

        $militaryService = $request->militaryService;
        if($militaryService  != null)
        {
            $service = json_decode(json_encode($militaryService), true);
            $newService = new MilitaryService($service);
            $newService->application_id = $application->id;
            $newService->save();
        }


        return response()->json(['status'=>'200','message'=>'Application Saved Successfully']);
    }

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
