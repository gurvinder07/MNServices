<!DOCTYPE html>
<html>
<head>
        <title>New User Enquiry</title>
</head>

<body>
<h3>Hello Admin</h3>
<h2>A new enquiry has been registered with following data-</h2>
<br/>

<br/>
<h4>Subject-</h4> {{$data['subject']}}
<h4>First Name-</h4> {{$data['firstname']}}
<h4>Last Name-</h4> {{$data['lastname']}}
<h4>Email-</h4> {{$data['email']}}
<h4>Phone-</h4> {{$data['phone']}}
<h4>Message-</h4> {{$data['message']}}
</body>

</html>
