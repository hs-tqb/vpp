
export default {
  lang:'zh-tw',
  langs: [
    { name:'English', type:'en' }
  ],
  navs:[
    {name:'白名單開啟', external:true, link:"http://valpromise.mikecrm.com/bkceWWX"},
    {anchor:'highlights', name:'技術和平臺', inFooter:true}, 
    {anchor:'production', name:'天氣保險', inFooter:true}, 
    {anchor:'roadmap', name:'路線圖', inFooter:true}, 
    {anchor:'team', name:'團隊', inFooter:true}, 
  ],
  slogan:'分布式價值承諾協議',
  joinGroup:'加入电报群',
  news: [
    { link:'/news/n2', img:require('~/assets/img/news/2/0-cn.png') },
    { link:'/news/n1', img:require('~/assets/img/news/1/0-cn.png') },
    { link:'https://t.me/joinchat/II2BTAkqmTQXJ-utl-y5Sg', img:require('~/assets/img/news/3/0-cn.png'), external:true }
  ],
  about: {
    title:'ValPromise',
    desc :'ValPromise價值承諾協議，是一個基於區塊鏈的分布式承諾合約發布和交易平臺，旨在解決全球範圍跨品種跨地區的風險管理問題，能廣泛應用在保險、 金融衍生品、預測等市場。'
  },
  highlights: {
    title:'技術和平臺',
    items:[
      { 
        img:require('~/assets/img/highlights/i1.png'), 
        title:'分布式智能合約', 
        desc:'將傳統衍生品市場線下一對一紙質或者傳統中心化電子合約簽署模式升級為鏈上智能合約簽訂模式，利用智能合約可編程性與自動執行等特點，解決交易對手不履約等信用風險問題。' 
      },
      { 
        img:require('~/assets/img/highlights/i2.png'), 
        title:'統一交易媒介', 
        desc:'VPP 承諾幣是平臺唯一支持的交易媒介，法幣與數字貨幣兌換為 VPP 後參與平臺的承諾對沖交易，由此打破貨幣種類與物理地域的限制，提供強大的全球流動性。' 
      },
      { 
        img:require('~/assets/img/highlights/i3.png'), 
        title:'去中心化承諾創建機制', 
        desc:'利用“眾智”，任何人和組織，都可以創建承諾模板，滿足自己和他人的風險對沖需求，從而構建個性化，高效率的承諾生態。' 
      },
      { 
        img:require('~/assets/img/highlights/i4.png'), 
        title:'數據鏈上自證', 
        desc:'價值承諾合約中錨定的客觀數據指標（例如天氣數據），獲取即寫入區塊中，無法篡改，數據自證清白。' 
      },
      { 
        img:require('~/assets/img/highlights/i5.png'), 
        title:'分層設計', 
        desc:'在底層區塊鏈層上，ValPromise通過分層設計，將合約定義，交易功能和不同垂直場景的應用分開，既保證服務質量，也為ValPromise後續擴展留出可能。' 
      },
      { 
        img:require('~/assets/img/highlights/i6.png'), 
        title:'移動平臺', 
        desc:'ValPromise 通過適合 Mobile 和 IOT 的前端應用，降低區塊鏈的應用成本，讓更多力量加入到 ValPromise 區塊鏈中。' 
      }
    ]
  },
  production: {
    title:'天氣保險：ValPromise生態的首個應用',
    desc :'天氣指數保險將是ValPromise生態上第一個成熟應用。天氣寶團隊在天氣風險對沖領域具有大量成功案例和經驗，過去6個月中累計發行20萬+份天氣風險保障合約。合作夥伴包括墨跡天氣、華安保險、陽光保險、途家網和各大旅遊中介機構。我們希望ValPromise能解決當前天氣保險領域的諸多問題，帶來革命性的創新。',
    items:[
      {
        title:'1. 解決缺乏成熟天氣保險的問題',
        desc :'目前除了非常初級的農業保險，中國幾乎沒有成規模的，覆蓋全國的天氣保險產品。 ValPromise團隊之前的工作已攻克該難點，發布了成熟應用，並計劃用智能合約方式發布標準化數字合約，讓所有人都能對沖天氣的風險。'
      },
      {
        title:'2. 保險合約設計效率低下',
        desc :'目前中國的天氣保險產品主要由各地氣象部門和地市級保險公司合作設計。歷時至少需要1個月。ValPromise業內領先的毫秒級天氣保險合約生成技術，已得到諸多合作夥伴認可和好評。未來ValPromise將鼓勵用戶自己創立自己合約，眾智機制保證合約的效率。'
      },
      {
        title:'3.人工定損成本高，賠付效率低',
        desc :'以前傳統保險產品，判斷履約條件，確定賠付金額等流程均需人工參與。ValPromise采用智能合約技術，自動判斷，自動執行，大幅提高效率。'
      },
      {
        title:'4. 氣象數據中心化存儲，數據難以自證清白',
        desc :'由於大部分天氣判斷數據來自官方，未對公眾完全開放，且無法追溯，所以中心化的數據存儲機制天然難以自證清白。ValPromise希望通過區塊鏈和用戶共識機制解決數據追溯和信任問題。'
      },
      {
        title:'5. 場外衍生品流動性不足',
        desc :'資本政策限制，信任機制缺失，場外交易效率等願意限制了流動性。ValPromise使用同一數字交易媒介外，打破地理和法幣的限制人，提供一個全球流動性的交易平臺。'
      },
      {
        title:'6. 場外交易無法統計且風險度量失真',
        desc :'目前大部分天氣風險對沖產品是依賴金融機構內部的模型測算進行風險度量，導致風險度量失真。由於ValPromise所有合約的交易均通過區塊鏈底層進行時間戳記錄，對全市場公開透明可驗證，能形成市場共識的風險度量，從而解決風險度量失真的問題。'
      },
    ]
  },
  roadmap: {
    title:'路線圖',
    img  : {
      pc     : { clsn:'i1', src:require('~/assets/img/roadmap/zh-tw-pc.png') },
      mobile : { clsn:'i2', src:require('~/assets/img/roadmap/zh-tw-mb.png') },
    }
  },
  team: {
    title:'Team',
    items:[
      {
        name  :'向濤',
        avatar:require('~/assets/img/team/m1.png'),
        title:'向濤 數據科學家 ', 
        desc:'2011年香港中文大學信息工程碩士，先後創辦兩家大數據公司，禾訊科技（全球衛星大數據監測服務）及天氣寶（全自動化天氣風險合約定價&發行服務），帶領團隊在國內率先開拓兩個細分專業數據服務領域（商業遙感的農業應用市場，天氣風險管理市場），他在海量數據的獲取、管理及分析的技術架構設計實施，以及數據商業化領域有著多年的積累，因其業務在幫助中國打破西方戰略數據壟斷，創造經濟增長新動能方面的優秀表現，於2014年先後受到《焦點訪談》、以及《福布斯》專訪。'
      },
      {
        name:'焦臻',
        avatar:require('~/assets/img/team/m4.png'),
        title:'焦臻 區塊鏈專家 ', 
        desc:'中國科學院計算機科學博士，主要研究方向為物聯網區塊鏈高效架構，區塊鏈吞吐量優化等底層技術，同時在物聯網及去中心化網絡領域具有多年研發經歷。擔任國家自然科學基金評審專家，主持及參與國家自然科學基金，國家科技重大專項，世界500強企業聯合研發課題等十余項，負責制定物聯網國家標準兩項，在國際頂級刊物及會議發表學術論文二十余篇。'
      },
      {
        name:'張毅鵬',
        avatar:require('~/assets/img/team/m3.png'),
        title:'張毅鵬 中國最早一批移動互聯網海外產品經理 ',
        desc:'復旦大學電子與通信工程碩士，早年作為中國最早的移動互聯網出海企業—網秦集團（NYSE: NQ）核心產品經理，從諾基亞塞班時代開始就積累了大量的海外產品設計和運營經驗。之後他在奇虎360海外事業部，幫助360海外業務取得了突破性進展。作為中國新銳出海團隊APUS Group創始成員之壹，締造了3個月內新產品海外用戶超過1億的記錄，其產品榮登Google Play 30+國家排行榜第一。加入ValPromise之前，他在中國最大的激勵互聯網廣告公司擔任產品負責人，指導歐美，東南亞和印度地區產品的運營和推廣工作，在國外KOL流量，Apple Store、Google和Facebook生態運營方面經驗豐富。'
      },
      {
        name:'邵俊',
        avatar:require('~/assets/img/team/m2.png'),
        title:'邵俊 概率學博士(金融極限方向)', 
        desc:'畢業於誕生出人歐洲數學排名第一的巴黎綜合理工大學，師從當代金融數學之母 Nicole El Karoui 教授。歸國之前供職於AXA 安盛保險巴黎衍生品定價團隊，長期從事期權、期貨、固定收益衍生品等衍生品的量化分析建模、金融工具設計、風險評估等工作，在交易、做市、對沖、風控、高頻以及衍生品等領域積累了豐富的經驗，他還是壹名資深R語言和Python開發者，擁有非常豐富的工程實踐經歷。'
      },
      {
        name:'艾迪',
        avatar:require('~/assets/img/team/m5.png'),
        title:'艾迪 全棧開發工程師',
        desc:'畢業於大連理工大學。先後供職於阿裏巴巴、淘寶網、創新工場豌豆莢。阿裏巴巴期間，主要負責算法和網絡開發。淘寶期間主要方向為大數據、高性能服務、數據壹致性、網絡 QoS等。加入ValPromise之前，艾迪在創新工場豌豆莢擔任研發leader，領導豌豆莢數據和算法小組進行技術研究和開發實現。2015 年開始接觸區塊鏈，積累了比特幣、以太坊等主流數字貨幣及相關區塊鏈技術經驗。'
      },
      {
        name:'汪慧',
        avatar:require('~/assets/img/team/m6.png'),
        title:'汪慧 全棧開發工程師',
        desc:'畢業於北京郵電大學,先後供職於微軟中國、MooterMedia等知名公司。微軟期間，主要負責bing必應搜索引擎技術和廣告算法研發，MooterMedia期間主要負責實時競價廣告系統和數據系統。加入ValPromise團隊之前，汪慧作為中國某領先的數字營銷公司CTO和架構師，負責千萬級日活商業化產品的設計和實現，在算法，大數據和AI方向積累豐富而深刻。2015年開始進入區塊鏈行業，擁有豐富的區塊鏈技術開發經驗，對區塊鏈技術有著深刻理解。'
      },
    ],
    background: {
      title:'team.background',
      institutions:require('~/assets/img/team/background.png')
    }
  },
  advisor: {
    title:'顧問',
    items:[
      // {
      //   name:'PATRICK DAI&nbsp;&nbsp;&nbsp;Founder of QTUM',
      //   avatar:require('~/assets/img/advisor/c1.png')
      //   desc:''
      // },
      {
        name:'勞維信',
        avatar:require('~/assets/img/advisor/c2.png'),
        desc:'前海國際區塊鏈生態聯盟主席'
      }
    ]
  },
  investors: {
    title:'投資机构',
    institutions:require('~/assets/img/investors/institutions.png')
  },
  partners: {
    title:'Partners',
    institutions: {
      title :'sdfsd',
      trademark:require('~/assets/img/partners/institutions.png')
    },
    enterprise: {
      title :'aaaa',
      trademark:require('~/assets/img/partners/enterprise.png')
    }
  },
  contact: {
    // title:'聯系我們',
    join:{
      title:'Join us in building the sharing economy of tomorrow',
      desc :'Sign up for our mailing list and be first to learn of any  ValPromise news!',
      placeholder:'Enter email',
      btn:'Join'
    },
    social: {
      title:'聯系我們'
    }
  },
  presale: {
    title:'ValPromise Fund-Raising KYC',
    desc :'Please fill in the form below honestly. if you passed our review, we will contact you by mail telegram.',
    name    :{ placeholder:'Name', warning:'Please input your name' },
    nation  :{ placeholder:'Nation', warning:'Please input your nation' },
    email   :{ placeholder:'Email', warning:'Please input your email' },
    phone   :{ placeholder:'Phone', warning:'Please input the correct phone number' },
    telegram:{ placeholder:'Telegram', warning:'' },
    wechat  :{ placeholder:'Wechat', warning:'' },
    projects: {
      title:'State one or two blockchain projects that you have invested: ',
      warning:'Please state the projects that you have invested'
    },
    institution: {
      title:'Name/Institution Name:',
    },
    file: {
      passport: {
        title:'Photocopy of passport: ',
        desc :'Please fill in this question if you are individual investors or the representative of the institution investor （< 100 MB)',
      },
      institution: {
        title:'Photocopy of passport: ',
        desc:'Please fill in this question if you are individual investors or the representative of the institution investor （< 100 MB)',
      }
    },
    wallet: {
      title:'Wallet Account: ',
      placeholder:'For receiving our VPP',
      warning:'Please input your wallet account',
    },
    amount: {
      title:'Amount that you plan to contribute: ',
      desc:'For individual investors, you need to contribute over 1ETH. For institution investors, you need to contribute over 500ETH',
      unit:'ETH',
      placeholder:'1~5000',
      warning:'Please input your plan',
    },
    promise: {
      title:'Herein I promise that all above information is true, and I will undertake all results therefrom. ',
      warning:'Please state the turth of the above infomation you filled.'
    },
    result: {
      success:{ title:'Successful!', desc:'Thank you for thinking of us, and if anything comes up in the future, <br>we will be getting in touch with you.' },
      failure:{ title:'Failed!', desc:'Sorry. Something went wrong.' }
    }
  },
  // 新闻
  article: {
    a1: {
      title:'ValPromise 受邀参加深圳区块链应用峰会',
      paras:[
        { type:'p', content:'2月5日在深圳南山区科技寺创业孵化器举办的“看区块链应用的未来”的应用峰会上，ValPromise作为被邀嘉宾为深圳的区块链爱好者和项目粉丝们，介绍了项目和最新进展。' },
        { type:'p', content:'会上，ValPromise 创始人向涛详细阐述了这一革命性项目的愿景，并通过邀请台下观众游戏的方式生动的展示了ValPromise的业务原理，富有感染力的演讲和扎实的业务进展，收获了台下观众的掌声。' },
        { type:'p', content:'会后向涛和感兴趣的投资者，进行了更为深入的讨论。其中不乏在实体行业中颇有实力的经济大佬，他们希望ValPromise开足马力，快速上线，一起开创区块链的未来。' },
        { type:'p', content:'我们一定不辱使命，快马加鞭，让大家更早地享受到区块链的红利。' },
        { type:'img', src:require('~/assets/img/news/01.jpeg') },
        { type:'img', src:require('~/assets/img/news/02.jpeg') },
        { type:'img', src:require('~/assets/img/news/03.jpeg') },
        { type:'img', src:require('~/assets/img/news/04.jpeg') },
        { type:'img', src:require('~/assets/img/news/05.jpeg') },
        { type:'p', content:'更多项目信息，请大家关注我们的微信公众号：' },
        { type:'img', src:require('~/assets/img/icons/wc-qrcode.png') },
      ]
    },
    a2: {
      title:'向涛在香港区块链峰会上发表演讲',
      paras:[
        { type:'p', content:'2月8日，ValPromise的创始人向涛在“数字货币世界-香港站”峰会上发表了他对于区块链和数字货币看法的公开演讲。'},
        { type:'p', content:'因他独到而深刻的观点，被与会者称为“Smart Boy”。向涛介绍了风险管理领域的巨大市场和此行业所面临的困难。同时，他阐述了利用区块链技术解决存在问题的优越性和前瞻性。简言之，ValPromise，作为分布式交易合约发布和交易系统，能解决全世界的跨区域和跨区域风险管理（保险、期货、期权合同问题和交易、预测服务等）问题。' },
        { type:'p', content:'这是ValPromise面向海外市场的首秀，同时也是ValPromise开启面向海外运营的开始。很多国外投资者对ValPromise产生了浓厚的兴趣。在Q&A环节，他们提出了许多好问题，向涛一一作了解答。' },
        { type:'img', src:require('~/assets/img/news/2/08.jpg') },
        { type:'img', src:require('~/assets/img/news/2/01.jpg') },
        { type:'img', src:require('~/assets/img/news/2/02.jpg') },
        { type:'img', src:require('~/assets/img/news/2/03.jpg') },
        { type:'img', src:require('~/assets/img/news/2/04.jpg') },
        { type:'img', src:require('~/assets/img/news/2/05.jpg') },
        { type:'img', src:require('~/assets/img/news/2/06.jpg') },
        { type:'img', src:require('~/assets/img/news/2/07.jpg') },
        { type:'img', src:require('~/assets/img/news/2/09.jpg') },
        { type:'p', content:'期待下一次ValPromise的精彩之旅！更多项目信息，请大家关注我们的微信公众号：' },
        { type:'img', src:require('~/assets/img/icons/wc-qrcode.png') },
      ]
    }
  }
}