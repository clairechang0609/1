<template>
<div class="corner-content mx-auto py-3 py-sm-4 py-md-5">
		<div class="mb-4">
			<div class="title-card h-100">
				<div class="title-card-body p-3">
					<h3 class="title mb-2">
						一隅
						<small class="pl-3 fs-5">觀看的方式</small>
					</h3>
					<h5 class="subtitle position-relative d-inline-block fs-7">Corner</h5>
				</div>
			</div>
		</div>
		<div class="row gx-md-5 pb-5">
			<CornerSwiper />
			<div class="detail mt-5 d-flex flex-column align-items-center">
				<div>
					<h3 class="text-center mb-5 lh-base">一隅：觀看的方式 <br> Ways of Seeing</h3>

					<div class="mb-5">
						<div class="d-flex align-items-center mb-3">
							<h5 class="subtitle me-5">售　　價</h5>
							<h6 class="ps-5">NT$380</h6>
						</div>
						<p class="d-flex align-items-center">
							購買請填
							<a href="https://forms.gle/j7y9B319L6QXeCxu9" target="_blank"
								class="btn btn-outline-primary px-4 py-0 mb-1 ms-3 me-2">連結表單</a>
							，確認付款資料後才會寄出。
						</p>
					</div>

					<div class="mb-5">
						<div class="d-flex align-items-center mb-3">
							<h5 class="subtitle me-5">運送方式</h5>
						</div>
						<ul>
							<li>・臺灣：7-ELEVEN、全家 店到店（運費：NT$60）</li>
							<li>・海外 International：EMS（運費另計）</li>
						</ul>
					</div>

					<div class="mb-5">
						<div class="d-flex align-items-center mb-3">
							<h5 class="subtitle me-5">支付方式</h5>
						</div>
						<p class="mb-3">可使用銀行線上轉帳、臨櫃匯款、Line Pay、Paypal</p>
						<p>
							<strong>匯款帳號：</strong><br>
							戶名：自由製造有限公司<br>
							銀行代碼：812-0045<br>
							銀行名稱：台新國際商業銀行-新生分行<br>
							帳號：2004-01-0001201-4<br>
							Line Pay：<br>
							<img src="/image/corner/linepay.jpg" alt="Line Pay" width="100">
						</p>
					</div>

					<div class="mb-5">
						<div class="d-flex align-items-center mb-3">
							<h5 class="subtitle me-5">商品說明</h5>
						</div>
						<p>
							《一隅》是由自由製造編輯製作，創立於 2024 年，<br>
							來自於台灣，從狹小的一隅之地出發，提供屬於這塊土地上的一隅之見，<br>
							將世界上各個角落發生的故事，透過文字與圖像的結合，帶領讀者沈浸現場，激起思考的火花。<br>
							以特刊形式發行，探討的內容領域包括：藝術設計、靈感創意、人文思潮、生活風格。<br><br>

							「觀看的方式」概念發想來自文化藝術評論家John Berger的著作《觀看的方式》，<br>
							書中主要著重在繪畫和廣告，我們將觀看焦點放在攝影和視覺藝術，<br>
							透過採訪這些藝術創作者，進入他們的創作歷程，<br>
							看到每個人獨一無二的視角與詮釋，這是來自於他們的人生、知識體系和信仰的交會。
						</p>
					</div>

					<div class="mb-5">
						<div class="d-flex align-items-center mb-3">
							<h5 class="subtitle me-5">書籍規格</h5>
						</div>
						<ul>
							<li>・尺寸：19X26 cm</li>
							<li>・頁數：80 頁</li>
							<li>・裝訂：膠裝、雙封面</li>
						</ul>
					</div>

					<a href="https://forms.gle/j7y9B319L6QXeCxu9" class="btn btn-outline-primary w-100 py-4 mt-4" target="_blank">
						購買請填表單 Link to Purchase
					</a>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup>
import CornerSwiper from '@/components/CornerSwiper.vue';
</script>

<style lang="scss" scoped>
.detail {
	line-height: 32px;
}
h3 {
	font-size: 24px;
}
.corner-content {
	max-width: 1000px;
}
</style>
