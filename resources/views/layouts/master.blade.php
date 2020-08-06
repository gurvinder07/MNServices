<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>


    <title> @yield('title')</title>



    <style>

        .header_darkgrey.theme_header {
            background-color: black;
        }
    </style>

    <style>
        .header_darkgrey.theme_header.mainpage_header {
            background-color: black;
        }
    </style>

</head>
<body>
<div id="canvas">
    <div id="box_wrapper">

        <section class="page_topline ls section_padding_top_5 section_padding_bottom_5 table_section table_section_md">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 text-center text-md-left">

                            <span>
                                <i class="fa fa-map-marker highlight"></i>
                                <span class="fontsize_16">1458 Minglehaze Drive Etobicoke, CA 92614</span>
                            </span>

                        <span class="nowrap">
                                <i class="fa fa-envelope highlight"></i>
                                <span class="fontsize_16">Seelan@mnservice.ca</span>
                            </span>

                        <span class="nowrap">
                                <i class="fa fa-phone highlight"></i>
                                <span class="fontsize_16 bold">+1 (647) 271-7864</span>
                            </span>

                    </div>
                    <div class="col-md-2 text-center text-md-right">
                        <div class="page_social_icons">
                            <a class="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
                            <a class="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
                            <a class="social-icon soc-google theme-icon" href="#" title="Google"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div class="page_header_wrapper affix-wrapper" style="height: 149px;">
            <header class="page_header mainpage_header header_darkgrey theme_header affix">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-md-center">
                            <a href="./" class="logo visible-xs-block visible-sm-block">
                                <img src="./images/logo.png" alt="Pretty Press">
                            </a>
                            <!-- main nav start -->
                            <nav class="mainmenu_wrapper">
                                <ul class="mainmenu nav sf-menu sf-js-enabled sf-arrows" style="touch-action: pan-y;">
                                    <li class="active">
                                        <a href="index">Home</a>
                                    </li>

                                    <li>
                                        <a href="contact" class="sf-with-ul">Contact US</a>

                                    </li>
                                    <!-- eof pages -->

                                    <li>
                                        <a href="about" class="sf-with-ul">About</a>

                                    </li>




                                </ul>
                            </nav>
                            <!-- eof main nav -->
                            <span class="toggle_menu">
                                    <span></span>
                                </span>
                        </div>
                    </div>
                </div>
            </header>
        </div>





        @yield('content')


        <footer class="page_footer ds ms section_padding_top_75 section_padding_bottom_90">
            <div class="container">
                <div class="row topmargin_5">
                    <div class="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div class="widget widget_text fontsize_16 topmargin_25">
                            <h3 class="bold">Contact Info</h3>
                            <hr class="inline-block divider_15 bottommargin_5 dividersize_2_30 main_bg_color">
                            <div class="media">
                                <div class="media-left">
                                    <i class="fa fa-map-marker highlight fontsize_18"></i>
                                </div>
                                <div class="media-body">
                                    1458 Euclid Avenue, CA 92614
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <i class="fa fa-envelope highlight fontsize_18"></i>
                                </div>
                                <div class="media-body">
                                    Seelan@mnservice.ca
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <i class="fa fa-phone highlight fontsize_18"></i>
                                </div>
                                <div class="media-body">
                                    <strong class="grey">+1 (647) 271-7864</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div class="widget widget_text open-hours fontsize_16 topmargin_25">
                            <h3 class="bold">Open Hours</h3>
                            <hr class="inline-block divider_15 bottommargin_5 dividersize_2_30 main_bg_color">
                            <div class="media">
                                <div class="media-left">
                                    <strong class="grey">Mon - Thu</strong>
                                </div>
                                <div class="media-body">
                                    09:00 - 17:00
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <strong class="grey">Fri - Sat</strong>
                                </div>
                                <div class="media-body">
                                    09:00 - 15:00
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <strong class="grey">Sunday</strong>
                                </div>
                                <div class="media-body">
                                    Closed
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div class="widget_text fontsize_16 topmargin_25">
                            <h3 class="bold">Social Networks</h3>
                            <hr class="inline-block divider_15 bottommargin_5 dividersize_2_30 main_bg_color">
                            <a class="media foooter-social-icon" href="#">
                                <div class="media-left media-middle">
                                    <span class="soc-facebook grey"></span>
                                </div>
                                <div class="media-body media-middle">
                                    Facebook
                                </div>
                            </a>
                            <a class="media foooter-social-icon" href="#">
                                <div class="media-left media-middle">
                                    <span class="soc-twitter grey"></span>
                                </div>
                                <div class="media-body media-middle">
                                    Twitter
                                </div>
                            </a>
                            <a class="media foooter-social-icon" href="#">
                                <div class="media-left media-middle">
                                    <span class="soc-google grey"></span>
                                </div>
                                <div class="media-body media-middle">
                                    Google+
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 to_animate topmargin_25" data-animation="scaleAppear">
                        <div class="widget widget_mailchimp topmargin_25">

                            <h3 class="bold">Social Networks</h3>
                            <hr class="inline-block divider_15 bottommargin_20 dividersize_2_30 main_bg_color">

                            <form class="signup form-inline" action="/" method="get">
                                <div class="form-group">
                                    <input name="email" type="email" class="mailchimp_email form-control" placeholder="Email Address">
                                </div>
                                <button type="submit" class="theme_button">Send</button>
                                <div class="response"></div>
                            </form>
                            <p class="fontsize_16">Subscribe to our Newsletter right now to be updated.</p>

                        </div>

                    </div>
                </div>
            </div>
        </footer>


    </div>
</div>



<script src="{{asset('js/compressed.js')}}"></script>
<!-- jQuery UI 1.11.4 -->



<script src="{{asset('js/main.js')}}"></script>


</body>
</html>
