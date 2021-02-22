<template>
    <div>
        <div class="row">
            <div class="col-lg-6 col-primary">
                <contact-form></contact-form>
                <map-canvas position="33.674700,-78.901180" zoom="4" icon="/images/mapmarker.png"></map-canvas>
            </div>
            <div class="col-lg-6 flex-first flex-lg-unordered">
                <h1 class="title title--spaced">Contact me</h1>
                <div class="list-group">
                    <div class="list-group-item">
                        <h2 class="title">I'm Social</h2>
                      <ul class="social-icons">
                        <li>
                          <a href="https://twitter.com/shawncrigger" class="twitter" target="_blank">
                            <span><i class="fa fa-tumblr fa-stack-1x fa-inverse"></i></span>
                            <span>Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/shawn-crigger/" class="linkedin" target="_blank">
                            <span><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span>
                            <span>LinkedIn</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/shawncrigger?tab=repositories" class="github" target="_blank">
                            <span><i class="fa fa-github fa-stack-1x fa-inverse"></i></span>
                            <span>Newer Github</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/svizion?tab=repositories" class="github" target="_blank">
                            <span><i class="fa fa-github fa-stack-1x fa-inverse"></i></span>
                            <span>Older Github Account</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.upwork.com/o/profiles/users/_~012c863ad135fdb85f/" class="upwork" target="_blank">
                            <span><i class="upwork"></i></span>
                            <span>Upwork</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-group-item">
                        <h2 class="title">My Goals in Life</h2>
                        <p class="text-muted">I used to travel alot and develop on the road, Now I live in a nice townhouse with a home office, right outside Myrtle Beach, SC but have been thinking of relocating.</p>
                    </div>
                    <div class="list-group-item">
                        <h3 class="title">The Team<br></h3>
                        <p class="text-muted">My team consists of my main supervisor, Mittens she's a 5 year old Hound Mix, who likes to stare over my shoulder to make sure I'm doing things how she would do them. Dogs are just amazing how much happiness they bring to life.</p>
                    </div>
                    <div class="list-group-item">
                        <h3 class="title">Mittens<br></h3>
                        <iframe id="myplayer" src="//player.vimeo.com/video/289607133?player_id=myplayer&api=1" width="640" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import MapCanvas from '../components/MapCanvas.vue';
import ContactForm from '../components/ContactForm.vue';
import Typed from 'typed.js'
export default {
    components : {
        MapCanvas,
        ContactForm
    }
}
</script>
