@extends('layouts.master')

@section('title','MN Services')

@section ('content')
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<style>
body{
overflow-y: hidden;

}
.backdrop
{
    z-index: 2;
    background: grey;
    width: 100vw;
    height: 100vh;
}
    .custom-modal {

        width: 50%;
        text-align: center;
        margin: auto;
        background: white;
        border: 2px solid grey;
        border-radius: 2px 2px 2px 2px;
        box-shadow: 3px 3px 3px 3px black;
        position: fixed;
        top:25%;
        right: 25%;
        z-index: 3;
       display: block;

    }
    .custom-modal_heading
    {
        border-bottom:  2px  solid grey ;
        padding: 10px;
    }
.custom-modal_title{

}

</style>

@if($popup)
    <div class="custom-modal" id="dialog">
        <div class="custom-modal_heading">
            <h4 class="custom-modal_title">MN Service</h4>
        </div>
        <div class="custom-modal-block">
      <h4>Your enquiry has been submitted successfully, We will get back to you as soon as possible </h4>

        </div>
        <div class="custom-modal_btn">
            <input type="button" class=" btn btn-primary" value="OK" onclick="okBtn()"/>
        </div>
    </div>
    @endif

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
<script>



    function  okBtn() {


        $("#dialog").css("display", "none");
    }
</script>

    @endsection
