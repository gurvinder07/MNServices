@extends('layouts.master')

@section('title','MN Services')

@section ('content')

    <section class="ls section_padding_top_40 section_padding_bottom_100">
        <div class="container">
            <div class="row">

                <div class="col-md-8 to_animate" data-animation="scaleAppear">

                    <h3 class="bold highlight bottommargin_30">Contact Form</h3>

                    <form class="form-group columns_padding_5 row" method="post" action="{{url('contact')}}">
                        {{ csrf_field() }}

                        <div class="col-sm-6">
                            <div class="contact-form-name">
                                <label for="name" class="sr-only">
                                    Full Name
                                    <span class="required">*</span>
                                </label>
                                <input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="contact-form-subject">
                                <label for="subject" class="sr-only">
                                    Subject
                                    <span class="required">*</span>
                                </label>
                                <input type="text" aria-required="true" size="30" value="" name="subject" id="subject" class="form-control" placeholder="Subject">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="contact-form-phone">
                                <label for="phone" class="sr-only">
                                    Phone
                                    <span class="required">*</span>
                                </label>
                                <input type="text" aria-required="true" size="30" value="" name="phone" id="phone" class="form-control" placeholder="Phone number">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="contact-form-email">
                                <label for="email" class="sr-only">
                                    Email address
                                    <span class="required">*</span>
                                </label>
                                <input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control" placeholder="Email">
                            </div>
                        </div>
                        <div class="col-sm-12">

                            <div class="contact-form-message">
                                <label for="message" class="sr-only">Message</label>
                                <textarea aria-required="true" rows="7" cols="45" name="message" id="message" class="form-control" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12">

                            <div class="contact-form-submit topmargin_20">
                                <button type="submit" id="submit" name="submit" class="theme_button wide_button color1">Send Message</button>
                            </div>
                        </div>


                    </form>
                </div>

                <div class="col-md-4 to_animate" data-animation="scaleAppear">

                    <h3 class="bold highlight bottommargin_15">Contact info</h3>
                    <hr class="inline-block margin_0 dividersize_2_30 main_bg_color">
                    <div class="widget widget_text topmargin_20">
                        <div class="media">
                            <div class="media-left">
                                <i class="fa fa-map-marker highlight fontsize_18"></i>
                            </div>
                            <div class="media-body fontsize_16 media-middle">
                                123 Mnservices company address, Toronto
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <i class="fa fa-envelope highlight fontsize_18"></i>
                            </div>
                            <div class="media-body fontsize_16 media-middle">
                                maselan@mnservice.ca
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <i class="fa fa-phone highlight fontsize_18"></i>
                            </div>
                            <div class="media-body fontsize_16 bold media-middle">
                                +1 (647) 271-7864
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    @endsection
