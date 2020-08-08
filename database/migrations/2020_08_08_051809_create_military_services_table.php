<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMilitaryServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('military_services', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('branch')->nullable();
            $table->string('rank')->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();
            $table->string('typeofdischarge')->nullable();
            $table->string('otherthanhonorable')->nullable();
            $table->unsignedBigInteger('application_id')->nullable();
            $table->foreign('application_id')->references('id')->on('applications')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('military_services');
    }
}
