<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data(){
    return{
      name:'',
      email:'',
      message:'',
    }
  },
  methods:{
    sendForm(){
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
			console.log(data);
    }
  }
}
</script>

<template>

	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact Form</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-10">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-6">
								<div class="contact-wrap w-100 p-lg-5 p-4">
									<h3 class="mb-4">Send us a message</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form @submit.prevent="sendForm()" class="contactForm">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<input v-model.trim="name" type="text" class="form-control" id="name" placeholder="Name">
												</div>
											</div>
											<div class="col-md-12"> 
												<div class="form-group">
													<input v-model.trim="email" type="email" class="form-control" id="email" placeholder="Email">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea v-model.trim="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Send Message" class="btn btn-primary">
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- <script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/main.js"></script> -->



</template>


<style lang="scss" scoped>
$font-primary: 'Poppins',Arial, sans-serif;
$primary: #d00000;


@mixin gradient-background(){
	background: #00afb9;
	background: -moz-linear-gradient(-45deg, #00afb9 0%, rgba(46,39,157,1) 100%);
	background: -webkit-gradient(left top, right bottom, color-stop(0%, #00afb9), color-stop(100%, rgba(46,39,157,1)));
	background: -webkit-linear-gradient(-45deg, #00afb9 0%, rgba(46,39,157,1) 100%);
	background: -o-linear-gradient(-45deg, #00afb9 0%, rgba(46,39,157,1) 100%);
	background: -ms-linear-gradient(-45deg, #00afb9 0%, rgba(46,39,157,1) 100%);
	background: linear-gradient(135deg, #00afb9 0%, rgba(46,39,157,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7f279c', endColorstr='#2e279d', GradientType=1 );
}

body{
	font-family: $font-primary;
	font-size: 16px;
	line-height: 1.8;
	font-weight: normal;
	background: #fafafa;
	color: black;
}
a {
	transition: .3s all ease;
	color: $primary;
	&:hover, &:focus {
		text-decoration: none !important;
		outline: none !important;
		box-shadow: none;
	}
}
h1, h2, h3, h4, h5,
.h1, .h2, .h3, .h4, .h5 {
	line-height: 1.5;
	font-weight: 400;
	font-family: $font-primary;
	color: black;
}

.bg-primary{
	background: $primary !important;
}

.ftco-section{
	padding: 7em 0;
}

.ftco-no-pt{
	padding-top: 0;
}
.ftco-no-pb{
	padding-bottom: 0;
}
//HEADING SECTION
.heading-section{
	font-size: 28px;
	color: black;
}

//COVER BG
.img{
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}

.form-control {
	height: 52px;
	background: transparent;
	color: #8ecae6 !important;
	font-size: 14px;
	border-radius: 0px;
	box-shadow: none !important;
	border: 1px solid #8ecae6;
	&::-webkit-input-placeholder { /* Chrome/Opera/Safari */
	  color: #8ecae6 !important;
	}
	&::-moz-placeholder { /* Firefox 19+ */
	  color: #8ecae6 !important;
	}
	&:-ms-input-placeholder { /* IE 0+ */
	  color: rgba(255,255,255,.5) !important;
	}
	&:-moz-placeholder { /* Firefox 18- */
	  color: rgba(255,255,255,.5) !important;
	}
	&:focus, &:active {
		background: transparent;
		border-color: rgba(255,255,255,.5) !important;
	}
}
textarea.form-control {
	height: inherit!important;
    margin-bottom: 20px;
}


.wrapper{
	width: 100%;
	display: flex;
	justify-content: center;
	-webkit-box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18);
	-moz-box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18);
	box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18);
}
.contact-wrap{
	@include gradient-background();
	h3{
		color: white;
	}
}


.info-wrap{
	h3{
		color: black;
		position: relative;
		&:after{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 60px;
			height: 3px;
			background: #fff;
			content: '';
		}
	}
	.dbox{
		width: 100%;
		// color: rgba(255,255,255,.8);
		margin-bottom: 25px;
		&:last-child(){
			margin-bottom: 0;
		}
		p{
			margin-bottom: 0;
			span{
				font-weight: 400;
				color: black;
			}
			a{
				color: rgba(0,0,0,.3);
			}
		}
		.icon{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			border: 1px solid rgba(0,0,0,.05);
            background-color: #fff;
            margin-right: 10px;
			span{
				font-size: 20px;
				color: black;
			}
		}
		.text{
			width: calc(100% - 50px);
		}
	}
}


.btn {
	padding: 12px 16px;
	cursor: pointer;
	border-width: 1px;
	border-radius: 5px;
	font-size: 14px;
	font-weight: 400;
	-webkit-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12);
	-moz-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12);
	box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12);
	position: relative;
	margin-bottom: 20px;
	// @include transition(.3s);
	&:hover, &:active, &:focus {
		outline: none !important;
		-webkit-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.22) !important;
		-moz-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.22) !important;
		box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.22) !important;
	}
	&.btn-primary {
		background: $primary !important;
		border-color: $primary !important;
		color: white;
		&:hover,&:focus{
			border-color: darken($primary,10%) !important;
			background: darken($primary,10%) !important;
		}
	}
}

.contactForm{
	.form-control{
		border: none;
		border-bottom: 1px solid rgba(255,255,255,.2);
		padding: 0;
	}
}
//Forms style
#contactForm {
	.error {
		color: #f65c78;
		font-size: 12px;
	}
	.form-control {
		font-size: 16px;
	}
}
#message {
	resize: vertical;
}
#form-message-warning, #form-message-success {
	display: none;
}
#form-message-warning {
	color: #f65c78;
}
#form-message-success {
	color: success;
	font-size: 18px;
	font-weight: 500;
}
.submitting {
	float: left;
	width: 100%;
	padding: 10px 0;
	display: none;
	font-size: 16px;
	font-weight: 500;
	color: success;
}

.bg-custom{
    background-color: rgb(211, 211, 211);
}
</style>