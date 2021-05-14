<template>
<div class="container-fluid text-center p-0 mbm-hero-container hero-img" alt="Ideas, energy &amp; solutions are not easily won. (Especially if you are struggling with the simple day-in, day-out routines. We're here to help simplify your life so you can achieve more!">
  <div class="p-5">
    <h1 class="text-center main-heading text-white text-shadow butterfly-text">Ideas. Energy. Solutions.</h1>
    <h2 class="text-center xl-p text-white text-shadow average-text">Our goal is to help others find balance and happiness! Everything we do is designed to simplify and inspire!</h2>
    <a class="btn btn-link lg-button purple-button" role="button" data-target="#MyBetterMe-modal" data-toggle="modal" href="#">What's MyBetterMe? ▶</a>
  </div>
</div>
<div class="container-fluid text-center p-0">
  <div class="row m-0">
    <div class="col-md-12 p-0">
      <div class="py-5 blue-over">
        <h1 class="text-center main-heading text-black butterfly-text">Inspiring Media</h1>
        <h2 class="text-center lg-p text-black average-text">Our workbook is divided into 10 sections. Each is based on a specific aspect of life.</h2>
      </div>
    </div>
    <div class="col-md-12 text-center mx-0 mb-5 mt-0">
      <div class="text-center w-100">
        <div class="my-0 mx-auto pb-5 pt-1 px-0">

          <a id="Environmental-link" class="lg-icon text-black" data-target="#Environmental-modal" data-toggle="modal" title="Environmental" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Environmental-icon.svg">
            Environmental
          </a>
          <a id="Spiritual-link" class="lg-icon text-black" data-target="#Spiritual-modal" data-toggle="modal" title="Spiritual" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Spiritual-icon.svg">
            Spiritual
          </a>
          <a id="Physical-link" class="lg-icon text-black" data-target="#Physical-modal" data-toggle="modal" title="Physical" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Physical-icon.svg">
            Physical
          </a>
          <a id="Emotional-link" class="lg-icon text-black" data-target="#Emotional-modal" data-toggle="modal" title="Emotional" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Emotional-icon.svg">
            Emotional
          </a>
          <a id="Relationship-link" class="lg-icon text-black" data-target="#Relationship-modal" data-toggle="modal" title="Relationship" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Relationship-icon.svg">
            Relationship
          </a>

        </div>
        <div class="my-0 mx-auto pb-5 pt-1 px-0">

          <a id="Family-link" class="lg-icon text-black" data-target="#Family-modal" data-toggle="modal" title="Family" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Family-icon.svg">
            Family
          </a>
          <a id="Social-link" class="lg-icon text-black" data-target="#Social-modal" data-toggle="modal" title="Social" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Social-icon.svg">
            Social
          </a>
          <a id="Intellectual-link" class="lg-icon text-black" data-target="#Intellectual-modal" data-toggle="modal" title="Intellectual" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Intellectual-icon.svg">
            Intellectual
          </a>
          <a id="Career-link" class="lg-icon text-black" data-target="#Career-modal" data-toggle="modal" title="Career" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Career-icon.svg">
            Career
          </a>
          <a id="Financial-link" class="lg-icon text-black" data-target="#Financial-modal" data-toggle="modal" title="Financial" href="#">
            <img class="icon-img h-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Financial-icon.svg">
            Financial
          </a>

        </div>
      </div>
    </div>
  </div>
</div>

<div class="container-fluid m-0 p-0">
  <div class="row m-0 p-0">
    <div class="col-md-12 p-0 m-0">
      <div id="MyBetterMe-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">What's MyBetterMe?</h1>
              <p class="text-black lg-p average-text">Our workbook is titled MyBetterMe and is created to help you!</p>
              <p class="text-black lg-p average-text">Inside you'll find helpful areas that can be there to guide and give you direction, purpose, and inspiration!</p>
              <p class="text-black lg-p average-text">Our goal is simple; Well-being! We're here to help support you in whatever areas of your life you may be struggling with.</p>
              <p class="text-black lg-p average-text">MyBetterMe all starts with the answer to one question: Do you want to simplify your life?</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">Yes! I Want to Simplify!</router-link>
              </div>
              <div>
                <router-link class="btn btn-link purple-button lg-button" role="button" data-dismiss="modal" to="/resources">I'm Not Sure Yet.</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Environmental-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Environmental</h1>
              <p class="text-black lg-p average-text">Your environment can affect everything. This section of the workbook is dedicated to helping you get things in order so that you can feel calm, peaceful, and in control!</p>
              <p class="text-black lg-p average-text">You'll find ideas on how to sort, downsize, and upgrade things that clutter your life. Everything a gal needs to reclaim her turf!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Spiritual-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Spiritual</h1>
              <p class="text-black lg-p average-text">This section is to help with the areas of connecting to your spirit and the outside world around you. At MyBetterMe, we know how hard it can be to find time for you.</p>
              <p class="text-black lg-p average-text">It is also true that without finding your connection, it is hard to help and inspire others. This area will help you achieve balance and find inner peace!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Physical-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Physical</h1>
              <p class="text-black lg-p average-text">Boy, do we mean Physical! This area is sure to shock and awe your body into tip-top shape. We offer everything from custom workouts to help with those hard-to-reach areas!</p>
              <p class="text-black lg-p average-text">Putting your physical health first isn't easy when you're a mom. For those who struggle to find time, this section is for you!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Emotional-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Emotional</h1>
              <p class="text-black lg-p average-text">This is a tough category. Many people struggle to find healing and help in the emotional department. Rather than signing you up for a dating site, we decided to help stablize the relationships
                around you so that you can
                feel loved, appreciated, and fulfilled.</p>
              <p class="text-black lg-p average-text">While we can't guarantee that Prince Charming will deliver, we can certainly get you ready for the Queen's Ball!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Relationship-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Relationship</h1>
              <p class="text-black lg-p average-text">Struggling to connect with your Honey? Look no further! Our Relationship section is dedicated to bring back some spark!</p>
              <p class="text-black lg-p average-text">This part of the workbook is created to help give you a place to store all of those amazing ideas for dates and quality time. If your love life needs a jumpstart, we can help!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Family-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Family</h1>
              <p class="text-black lg-p average-text">Family is something we value highly. Most of our knowledge in this arena comes from personal experience. What works, and what doesn't.</p>
              <p class="text-black lg-p average-text">If your family is under fire, perhaps it's time to get a laser-like focus on it, and that's exactly what this part of the MyBetterMe does!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Social-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Social</h1>
              <p class="text-black lg-p average-text">This is perfect for those wanting to get out and bee with others. We know that sometimes life can get in the way of having good, solid relationships, so we created this area to help you find more
                connection.</p>
              <p class="text-black lg-p average-text">If you're not into beeing around a lot of people, we have answers for you as well. Social situations can be daunting and we're here to help!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Intellectual-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Intellectual</h1>
              <p class="text-black lg-p average-text">Does your brain need attention? This area of our workbook can help to improve just about any aspect you can think of!</p>
              <p class="text-black lg-p average-text">We want to create goals that will break through the barriers of tedious chores and give your brain a boost!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Career-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Career</h1>
              <p class="text-black lg-p average-text">Rough day at the office? We're here to help keep you focused on that new promotion!</p>
              <p class="text-black lg-p average-text">Whether you're 20 years in or just getting started, we have solutions that work to fast-track your career!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Financial-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Financial</h1>
              <p class="text-black lg-p average-text">Last (but not least) is our Financial section. This part of the MyBetterMe can help you save, manage, and invest your money wisely!</p>
              <p class="text-black lg-p average-text">Inside you'll find our methods to help improve the way you save and spend!</p>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link>
              </div>
              <div>
                <router-link class="btn btn-link orange-button lg-button" role="button" to="/resources">Find Out More</router-link>
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MBM',
}
</script>

<style scoped>
.mbm-hero-container {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-hero.jpg);
}
</style>