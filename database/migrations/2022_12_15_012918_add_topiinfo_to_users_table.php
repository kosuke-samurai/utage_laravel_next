<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('title');
            $table->string('hl_image');
            $table->string('main_image');
            $table->text('body');
            $table->string('kokopoi_question');
            $table->text('kokopoi_answer');
            $table->string('emb_img_title');
            $table->string('emb_img');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('title');
            $table->dropColumn('hl_image');
            $table->dropColumn('main_image');
            $table->dropColumn('body');
            $table->dropColumn('kokopoi_question');
            $table->dropColumn('kokopoi_answer');
            $table->dropColumn('emb_img_title');
            $table->dropColumn('emb_img');
        });
    }
};
