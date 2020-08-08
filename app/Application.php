<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    //

    protected $table = 'applications';
    public $incrementing = true;
    protected $fillable = ['firstName','lastName','date','address','unit','city','phone','email','sin','salary','position','iscitizen','uswork','workedBefore','workedBeforeExplanation','convictions','convictionsExplanation','signature','signedOn'];


    public function militaryService(){

        return $this->hasOne(MilitaryService::class,'application_id');
    }

    public function referenceInfo(){

        return $this->hasMany(ReferenceInfo::class,'application_id');
    }

    public function schoolingInfo(){

        return $this->hasMany(SchoolingInfo::class,'application_id');
    }



}


