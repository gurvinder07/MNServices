<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchoolingInfo extends Model
{
    //

    public $incrementing = true;
    protected $fillable = ['instituteName','address','from' ,'to','isGraduated','certificationName','application_id'];


    public function application(){

        return $this->belongsTo(Application::class);

    }
}
