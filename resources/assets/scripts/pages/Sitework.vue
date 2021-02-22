<template>
	<div>
		<h1 class="title">{{website.title}}</h1>
		<div class="row no-gutters portfolio">
			<div class="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
				<h2 class="">Job Description</h2>
				<markdown-it-vue class="md-body" :content="website.full_description" :options="mdOptions" />
			</div>
			<div class="portfolio-gallery">
			   <gallery :images="fullsize" :index="index" @close="index = null" style="color: white;"></gallery>
			   <div
			     class="image"
			     v-for="(image, imageIndex) in fullsize"
			     :key="imageIndex"
			     @click="index = imageIndex"
			     :style="{ backgroundImage: 'url(' + image.href + ')', width: '300px', height: '200px' }"
			   ></div>
			 </div>
		</div>
	</div>
</template>


<script>
import VueGallery from 'vue-gallery';
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
	    data:function(){
	      return {
	        website:[],
	        index: null,
	        mdOptions: {
				markdownIt: {
					linkify: true
				},
				linkAttributes: {
					attrs: {
						target: '_blank',
						rel: 'noopener'
					}
				}
			}
	      };
	    },
	    created: function () {
	    	var json  = {};
	    	var _this = this;
	    	var slug  = this.$route.params.slug;
	        $.getJSON('/api/portfolio/' + slug, function (json) {
	            _this.website = json;
	        });
	    },
	    computed: {
	    	thumbs(){
	    		return this.website.images.thumbs;
	    	},
	    	fullsize(){
	    		return this.website.images.full;
	    	},
	    	images(){
	    		return this.website.images;
	    	}
	    },
	    components: {
	      'MarkdownItVue': MarkdownItVue,
	      'gallery': VueGallery
	    }
	}
</script>
