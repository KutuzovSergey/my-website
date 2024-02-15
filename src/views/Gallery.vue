<template>
	<div class="wrapper">
		<LateralFace class="lateral" id="lateral"/>
		<ButtonLateralFace />
	  <div class="gallery">
	  	<MenuHeader class="menuHeader" :menuHeaderLists="menuHeaderLists" />
	  	<div class="gallery__wrapper">
		  	<ul class="gallery__block">
		  		<li v-for="myJob in myJobs" v-bind:id="myJob.id" class="gallery__item">
		  			<div class="gallery__title">
		  				<h3>{{ myJob.jobName }}</h3>
		  			</div>
		  			<a v-bind:href="myJob.jobLink" target="_blank" class="gallery__link">
		  				<div class="gallery__img" :id="myJob.jobImgId"></div>
		  				<!-- <img :src="myJob.jobImg" v-dind:alt="myJob.jobAlt"> -->
		  				<div class="gallery__description">
		  					<span>{{ myJob.jobDescription }}</span>
		  				</div>
		  			</a>
		  		</li>
		  	</ul>
	  	</div>
	  	<FooterSection class="footerSection" />
	  </div>
	</div>
</template>

<script>
	import MenuHeader from '@/components/MenuHeader.vue'
	import LateralFace from '@/components/LateralFace.vue'
	import ButtonLateralFace from '@/components/ButtonLateralFace.vue'
	import FooterSection from '@/components/FooterSection.vue'
	export default{
		name: 'gallery',
		components: {
			MenuHeader,
			LateralFace,
			FooterSection,
			ButtonLateralFace,
		},
		data(){
			return{
				myJobs: [
				{ 
						id: 1, 
						jobName: 'Adept course',
						jobDescription: 'Курсы для репититоров',
						jobLink: 'http://adept-course.ru/', 
						jobIndicator: 'website', 
						jobImgId: 'adeptСourse', 
						jobAlt: 'adept-course', 
					},
					{ 
						id: 2, 
						jobName: 'Дома и бани',
						jobDescription: 'интернет магазин - дипломная работа для колледжа',
						jobLink: 'myWork/housesBaths/index.html', 
						jobIndicator: 'website', 
						jobImgId: 'housesBaths', 
						jobAlt: 'houses baths', 
					},
					{ 
						id: 3, 
						jobName: 'Барабанщици москвички', 
						jobDescription: 'Многостраничный сайт для музыкального ансамбля', 
						jobLink: 'myWork/drummers/index.php', 
						jobIndicator: 'website', 
						jobImgId: 'drummers', 
						jobAlt: 'drummers', 
					},
					{ 
						id: 4, 
						jobName: 'BREDLI', 
						jobDescription: 'Одностраничный лендинг', 
						jobLink: 'myWork/BREDLI/index.html', 
						jobIndicator: 'landing',
						jobImgId: 'bredli', 
						jobAlt: 'bredli', 
					},
					{ 
						id: 5, 
						jobName: 'Тату мастер Наталья', 
						jobDescription: 'Многостраничный сайт для тату мастера', 
						jobLink: 'myWork/tatuNataley/index.html', 
						jobIndicator: 'website', 
						jobImgId: 'tatuNataley', 
						jobAlt: 'tatu nataley', 
					},
					{ 
						id: 6, 
						jobName: 'Заказ квизов', 
						jobDescription: 'Лендинг для заказа интернет опросников', 
						jobLink: 'myWork/quiz/index.html', 
						jobIndicator: 'landing', 
						jobImgId: 'quiz', 
						jobAlt: 'quiz', 
					},
					{ 
						id: 7, 
						jobName: 'Демо вебстудии', 
						jobDescription: 'Многостраничный сайт', 
						jobLink: 'myWork/ds/index.php', 
						jobIndicator: 'website', 
						jobImgId: 'webStudio', 
						jobAlt: 'web studio', 
					},
					{ 
						id: 8, 
						jobName: 'Вязание на заказ', 
						jobDescription: 'Многостраничныйсайт (моя первая работа)', 
						jobLink: 'myWork/needlework/index.html', 
						jobIndicator: 'website', 
						jobImgId: 'needlework', 
						jobAlt: 'needlework', 
					},
				],
				menuHeaderLists: [
					{id: 1, title: 'Главная', href: '#main'},
	        {id: 2, title: 'Обо мне', href: '#aboutMe'},
	        {id: 3, title: 'Навыки', href: '#skills'},
	        {id: 4, title: 'Образование', href: '#education'},
	        {id: 5, title: 'Портфолио', href: '#portfolio'},
	        {id: 6, title: 'Отзывы', href: '#reviews'},
	        {id: 7, title: 'Опыт работы', href: '#workExperience'},
	        {id: 8, title: 'Новости', href: '#news'},
	        {id: 9, title: 'Обратная связь', href: '#feedback'},
				],
			}
		},
		mounted(){
			let jobImg = document.querySelectorAll('.gallery__img');
			for (var i = 0; i < jobImg.length; i++) {

				console.log(jobImg[i].getAttribute('id') == "housesBaths");

				if (jobImg[i].getAttribute('id') == "housesBaths") {
					jobImg[i].classList.add('gallery__img-housesBaths');
				} else if (jobImg[i].getAttribute('id') == "drummers") {
					jobImg[i].classList.add('gellery__img-drummers');
				} else if (jobImg[i].getAttribute('id') == "bredli") {
					jobImg[i].classList.add('gellery__img-bredli');
				} else if (jobImg[i].getAttribute('id') == "tatuNataley") {
					jobImg[i].classList.add('gallery__img-tatuNataley');
				} else if (jobImg[i].getAttribute('id') == "quiz") {
					jobImg[i].classList.add('gallery__img-quiz');
				} else if (jobImg[i].getAttribute('id') == "webStudio") {
					jobImg[i].classList.add('gallery__img-webStudio');
				} else if (jobImg[i].getAttribute('id') == "needlework") {
					jobImg[i].classList.add('gallery__img-needlework');
				} else if (jobImg[i].getAttribute('id') == "adeptСourse") {
					jobImg[i].classList.add('gallery__img-adeptСourse');
				}

			}
		},
	}
</script>

<style lang="scss" scoped>
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';
.wrapper{
  display: flex;
  padding-top: 1%;
  width: 100%;
  justify-content: space-evenly;
}
	.gallery{
		width: 77%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		/*min-height: 8700px;*/

		.menuHeader{
			height: 90px;
		}

		&__block{
			display: flex;
			flex-wrap: wrap;
			background-color: #ffffff;
		}
		&__item{
			width: 38%;
			height: 360px;
			margin: 5.8%;
			border: 1px solid #2196F3;
		}
		&__item:hover{}
		&__title{
			width: 100%;
			height: 15%;
			display: flex;
			background-color: #2196F3;
		}
		&__title>h3{
			font-size: 1.2rem;
			text-transform: uppercase;
			margin: auto;
			color: #ffffff;
			text-align: center;
			font-weight: 700;
		}
		&__link{
			display: block;
			width: 100%;
			height: 85%;
			overflow: hidden;
		}
		&__img{
			width: 100%;
			height: 100%;
			background-size: cover;
		}
		.gallery__img-housesBaths{
			background-image: url(../assets/portfolio/0_5.png);
		}
		.gellery__img-drummers{
			background-image: url(../assets/portfolio/0_3.png);
		}
		.gellery__img-bredli{
			background-image: url(../assets/portfolio/0_2.png);
		}
		.gallery__img-tatuNataley{
			background-image: url(../assets/portfolio/0_4.png);
		}
		.gallery__img-quiz{
			background-image: url(../assets/portfolio/0_6.png);
		}
		.gallery__img-webStudio{
			background-image: url(../assets/portfolio/0_1.png);
		}
		.gallery__img-needlework{
			background-image: url(../assets/portfolio/0_7.png);
		}
		.gallery__img-adeptСourse{
			background-image: url(../assets/portfolio/0_8.png);
		}
		.gallery__description{
			display: none;
		}
		.footerSection{
			height: 100px;
			margin-top: 1%;
			margin-bottom: 1%;
		}
	} 
	.sidebar{
		.sidebar__bottom {
			width: 100%;
    	height: 73%;
		}
	} 
@media (max-width: 960px){
	.gallery{
		width: 96%;

		.gallery__item{
			width: 90%;
			height: 260px;
		}
		.gallery__link{
			height: 200px;
		}
	} 
	.sidebar{
		.sidebar__bottom {
		}
	} 
}
</style>
