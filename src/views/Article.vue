<template>
	<div class="wrapper">
		<LateralFace class="lateral" id="lateral" />
    <ButtonLateralFace />
	  <div class="article" v-for="art in article">
	  	<MenuHeader class="menuHeader" :menuHeaderLists="menuHeaderLists" />
	  	<div class="article__wrapper">
	  		<div class="article__title"><h1>{{ art.title }}</h1></div>
	  		<div class="article__content">
		  		<div class="article__text" v-html="art.text"></div>
	  		</div>
	  	</div>
	  	<div class="article__comments comments">
	  		<form class="comments__form">
	  			<div class="comments__textarea">
	  				<textarea v-model="commentDate"></textarea>
	  			</div>
	  			<div class="comments__button">
	  				<button @click="submitComment" type="button">Оставить комментарий</button>
	  			</div>
	  		</form>
	  			<div class="comment">
	  				<div class="comment__block">
	  					<div lass="comment__date"><span></span></div>
	  					<div class="comment__text"><p>{{commentX}}</p></div>
	  				</div>
	  				<div class="comment__ava"><img src="" alt=""></div>
	  			</div>
	  			</div>
	  			<FooterSection class="footerSection" />
	  		</div>
	  	</div>
	  </div>
  </div>
</template>

<script>
	import LateralFace from '@/components/LateralFace.vue'
	import ButtonLateralFace from '@/components/ButtonLateralFace.vue'
	import MenuHeader from '@/components/MenuHeader.vue'
	import FooterSection from '@/components/FooterSection.vue'
	import VueRouterArticl from '@/components/articles/VueRouterArticl.vue'

	export default{
		name: 'article',
		components: {
			LateralFace,
			ButtonLateralFace,
			MenuHeader,
			FooterSection,
			VueRouterArticl,
		},
		data(){
			return{
				articles: [
					{ 
						id: 1, 
						title: 'Векторная графика в веб-разработке (svg)',
						text: '<div class="articles"><div class="articles__text"><div class="articles__illustration articles__illustration-svgFirst"></div><p>Для размещения изображений на интернет-ресурсах можно использовать как растровые, так и векторные изображения. Оба типа картинок имеют, так сказать, свою сферу применения и активно используются при создании сайта или приложения.</p><p>Растровое изображение строится на основе пикселей - наименьших логических двумерных элементов. Проще говоря, микроскопических квадратов, каждый из которых имеет свой цвет. Чем больше квадратов в изображении, тем выше его качество и, соответственно, больше программной памяти оно занимает. Представлены пиксельные изображения, как правило, в форматах JPEG или PNG. Есть и другие форматы пиксельных изображений, но в веб-разработке они применяются крайне редко.</p><p>Основными минусами растровой графики являются потеря качества изображения при масштабировании и большой "вес" файлов. Поэтому использование на веб странице растровых изображений рационально ограничить контентными изображениями (фото пользователей, рекламными баннерами и т. п.). Во всех остальных случаях, где это возможно, лучше использовать векторные изображения, представленные в формате svg.</p><p>SVG (от англ. Scalable Vector Graphics) - масштабируемая векторная графика. Представляют собой файл формата ".svg" и содержат разметку xml и встроенные css стили.</p></div><div class="articles__title"><h6>Чем хороши векторные изображения:</h6></div><ul class="articles__list"><li>Поддерживается всеми браузерами, за исключением ES8 и ниже;</li><li>Не теряют своего качества при масштабировании экрана;</li><li>Не занимают много программного места;</li><li> В отличие от растровых изображений, изменение которых возможно только через графический редактор, масштабируемую векторную графику возможно редактировать в текстовом редакторе;</li><li>Есть возможность стилизации и анимирования картинки посредством css или js;</li><li>Файлы в формате svg могут содержать текст, который доступен для индексации поисковых систем.</li></ul><div class="articles__text"><p>Нельзя не отметить минус использования svg-графики. Векторные картинки строятся на основе вычислений, которые, в свою очередь, дают дополнительную нагрузку на процессор пользователя. Если ваш интернет ресурс сверху до низу забит сложными векторными изображениями и анимациями, а у пользователя не очень мощный ПК/ноутбук, то вряд ли ему это понравится.</p></div><div class="articles__heading"><h3>Варианты интеграции svg на страницу:</h3></div><div class="articles__subheading"><h5>Простые способы интеграции - тег img и CSS</h5></div><div class="articles__text"><p>Самый простой способ вставки векторного изображения на страницу это использования тега  <a href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/img">img</a>. При таком подходе поведение картинки не будет сильно отличаться от поведения пиксельного изображения.</p><div class="cod"><span class="cod__symbol"><</span><span class="cod__tag">div</span><span class="cod__atribute">class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"logo__block"</span><span class="cod__symbol">></span></br><span class="cod__symbol cod__indent-1"><</span><span class="cod__tag">img</span><span class="cod__atribute"> src</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"image/logo.svg"</span> <span class="cod__atribute">alt</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"sait logotip"</span> <span class="cod__atribute">class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"logo"</span><span class="cod__symbol">/></span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">div</span><span class="cod__symbol">></span></br></br><span class="cod__symbol"><</span><span class="cod__tag">style</span><span class="cod__symbol">></span></br><span class="cod__CSSselector cod__indent-1">.logo__block</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2">width</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 50px</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">height</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 50px</span><span class="cod__symbol">;</span> </br><span class="cod__CSSproperty cod__indent-2">border</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 2px solid #26A59E</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br> <span class="cod__CSSselector cod__indent-1">.logo</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2">width</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 100%</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">height</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> auto</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span></span><span class="cod__tag">style</span><span class="cod__symbol">></span></div><p>Ещё один простой способ это вставить изображение как фон блока с использованием свойства стилей background</p><div class="cod"><span class="cod__symbol"><</span><span class="cod__tag">div</span><span class="cod__atribute">class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"logo__block"</span><span class="cod__symbol">></span><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">div</span><span class="cod__symbol">></span></br></br><span class="cod__symbol"><</span><span class="cod__tag">style</span><span class="cod__symbol">></span></br><span class="cod__CSSselector cod__indent-1">.logo__block</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2">background-image</span><span class="cod__symbol">:</span> <span class="cod__CSSvalue"> url("image/logo.svg")</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">background-size</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> cover</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">width</span><span class="cod__symbol">:</span> <span class="cod__CSSvalue"> 140px</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">height</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 140</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">margin</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> auto</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">border</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 2px solid #26A59E</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">style</span><span class="cod__symbol">></span></div><div class="articles__example"></div><p>Единственным плюсом при таких  подходах будет отсутствие потери качества изображения при масштабировании. В остальном, картинка ведёт себя так же, как и растровые аналоги - нет возможности посредством css, либо js, поменять цвет изображения или сделать анимацию. Есть возможность создания svg анимации. <div class="example__css"></div></p></div><div class="articles__subheading"><h5>object  iframe и ended</h5></div><div class="articles__text"><p>Следующий вариант - использовать тег <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object">object</a>. В принципе, этот способ тоже ничем особенным не примечателен, но возможностей предоставляет больше. Можно делать анимации, используя JavaScript, создавать отзывчивые для пользователя анимации или готовые svg анимации. Пример вставки изображения через object:</p><div class="cod"><span class="cod__symbol"><</span><span class="cod__tag">div</span> <span class="cod__atribute"> class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"logo__block"</span><span class="cod__symbol">></span></br><span class="cod__symbol cod__indent-1"><</span><span class="cod__tag">object</span><span class="cod__symbol">></span><span class="cod__atribute"> type</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"image</span><span class="cod__symbol">/</span><span class="cod__atribute_value">svg</span><span class="cod__symbol">+</span><span class="cod__atribute_value">xml"</span><span class="cod__atribute"> data<span class="cod__symbol">=</span><span class="cod__atribute_value">"data</span><span class="cod__symbol">:</span><span class="cod__atribute">image</span><span class="cod__symbol">/</span><span class="cod__atribute_value">svg</span><span class="cod__symbol">+</span><span class="cod__atribute_value">xml</span><span class="cod__symbol">;</span><span class="cod__symbol">,</span><span class="cod__atribute_value"> image</span><span class="cod__symbol">/</span><span class="cod__atribute_value">logo.svg"</span><span class="cod__atribute"> class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"logo"</span><span class="cod__symbol">></span><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">object</span><span class="cod__symbol">></span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">div</span><span class="cod__symbol">></span></br></br><span class="cod__symbol"><</span><span class="cod__tag">style</span><span class="cod__symbol">></span></br><span class="cod__CSSselector cod__indent-1">.logo__block</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2">width</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 50px</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">height</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 50px</span><span class="cod__symbol">;</span> </br><span class="cod__CSSproperty cod__indent-2">border</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 2px solid #26A59E</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br><span class="cod__CSSselector cod__indent-1">.logo</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2">width</span><span class="cod__symbol">:</span><span class="cod__CSSvalue">	100%</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">height</span><span class="cod__symbol">:</span> <span class="cod__CSSvalue"> auto</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">style</span><span class="cod__symbol">></span></div><div class="articles__example"><object type="image/svg+xml" data="data:image/svg+xml;, /img/logoTest.svg" class="example__object"></object></div><p>Теги iframe и ended тоже можно использовать схожим образом, но я считаю это не лучшим вариантом, поэтому не буду приводить примеры и заострять на этом внимание.</p></div><div class="articles__subheading"><h5>Вставить svg в HTML</h5></div><div class="articles__text"><p>Как уже говорилось выше, файлы векторной графики формата .svg содержат XML код, а следовательно, имеют возможность редактирования в любом текстовом редакторе и понимаются браузером.<p/><p>Откройте любой рисунок svg и вы увидите примерно следующий код:</p><div class="cod"><span class="cod__symbol"><</span><span class="cod__tag">svg</span><span class="cod__atribute"> width</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"1em"</span><span class="cod__atribute"> height</span><span class="cod__symbol">=</span><span class="cod__atribute_value"> "1em"</span><span class="cod__atribute"> viewBox</span><span class="cod__symbol">=</span><span class="cod__atribute_value"> "0 0 16 16"</span><span class="cod__atribute"> class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"bi bi-calculator"</span><span class="cod__atribute"> fill</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"currentColor"</span> <span class="cod__atribute"> xmlns</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"http://www.w3.org/2000/svg"</span><span class="cod__symbol">></span></br><div class="cod__indent-1"><span class="cod__symbol"><</span><span class="cod__tag">path</span><span class="cod__atribute"> fill-rule</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"evenodd"</span><span class="cod__atribute"> d</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"</span><span class="cod__symbol">/</span><span class="cod__symbol">></span></div><div class="cod__indent-1"><span class="cod__symbol"><</span><span class="cod__tag">path</span><span class="cod__atribute"> d</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"</span><span class="cod__symbol">/</span><span class="cod__symbol">></span></div><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">svg</span><span class="cod__symbol">></span></div><div class="articles__example example"><div class="example__title"><span>Наведите курсор на изображение для просмотра анимации</span><div/><div class="example__blockSVG"><svg @click="exampleAnimation" class="svgAnimation" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="102mm" height="102mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 10200 10200" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[]]></style></defs><g id="Слой_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><g id="_50811720"><path class="fil0" id="fil_0" d="M5450 5692l1901 354c-4,-63 -1582,-4430 -1665,-4669 -91,-261 -186,-517 -278,-778 -47,-132 -88,-259 -140,-392 -60,-152 -259,-157 -320,-23 -33,71 -82,324 -104,419 -34,144 -67,282 -103,428l-459 1909c-21,88 41,148 115,110 26,-13 222,-245 253,-283 120,-150 151,18 214,205 45,134 93,260 140,392 93,260 188,516 278,778 90,260 183,529 278,778 82,215 157,388 16,622 -59,98 -103,105 -125,149l-1 1z"/><path class="fil0" id="fil_1" d="M5303 4768l-630 -1769c-23,12 -298,317 -342,370l-336 373c-214,248 -461,510 -678,757 -82,94 -192,203 -270,299l-1083 1202c-89,101 -174,200 -269,300l-675 751c-23,27 -44,47 -66,75l-204 225c-45,51 -90,101 -136,153 -105,120 -248,220 -160,357 88,136 276,52 426,5 413,-131 917,-272 1338,-396l1106 -328c68,-20 179,-32 176,-113 -3,-86 -107,-83 -193,-98 -341,-57 -403,-40 -238,-222 14,-16 23,-22 36,-38l232 -262c192,-225 446,-489 650,-720l542 -604c92,-99 180,-221 290,-280 169,-91 291,-90 483,-38l1 1z"/><path class="fil0" id="fil_2" d="M3277 6762c36,21 778,150 882,169l2684 501c889,165 1791,328 2677,500 245,48 279,-146 233,-233 -34,-64 -722,-650 -820,-750 -21,-22 -43,-41 -65,-59 -103,-85 -243,-222 -349,-312l-415 -371c-27,-25 -41,-41 -69,-64l-209 -188c-38,-37 -258,-235 -283,-240 -45,-10 -78,12 -93,40 -21,39 -3,73 11,107 23,60 50,126 73,189 104,288 112,232 -617,101 -303,-55 -594,-109 -895,-168 -296,-58 -596,-111 -895,-167 -164,-31 -280,-48 -385,-139 -191,-167 -164,-282 -199,-326 -37,29 -824,922 -950,1053 -24,25 -55,60 -77,88 -15,18 -25,25 -40,42l-199 227z"/><path class="fil0" id="fil_3" d="M1121 7976c-143,51 -25,180 8,223 160,205 343,398 531,567l194 170c166,147 459,340 653,457 1749,1052 4093,891 5681,-331 163,-126 245,-197 400,-336 85,-76 484,-499 519,-579 44,-102 -82,-190 -173,-102 -67,64 -124,116 -186,178 -141,143 -451,378 -617,492 -138,95 -301,196 -459,280 -1509,799 -3229,862 -4801,168 -436,-193 -778,-421 -1139,-702 -49,-38 -254,-212 -296,-258 -31,-34 -58,-56 -93,-89 -94,-88 -132,-170 -223,-137l1 -1z"/><path class="fil0" id="fil_4" d="M5652 489c-74,28 -109,157 33,192 739,182 1404,468 1994,916 136,103 276,215 400,328 68,61 119,120 185,179l261 283c1068,1247 1466,2925 1022,4539 -17,63 -81,226 -57,280 19,42 131,129 205,-40 495,-1127 546,-2387 95,-3567 -125,-327 -309,-691 -494,-951 -227,-320 -361,-502 -657,-786 -486,-467 -1112,-875 -1792,-1111 -179,-62 -370,-122 -567,-167 -99,-23 -555,-123 -630,-94l2 -1z"/><path class="fil0" id="fil_5" d="M4509 481c-749,96 -1557,350 -2159,759 -325,221 -362,249 -620,465 -294,246 -613,625 -841,965 -652,969 -936,2205 -715,3418 37,202 82,388 142,577 32,99 154,464 201,520 59,69 212,31 173,-110 -26,-95 -53,-184 -78,-281 -350,-1380 -49,-2843 737,-3981 176,-255 289,-381 481,-598l270 -266c33,-28 62,-59 96,-86 68,-56 128,-109 200,-164 595,-456 1185,-765 1949,-968 62,-16 248,-48 284,-82 31,-30 49,-83 16,-129 -30,-43 -79,-44 -135,-37l-1 -2z"/></g></g></svg></div></div><div class="articles__text"><p>Этот код можно скопировать и вставить в разметку HTML. Визуально результат будет тот же, что и при использовании тега img, но возможностей для работы с картинкой теперь гораздо больше. При таком подходе теги XML становятся элементами DOM-дерева, а значит мы можем задавать им стили и анимировать, как нам вздумается.</p><p>Я не буду подробно разбирать теги, из которых состоит svg файл, только отмечу ряд особенностей, которые важно знать при работе с ним:</p><p>В файле svg порядок отображения (z-index) определяется порядком элементов в файле. Приоритет отдаётся нижнему элементу кода.</p><p>В коде XML могут быть свои стили CSS, сгенерированные при создании файла. Их лучше перенести в общие стили сайта или компоненты приложения, в зависимости от ситуации. Во-первых, это удобно для дальнейшей работы, а во-вторых, некоторые сервисы могут выдавать ошибку, например библиотека vue js.</p></div><div class="articles__subheading"><h5>Кодировка base64</h5></div> <p>При использовании svg есть возможность кодировки как самого XML, так и пути к файлу. Чаще всего используется <a href="">"base64"</a>. Выглядит такой код набором символов. JavaScript предоставляет возможность такого кодирования посредством метода <a href="https://developer.mozilla.org/ru/docs/Web/API/WindowBase64/btoa"> btoa()</a>:</p><div/><div class="cod"><span class="cod__symbol"><</span><span class="cod__tag">div</span><span class="cod__atribute"> class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"imageSVG__block"</span><span class="cod__symbol">></span></br><span class="cod__symbol cod__indent-1"><</span><span class="cod__tag">img</span><span class="cod__atribute"> class</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"imageSVG"</span><span class="cod__atribute"> alt</span><span class="cod__symbol">=</span><span class="cod__atribute_value">"imageSVG"</span><span class="cod__symbol">/</span><span class="cod__symbol">></span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">div</span><span class="cod__symbol">></span></br></br><span class="cod__symbol"><</span><span class="cod__tag">style</span><span class="cod__symbol">></span></br><span class="cod__atribute cod__indent-1">.imageSVG__block</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2">width</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 140px</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2"> height</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 50px</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2">border</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 2px solid #26A59E</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br><span class="cod__atribute cod__indent-1">.imageSVG</span><span class="cod__symbol"> {</span></br><span class="cod__CSSproperty cod__indent-2"> width</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> 100%</span><span class="cod__symbol">;</span></br><span class="cod__CSSproperty cod__indent-2"> height</span><span class="cod__symbol">:</span><span class="cod__CSSvalue"> auto</span><span class="cod__symbol">;</span></br><span class="cod__symbol cod__indent-1">}</span></br><span class="cod__symbol"><</span><span class="cod__symbol">/</span><span class="cod__tag">style</span><span class="cod__symbol">></span></div><div class="articles__example"><img alt="example svg" src="/img/logoTest-2.svg" /></div><div class="articles__show_result"><button @click="resultBase64">результат выполнения кода</button></div><div><p>При использовании base64 полученное значение нельзя подключать через background CSS, может возникнуть ошибка.</p></div><div class="articles__heading"><h3>Где найти векторные изображения?</h3></div><div><p>В данном вопросе вариантов масса: от готовых решений, до создания своих собственных картинок.</p><p>Если вам нужны простые иконки, то стоит воспользоваться бесплатными сервисами, которые предоставляют возможность скачать изображение, скопировать XML код или использовать изображение по ссылке. В качестве примера можно привести небольшую, но довольно удобную библиотеку фреймворка <a href="https://icons.bootstrap-4.ru/">butstrap</a> или же довольно обширную библиотеку <a href="http://fontello.com">fontello.com</a>. На подобных ресурсах представлены так называемые иконочные шрифты. Как правило, для большинства задач этого достаточно.</p><p>Если же у вас есть потребность в создании своего изображения или изменить уже существующее в формате svg, можно воспользоваться специализированными редакторами, такими как Adobe Illustrator или CorelDRAW, но эти программы платные и подходят больше для профессиональных дизайнеров. Для веб-разработчика больше подойдут бесплатные онлайн-редакторы вроде <a href="https://vectr.com/">Vectr<a> или <a href="https://www.drawsvg.org/">DrawSVG</a></p></div></div>', 
					},
					{
						id: 2, 
						title: 'Зачем делать свой сайт для бизнеса', 
						text: '<div class="articles"><div class="articles__illustration articles__illustration-website"></div><div class="articles__text"><p>Каждый предприниматель, вне зависимости от рода предоставляемых им услуг, рано или поздно задумывается о позиционировании своей деятельности в интернете. Это может быть как страничка в социальной сети или свой собственный веб-сайт, так и реклама через сторонние ресурсы (Ютуб каналы, направленные на целевую аудиторию, сообщества в различных социальных сетях, размещение информации о своих услугах на сайтах схожей тематики). Те же, кто ведёт предпринимательскую деятельность и не задумываются о представлении своей деятельности во всемирной паутине, совершают стратегическую ошибку, и вот почему.</p></div> <div class="articles__title"><h3>Дополнительный поток клиентов.</h3></div><div class="articles__text"><p>Одним из залогов успешности ведения любого бизнеса является постоянное привлечение и поиск новых клиентов. В современных реалиях интернет предоставляет неограниченные возможности для решения этой задачи. При этом нет территориальных ограничений, но есть возможность целенаправленно выбирать аудиторию, используя её запросы в поисковиках.</p><p>Множество потенциальных клиентов в силу разных причин (экономия времени, возможность сравнить цены, нежелание общаться с консультантами и т. п.) предпочитают искать интересующий их товар/услугу в интернете.</p></div><div class="articles__title"><h3>Почему веб сайт?</h3></div><div class="articles__text"><p>Интернет-пространство предоставляет множество рекламных возможностей на сторонних ресурсах. В конце-концов, можно создать страницу или группу в распостранённой социальной сети и там позиционировать свой бизнес. Зачем же вкладывать деньги в полноценный сайт?</p></div><div class="articles__title"><h5>Информационный ресурс</h5></div><div class="articles__illustration articles__illustration-website_2"></div><div class="articles__text"><p>Увидев рекламу, пользователь захочет больше узнать о товаре/услуге. Сайт предоставляет не только исчерпывающую информацию о деятельности вашей компании, но и возможность быть на связи с потенциальным клиентом 24/7. Это, своего рода, виртуальный офис и одновременно лицо фирмы. Клиент имеет возможность ознакомиться с ассортиментом предоставляемых услуг/товаров, найти для себя то, что он искал без предварительной консультации и сделать заказ или заказать обратный звонок.</p></div><div class="articles__title"><h5>Повышение продаж</h5></div><div class="articles__text"><p>Оффлайн магазин имеет свои ограничения - ограничения по полочному пространству (ассортиментный минимум), вместимость складских помещений, территориальный обхват потенциальных покупателей, время работы и т. д. На эти ограничения накладываются дополнительные расходы в виде арендной платы, ЖКХ, зарплаты персонала...</p><p>Онлайн магазин доступен круглосуточно. Каталог товаров может вмещать столько sku, сколько вы готовы реализовать. Финансовые затраты на хостинг и СИО продвижение, как правило, быстро окупаются и значительно меньше затрат даже на небольшую торговую точку. КПД с веб ресурса можно подсчитать через конверсию и заказы непосредственно с сайта.</p></div><div class="articles__title"><h5>Возможность заявить о себе</h5></div><div class="articles__text"><p>В любой бизнес-среде есть конкуренция. Услуги, которые предоставляет ваша компания, в силу различных причин могут быть лучше и выгоднее для конечного потребителя, нежели те, что предоставляет конкурирующая фирма. Возможно, ваши товары дешевле или качественнее, чем у других. Но как донести это до клиентов, которые раньше ничего не слышали ни о вас, ни о конкурирующих фирмах, или впервые столкнулись с потребностью в данном товаре/услуги? Конечно, есть различного рода реклама. Но насколько она информативна? Веб-сайт - это инструмент который позволяет информативно донести до потенциального клиента все ваши преимущества, а также почему именно вашу компанию он должен выбрать и чем вы лучше других.</p><p>Оригинальный дизайн и цветовая гамма позволяют выделить компанию на фоне конкурентов, а наличие самого сайта добавит солидности к позиционированию на рынке и подчеркнёт серьёзность ваших намерений не только в глазах потребителей, но и возможных потенциальных партнёров.</p><p>Помимо всего выше перечисленного сайт - это возможность рассказать о себе, кто вы и что из себя представляете. Таким нехитрым способом можно повысить лояльность потенциальных клиентов.</p></div></div>',
					},
					{id: 3, title: 'Использование роутинга во Vue js', text: '<VueRouterArticl/>'},
					{id: 4, title: '', text: ''},
					{id: 5, title: '', text: ''},
				],
				article: [],

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
				comment: [
					{idArticle:1, idUser: 1, id:1, text:'', nameUser:'', photoUser:'', bata:''},
					{idArticle:2, idUser: 2, id:2, text:'', nameUser:'', photoUser:'', bata:''},
					{idArticle:2, idUser: 3, id:3, text:'', nameUser:'', photoUser:'', bata:''},
				],
				commentDate: '',
				commentX: '',
			}
		},
		methods: {
			exampleAnimation: function () {
        let fil_0 = document.querySelector('#fil_0');
      },
      resultBase64: function () {
      },
      submitComment: function () {
      	let fil_0 = document.querySelector('#fil_0');
      	this.commentX = this.commentDate;
      },
		},
		mounted(){
			let arrayArticles = this.articles;
			let indicator = this.$route.params.id;
			let article = this.article;

			this.article = arrayArticles.filter( articl => articl.id == indicator );

			for (var i = 0; i < arrayArticles.length; i++) {
				if (arrayArticles[i].id == indicator) {
					
					article = { ...arrayArticles[i] };
				}
			}
			
		},
	}
</script>
<style lang="scss" scoped>
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';
.wrapper{
	.article{
		width: 77%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.menuHeader{
			height: 90px;
		}
		.article__wrapper{
			@include blockMain(100%, auto);
			text-align: left;
			padding: 0 5%;
			flex-wrap: wrap;
			margin-top: 1%;
			margin-bottom: 1%;
		}
		.article__content{
	    width: 100%;
	  }
		.article__text>p{
			font-size: 1rem;
		}
		.article__title{
			display: flex;
			@include headingMinBlock(100%, 80px);
		}
		.article__title>h1{
			margin: auto;
			@include headingMin(2rem, 700);
		}
		.article__heading{
			font-size: 1.5rem;
			color: #28a745;
		}
		.article__subheading{
			font-size: 1.2rem;
		}
		.comments{
			@include blockMain(100%, auto);
			flex-direction: column;

			.comments__form{
				display: flex;
				justify-content: space-between;
				width: 80%;
				margin: 2% auto;
				height: auto;
			}
			.comments__textarea{
				width: 79%;
				height: auto;
				display: flex;
			}
			.comments__textarea>textarea{
				width: 100%;
		    height: 70%;
		    margin: auto;
		    border: 1px solid #CFCFCF;
		    border-radius: 10px;
		    resize: none;
			}
			.comments__button{
				width: 20%;
				height: auto;
				display: flex;
			}
			.comments__button>button{
				@include buttonMain(100%, 100%, 1rem);
				margin: auto;
			}
		}
		.footerSection{
			height: 100px;
			margin-top: 1%;
			margin-bottom: 1%;
		}
	}
}
@media (max-width: 960px){
	.wrapper{
		.article{
			width: 90%;
			.menuHeader{
			}
			.article__wrapper{
			}
			.article__text>p{
			}
			.article__title{
			}
			.article__title>h1{
				font-size: 1.1rem;
			}
			.article__heading{
			}
			.article__subheading{
			}
			.comments{
				.comments__form{
					width: 96%;
				}
				.comments__textarea{
					width: 69%;
				}
				.comments__textarea>textarea{
				}
				.comments__button{
					width: 30%;
				}
				.comments__button>button{
					font-size: 0.8rem;
				}
			}
			.footerSection{
			}
		}
	}
}
@media (max-width: 460px){
	.wrapper{
		.article{
			width: 90%;
			.menuHeader{
			}
			.article__wrapper{
			}
			.article__text>p{
			}
			.article__title{
			}
			.article__title>h1{
				font-size: 1.1rem;
			}
			.article__heading{
			}
			.article__subheading{
			}
			.comments{
				.comments__form{
					width: 96%;
				}
				.comments__textarea{
					width: 69%;
				}
				.comments__textarea>textarea{
				}
				.comments__button{
					width: 30%;
				}
				.comments__button>button{
					font-size: 0.6rem;
				}
			}
			.footerSection{
			}
		}
	}
}
@media (max-width: 360px){
	.wrapper{
		.article{
			.menuHeader{
			}
			.article__wrapper{
			}
			.article__text>p{
			}
			.article__title{
			}
			.article__title>h1{
			}
			.article__heading{
			}
			.article__subheading{
			}
			.comments{
				.comments__form{
				}
				.comments__textarea{
					width: 60%;
				}
				.comments__textarea>textarea{
					height: 80%;
				}
				.comments__button{
					width: 39%;
				}
				.comments__button>button{
					font-size: 0.8rem;
				}
			}
			.footerSection{
			}
		}
	}
}
</style>
