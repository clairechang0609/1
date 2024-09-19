<template>
	<div id="about" class="experience-content mx-auto py-3 py-sm-4 py-md-5">
		<div class="mb-4">
			<div class="title-card h-100">
				<div class="title-card-body p-3">
					<h3 class="title mb-2">關於我</h3>
					<h5 class="subtitle position-relative d-inline-block fs-7">about</h5>
				</div>
			</div>
		</div>
		<div class="row gx-md-5 pb-5">
			<div class="col-sm-8 mb-3 mb-sm-0 order-2 order-sm-1">
				<ul class="lh-lg">
					<li v-for="(item, index) in experience" :key="`experience_${index}`" class="mt-3">
						<p class="fw-bold fs-7">
							{{ item.during }}｜{{ item.company }} {{ item.title }}
							<template v-if="item.titleList?.length">
								<small class="d-block" v-for="(titleItem, key) in item.titleList" :key="`title_${index}_${key}`">
									{{ titleItem.name }} {{ titleItem.during }}
								</small>
							</template>
						</p>
						<div class="d-flex flex-column ms-sm-3 mt-2">
							<small v-for="(publishItem, key) in item.publish" :key="`publish_${index}_${key}`" class="mt-1">
								- {{ publishItem }}
							</small>
						</div>
					</li>
				</ul>
			</div>
			<div class="col-sm-4 align-self-end order-1 order-sm-2">
				<small class="d-block lh-lg mb-3">
					<span class="name fs-7 fw-bold">Daniel Chang 張景棠</span> <br />
					Editor - Writer - Shutterbug
				</small>
				<div class="image-wrap bg-light mb-2 mb-md-4"></div>
				<!-- <div class="text-end mb-2">
					<a href="#" class="profile-link fs-7 ms-auto py-1">
						profile<i class="bi bi-arrow-right ms-1"></i>
					</a>
				</div> -->
			</div>
		</div>
		<!-- contact -->
		<div id="contact" class="contact-content bg-light bg-opacity-50 text-center position-relative mx-auto mt-5 p-5">
			<h3 class="title position-absolute">contact</h3>
			<p class="mb-2">專題企劃、採訪撰稿歡迎來信</p>
			<i class="bi bi-envelope d-block mb-2"></i>
			<a href="mailto:danielchang0281@gmail.com" class="email fs-7" target="_blank" rel="noreferrer noopener">danielchang0281@gmail.com</a> <br />
			<a href="https://www.instagram.com/freestylestudio0281/" class="email fs-7" target="_blank" rel="noreferrer noopener">instagram: 自由製造</a>
		</div>
	</div>
</template>

<script setup>
const experience = [ // 經歷
	{
		during: '2023-now',
		company: '自由製造有限公司',
		title: 'Founder',
		publish: [
			'一隅 Corner'
		]
	},
	{
		during: '2019-2023',
		company: '華訊事業股份有限公司',
		title: '副總編輯',
		titleList: [
			{
				during: '2022-2023',
				name: '代編部 副總編輯'
			},
			{
				during: '2019-2022',
				name: '代編部 主編'
			}
		],
		publish: [
			'Infinite 台新無限季刊（台新銀行無限卡會員刊物）',
			'合庫樂活理財季刊（合作金庫理財季刊）',
			'terroir 肥沃台灣（台灣肥料企業形象刊物）',
			'dawn 曙光季刊（國立臺東生活美學館）',
			'Ciao 潮旅（華訊與中華航空異業合作旅遊刊物）'
		]
	},
	{
		during: '2016-2019',
		company: '意念文創股份有限公司',
		title: '主編',
		publish: [
			'tigertales 台灣虎航機上雜誌',
			'Inspire 意念圖誌',
			'My Plus 加分誌'
		]
	},
	{
		during: '2015-2016',
		company: '世界公民文化中心',
		title: '企劃編輯',
		publish: [ '英語島雜誌' ]
	}
];
</script>

<style lang="scss" scoped>
.experience-content {
	max-width: 1000px;
	.title {
		letter-spacing: 2rem;
	}
	.image-wrap {
		padding-top: 100%;
		background-image: url('@/assets/image/avatar.jpg');
		@include backgroundImage;
	}
}
</style>
