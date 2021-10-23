<template>
<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">
		<li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
		<li data-target="#carouselIndicators" data-slide-to="1"></li>
		<li data-target="#carouselIndicators" data-slide-to="2"></li>
	</ol>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<div class="row p-0 carousel-row">
				<div class="col-md-6 col-12 p-0 hero-img index-carousel-img-1"></div>
				<div class="col-md-6 col-12">
					<div class="p-3 text-center">
						<h1 class="main-heading butterfly-text">Our Workbooks</h1>
						<h2 class="xl-p average-text">We Offer A Way To Simplify Your Life!</h2>
						<p class="m-0 lg-p">
							Want to change your lifestyle? We know how daunting it can be..
							But not to worry! Our workbooks are designed to help take down those
							daunting tasks that are holding you back from enjoying life!
						</p>
						<router-link class="btn btn-link lg-button yellow-button" role="button" to="/mbm">Find Out More</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="carousel-item">
			<div class="row p-0 carousel-row">
				<div class="col-md-6 col-12 p-0 hero-img index-carousel-img-2"></div>
				<div class="col-md-6 col-12">
					<div class="p-3 text-center">
						<h1 class="main-heading butterfly-text">A Simpler Life</h1>
						<h2 class="xl-p average-text">Our Customers Rave About Their MBM Experience!</h2>
						<p class="m-0 lg-p average-text">"Things are SO much easier for me!" - Alexis | Pittsburgh, PA</p>
						<p class="m-0 lg-p average-text">"This workbook is amazing!!" - Chandra | Salt Lake City, UT</p>
						<p class="m-0 lg-p average-text">"Wow! I can see a huge difference in my life!!" - Jessica | Benton, AR</p>
						<router-link class="btn btn-link lg-button green-button" role="button" to="/cart">Experience Your Own MBM</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="carousel-item">
			<div class="row p-0 carousel-row">
				<div class="col-md-6 col-12 p-0 hero-img index-carousel-img-3"></div>
				<div class="col-md-6 col-12">
					<div class="p-3 text-center">
						<h1 class="main-heading butterfly-text">Simplify Everything!</h1>
						<h2 class="xl-p average-text">There's More to Life Than Just Cleaning.</h2>
						<p class="m-0 lg-p average-text">
							Endless dishes, laundry and cleaning up after kids got you down?
							You can change it all, and we can help! Learn how to incorporate systems that will help you
							thrive and find that extra "you" time you've been looking for.
						</p>
						<router-link class="btn btn-link lg-button orange-button" role="button" to="/mbm">Get Started!</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<a class="carousel-control-prev carousel-control-color" href="#carouselIndicators" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next carousel-control-color" href="#carouselIndicators" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>
</template>

<script>
export default {
	name: 'IndexCarousel',
}
</script>

<style scoped>
.carousel-control-color:hover {
	background-color: rgba(0, 0, 0, 0.15);
	transition: .8s;
}

.carousel-indicators li {
	background-color: #000;
}

.carousel-indicators .active {
	background-color: #f7941d;
}

.index-carousel-img-1 {
	background-image: url("https://mybetterme.s3-us-west-2.amazonaws.com/images/Carousel1.jpg");
}

.index-carousel-img-2 {
	background-image: url("https://mybetterme.s3-us-west-2.amazonaws.com/images/Carousel2.jpg");
}

.index-carousel-img-3 {
	background-image: url("https://mybetterme.s3-us-west-2.amazonaws.com/images/Carousel3.jpg");
}

.carousel-row {
	height: 650px;
}

@media (min-width: 768px) {
	.carousel-row {
		height: 500px;
	}
}
</style>
