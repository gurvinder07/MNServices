<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MilitaryService extends Model
{
    //
    public $incrementing = true;
    protected $fillable = ['branch','rank','from' ,'to','typeofdischarge','otherthanhonorable','application_id'];

    public function application(){

        return $this->belongsTo(Application::class);

    }

}
