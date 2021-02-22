<template>
	<div class="row profile">
		<section>
			<h1 class="title">About Me:</h1>
			<p class="text-muted">
				Hello, my name is Shawn Crigger, a self-taught geek who grew up immersed in computers. Learning to program on my first Vic20 and getting my first 300 BAUD modem for my C64 were life-changing events.
			</p>
			<p class="text-muted">
				After exploring the few BBS systems I could find back in those days, and of course, searching for WAREZ (what 8 or 9 years old didn't?). Eventually, I moved to an Apple ][e and a Tandy, and finally, my first IBM 386.
			</p>
			<p class="text-muted">
				When the first 486-DX came out I got one as a Christmas gift, then I worked any odd job a boy that young could work in order to buy myself one of the very first US Robotics 14.4k modems. Years before the personal computer became attainable for most people, computers had already become an essential part of my life.
			 </p>
			 <p class="text-muted">
				During the time I was using IBM products, I taught myself Turbo Pascal and Turbo C++. Out of all of the languages I’ve learned, Turbo Pascal is still my favorite. Once I got a 14.4k modem I opened a BBS, originally running WWIV, then Vision. In 2006 I opened a vBulletin forum, from there I started building vBulletin mods.
			</p>
			<p class="text-muted">
				With countless hours and an unyielding determination and discipline, what began as a fun hobby to learn in my free time has grown into a successful career as a full-time Web Developer.
			</p>
			<p class="text-muted">
				Nowadays, I am a very experienced full stack developer that works with PHP, JavaScript, AngularJS, CSS3, and many other exciting new technologies, to bring my clients dreams to life!
			</p>
		</section>
		<section>
			<h2 class="title">Tech I use</h2>
			<p class="text-muted"><em>I'm always excited to learn some new technology!</em></p>
			<div class="brands row">
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="https://www.sublimetext.com/3" target="_blank">
						<img src="/images/logos/sublime-text.svg" alt="Sublime Text 3" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://webpack.github.io/" target="_blank">
						<img src="/images/logos/webpack.svg" alt="Webpack" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://www.w3.org/TR/html5/" target="_blank">
						<img src="/images/logos/html-5.svg" alt="HTML5" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://sass-lang.com/" target="_blank">
						<img src="/images/logos/sass.svg" alt="Sass" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
						<img src="/images/logos/javascript.svg" alt="Javascript" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://getbootstrap.com/" target="_blank">
						<img src="/images/logos/bootstrap.svg" alt="Bootstrap" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://vuejs.org/" target="_blank">
						<img src="/images/logos/vue.svg" alt="VueJS" class="img-fluid">
					</a>
				</div>

				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://php.net/" target="_blank">
						<img src="/images/logos/php.svg" alt="PHP" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://dev.mysql.com/" target="_blank">
						<img src="/images/logos/mysql.svg" alt="MySql" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="http://laravel.com/" target="_blank">
						<img src="/images/logos/laravel.svg" alt="Laravel" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="https://git-scm.com/" target="_blank">
						<img src="/images/logos/git.svg" alt="Git" class="img-fluid">
					</a>
				</div>
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="https://wordpress.org/" target="_blank">
						<img src="/images/logos/wordpress.svg" alt="Wordpress" class="img-fluid">
					</a>
				</div>
			</div>
			<div class="brands row">
				<div class="brand-item col-lg-1 col-md-2 col-sm-2 col-3">
					<a href="https://angularjs.org/" target="_blank">
						<img src="/images/logos/angular.svg" alt="AngularJS" width="60" class="img-fluid">
					</a>
				</div>
			</div>
		</section>
		<!-- NOT READY FOR PRIME TIME -->
		<section style="display:none;">
			<h3>LinkedIn Recommendations</h3>
			<div class="row">
			    <div class="col-md-12">
			        <div class="main-timeline">
			            <a href="#" class="timeline" v-for="item in items">
			                <div class="timeline-icon">
			                	<img :src="item.image" :alt="item.name">
			                </div>
			                <div class="timeline-content">
			                    <h3 class="title">{{item.name}}</h3>
			                    <p class="description">
			                        {{item.comment}}
			                    </p>
			                </div>
			            </a>
			        </div>
			    </div>
			</div>
		</section>
	</div>
</template>
<script>
import linkedInData from '../data/linked.json';
export default {
	data(){
		return {
			linkedIn : linkedInData
		}
	},
	computed: {
		items(){
			return _.orderBy(this.linkedIn, ['date', ], ['desc']);
		}
	}
}
</script>
