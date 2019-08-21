// 说明： articleClass--分类需要的类名称  
// pf-oi--线下数字互动   pf-pc--PC端数字互动     pf-ad--移动端数字互动   pf-data--大数据运用   pf-operation--平台运营    pf-video--视频广告  pf-mini--小程序
// pf-video--视频广告 最好放在一起且放在数据的开头或者结尾  案例详情页在切换的时候有顺序 视频案例页是不需要点击链接跳转的,视频广告是不参与跳转页面的左右切换的。
// pf-poster--海报设计
var _worksJson = [
  {
    title: '环贸iapm商场：星际自拍站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-oi'], // 彼邑广告分类需要的类名称
    coverImage: ['2.jpg'], // 封面图片轮播图
    contentImages: ['2.jpg', '2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'Dec 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET / ', // 所用技能 
    client: '环贸iapm商场', // 客户
    brand: '环贸iapm商场', // 客户
    content: '<p>来iapm商场3楼，选择你喜欢的角色，制作独一无二的专属相片，感受一场身临其境的太空之旅，圆你的太空梦！</p>',
    videoPath: ''
  }
  ,
  {
    title: '阿森纳:官方中国会员网站', // 标题
    typeName: ['PC端数字互动'], // 分类显示的名字
    articleClass: ['pf-pc'], // 彼邑广告分类需要的类名称
    coverImage: ['27.jpg'], // 封面图片轮播图
    contentImages: ['27.jpg', '27-1.jpg', '27-2.jpg', '27-3.jpg', '27-4.jpg', '27-5.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'September 2016', // 完成时间
    skills: 'Creative/ HTML5/ CSS3/ JAVA', // 所用技能
    brand: 'Arsenal 阿森纳', // 客户 
    client: 'Arsenal 阿森纳',
    content: '<p>成为中国官方会员，您可以拥有全球唯一编号的俱乐部官方会员卡和官方会员纪念围巾，及享有以下官方会员的专属福利。一日枪手，终生枪手，现在立即加入阿森纳的大家庭吧！</p>',
    videoPath: ''
  },
  {
    title: '支付宝：遇见名画中的自己', // 标题
    typeName: ['PC端数字互动'], // 分类显示的名字
    articleClass: ['pf-oi'], // 彼邑广告分类需要的类名称
    coverImage: ['28.jpg'], // 封面图片轮播图
    contentImages: ['28.jpg', '28-1.jpg', '28-2.jpg', '28-3.jpg', '28-4.jpg', '28-5.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'May 2016', // 完成时间
    skills: 'HTML5/ CSS3/ JAVA', // 所用技能
    brand: 'Alipay 支付宝', // 客户 
    client: 'DDB 恒美',
    content: '<p>蚂蚁金服旗下品牌支付宝全新打造的“遇见名画中的自己”项目在北京、上海、成都等地展出。<br/>基于蚂蚁金服的人脸识别技术支持，用户自拍后，系统将自动识别出3位与你相似度最高的名画图像。</p>',
    videoPath: ''
  },
  {
    title: '奥利奥：玩转奥利奥创意乐园 活动网站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-pc'], // 彼邑广告分类需要的类名称
    coverImage: ['20.jpg'], // 封面图片轮播图
    contentImages: ['20.jpg', '20-1.jpg', '20-2.jpg', '20-3.jpg', '20-4.jpg', '20-5.jpg', '20-6.jpg', '20-7.jpg', '20-8.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'March 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    brand: 'Oreo 奥利奥', // 客户 
    client: 'DigitasLBi 乐必扬',
    content: '<p>资深吃货们，马上挑战奥利奥创意吃法，过关斩将玩游戏。料理高手们，即刻上传奥利奥创意食谱，竞争玩转达人名额！</p>',
    videoPath: ''
  },
  {
    title: '必胜客：B-box速成课堂 微信活动', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['19-2.png'], // 封面图片轮播图
    contentImages: ['19-3.jpg', '19-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    brand: 'Pizza Hut 必胜客', // 客户 
    client: 'Ogilvy 奥美',
    content: '<p>所有食物都发出各自的音律和节奏，它们彼此交流。扫一扫，聆听食物们说话，奏响你的专属B-box乐章~唤醒朋友们的耳朵，让他们为你赞起来~</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/19-4.png" width="160"></p>',
    videoPath: ''
  },
  //	{
  //		title: "New Balance: The Color Run 微信活动", //标题
  //		typeName: ["移动端数字互动"], //分类显示的名字
  //		articleClass: ["pf-ad"], //彼邑广告分类需要的类名称
  //		coverImage: ["18.png"], //封面图片轮播图
  //		contentImages: ["18.png", "18-1.jpg", "18-2.jpg", "18-3.jpg", "18-4.jpg", "18-5.jpg"], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "June 2015", //完成时间
  //		skills: "HTML5/ CSS3/ .NET", //所用技能
  //		client: "Ogilvy奥美",
  //		brand: "New Balance 新百伦", //客户 
  //		content: '<p>跑起来！看你在The Color Run中会跑成什么~</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/18-6.jpg" width="160"></p>'，
  //		videoPath:''
  //	},
  {
    title: '上海大众汽车：自在橙系列 微信游戏', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['17-6.jpg'], // 封面图片轮播图
    contentImages: ['17.jpg', '17-1.jpg', '17-2.jpg', '17-3.jpg', '17-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    brand: 'Shanghai Volkswagen 上海大众汽车', // 客户 
    client: 'CCG (Cross Communication Group)',
    content: '<p>桑塔纳家族全新车型Gran Santana桑塔纳·浩纳上市，通过三款精心设计的小游戏来体验Gran Santana的内在性能吧。</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/17-5.png" width="100">&nbsp;<img src="http://img.cdn.be-xxx.com/beats-site/images/works/17-6.png" width="100">&nbsp;<img src="http://img.cdn.be-xxx.com/beats-site/images/works/17-7.png" width="100"></p>',
    videoPath: ''
  },
  {
    title: 'EA Games : 植物大战僵尸2 之 拯救大嘴花 微信游戏', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['16-7.jpg'], // 封面图片轮播图
    contentImages: ['16-1.png', '16-2.png', '16-3.png', '16-4.png', '16-6.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2015', // 完成时间
    skills: 'Creative/ HTML5/ CSS3/ .NET', // 所用技能
    client: 'EA Games 美国艺电', // 客户
    brand: 'EA Games 美国艺电', // 客户
    content: '<p>孤独的大嘴花总在对岸等待着渡渡鸟送过去的僵尸。创意延续了儿时经典游戏，并引入社交元素，随着关卡推进将进入虐心模式。想要超越好友和自己吗，快来吧！</p>',
    videoPath: ''
  },
  {
    title: "Airbnb：招暑期实习C'E'O 微信活动", // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['15-7.jpg'], // 封面图片轮播图
    contentImages: ['15-7.jpg', '15-1.jpg', '15-2.jpg', '15-3.jpg', '15-4.jpg', '15-5.jpg', '15-6.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    brand: 'Airbnb 空中食宿', // 客户 
    client: 'Social Touch 时趣',
    content: '<p>前半部分介绍Airbnb，后半部分让用户写下探索计划，并分享至朋友圈。如果被选中，奖励是获得Airbnb赞助自己和另外2位好友30天的免费美屋。</p>',
    videoPath: ''
  },
  {
    title: '皇冠曲奇：童心未泯，玩转暑假 微信游戏', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['14-4.jpg'], // 封面图片轮播图
    contentImages: ['14-4.jpg', '14.jpg', '14-1.jpg', '14-2.jpg', '14-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'July 2015', // 完成时间
    skills: 'Creative/ HTML5/ CSS3/ .NET', // 所用技能
    client: 'Danisa 皇冠丹麦曲奇', // 客户
    brand: 'Danisa 皇冠丹麦曲奇', // 客户 
    content: '<p>正逢《像素大战》电影放映，唤起了无数人对经典游戏吃豆人的回忆，推出H5小游戏，60秒内得到1000分算过关，便有机会抽奖免费获得皇冠曲奇。</p>',
    videoPath: ''
  },
  {
    title: '小肥羊：“涮”你狠 微信活动', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['13-6.jpg'], // 封面图片轮播图
    contentImages: ['13-4.jpg', '13.jpg', '13-1.jpg', '13-2.jpg', '13-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'August 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    brand: 'Little Sheep 小肥羊', // 客户 
    client: 'Ogilvy 奥美',
    content: '<p>小肥羊免单送优惠活动，考智商，或者答题，或者接上下句，或者绕口令，题目都很诙谐幽默，过关后获得抽奖机会进行抽奖。</p>',
    videoPath: ''
  },
  {
    title: '浪琴：秒测夫妻相，读懂你的爱', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['12-5.jpg'], // 封面图片轮播图
    contentImages: ['12-5.jpg', '12.jpg', '12-1.jpg', '12-2.jpg', '12-3.jpg', '12-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'August 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    client: 'RFI Studios 罗德互动',
    brand: 'LONGINES 浪琴', // 客户
    content: '<p>七夕情人节，浪琴表温馨开启“秒测夫妻相，读懂你的爱”互动测试，运用面部识别技术，测算你和TA的默契指数，祈愿天下有情人“浪漫一生，琴瑟和谐”！</p>',
    videoPath: ''
  },
  {
    title: '丝芙兰：润唇萌萌蛋 微信游戏', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['11-9.jpg'], // 封面图片轮播图
    contentImages: ['11-9.jpg', '11.jpg', '11-1.jpg', '11-2.jpg', '11-3.jpg', '11-4.jpg', '11-5.jpg', '11-6.jpg', '11-7.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'September 2015', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    brand: 'SEPHORA 丝芙兰', // 客户 
    client: 'RFI Studios 罗德互动',
    content: '<p>一分钟内，<br />你能抓到多少萌萌蛋呢？<br />快来和好友一较高低吧！</p>',
    videoPath: ''
  },
  //	{
  //		title: "必胜客：和郑恺群聊一种怎样的体验？ 移动网站", //标题
  //		typeName: ["移动端数字互动"], //分类显示的名字
  //		articleClass: ["pf-ad"], //彼邑广告分类需要的类名称
  //		coverImage: ["10-7.jpg"], //封面图片轮播图
  //		contentImages: ["10-7.jpg", "10.jpg", "10-1.jpg", "10-2.jpg", "10-3.jpg", "10-4.gif", "10-5.gif"], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "October 2015", //完成时间
  //		skills: "HTML5/ CSS3", //所用技能
  //		client: "Ogilvy奥美", //客户 
  //		brand: "Pizza Hut 必胜客",
  //		content: '<p>想必一些童鞋已经听说，本季必胜客又有一大箩筐新品上市！小猎豹郑恺已经去占位！你还在等什么？本季必胜客不仅推出了以下多款新菜品：肉质细嫩的法式芳香黄油肋眼牛排，口口香脆的法式薄脆面包配珍鲑，细腻浓醇的臻选巧克力蛋糕……（啊，擦一下口水先～）<br />没错，我们还邀你加入郑恺的新味小分队！可以跟恺恺和必胜客一起聊天哦！还有超多独家福利大放送</p>'，
  //		videoPath:''
  //	},

  {
    title: '上海大众汽车：Polo GTI终极挑战 微信游戏', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['9.jpg'], // 封面图片轮播图
    contentImages: ['9.jpg', '9-1.jpg', '9-2.jpg', '9-3.jpg', '9-4.jpg', '9-5.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'October 2015', // 完成时间
    skills: 'HTML5/ CSS3/ PHP', // 所用技能
    client: 'CCG (Cross Communication Group)',
    brand: 'Shanghai Volkswagen 上海大众汽车',
    content: '<p>玩家通过控制Polo GTI在赛道移动，在规定时间内完成全程，获得梦想赛车手证！来体验Polo GTI的超快感吧！</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/9-6.png" width="160"></p>',
    videoPath: ''
  },
  {
    title: '浪琴：“2015，时间都去哪儿了” 移动网站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['8-4.jpg'], // 封面图片轮播图
    contentImages: ['8-4.jpg', '8.jpg', '8-1.jpg', '8-2.jpg', '8-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'January 2016', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    client: 'RFI Studios 罗德互动', // 客户 
    brand: 'LONGINES 浪琴',
    content: '<p>浪琴表为辛苦忙碌了一整年的你精心奉上四则甜美生活秘笈。进入测试页面，预约试戴全新黛绰维纳系列腕表，即有专属礼品等你到店领取！</p>',
    videoPath: ''
  },
  {
    title: '利乐：灵猴献瑞，利乐纳福 移动网站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['7.jpg'], // 封面图片轮播图
    contentImages: ['7.jpg', '7-1.jpg', '7-2.jpg', '7-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'February 2016', // 完成时间
    skills: 'Creative/ HTML5/ CSS3/ .NET', // 所用技能
    brand: 'Tetra Pak 利乐', // 客户
    client: 'Edelman 爱德曼',
    content: '<p>线下纸质贺卡的衍生，利乐包装邀请用户一起来定制猴年新春贺卡，猴(hold)住新年！过不一样的大年，送不一样的贺卡。</p>',
    videoPath: ''
  },

  {
    title: '央视CCTV：门里家话，听我的家话 春节移动网站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['5-5.jpg'], // 封面图片轮播图
    contentImages: ['5-5.jpg', '5.jpg', '5-1.jpg', '5-2.jpg', '5-3.jpg', '5-4.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'February 2016', // 完成时间
    skills: 'HTML5/ CSS3', // 所用技能
    client: 'Amber Communications 琥珀传播', // 客户 
    brand: 'CCTV  中央电视台',
    content: '<p>2015年春晚公益项目，非常长的时间都在动画表现，音效和BGM的衔接上，最后分享页面到朋友圈，听更多家乡话。</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/5-6.png" width="160"></p>',
    videoPath: ''
  },
  {
    title: 'Burberry：挚爱献礼母亲节 微信互动', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['3-6.jpg'], // 封面图片轮播图
    contentImages: ['3-6.jpg', '3.jpg', '3-1.jpg', '3-2.jpg', '3-3.jpg', '3-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'May 2016', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    client: 'Burberry 博柏利', // 客户
    brand: 'Burberry 博柏利', // 品牌
    content: '<p>Burberry 母亲节DIY定制贺卡，通过简单的选项组合，得到一张定制贺卡，填写对母亲想要说的话，即刻分享。真挚礼献给母亲节。</p>',
    videoPath: ''
  },
  {
    title: '支付宝：未来蚁来', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['4-1.jpg'], // 封面图片轮播图
    contentImages: [ '4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'April 2016', // 完成时间
    skills: 'HTML5/ CSS3/ JAVA', // 所用技能
    client: 'Alipay 支付宝', // 客户
    brand: 'Alipay 支付宝',
    content: '<p>登录支付宝 APP 后，从首页 “未来蚁来”功能中进入 “遇见名画中的自己”，随后自拍照片并选择“开始寻找”，系统将自动识别出与你相似度最高的名画图像。</p><p>扫描二维码，下载支付宝 APP！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/4-2.png" width="160"></p>',
    videoPath: ''
  },
  {
    title: '酷兒：和酷兒一起，体验最酷的童年滋味！', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['1.jpg'], // 封面图片轮播图
    contentImages: ['1.jpg', '1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg', '1-5.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'May 2016', // 完成时间
    skills: 'HTML5/CSS3/.NET', // 所用技能
    client: 'Social Touch 时趣', // 客户
    brand: 'Coca-Cola 可口可乐',
    content: '<p>酷儿项目，有4个小游戏组成，双人游戏、互动合影、壁纸制作、填色游戏、每个都很好玩。发现酷儿的形象真的好有爱。</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/1-6.png" width="160"></p>',
    videoPath: ''
  },
  {
    title: '保乐力加：【88瓶“马爹利”牵出特大假酒案】危机监测', // 标题
    typeName: ['大数据运用'], // 分类显示的名字 
    articleClass: ['pf-data'], // 彼邑广告分类需要的类名称
    coverImage: ['21.png'], // 封面图片轮播图
    contentImages: ['21.png', '21-1.png', '21-2.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'November 2014', // 完成时间
    skills: 'Monitoring', // 所用技能
    client: 'Pernod Ricard China 保乐力加中国', // 客户
    brand: 'Pernod Ricard China 保乐力加中国',
    content: '<p>羊城晚报发布假洋酒负面报道“收名酒瓶灌廉价酒数百元洋酒卖数千”，经其他媒体发酵变更主题为“88瓶’马爹利’牵出特大假酒案”，形成高危负面。我们为客户提供了早期预警、中期监测、后期报告和解决方案的一体化服务。</p>',
    videoPath: ''
  }, {
    title: '某知名二手车平台：大数据精准营销', // 标题
    typeName: ['大数据运用'], // 分类显示的名字 
    articleClass: ['pf-data'], // 彼邑广告分类需要的类名称
    coverImage: ['23.png'], // 封面图片轮播图
    contentImages: ['23-1.png', '23-2.png', '23-3.png', '23-4.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'December 2015', // 完成时间
    skills: 'Big data precision marketing', // 所用技能
    client: 'One used-car APP', // 客户 
    brand: 'One used-car APP',
    content: '<p>业内普遍存在sales leads质量低的问题，严重影响营销效果。彼邑利用自身独有的大数据技术帮助国内某知名二手车平台实现精准营销的初衷。</p>',
    videoPath: ''
  },
  {
    title: 'EA Games：大数据管理平台', // 标题
    typeName: ['大数据运用'], // 分类显示的名字 
    articleClass: ['pf-data'], // 彼邑广告分类需要的类名称
    coverImage: ['26-2.jpg'], // 封面图片轮播图
    contentImages: ['26.png', '26-1.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '2015', // 完成时间
    skills: 'Social listening', // 所用技能
    client: 'EA Games 美国艺电', // 客户 
    brand: 'EA Games 美国艺电',
    content: '<p>EA是全球最大游戏公司，2015年需要整合中国区各种营销大数据，委托我们研发了一套大数据管理系统，使得多部门可以更合理的使用数据资源用于营销管理。</p>',
    videoPath: ''
  },
  {
    title: '雪佛兰：迪士尼乐园目标用户特征契合度分析', // 标题
    typeName: ['大数据运用'], // 分类显示的名字 
    articleClass: ['pf-data'], // 彼邑广告分类需要的类名称
    coverImage: ['22-1.png'], // 封面图片轮播图
    contentImages: ['22-2.png', '22-3.png', '22-4.png', '22-5.png', '22-6.png', '22-7.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2015', // 完成时间
    skills: 'Social listening', // 所用技能
    client: 'Agency', // 客户
    brand: '雪佛兰 Chevrolet',
    content: '<p>雪佛兰Chevrolet打算在迪士尼乐园内推广其汽车营销广告，但是不确定投放人群是否精准。我们定位social对两部分TA做了特征契合度分析，为最终的营销推广提供了决策依据。</p>',
    videoPath: ''
  },
  {
    title: '小肥羊：草原撩羊 全景移动网站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['29.jpg'], // 封面图片轮播图
    contentImages: ['29-1.jpg', '29-2.jpg', '29-3.jpg', '29-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2016', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: 'Ogilvy 奥美', // 客户
    brand: 'Little Sheep 小肥羊',
    content: '<p>在大草原撩羊是一种什么体验？快来Get撩羊新姿势，一大波好礼正在砸向你！</p>',
    videoPath: ''
  },
  {
    title: '莫斯利安：健康就要Give Me Five', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['30.jpg'], // 封面图片轮播图
    contentImages: ['30-1.jpg', '30-2.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'July 2016', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: 'Bright Dairy 光明乳业', // 客户
    brand: 'Bright Dairy 光明乳业',
    content: '<p>我的健康新主张！<br>Give Me 5！</p>',
    videoPath: ''
  },
  {
    title: '优衣库：为你爱的穿搭束点赞', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['31.jpg'], // 封面图片轮播图
    contentImages: ['31-1.jpg', '31-2.jpg', '31-3.jpg', '31-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'August 2016', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: 'UNIQLO 优衣库', // 客户
    brand: 'UNIQLO 优衣库',
    content: '<p>优衣库新品束脚裤<br>为你爱的穿搭束点赞</p>',
    videoPath: ''
  },
  {
    title: '上汽大众：为别样生活出发 移动网站', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['32.jpg'], // 封面图片轮播图
    contentImages: ['32-1.jpg', '32-2.jpg', '32-3.jpg', '32-4.jpg', '32-5.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'July 2016', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: 'CCG (Cross Communication Group)', // 客户
    brand: 'Shanghai Volkswagen 上海大众汽车',
    content: '<p>为别样生活出发<br>Cross UV 跨界休旅车<br>心里装满鸡毛蒜皮，还是探索未知的好奇心？<br>Cross一下，为别样生活出发<br>别样灵动大空间随心接纳</p>',
    videoPath: ''
  },
  {
    title: '惠氏启赋：天赋说，分享宝宝的天赋故事', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['33.jpg'], // 封面图片轮播图
    contentImages: ['33-1.jpg', '33-2.jpg', '33-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'September 2016', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: 'illuma 启赋', // 客户
    brand: 'illuma 启赋',
    content: '<p>每个宝宝都拥有与生俱来的天赋，不同的天赋故事，同样的天赋营养。<br>与大家分享天赋故事吧！</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/33-4.png" width="160"></p>',
    videoPath: ''
  },
  //	{
  //		title: "DFS x 资生堂：旅途之美，于时光绽放", //标题
  //		typeName: ["移动端数字互动"], //分类显示的名字
  //		articleClass: ["pf-ad"], //彼邑广告分类需要的类名称
  //		coverImage: ["36.png"], //封面图片轮播图
  //		contentImages: ["36-1.png", "36-2.png", "36-3.png"], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "September 2016", //完成时间
  //		skills: "HTML5/CSS3", //所用技能
  //		client: "", //客户
  //		brand: "",
  //		content: '<p>聆听自由，舞动之花悄然资生；<br>旅行，一种美的绽放<br>邂逅，时光之舞，<br>迎接旅途，惊喜丰收<br>花朵，万物资生嫣然；<br>“至哉坤元，万物资生”——《易经》</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/36-4.jpg" width="160"></p>'，
  //		videoPath:''
  //	},
  {
    title: '黑白联盟的辛力觉醒', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['34.jpg'], // 封面图片轮播图
    contentImages: ['34-1.jpg', '34-2.jpg', '34-3.jpg', '34-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'December 2016', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: '康师傅', // 客户
    brand: '康师傅',
    content: '<p>浩瀚的宇宙中有一对姊妹星<br>因其各自蕴含着不同的能量<br>使得星体天然的呈现出黑白两色<br>生活在两颗星球的人们<br>虽因有肤色和种族的不同<br>却拥有相同的原力———辛力<br>但辛力并不一直存在<br>它只有在特殊的时间<br>通过一种仪式才能被激活<br>人们称之为"辛力觉醒"</p><p>扫描二维码，立即体验！<br /><img src="http://img.cdn.be-xxx.com/beats-site/images/works/34-5.png" width="160"></p>',
    videoPath: ''
  },
  {
    title: '2017 How are 酉', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['35.jpg'], // 封面图片轮播图
    contentImages: ['35-1.jpg', '35-2.jpg', '35-3.jpg', '35-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'January 2017', // 完成时间
    skills: 'HTML5/CSS3', // 所用技能
    client: 'PARKSON百盛', // 客户
    brand: 'PARKSON百盛',
    content: '<p>新年，节日最佳主角当然是人见人爱的红包！<br>萌萌哒又有内涵的利是封<br>在出手瞬间，立即为你打上神圣的“主角光环”</p>',
    videoPath: ''
  },
  {
    title: '兽王争锋：官网', // 标题
    typeName: ['PC端数字互动'], // 分类显示的名字
    articleClass: ['pf-pc', 'pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['37.jpg'], // 封面图片轮播图
    contentImages: ['37-12.jpg', '37-1.jpg', '37-2.jpg', '37-3.jpg', '37-4.jpg', '37-5.jpg', '37-6.jpg', '37-7.jpg', '37-8.jpg', '37-9.jpg', '37-10.jpg', '37-11.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'July 2016', // 完成时间
    skills: 'HTML5/ CMS/', // 所用技能
    client: 'Mattel', // 客户
    brand: 'Mattel',
    content: '<p>兽王争锋是现如今世界范围内最为火爆的一项灵兽对抗体育运动！而这项运动起源于世界仍处于一片混沌的时候，背后更是蕴藏着不为人知的秘密。为了阻止邪恶势力的阴谋，泰宇和他的小伙伴们用各自的战爪汲取五行的力量，通过不断捕获到各式各样的精灵，召唤出无比强力的灵兽来与邪恶势力进行抗衡。谁将最终成为兽王？而泰宇和他的小伙伴是否能真正阻止邪恶势力想要统治世界的阴谋呢？让我们拭目以待。</p><p>进入官网: <a href="http://www.shouwangzhengfeng.com/" target="_blank">http://www.shouwangzhengfeng.com/</a></p>',
    videoPath: ''
  },
  {
    title: '玫琳凯：幻时佳“加减”面膜', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['38.jpg'], // 封面图片轮播图
    contentImages: ['38-1.jpg', '38-2.jpg', '38-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'July 2016', // 完成时间
    skills: 'HTML5/ CSS3/', // 所用技能
    client: 'Marykay', // 客户
    brand: 'Marykay',
    content: '<p>荣耀礼遇<br />玫瑰女人臻享奢宠<br />只为您倾情打造</p>',
    videoPath: ''
  },
  {
    title: '大金空调：官网', // 标题
    typeName: ['PC端数字互动'], // 分类显示的名字
    articleClass: ['pf-pc', 'pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['39.jpg'], // 封面图片轮播图
    contentImages: ['39-13.jpg', '39-1.jpg', '39-2.jpg', '39-3.jpg', '39-4.jpg', '39-5.jpg', '39-6.jpg', '39-7.jpg', '39-8.jpg', '39-9.jpg', '39-10.jpg', '39-11.jpg', '39-12.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'January 2017', // 完成时间
    skills: 'HTML5/ CMS/', // 所用技能
    client: 'B.Y.E', // 客户
    brand: 'DAIKIN',
    content: '<p>大金凭借着不懈追求和匠心耕耘，不断研发新技术，致力于打造高质量产品，让全世界的用户都享有相同品质的产品，为每个家庭创造舒适健康的居家环境，带来高品质的生活享受。</p><p>进入官网: <a href="http://www.daikin-china.com.cn/ra/" target="_blank">http://www.daikin-china.com.cn/ra/</a></p>',
    videoPath: ''
  },
  {
    title: 'Zimmerli of Switzerland：官网', // 标题
    typeName: ['PC端数字互动'], // 分类显示的名字
    articleClass: ['pf-pc', 'pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['40.jpg'], // 封面图片轮播图
    contentImages: ['40-9.jpg', '40-1.jpg', '40-2.jpg', '40-3.jpg', '40-4.jpg', '40-10.jpg', '40-5.jpg', '40-6.jpg', '40-7.jpg', '40-8.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'December 2016', // 完成时间
    skills: 'HTML5/ Magento Framework/', // 所用技能
    client: 'Zimmerli of Switzerland', // 客户
    brand: 'Zimmerli of Switzerland',
    content: '<p>极致的贴身享受——这是Zimmerli of Switzerland的承诺与义务。追求精湛手工工艺的脚步从未停歇。自1871年以来，我们坚守精密繁复的加工和精整工序，采用最优质的天然纤维打造针织和梭织产品。同时，我们为制造中心根植于瑞士深感自豪。</p><p>无可比拟的触感，超乎想象的舒适，镜中的婀娜倩影——毫无疑问，Zimmerli of Switzerland于低调含蓄中尽显精致婉约之美。这亦是您对自信时尚的精致品味的衷心承诺。</p><p>进入官网: <a href="https://www.zimmerli.cn/" target="_blank">https://www.zimmerli.cn/</a></p>',
    videoPath: ''
  },
  {
    title: '环贸iapm商场：春联打印机', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['41.jpg'], // 封面图片轮播图
    contentImages: ['41-11.jpg', '41-1.jpg', '41-2.jpg', '41-3.jpg', '41-4.jpg', '41-5.jpg', '41-6.jpg', '41-7.jpg', '41-8.jpg', '41-9.jpg', '41-10.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'January 2017', // 完成时间
    skills: 'HTML5/ CSS3/ .NET /', // 所用技能
    client: '环贸iapm商场', // 客户
    brand: '环贸iapm商场',
    content: '<p>iapm给你一次体验年味的好机会<br />春联迎福DIY<br />为您传达独一无二的美好祝福！</p>',
    videoPath: ''
  },
  {
    title: 'Danisa 丹麦官网', // 标题
    typeName: ['PC端数字互动'], // 分类显示的名字
    articleClass: ['pf-pc', 'pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['42.jpg'], // 封面图片轮播图
    contentImages: ['42-9.jpg', '42-1.jpg', '42-2.jpg', '42-3.jpg', '42-4.jpg', '42-5.jpg', '42-6.jpg', '42-7.jpg', '42-8.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'August 2016', // 完成时间
    skills: 'HTML5/ CMS', // 所用技能
    client: 'Danisa', // 客户
    brand: 'Danisa',
    content: '<p>Danisa is a global brand that is selling in more than 100 countries and regions worldwide. Consumers can find and taste delicious traditional Danisa butter cookies no matter in Japan, Singapore, Vietnam, China, USA, Nigeria or other countries. Today, Danisa becomes a market leader in the cookies category in many countries, especially in some Asia key countries.</p><p>进入官网: <a href="http://www.denmark-danisa.com/" target="_blank">http://www.denmark-danisa.com/</a></p>',
    videoPath: ''
  },
  {
    title: '倩碧：电眼破晓派对', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['43.jpg'], // 封面图片轮播图
    contentImages: ['43-1.jpg', '43-2.jpg', '43-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'June 2016', // 完成时间
    skills: 'HTML5/ CSS3/ .NET', // 所用技能
    client: 'hdtMEDIA', // 客户
    brand: '倩碧Clinique',
    content: '<p>随身携带24h不断电<br />小小一支，却储存大量“电力”<br />无论何时何地，足够补充眼部所需<br />妆前妆后均可使用<br />橙色能量，让你一天活力满满</p>',
    videoPath: ''
  },
  {
    title: '博柏利: 酉福', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['44.jpg'], // 封面图片轮播图
    contentImages: ['44-1.jpg', '44-2.jpg', '44-3.jpg', '44-4.jpg', '44-5.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'January 2017', // 完成时间
    skills: 'HTML5/ CSS3/ WebGL/ .NET', // 所用技能
    client: 'Burberry 博柏利', // 客户
    brand: 'Burberry 博柏利',
    content: '<p>值此新春佳节之际，<br />Burberry给您带来最真诚的节日祝福。</p><p>祝大家在「酉福」之年<br />阖家欢乐，幸福安康！</p>',
    videoPath: ''
  },
  {
    title: '博柏利: 包先生', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['45.jpg'], // 封面图片轮播图
    contentImages: ['45-1.jpg', '45-2.jpg', '45-3.jpg', '45-4.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'April 2017', // 完成时间
    skills: 'HTML5/ CSS3/', // 所用技能
    client: 'Burberry 博柏利', // 客户
    brand: 'Burberry 博柏利',
    content: '<p>当包先生遇上 Burberry</p><p>Burberry 与包先生携手合作，为您揭晓由包先生独家挑选的新季配色限量版 DK88，用悦动色彩唤醒斑斓春日。</p>',
    videoPath: ''
  },
  {
    title: 'OB_caseVideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video1.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video1.mp4' // 播放视频的路径地址
  },
  {
    title: 'Chando_CaseVideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video2.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video2.mp4' // 播放视频的路径地址
  },
  {
    title: 'Cornetto_CaseVideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video3.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video3.mp4' // 播放视频的路径地址
  },
  {
    title: 'Heineken_CNY_Casevideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video4.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video4.mp4' // 播放视频的路径地址
  },
  {
    title: 'NEUTROGENAxKEEP_Casevideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video6.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video6.mp4' // 播放视频的路径地址
  },
  {
    title: 'OMO_Casevideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video7.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video7.mp4' // 播放视频的路径地址
  },
  //	{
  //		title: "Philips_Avent_CaseVideo", //标题
  //		typeName: ["视频广告"], //分类显示的名字
  //		articleClass: ["pf-video"], //彼邑广告分类需要的类名称
  //		coverImage: ["video/video8.jpg"], //封面图片轮播图
  //		contentImages: [], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "", //完成时间
  //		skills: "", //所用技能
  //		brand: "", //客户 
  //		client: "",
  //		content: '',
  //		videoPath:'video/video8.mp4'//播放视频的路径地址
  //	},
  {
    title: 'UFS_CaseVideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video10.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video10.mp4' // 播放视频的路径地址
  },
  //	new-add-start
  {
    title: 'BAZAAR _EventVideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video11.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video11.mp4' // 播放视频的路径地址
  },
  {
    title: 'Honor_EventVideo', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video12.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video12.mp4' // 播放视频的路径地址
  },
  {
    title: 'Atenza_Painter_Manifesto', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video13.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video13.mp4' // 播放视频的路径地址
  },
  {
    title: 'Marymay_Manifesto', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video14.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video14.mp4' // 播放视频的路径地址
  },
  {
    title: 'OMO_Manifesto', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video15.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video15.mp4' // 播放视频的路径地址
  },
  {
    title: 'Fruiti_Motion_Graphics', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video16.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video16.mp4' // 播放视频的路径地址
  },
  {
    title: 'OMO_Color_Run_Motion_Graphics', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video17.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video17.mp4' // 播放视频的路径地址
  },
  {
    title: 'OMO_Motionboard_Motion_Graphics', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video18.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video18.mp4' // 播放视频的路径地址
  },
  //	{
  //		title: "Philips_Animation_Motion_Graphics", //标题
  //		typeName: ["视频广告"], //分类显示的名字
  //		articleClass: ["pf-video"], //彼邑广告分类需要的类名称
  //		coverImage: ["video/video19.jpg"], //封面图片轮播图
  //		contentImages: [], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "", //完成时间
  //		skills: "", //所用技能
  //		brand: "", //客户 
  //		client: "",
  //		content: '',
  //		videoPath:'video/video19.mp4'//播放视频的路径地址
  //	},
  {
    title: 'Siemens_Motion_Graphics', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video20.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video20.mp4' // 播放视频的路径地址
  },
  {
    title: 'Bieke_Online_Video', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video21.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video21.mp4' // 播放视频的路径地址
  },
  {
    title: 'Buick_H5_Online_Video', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video22.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video22.mp4' // 播放视频的路径地址
  },
  {
    title: 'Google_Online_Video', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video23.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video23.mp4' // 播放视频的路径地址
  },
  //	{
  //		title: "Philips_HS_Online_Video", //标题
  //		typeName: ["视频广告"], //分类显示的名字
  //		articleClass: ["pf-video"], //彼邑广告分类需要的类名称
  //		coverImage: ["video/video24.jpg"], //封面图片轮播图
  //		contentImages: [], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "", //完成时间
  //		skills: "", //所用技能
  //		brand: "", //客户 
  //		client: "",
  //		content: '',
  //		videoPath:'video/video24.mp4'//播放视频的路径地址
  //	},
  //	{
  //		title: "Philips_Online_Video", //标题
  //		typeName: ["视频广告"], //分类显示的名字
  //		articleClass: ["pf-video"], //彼邑广告分类需要的类名称
  //		coverImage: ["video/video25.jpg"], //封面图片轮播图
  //		contentImages: [], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "", //完成时间
  //		skills: "", //所用技能
  //		brand: "", //客户 
  //		client: "",
  //		content: '',
  //		videoPath:'video/video25.mp4'//播放视频的路径地址
  //	},
  //	{
  //		title: "Philips_PH_Online_Video", //标题
  //		typeName: ["视频广告"], //分类显示的名字
  //		articleClass: ["pf-video"], //彼邑广告分类需要的类名称
  //		coverImage: ["video/video26.jpg"], //封面图片轮播图
  //		contentImages: [], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "", //完成时间
  //		skills: "", //所用技能
  //		brand: "", //客户 
  //		client: "",
  //		content: '',
  //		videoPath:'video/video26.mp4'//播放视频的路径地址
  //	},
  {
    title: 'Tmail_Online_Video', // 标题
    typeName: ['视频广告'], // 分类显示的名字
    articleClass: ['pf-video'], // 彼邑广告分类需要的类名称
    coverImage: ['video/video27.jpg'], // 封面图片轮播图
    contentImages: [], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '', // 完成时间
    skills: '', // 所用技能
    brand: '', // 客户 
    client: '',
    content: '',
    videoPath: 'video/video27.mp4' // 播放视频的路径地址
  },
  {
    title: '斯柯达 SKODA 2018 CNY 答题类小程序', // 标题
    typeName: ['小程序'], // 分类显示的名字
    articleClass: ['pf-mini'], // 彼邑广告分类需要的类名称
    coverImage: ['46.jpg'], // 封面图片轮播图
    contentImages: ['46-1.jpg', '46-2.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'February 2018', // 完成时间
    skills: 'WeChat App / WXML / WXSS / .NET', // 所用技能
    client: 'CCG (Cross Communication Group)', // 客户
    brand: 'SKODA 斯柯达',
    content: '<p>贴合时下热门答题类小程序。通过定时直播形式，参与直播闯关答题的玩家共同赢得现金奖励。提升玩家对品牌的一定认知度。</p><p style="margin-bottom:10px;>扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/46-3.jpg" width="160">',
    videoPath: ''
  },
  {
    title: 'OPPO 趣味答题 小程序', // 标题
    typeName: ['小程序'], // 分类显示的名字
    articleClass: ['pf-mini'], // 彼邑广告分类需要的类名称
    coverImage: ['47.jpg'], // 封面图片轮播图
    contentImages: ['47-1.jpg', '47-2.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'March 2018', // 完成时间
    skills: 'WeChat App / WXML / WXSS / .NET', // 所用技能
    client: 'OPPO 欧珀', // 客户
    brand: 'OPPO 欧珀',
    content: '<p>在OPPO R15新品预热期间，通过趣味闯关答题赛的形式，提升一线销售人员对新品的期待感，并强化一线销售人员对于新品产品知识的了解。</p>',
    videoPath: ''
  },
  {
    title: 'OPPO 祝福留声机 小程序', // 标题
    typeName: ['小程序'], // 分类显示的名字
    articleClass: ['pf-mini'], // 彼邑广告分类需要的类名称
    coverImage: ['48.jpg'], // 封面图片轮播图
    contentImages: ['48-1.jpg', '48-2.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'February 2018', // 完成时间
    skills: 'WeChat App / WXML / WXSS / .NET', // 所用技能
    client: 'OPPO 欧珀', // 客户
    brand: 'OPPO 欧珀',
    content: '<p>功能上，小程序的用户信息获取、地理位置、麦克风调取、允许访问用户相册、模板消息都有所涉及。</p><p style="margin-bottom:10px;">扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/48-3.jpg" width="160">',
    videoPath: ''
  },
  {
    title: 'BEATS自研小程序项目：AI实验室', // 标题
    typeName: ['小程序'], // 分类显示的名字
    articleClass: ['pf-mini'], // 彼邑广告分类需要的类名称
    coverImage: ['49.jpg'], // 封面图片轮播图
    contentImages: ['49-1.jpg', '49-2.jpg', '49-3.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'April  2018', // 完成时间
    skills: 'WeChat App / WXML / WXSS / .NET', // 所用技能
    client: '', // 客户
    brand: '',
    content: '<p style="margin-bottom:10px;">扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/49-4.jpg" width="140">',
    videoPath: ''
  },
  //	{
  //		title: "BEATS自研小程序项目：切水果 小游戏", //标题
  //		typeName: ["小程序"], //分类显示的名字
  //		articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
  //		coverImage: ["50.jpg"], //封面图片轮播图
  //		contentImages: ["50-1.jpg", "50-2.jpg"], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "April  2018", //完成时间
  //		skills: "WeChat App / WXML / WXSS / .NET", //所用技能
  //		client: "", //客户
  //		brand: "",
  //		content: '<p style="margin-bottom:10px;">扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/50-3.jpg" width="140">',
  //		videoPath:''
  //	},
  //	{
  //		title: "BEATS自研小程序项目：礼品卡小程序(SaaS平台）", //标题
  //		typeName: ["小程序"], //分类显示的名字
  //		articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
  //		coverImage: ["51.jpg"], //封面图片轮播图
  //		contentImages: ["51-1.jpg", "51-2.jpg", "51-3.jpg", "51-4.jpg"], //作品信息轮播图
  //		createdBy: "", //作者
  //		completedOn: "April  2018", //完成时间
  //		skills: "WeChat App / WXML / WXSS / .NET", //所用技能
  //		client: "", //客户
  //		brand: "",
  //		content: '<p style="margin-bottom:10px;">扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/51-5.jpg" width="140">',
  //		videoPath:''
  //	},
  {
    title: 'BEATS自研小程序项目：脑力冲顶', // 标题
    typeName: ['小程序'], // 分类显示的名字
    articleClass: ['pf-mini'], // 彼邑广告分类需要的类名称
    coverImage: ['52.jpg'], // 封面图片轮播图
    contentImages: ['52-1.jpg', '52-2.jpg'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: 'December 2017', // 完成时间
    skills: 'WeChat App / WXML / WXSS / .NET', // 所用技能
    client: '', // 客户
    brand: '',
    content: '<p style="margin-bottom:10px;">扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/52-3.jpg" width="140">',
    videoPath: ''
  },
	// {
	// 	title: "BEATS自研小游戏项目：酷跑小鸡", //标题
	// 	typeName: ["小程序"], //分类显示的名字
	// 	articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
	// 	coverImage: ["53.jpg"], //封面图片轮播图
	// 	contentImages: ["53-1.jpg", "53-2.jpg", "53-3.jpg"], //作品信息轮播图
	// 	createdBy: "", //作者
	// 	completedOn: "April 2018", //完成时间
	// 	skills: "WeChat App / WXML / WXSS / .NET", //所用技能
	// 	client: "", //客户
	// 	brand: "",
	// 	content: '<p style="margin-bottom:10px;">扫描二维码，立即体验！</p><img src="http://img.cdn.be-xxx.com/beats-site/images/works/53-4.jpg" width="140">',
	// 	videoPath:''
	// },
  //----------------------------------------------------------------20190807作品更新
  //----------------------------------------海报设计--------------start
  {   
  //054
		title: "KOPIKO可比可咖啡-CNY线上传播海报", //标题
		typeName: ["海报设计"], //分类显示的名字
		articleClass: ["pf-poster"], //彼邑广告分类需要的类名称
		coverImage: ["054-1.png"], //封面图片轮播图
		contentImages: ["054-2.png", "054-3.png"], //作品信息轮播图
		createdBy: "", //作者
		completedOn: "2019年1月", //完成时间
		skills: "KOL Video/Broadcast", //所用技能
		client: "YYJ-CHINA", //客户
		brand: "KOPIKO",
		content: '<p>可比可“我身边的咖啡馆”，通过不同食用场景传达方便快捷又美味好喝的咖啡饮品，在浓郁丰富的口感之间，更绵密的奶泡和有趣的置顶拉花，让味蕾在咖啡与牛奶的邂逅中，享受到令人兴奋的欢愉，从氤氲在空气中的咖啡香气，到跳跃在舌尖的甜蜜浓醇，仿佛是将“咖啡馆”带在身边，随时随地都能感受到咖啡馆般的美味。</p>',
		videoPath:''
  },
  {
  //053
    title: "ASTICK爱时乐-天团出道线上传播海报", //标题
    typeName: ["海报设计"], //分类显示的名字
    articleClass: ["pf-poster"], //彼邑广告分类需要的类名称
    coverImage: ["053-1.png"], //封面图片轮播图
    contentImages: ["053-2.png"], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2019年1月", //完成时间
    skills: "KOL Video/Broadcast", //所用技能
    client: "YYJ-CHINA", //客户
    brand: "ASTICK",
    content: '<p>神秘天团A出道，红色的张扬、蓝色的活力、粉色的甜美、黄色的知性、绿色的机灵……Asitck变得与众不同了。</p>',
    videoPath:''
  },
  {
  //052
    title: "CALCHEESE钙芝-圣诞线上传播海报", //标题
    typeName: ["海报设计"], //分类显示的名字
    articleClass: ["pf-poster"], //彼邑广告分类需要的类名称
    coverImage: ["052-1.png"], //封面图片轮播图
    contentImages: ["052-2.png", "052-3.png"], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2018年2月", //完成时间
    skills: "KOL Video/Broadcast", //所用技能
    client: "YYJ-CHINA", //客户
    brand: "CALCHEESE",
    content: '<p>#幸福时刻 ZHI和你过#暖心橙色系搭配香浓芝士，治愈你的一切“小确丧”！让鹿晗成为你的能量守护者。</p>',
    videoPath:''
  },
  {
  //051
    title: "CALCHEESE钙芝-双12线上传播海报", //标题
    typeName: ["海报设计"], //分类显示的名字
    articleClass: ["pf-poster"], //彼邑广告分类需要的类名称
    coverImage: ["051-1.png"], //封面图片轮播图
    contentImages: ["051-2.png", "051-3.png"], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2018年12月", //完成时间
    skills: "KOL Video/Broadcast", //所用技能
    client: "YYJ-CHINA", //客户
    brand: "CALCHEESE",
    content: '<p>“鹿”人皆知的好“芝”味，茫茫人海怎么确定该和谁一起狂欢？要找到对的人，当然是先确认眼神。当鹿晗向你发来一波魅力电眼，你要不要跟他走，一起感受一场钙芝奶酪味威化饼干的橙色风暴。</p>',
    videoPath:''
  },
  //----------------------------------------海报设计 ----------end
  {
    //045
      title: "WSELEARNING华尔街英语PC及移动端官网", //标题
      typeName: ['PC端数字互动'], //分类显示的名字
      articleClass: ['pf-pc', 'pf-ad'], //彼邑广告分类需要的类名称
      coverImage: ["045-1.png"], //封面图片轮播图
      contentImages: ["045-2.png","045-3.png","045-4.png","045-5.png","045-6.png"], //作品信息轮播图
      createdBy: "", //作者
      completedOn: "2017年5月", //完成时间
      skills: "WeChat App / WXML / WXSS / .NET / HTML /", //所用技能
      client: "WALL STREET ENGLISH", //客户
      brand: "WALL STREET ENGLISH",
      content: '<p>华尔街英语与你一起，众志成城，释放你我“改变未来的力量”，绽放光芒！</p>',
      videoPath:''
  },
  {
   //043
    title: 'ETAM-MEMBERSHIP移动端H5', // 标题
    typeName: ['移动端数字互动'], // 分类显示的名字
    articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
    coverImage: ['043-1.png'], // 封面图片轮播图
    contentImages: ['043-2.png', '043-3.png', '043-4.png'], // 作品信息轮播图
    createdBy: '', // 作者
    completedOn: '2015年10月', // 完成时间
    skills: 'SOCIAL CRM', // 所用技能
    brand: 'ETAM', // 客户 
    client: 'HOCOMM',
    content: '',
    videoPath: ''
  },
  {
    //042
     title: 'VEDETT-SCRM移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['042-1.png'], // 封面图片轮播图
     contentImages: ['042-2.png', '042-3.png', '042-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年6月', // 完成时间
     skills: 'SOCIAL CRM', // 所用技能
     brand: 'VEDETT', // 客户 
     client: 'VEDETT',
     content: '',
     videoPath: ''
  },
  {
    //041
     title: 'CARTIER卡地亚-AMULETTE移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['041-1.png'], // 封面图片轮播图
     contentImages: ['041-2.png', '041-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2015年7月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'CARTIER', // 客户 
     client: '',
     content: '<p>爱情不将就，卡地亚Amulette De Cartier项链 被译为护身符项链，作为女人最柔情的眷顾，哪怕现在还是单身贵族，却也因为卡地亚护身符项链的庇佑，经营出自我靓丽的人生。一身白色的OL造型，时尚简单而又呈现飒爽的英伦范。而脖颈间的Amulette De Cartier项链也因为匠心的设计，让时尚的女人们化身为都市的精灵儿，放飞青春的理想。</p>',
     videoPath: ''
  },
  {
    //040
     title: 'RADO雷达-玩转时间元素移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['040-1.png'], // 封面图片轮播图
     contentImages: ['040-a.png',,'040-2.png', '040-3.png', '040-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年7月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'RADO', // 品牌
     client: 'DT2', //客户
     content: '<p>【RADO】与你一起玩转，时间元素!RADO瑞士雷达表是全球知名品牌，以其创新设计及其革命性的材质使用而著称，旨在打造不易磨损的腕表。从在瑞士林诺创立伊始，瑞士雷达表始终具备开拓进取的精神，时至今日，仍秉持“若能想象，即能创造”的品牌哲学。</p>',
     videoPath: 'video/040.mp4'
  },
  {
    //039
     title: 'BURBERRY博柏利-酉福移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['039-1.png'], // 封面图片轮播图
     contentImages: ['039-a.png','039-2.png', '039-3.png', '039-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年12月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'BURBERRY ', // 品牌
     client: 'BURBERRY', //客户
     content: '<p>Burberry 博柏利携手吴亦凡开启专属新春之旅「酉福」贺岁体验，邀您共同探索新春贺岁精选礼品，个性化定制专属于您的英伦匠艺杰作 - 柔软舒适的羊绒围巾可尊享私人印记服务，新春佳节馈赠亲友的佳品。</p>',
     videoPath: 'video/039.mp4'
  },
  {
    //038
     title: 'BURBERRY博柏利-MR.BAGS移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['038-1.png'], // 封面图片轮播图
     contentImages: ['038-2.png', '038-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年4月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'BURBERRY ', // 品牌
     client: 'BURBERRY', //客户
     content: '',
     videoPath: ''
  },
  {
    //037
     title: 'PORSCHE保时捷-百万纪念荣耀庆移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['037-1.png'], // 封面图片轮播图
     contentImages: ['037-2.png', '037-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年9月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'PORSCHE ', // 品牌
     client: 'RFA', //客户
     content: '<p>世代传颂，历史弥新。AUDITOIRE团队与保时捷中国于今年10月18日在上海外滩源壹号携手举办“传奇不止The Next Legend is Now - 保時捷911百万纪念荣耀庆典”。保时捷911第一百万台纪念版车型及四台重量级911经典车型在国内首次亮相。</p>',
     videoPath: ''
  },
  {
    //036
     title: 'HARRY WINSTON海瑞温斯顿-2018GARDEN移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['036-1.png'], // 封面图片轮播图
     contentImages: ['036-a.png','036-2.png', '036-3.png','036-4.png','036-5.png','036-6.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年2月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'HARRY WINSTON', // 品牌
     client: 'OMNI MARKETING', //客户
     content: '<p>绚丽夏季，粲然盛放的花草好像黑色宝石，是大天然的斑斓捐赠。Harry Winston海瑞温斯创始人海瑞温斯顿师长教师（Mr. HarryWinston）深深沉醉于天然之美，时至今日，大天然依旧是海瑞温斯顿珠宝设想师的灵感源泉，激起他们将人杰地灵的绮丽之源化作优美娇媚的精美珠宝作品，用逼真的工艺缔造出如梦如幻的温斯顿花圃（Winston Garden）。</p>',
     videoPath: 'video/036.mp4'
  },
  {
    //035
     title: 'HARRY WINSTON海瑞温斯顿-从A到Z移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['035-1.png'], // 封面图片轮播图
     contentImages: ['035-2.png', '035-3.png','035-4.png','035-5.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年11月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'HARRY WINSTON', // 品牌
     client: 'OMNI MARKETING', //客户
     content: '<p>海瑞·温斯顿先生以创新的设计哲学—由宝石本身而非镶嵌宝石的贵重金属来引导设计方向—为当代珠宝设计带来革命性的突破，并以此作为品牌坚持的风格与标志。</p>',
     videoPath: ''
  },
  {
    //034
     title: 'DFS-爱上旅行移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['034-1.png'], // 封面图片轮播图
     contentImages: ['034-2.png', '034-3.png','034-4.png','034-5.png','034-6.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年3月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'RADO', // 品牌
     client: 'DT2', //客户
     content: '<p>全球领先的奢侈品旅游零售商DFSJN下T广场，隆重宣布推出囊括五十余件甄选产品的“来自威尼斯的爱”独家精选系列，以此歌颂对旅行和世界上最浪漫的城市——威尼斯的热爱。此系列的推出，标志着其2017年春季主题活动——“爱上旅行”的启动。活动中，旅行者们可跟随英国模特AlexLibby、中国香港时尚博主CindyKo、英国纪实摄影师TomCraig，展开一场精彩绝伦的探索发现之旅；</p>',
     videoPath: ''
  },
  {
    //033
     title: 'OPPO欧珀手机-OPPO创造101榜移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['033-1.png'], // 封面图片轮播图
     contentImages: ['033-2.png', '033-3.png','033-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年4月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'OPPO', // 品牌
     client: 'OPPO', //客户
     content: '<p>现象级综艺《创造101》完满落幕，号召粉丝通过购买产品来给自家偶像投票的做法让粉丝充满了参与感，粉丝通过社交媒体给偶像拉票把节目推向火爆。</p>',
     videoPath: ''
  },
  {
    //032
     title: 'CORONA科罗娜-2017CNY移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['032-1.png'], // 封面图片轮播图
     contentImages: ['032-a.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年1月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'CORONA', // 品牌
     client: 'RELOAD', //客户
     content: '',
     videoPath: 'video/032.mp4'
  },
  {
    //031
     title: 'SONY索尼-PS4 HORIZON ZERO DAWN移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['031-1.png'], // 封面图片轮播图
     contentImages: ['031-a.png','031-2.png','031-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年8月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'SONY', // 品牌
     client: 'SONY', //客户
     content: '<p>PS4独占新IP《地平线：零之黎明》凭借出色的剧情，独特的角色和有力的主角俘获了全世界玩家的心。女主角Aloy在游戏中的旅程是一次坚定、曲折和改变世界的启示录，可以说历尽千苦。然而开发这款游戏本身也是一个相似的历程。</p>',
     videoPath: 'video/031.mp4'
  },
  {
    //030
     title: 'CHIVAS芝华士-调和不平凡小程序', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-mini'], // 彼邑广告分类需要的类名称
     coverImage: ['030-1.png'], // 封面图片轮播图
     contentImages: ['030-2.png','030-3.png','030-4.png','030-5.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年10月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'CHIVAS', // 品牌
     client: 'HOCOMM', //客户
     content: '<p>Success is a blend调和不平凡，当CHIVAS 组队多面身份的吴亦凡，当顺滑，经典，馥郁的调和型威士忌，去调和多样人生的经历，会造就怎样不平凡的故事？还将特邀全家会员一起体验11月16日芝华士-调和不平凡之夜 盛大派对！与吴亦凡一起感受CHIVAS的调和不平凡！</p>',
     videoPath: ''
  },
  {
    //029
     title: 'SHUERJIA舒尔佳-减肥历史博物馆移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['029-0.png'], // 封面图片轮播图
     contentImages: ['029-1.png','029-2.png','029-3.png','029-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2019年5月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'SHUERJIA', // 品牌
     client: 'SOCIAL-TOUCH', //客户
     content: '<p>结合5·11世界减肥日的热点，打造了一座极致年轻化的【减肥史博物馆】，突破了药企常见古板形象，用视觉元素鲜明的趣味点、同理心强的情感沟通，让消费者一改对减肥药的传统印象。</p>',
     videoPath: ''
  },
  {
    //028
     title: "LAY'S乐事-就酱工厂移动端H5", // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['028-1.png'], // 封面图片轮播图
     contentImages: ['028-a.png','028-2.png','028-3.png','028-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2019年3月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'LAYS', // 品牌
     client: 'CREADO', //客户
     content: '<p>“乐事就酱工厂”，邀请你参加乐事的新品沾沾薯的抽奖活动，晃动手机制作酱，参加乐事的抽奖活动。</p>',
     videoPath: 'video/028.mp4'
  },
  {
    //027
     title: 'BILIBILI哔哩哔哩-UNHEARD神秘小游戏移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['027-1.png'], // 封面图片轮播图
     contentImages: ['027-2.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2019年3月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'BILIBILI', // 品牌
     client: 'SOCIAL-TOUCH', //客户
     content: '<p>Unheard-疑案追声》是一款悬疑解谜游戏，它最大的特点如标题所说，它是一款「玩声音，不玩画面」的游戏。凭借极具创新的玩法，《UNHEARD》受到了国内外专业人士的好评和认可，先后获得IndieCade Europe 提名、LUDICIOUS“INNOVATION IN GAMES”提名、SWEDEN GAME“PUBLIC CHOICE AWARD“提名、SXSW“GAMERS VOICE”提名，以及中央美术学院CAFA“SERIOUS GAME DEVELOPMENT AWARD”等多项国内外游戏荣誉。</p>',
     videoPath: ''
  },
  {
    //026
     title: 'UNILEVER联合利华-家乐2019味来研究院移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['026-1.png'], // 封面图片轮播图
     contentImages: ['026-2.png','026-3.png','026-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年12月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'UNILEVER', // 品牌
     client: 'SOCIAL-TOUCH', //客户
     content: '<p>在「不知饿滋味」的今天，对越是年轻一代的食客来说，他们往往就拥有越加挑剔的口味。这是今天厨师们普遍面临的一个难题，但这个难题，最近却由联合利华饮食策划（以下简称 UFS）交还给了年轻人们自己解决。</p>',
     videoPath: ''
  },
  {
    //025
     title: 'DIOR迪奥-BOOK TOTE CUSTOMIZATION移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['025-1.png'], // 封面图片轮播图
     contentImages: ['025-a.png','025-2.png','025-3.png','025-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年12月', // 完成时间
     skills: 'HTML5 INTERACTION', // 所用技能
     brand: 'DIOR', // 品牌
     client: 'DFL', //客户
     content: '<p>BOOK TOTE手袋布满几何图案设计，而且色彩相当灿烂，它的灵感源自墨西哥手工艺品。拥有十五多种色彩相互碰撞出独特的绚烂效果，手袋先由迪奥巴黎成衣工坊构思设计，再由位于意大利翁布里亚的家族工坊进行图案绣制。每只手袋的制作历时逾三十二个工时，包含三种不同的刺绣针法，由一百二十万针缝线精制而成。</p>',
     videoPath: 'video/025.mp4'
  },
  {
    //024
     title: 'UNI-PRESIDENT统一企业-TONGYIICETEA×BIGBALLBATTLE移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['024-1.png'], // 封面图片轮播图
     contentImages: ['024-a.png','024-2.png','024-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年7月', // 完成时间
     skills: '3D Animation', // 所用技能
     brand: 'UNI-PRESIDENT', // 品牌
     client: 'QIAN-YI', //客户
     content: '<p>《球球大作战》联合统一冰红茶推出冬日特别活动——青春就要冰着玩！青春就是肆无忌惮，青春就是热力四射！《球球大作战》与统一冰红茶还将在这次冬季特别活动中一起搞事情，波拉哩星球正在准备向球宝们空投神秘大礼！</p>',
     videoPath: 'video/024.mp4'
  },
  {
    //023
     title: 'TRANSFORMERS变形金刚-2018CNY塞伯坦计划移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['023-1.png'], // 封面图片轮播图
     contentImages: ['023-a.png','023-2.png','023-3.png','023-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年7月', // 完成时间
     skills: '3D Animation', // 所用技能
     brand: 'TRANSFORMERS', // 品牌
     client: 'OMNI MARKETING', //客户
     content: '<p>你好地球人——搜索滞留在地球的变形金刚，将他们送上返回塞伯坦星的星际飞船票，你就是超级英雄。</p>',
     videoPath: 'video/023.mp4'
  },
  {
    //022
     title: 'INNISFREE悦诗风吟-HYDRANGEAD REAM SUMMER WORLD移动端H5', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['022-1.png'], // 封面图片轮播图
     contentImages: ['022-a.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年7月', // 完成时间
     skills: '3D Animation', // 所用技能
     brand: 'INNISFREE', // 品牌
     client: 'DT2', //客户
     content: '<p>在海风轻拂的济州东岸，在小鹿乱撞的心底里，夏日总会和悄悄绽放的花海一起到来~这里就是绣球花的主场，碧海蓝天下每一朵的颜色都是梦幻……而这一次拾色济州生如夏花篇的灵感，也是来源于此~TA们还有一个美好而浪漫的名字：终达里的绣球花路</p>',
     videoPath: 'video/022.mp4'
  },
  {
    //021
     title: 'SPRITE雪碧-SURPRISE YOURSELF线下数字互动', // 标题
     typeName: ['线下数字互动'], // 分类显示的名字
     articleClass: ['pf-oi'], // 彼邑广告分类需要的类名称
     coverImage: ['021-1.png'], // 封面图片轮播图
     contentImages: ['021-a.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年7月', // 完成时间
     skills: 'HOOD', // 所用技能
     brand: 'SPRITE', // 品牌
     client: 'RELOAD', //客户
     content: '',
     videoPath: 'video/021.mp4'
  },
  {
    //018
     title: 'SWISSE瑞思-SWISSE×TMALLDAY线下数字互动', // 标题
     typeName: ['线下数字互动'], // 分类显示的名字
     articleClass: ['pf-oi'], // 彼邑广告分类需要的类名称
     coverImage: ['018-1.png'], // 封面图片轮播图
     contentImages: ['018-a.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年7月', // 完成时间
     skills: 'HOOD', // 所用技能
     brand: 'SWISSE', // 品牌
     client: '', //客户
     content: '<p>Swisse天猫欢聚日线下体验活动，传达坚持科学和自然健康的产品理念，活动现场消费者体验AR互动，给消费者带来全新的消费体验。</p>',
     videoPath: 'video/018.mp4'
  },
  {
    //017
     title: 'RADO雷达-越坚定悦绽放支付宝AR互动', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['017-1.png'], // 封面图片轮播图
     contentImages: ['017-a.png','017-2.png','017-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年5月', // 完成时间
     skills: 'Alipay AR', // 所用技能
     brand: 'RADO', // 品牌
     client: 'DT2', //客户
     content: '<p>“越坚定 悦绽放”从在瑞士林诺创立伊始，瑞士雷达表始终具备开拓进取的精神，时至今日，仍秉持“若能想象，即能创造；若能创造，即能实现”的品牌哲学。</p>',
     videoPath: 'video/017.mp4'
  },
  {
    //016
     title: 'ABBOTT雅培-雅培欧亲支付宝AR互动', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['016-1.png'], // 封面图片轮播图
     contentImages: ['016-a.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2017年9月', // 完成时间
     skills: '3D Animation', // 所用技能
     brand: 'ABBOTT', // 品牌
     client: 'BBD', //客户
     content: '<p>沉浸式体验走进北纬53度铂金奶源，领略奶源风景、亲临牧场更深刻的了解雅培欧亲铂金级的倍护。</p>',
     videoPath: 'video/016.mp4'
  },
  {
    //015
     title: 'CHANDO自然堂-春夏系列支付宝AR互动', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['015-1.png'], // 封面图片轮播图
     contentImages: ['015-a.png','015-2.png','015-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年7月', // 完成时间
     skills: 'Alipay AR', // 所用技能
     brand: 'CHANDO', // 品牌
     client: 'PWE', //客户
     content: '<p>生机盎然的春，蓬勃生长的夏，张艺兴带你守护肌肤最美状态 ，春夏希望通过AR走进消费者内心并与之产生情感共鸣，做一个具有“好看好用好玩”的独特价值主张的年轻品牌。</p>',
     videoPath: 'video/015.mp4'
  },
  {
    //014
     title: 'MILKANA百吉福-童趣大冒险手淘AR互动', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['014-1.png'], // 封面图片轮播图
     contentImages: ['014-a.png','014-2.png','014-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年7月', // 完成时间
     skills: 'Taobao AR', // 所用技能
     brand: 'MILKANA', // 品牌
     client: 'EBP', //客户
     content: '<p>探索无数奇妙世界，百吉福和童趣大冒险一起上山下海，还有金鹰卡通卫视面试机会等你。</p>',
     videoPath: 'video/014.mp4'
  },
  {
    //011
     title: 'JOHNSON & JOHNSON强生-邦迪618收集我的守护神', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['011-1.png'], // 封面图片轮播图
     contentImages: ['011-a.png','011-2.png','011-3.png','011-4.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '2018年7月', // 完成时间
     skills: 'JD AR', // 所用技能
     brand: 'JOHNSON & JOHNSON', // 品牌
     client: 'ORANGE-SOCIAL', //客户
     content: '<p>守护神兽一直被人认为是很吉祥的存在，有了它们的守护，人们的生活变得越来越顺利。</p>',
     videoPath: 'video/011.mp4'
  },
  {
    //010
     title: 'YILI伊利-我们是真正的朋友AR互动', // 标题
     typeName: ['移动端数字互动'], // 分类显示的名字
     articleClass: ['pf-ad'], // 彼邑广告分类需要的类名称
     coverImage: ['010-1.png'], // 封面图片轮播图
     contentImages: ['010-a.png','010-2.png','010-3.png'], // 作品信息轮播图
     createdBy: '', // 作者
     completedOn: '', // 完成时间
     skills: 'Alipay AR', // 所用技能
     brand: 'YILI', // 品牌
     client: 'WEILAN', //客户
     content: '<p>随着国内首档 " 友情体验式真人秀 "《我们是真正的朋友》全网热映，舒化再次以无乳糖牛奶引领者的姿态进入国民视野，掀起一股席卷全国的无乳糖认知教育的热潮。</p>',
     videoPath: 'video/010.mp4'
  },
  {
    //008
    title: "BEATS自研项目-礼品卡小程序", //标题
    typeName: ["小程序"], //分类显示的名字
    articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
    coverImage: ['008-1.png'], //封面图片轮播图
    contentImages: ['008-2.png','008-3.png','008-4.png'], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "持续维护中", //完成时间
    skills: "Mini Program", //所用技能
    brand: "BEATS",
    client: "BEATS", //客户
    content: '<p>好礼成卡片，朋友、企业之间好礼互送，每张卡片都是一个广告位；线上购买，线下提货，打通线上与线下，提高整体销售量；社交渠道分享传播，用户数量快速裂变，提升平台整体关注。</p>',
    videoPath:''
  },
  {
    //007
    title: "BEATS自研项目-商城框架小程序", //标题
    typeName: ["小程序"], //分类显示的名字
    articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
    coverImage: ['007-1.png'], //封面图片轮播图
    contentImages: ['007-2.png','007-3.png'], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "持续维护中", //完成时间
    skills: "Mini Program", //所用技能
    brand: "BEATS",
    client: "BEATS", //客户
    content: '<p>多终端覆盖，灵活适应各种场景，打造良好的购物体验，功能覆盖电商全模块，开启规范新管理，精准、高效、应用广泛的智慧电商软件，助力电商企业高质发展。</p>',
    videoPath:''
  },
  {
    //004
    title: "TOTTENHAM HOTSPUR热刺足球俱乐部-热刺之城小程序", //标题
    typeName: ["小程序"], //分类显示的名字
    articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
    coverImage: ['004-1.png'], //封面图片轮播图
    contentImages: ['004-2.png','004-3.png','004-4.png','004-5.png'], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2019年2月", //完成时间
    skills: "Mini Program", //所用技能
    brand: "MAILMAN",
    client: "MAILMAN GROUP", //客户
    content: '<p>托特纳姆热刺足球俱乐部为中国粉丝群体推出“热刺之城”可持续性，多功能的中国热刺球迷交互中心。</p>',
    videoPath:''
  },
  {
    //003
    title: "APTAMIL爱他美-万千见证爱他美小程序", //标题
    typeName: ["小程序"], //分类显示的名字
    articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
    coverImage: ['003-1.png'], //封面图片轮播图
    contentImages: ['003-2.png','003-3.png','003-4.png','003-5.png'], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2019年3月", //完成时间
    skills: "Mini Program", //所用技能
    brand: "APTAMIL",
    client: "BBD", //客户
    content: '<p>见证爱他美宝宝的绝密档案，爱他美相信，看似柔弱的宝宝从降生的这一刻起，便神奇地拥有着与生俱来的能力，需要更多的探索和开发才能展现它的价值。</p>',
    videoPath:''
  },
  {
    //002
    title: "CLARINS娇韵诗-跟着CLARINS娇韵诗去旅行小程序", //标题
    typeName: ["小程序"], //分类显示的名字
    articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
    coverImage: ['002-1.png'], //封面图片轮播图
    contentImages: ['002-2.png','002-3.png','002-4.png','002-5.png','002-6.png'], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2019年2月", //完成时间
    skills: "Mini Program", //所用技能
    brand: "CLARINS",
    client: "SOCIAL-TOUCH", //客户
    content: '<p>跟着Clarins娇韵诗去旅行，秉承创始人Jacques Courtin-Clarins的独立精神与价值观——即我们所追求的“以美启真”。</p>',
    videoPath:''
  },
  {
    //001
    title: "MISS DIOR-《迪奥小姐：爱与玫瑰》展览小程序", //标题
    typeName: ["小程序"], //分类显示的名字
    articleClass: ["pf-mini"], //彼邑广告分类需要的类名称
    coverImage: ['001-1.png'], //封面图片轮播图
    contentImages: ['001-2.png','001-3.png','001-4.png','001-5.png'], //作品信息轮播图
    createdBy: "", //作者
    completedOn: "2019年7月", //完成时间
    skills: "Mini Program", //所用技能
    brand: "DIOR",
    client: "DFL", //客户
    content: '<p>轰动日本东京的以迪奥小姐为主题的《迪奥小姐：爱与玫瑰》展览来到上海，展览将开辟出一方创意热土，声影并茂地讲述迪奥小姐的悠远历史。</p>',
    videoPath:''
  },
]
