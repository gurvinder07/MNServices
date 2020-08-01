<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PersonEnquiry extends Model
{
    //
    protected $table = 'enquiry';
    public $incrementing = true;
    protected $fillable = ['firstname','lastname','email','phone','subject','message'];

}
