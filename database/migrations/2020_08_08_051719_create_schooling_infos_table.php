<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolingInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schooling_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('instituteName')->nullable();
            $table->string('address')->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();
            $table->string('isGraduated')->nullable();
            $table->string('certificationName')->nullable();
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
        Schema::dropIfExists('schooling_infos');
    }
}
