<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferenceInfo extends Model
{
    //
    public $incrementing = true;
    protected $fillable = ['fullName','relationship','company' ,'phone','address','application_id'];


    public function application(){

        return $this->belongsTo(Application::class);

    }
}
