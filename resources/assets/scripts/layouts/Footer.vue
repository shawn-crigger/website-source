<template>
  <footer>
  	<dl>
  		<dt>Email</dt>
  		<dd><a target="_blank" :href="mailto">{{email}}</a></dd>
  	</dl>
  	<dl>
  		<dt>Phone</dt>
  		<dd><a target="_blank" :href="tel">{{phone}}</a></dd>
  	</dl>
  	<dl class="mb-0">
  		<dt>Find me on</dt>
  		<dd class="mb-0">
  			<ul class="nav nav-social">
  				<li class="nav-item">
  					<a v-bind:href="social.linkedin" class="nav-link" target="_blank">
  						<i class="fa fa-linkedin"></i>
  					</a>
  				</li>
  				<li class="nav-item">
  					<a v-bind:href="social.twitter" class="nav-link" target="_blank">
  						<i class="fa fa-twitter"></i>
  					</a>
  				</li>
          <li class="nav-item">
            <a v-bind:href="social.github" class="nav-link" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </li>
  				<li class="nav-item">
  					<a v-bind:href="social.upwork" class="nav-link" target="_blank">
  						<i class="upwork"></i>
  					</a>
  				</li>
  			</ul>
  		</dd>
  	</dl>
  </footer>
</template>

<script>
export default {
	data(){
		return {
			email: 'ithippyshawn@gmail.com',
			phone: '843-602-3769',
			social : {
				facebook : '',
        upwork: 'https://www.upwork.com/o/profiles/users/_~012c863ad135fdb85f/k',
				twitter: 'https://twitter.com/shawncrigger',
        linkedin: 'https://www.linkedin.com/in/shawn-crigger/',
				github: 'https://github.com/shawncrigger/'
			}
		}
	},
	computed: {
		mailto(){
			return 'mailto:' + this.email;
		},
		tel(){
			return 'tel:' + this.phone.replace(/ /g, '')
		}
	}
}
</script>
