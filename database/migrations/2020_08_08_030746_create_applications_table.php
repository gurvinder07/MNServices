<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('firstName')->nullable();
            $table->string('lastName')->nullable();
            $table->string('date')->nullable();
            $table->string('address')->nullable();
            $table->string('unit')->nullable();
            $table->string('city')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('sin')->nullable();
            $table->string('salary')->nullable();
            $table->string('position')->nullable();
            $table->enum('iscitizen',[0,1])->nullable();
            $table->enum('uswork',[0,1])->nullable();
            $table->enum('workedBefore',[0,1])->nullable();
            $table->longText('workedBeforeExplanation')->nullable();
            $table->enum('convictions',[0,1])->nullable();
            $table->enum('convictionsExplanation',[0,1])->nullable();
            $table->string('signature')->nullable();
            $table->string('signedOn')->nullable();
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
        Schema::dropIfExists('applications');
    }
}
