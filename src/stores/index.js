import { defineStore } from 'pinia';

export default defineStore('work', {
	state: () => ({
		works: {
			people: {
				title: '人物',
				collections: [
					{
						id: 1,
						masthead: 'Infinite 台新無限季刊',
						date: '2019 冬季號',
						title: '回鄉逐夢的勇者 布拉瑞揚',
						subtitle: '「台新藝術獎」首位連年獲獎藝術家',
						credit: 'TEXT_Daniel PHOTO_周兆志、林峻永、陳韋勝、李麟、拉風影像工作室',
						images: [
							'dancer01.png',
							'dancer02.png'
						]
					},
					{
						id: 2,
						masthead: 'Infinite 台新無限季刊',
						date: '2020 秋季號',
						title: '大自然裡的花草行者',
						subtitle: 'CNFlower西恩 凌宗湧',
						credit: 'TEXT_Daniel PHOTO_Kris Kang、CNFlower西恩',
						images: [
							'Flower01.png',
							'Flower02.png'
						]
					},
					{
						id: 3,
						masthead: 'Infinite 台新無限季刊',
						date: '2020 春季號',
						title: '碧海藍天 袁緒虎',
						subtitle: '水下攝影及導演',
						credit: 'TEXT_Daniel PHOTO_莊智淵、袁緒虎',
						images: [
							'tiger01.png',
							'tiger02.png'
						]
					},
					{
						id: 4,
						masthead: 'Infinite 台新無限季刊',
						date: '2021 冬季號',
						title: '打造路易莎咖啡宇宙',
						subtitle: '黃銘賢 進軍商用精品咖啡',
						credit: 'TEXT_Daniel PHOTO_蔡勝義、路易莎咖啡',
						images: [
							'Louisa01.png',
							'Louisa02.png'
						]
					},
					{
						id: 5,
						masthead: 'Infinite 台新無限季刊',
						date: '2021 夏季號',
						title: '美的釋放者',
						subtitle: '磊勒丹・巴瓦瓦隆',
						credit: 'TEXT_Daniel PHOTO_蔡勝義、磊勒丹・巴瓦瓦隆',
						images: [
							'Atitan01.png',
							'Atitan02.png'
						]
					},
					{
						id: 6,
						masthead: 'Infinite 台新無限季刊',
						date: '2020 冬季號',
						title: '設計 恰到好處的美',
						subtitle: 'Celia Chu 朱怡芬',
						credit: 'TEXT_Daniel PHOTO_莊智淵、Celia Chu',
						images: [
							'Celia01.png',
							'Celia02.png'
						]
					},
					{
						id: 7,
						masthead: 'Infinite 台新無限季刊',
						date: '2022 秋季號',
						title: '找到屬於你的那片海',
						subtitle: '攝影師Po Chen',
						credit: 'TEXT_Daniel PHOTO_Po Chen',
						images: [
							'PoChen01.png',
							'PoChen02.png'
						]
					},
					{
						id: 8,
						masthead: 'Infinite 台新無限季刊',
						date: '2020 夏季號',
						title: '用塗鴉轟炸城市',
						subtitle: '塗鴉藝術家 Reach',
						credit: 'TEXT_Daniel PHOTO_Kris Kang、Reach',
						images: [
							'Reach01.png',
							'Reach02.png'
						]
					}
				]
			},
			features: {
				title: '專題',
				collections: [
					{
						id: 1,
						masthead: 'Infinite 台新無限季刊',
						date: '2022 秋季號',
						title: '手作的溫度 HANDMADE',
						subtitle: '',
						credit: 'TEXT_Daniel、黃映嘉、YuhShan PHOTO_莊智淵、能作、蔡勝義、Christina、HMM、Ray Chang、Mobellio、林冠良、Mykita、Edokumiko Tatematsu',
						images: [
							'Handmade01.png',
							'Handmade02.png',
							'Handmade03.png',
							'Handmade04.png',
							'Handmade05.png',
							'Handmade06.png',
							'Handmade07.png',
							'Handmade08.png',
							'Handmade09.png',
							'Handmade10.png',
							'Handmade11.png',
							'Handmade12.png',
							'Handmade13.png',
							'Handmade14.png',
							'Handmade15.png'
						]
					},
					{
						id: 2,
						masthead: 'Infinite 台新無限季刊',
						date: '2022 春季號',
						title: '台灣文化力 The Cultural Spectrum of Taiwan',
						subtitle: '',
						credit: 'TEXT_Daniel、Renee、Penny Kuo、黃映嘉 PHOTO_雲門舞集、北師美術館、Ray Chang、蔡勝義、島內散步',
						images: [
							'TWculture01.png',
							'TWculture02.png',
							'TWculture03.png',
							'TWculture04.png',
							'TWculture05.png',
							'TWculture06.png',
							'TWculture07.png',
							'TWculture08.png',
							'TWculture09.png'
						]
					},
					{
						id: 3,
						masthead: 'Infinite 台新無限季刊',
						date: '2021 夏季號',
						title: '越在地 越國際 Going Global, Locally',
						subtitle: '',
						credit: 'TEXT_Daniel、YuhShan、黃映嘉、因奉 PHOTO_莊智淵、選選研、Ray Chang、Liz Kao、陳蘊如、高雄流行音樂中心、公視',
						images: [
							'Local01.png',
							'Local02.png',
							'Local03.png',
							'Local04.png',
							'Local05.png',
							'Local06.png',
							'Local07.png',
							'Local08.png',
							'Local09.png',
							'Local10.png'
						]
					},
					{
						id: 4,
						masthead: 'Inspire 意念圖誌',
						date: 'Vol.07',
						title: '食物Ｘ設計',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_美可特品牌企劃設計、牽猴子整合行銷、Viva La Vie享樂人生、陳小曼',
						images: [
							'food01.png',
							'food02.jpg',
							'food03.jpg',
							'food04.jpg',
							'food05.jpg',
							'food06.jpg',
							'food07.jpg',
							'food08.jpg',
							'food09.jpg'
						]
					},
					{
						id: 5,
						masthead: 'Inspire 意念圖誌',
						date: 'Vol.08',
						title: '旅行Ｘ設計',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_Nick Barclay、玉川設計所、Lost iN、ZERO PER ZERO、小子、桔禾創意',
						images: [
							'travel01.png',
							'travel02.jpg',
							'travel03.jpg',
							'travel04.jpg',
							'travel05.jpg',
							'travel06.jpg',
							'travel07.jpg',
							'travel08.jpg',
							'travel09.jpg',
							'travel10.jpg',
							'travel11.jpg',
							'travel12.jpg',
							'travel13.jpg'
						]
					},
					{
						id: 6,
						masthead: 'Inspire 意念圖誌',
						date: 'Vol.09',
						title: '運動Ｘ設計',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_程詩詠、Red Bull Illume、NotOnSunday、FILTER017、Priest+Grace、基本工事、SHUKYU',
						images: [
							'sport01.png',
							'sport02.jpg',
							'sport03.jpg',
							'sport04.jpg',
							'sport05.jpg',
							'sport06.jpg',
							'sport07.jpg',
							'sport08.jpg',
							'sport09.jpg',
							'sport10.jpg',
							'sport11.jpg',
							'sport12.jpg',
							'sport13.jpg',
							'sport14.jpg',
							'sport15.jpg',
							'sport16.jpg'
						]
					},
					{
						id: 7,
						masthead: 'Inspire 意念圖誌',
						date: 'Vol.10',
						title: '電影Ｘ設計',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_Ivy Chen、洪淳修、Annie Atkins、TERRITORY STUDIO、Yongsub Song、劉熙真、POWSTER、大厝地影像製作有限公司',
						images: [
							'movie01.png',
							'movie02.jpg',
							'movie03.jpg',
							'movie04.jpg',
							'movie05.jpg',
							'movie06.jpg',
							'movie07.jpg',
							'movie08.jpg',
							'movie09.jpg',
							'movie10.jpg',
							'movie11.jpg',
							'movie12.jpg',
							'movie13.jpg',
							'movie14.jpg',
							'movie15.jpg',
							'movie16.jpg',
							'movie17.jpg'
						]
					},
					{
						id: 8,
						masthead: 'Inspire 意念圖誌',
						date: 'Vol.11',
						title: '音樂Ｘ設計',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_Michael Spencer Jones、葉豐堯、Goodmouse Photography、Punch Visual、環球國際唱片、Guilherme Aranega、Ｍisc、固態影像live、wangzihong.com、風潮音樂',
						images: [
							'music01.png',
							'music02.jpg',
							'music03.jpg',
							'music04.jpg',
							'music05.jpg',
							'music06.jpg',
							'music07.jpg',
							'music08.jpg',
							'music09.jpg',
							'music10.jpg',
							'music11.jpg',
							'music12.jpg',
							'music13.jpg',
							'music14.jpg',
							'music15.jpg',
							'music16.jpg',
							'music17.jpg',
							'music18.jpg',
							'music19.jpg',
							'music20.jpg',
							'music21.jpg',
							'music22.jpg'
						]
					}
				]
			},
			travel: {
				title: '旅行',
				collections: [
					{
						id: 1,
						masthead: 'Ciao 潮旅',
						date: '2020 1月號',
						title: '北海道 冰雪奇緣 Hokkaido',
						subtitle: 'The Frozen Enchantment',
						credit: 'TEXT_Daniel PHOTO_Hazy、Kiroro Resort、SkiJapan.com、Ki Niseko、Josephine、一般社團法人札幌觀光協會',
						images: [
							'Hokkaido01.png',
							'Hokkaido02.png',
							'Hokkaido03.png',
							'Hokkaido04.png',
							'Hokkaido05.png',
							'Hokkaido06.png',
							'Hokkaido07.png',
							'Hokkaido08.png',
							'Hokkaido09.png',
							'Hokkaido10.png',
							'Hokkaido11.png',
							'Hokkaido12.png',
							'Hokkaido13.png',
							'Hokkaido14.png',
							'Hokkaido15.png',
							'Hokkaido16.png',
							'Hokkaido17.png'
						]
					},
					{
						id: 2,
						masthead: 'Ciao 潮旅',
						date: '2019 7月號',
						title: '移動的風景畫',
						subtitle: "Scotland's Classic Splendours",
						credit: 'TEXT_Daniel PHOTO_周兆志、Belmond Royal Scotsman',
						images: [
							'Scotland01.png',
							'Scotland02.png',
							'Scotland03.png',
							'Scotland04.png',
							'Scotland05.png',
							'Scotland06.png',
							'Scotland07.png',
							'Scotland08.png',
							'Scotland09.png',
							'Scotland10.png',
							'Scotland11.png',
							'Scotland12.png',
							'Scotland13.png',
							'Scotland14.png',
							'Scotland15.png'
						]
					},
					{
						id: 3,
						masthead: 'Infinite 台新無限季刊',
						date: '2020 秋季號',
						title: '島嶼漫遊 Island Getaways',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_周兆志、涵碧樓、蔡勝義',
						images: [
							'Island01.png',
							'Island02.png',
							'Island03.png',
							'Island04.png',
							'Island05.png',
							'Island06.png',
							'Island07.png'
						]
					},
					{
						id: 4,
						masthead: 'Ciao 潮旅',
						date: '2020 4月號',
						title: '老空間 新創意',
						subtitle: '發現城市新韻味',
						credit: 'TEXT_Daniel PHOTO_蔡勝義、景澤創意、Arttime藝術網、蕭壠文化園區、棧貳庫',
						images: [
							'Old01.png',
							'Old02.png',
							'Old03.png',
							'Old04.png',
							'Old05.png',
							'Old06.png'
						]
					},
					{
						id: 5,
						masthead: 'Ciao 潮旅',
						date: '2020 3月號',
						title: '建築小旅行',
						subtitle: '城市裡的悠閒散步',
						credit: 'TEXT_Daniel PHOTO_莊智淵、蔡勝義、台北流行音樂中心、衛武營國家藝術文化中心、田中央建築師事務所、台南市美術館、高雄市立圖書館',
						images: [
							'CityArch01.png',
							'CityArch02.png',
							'CityArch03.png',
							'CityArch04.png',
							'CityArch05.png',
							'CityArch06.png',
							'CityArch07.png'
						]
					},
					{
						id: 6,
						masthead: 'terroir 肥沃台灣',
						date: '2021 Vol.08',
						title: '旅人與海 順著黑潮與鯨豚共舞 in 花蓮',
						subtitle: 'Sail the Sea with Whales',
						credit: 'TEXT_Daniel PHOTO_周兆志',
						images: [
							'Sea01.png',
							'Sea02.png',
							'Sea03.png',
							'Sea04.png'
						]
					},
					{
						id: 7,
						masthead: 'tigertales 台灣虎航機上誌',
						date: '2018-2019',
						title: '漫遊者',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_Daniel、陳宇威、OMO7旭川、Shutterstock',
						images: [
							'Flaneur01.png',
							'Flaneur02.png',
							'Flaneur03.png',
							'Flaneur04.png',
							'Flaneur05.png'
						]
					},
					{
						id: 8,
						masthead: 'tigertales 台灣虎航機上誌',
						date: '2018-2019',
						title: '探索台灣',
						subtitle: '',
						credit: 'TEXT_Daniel PHOTO_hazy、鵲兒喜、大藝埕、國立台灣美術館、蔡勝義、美可特品牌企劃設計',
						images: [
							'Taiwan01.png',
							'Taiwan02.png',
							'Taiwan03.png',
							'Taiwan04.png',
							'Taiwan05.png',
							'Taiwan06.png',
							'Taiwan07.png',
							'Taiwan08.png',
							'Taiwan09.png',
							'Taiwan10.png',
							'Taiwan11.png',
							'Taiwan12.png'
						]
					},
					{
						id: 9,
						masthead: 'tigertales 台灣虎航機上誌',
						date: '2018-2019',
						title: '封面故事',
						subtitle: '',
						credit: 'TEXT_Joe PHOTO_旭川市觀光科、岩手縣觀光科、豪斯登堡、Shutterstock',
						images: [
							'Cover01.png',
							'Cover02.png',
							'Cover03.png',
							'Cover04.png',
							'Cover05.png',
							'Cover06.png',
							'Cover07.png',
							'Cover08.png',
							'Cover09.png',
							'Cover10.png',
							'Cover11.png',
							'Cover12.png',
							'Cover13.png',
							'Cover14.png'
						]
					}
				]
			},
			collection: {
				title: '收藏',
				collections: [
					{
						id: 1,
						masthead: 'Infinite 台新無限季刊',
						date: '2021 冬季號',
						title: '收藏新視界',
						subtitle: 'The New Vision of Collection',
						credit: 'TEXT_Daniel、林佳蕙、黃映嘉、Silence Huang PHOTO_Ray Chang、何理互動設計、akaSwap、王新仁、莊智淵',
						images: [
							'collect01.png',
							'collect02.png',
							'collect03.png',
							'collect04.png',
							'collect05.png',
							'collect06.png',
							'collect07.png',
							'collect08.png',
							'collect09.png',
							'collect10.png'
						]
					},
					{
						id: 2,
						masthead: '合庫樂活理財季刊',
						date: '2021 1月號',
						title: '方寸之間 想像無限',
						subtitle: '電影海報收藏',
						credit: 'TEXT_Daniel PHOTO_蔡勝義',
						images: [
							'poster01.png',
							'poster02.png',
							'poster03.png'
						]
					},
					{
						id: 3,
						masthead: '合庫樂活理財季刊',
						date: '2020 7月號',
						title: '我為琴狂',
						subtitle: '奇美博物館的名琴饗宴',
						credit: 'TEXT_Daniel PHOTO_蔡勝義',
						images: [
							'Chimei01.png',
							'Chimei02.png',
							'Chimei03.png'
						]
					},
					{
						id: 4,
						masthead: '合庫樂活理財季刊',
						date: '2019 10月號',
						title: '喝一杯精品咖啡',
						subtitle: '典藏古典咖啡機',
						credit: 'TEXT_Daniel PHOTO_周兆志',
						images: [
							'coffeejoe01.png',
							'coffeejoe02.png',
							'coffeejoe03.png'
						]
					}
				]
			},
			architecture: {
				title: '建築',
				collections: [
					{
						id: 1,
						masthead: 'Infinite 台新無限季刊',
						date: '2022 夏季號',
						title: '家的樣子 My Home',
						subtitle: '',
						credit: 'TEXT_Daniel、黃映嘉、毛森江 PHOTO_行一建築、蔡勝義、半畝塘、Ray Chang、毛森江、Fabian Ong、7OCEAN',
						images: [
							'Home01.png',
							'Home02.png',
							'Home03.png',
							'Home04.png',
							'Home05.png',
							'Home06.png',
							'Home07.png',
							'Home08.png',
							'Home09.png',
							'Home10.png',
							'Home11.png',
							'Home12.png',
							'Home13.png',
							'Home14.png'
						]
					},
					{
						id: 2,
						masthead: 'Infinite 台新無限季刊',
						date: '2021 秋季號',
						title: '時代的紋理',
						subtitle: 'The Texture of Time',
						credit: 'TEXT_Daniel、Penny K.、馬姍妤、Kirstie Wang、黃映嘉 PHOTO_la Samaritaine、Apple、Prada、GUCCI、嘉義市立美術館、朱逸文',
						images: [
							'texture01.png',
							'texture02.png',
							'texture03.png',
							'texture04.png',
							'texture05.png',
							'texture06.png',
							'texture07.png',
							'texture08.png',
							'texture09.png'
						]
					},
					{
						id: 3,
						masthead: 'Core Interior 空間',
						date: '2019 1月號',
						title: '理性的空間 感性的存在',
						subtitle: '台北表演藝術中心 Taipei Performing Arts Center',
						credit: 'TEXT_Daniel PHOTO_OMA、大元建築師事務所',
						images: [
							'TPAC01.png',
							'TPAC02.png',
							'TPAC03.png',
							'TPAC04.png',
							'TPAC05.png'
						]
					}
				]
			},
			album: {
				title: '攝影',
				collections: [
					{
						id: 1,
						masthead: '',
						date: '2018-2022',
						title: '自然',
						subtitle: 'Nature',
						credit: '',
						images: [
							'Nature01.jpg',
							'Nature02.jpg',
							'Nature03.jpg',
							'Nature04.jpg',
							'Nature05.jpg',
							'Nature06.jpg',
							'Nature07.jpg',
							'Nature08.jpg',
							'Nature09.jpg',
							'Nature10.jpg',
							'Nature11.jpg',
							'Nature12.jpg',
							'Nature13.jpg',
							'Nature14.jpg',
							'Nature15.jpg',
							'Nature16.jpg'
						]
					},
					{
						id: 2,
						masthead: '',
						date: '2018-2022',
						title: '城市',
						subtitle: 'City',
						credit: '',
						images: [
							'City01.jpg',
							'City02.jpg',
							'City03.jpg',
							'City04.jpg',
							'City05.jpg',
							'City06.jpg',
							'City07.jpg',
							'City08.jpg',
							'City09.jpg',
							'City10.jpg',
							'City11.jpg',
							'City12.jpg',
							'City13.jpg',
							'City14.jpg',
							'City15.jpg',
							'City16.jpg',
							'City17.jpg',
							'City18.jpg'
						]
					}
				]
			}
		}
	})
});
