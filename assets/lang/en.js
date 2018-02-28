
export default {
  lang:'en',
  langs: [
    { name:'中文', type:'zh-tw' }
  ],
  navs:[
    {name:'Presale', external:true, link:"http://valpromise.mikecrm.com/bkceWWX"},
    {anchor:'highlights', name:'Highlights'}, 
    {anchor:'production', name:'Weather Insurance'}, 
    {anchor:'roadmap', name:'Roadmap'}, 
    {anchor:'team', name:'Team'}, 
  ],
  slogan:'Distributed Value Promise Protocol',
  joinGroup:'Join our commuity',
  news: [
    { link:'/news/n2', img:require('~/assets/img/news/2/0-en.png') },
    { link:'/news/n1', img:require('~/assets/img/news/1/0-en.png') },
    { link:'https://t.me/joinchat/II2BTAkqmTQXJ-utl-y5Sg', img:require('~/assets/img/news/3/0-en.png'), external:true }
  ],
  about: {
    title:'ValPromise',
    desc :'ValPromise is committed to building a blockchain-based, distributed value promise contract release-trading platform that addresses multi-variety and cross-region risk management issues across a global spectrum and can be widely applied in insurance, financial derivatives, forecasting services and other areas.'
  },
  highlights: {
    title:'highlights',
    items:[
      { 
        img:require('~/assets/img/highlights/i1.png'), 
        title:'Distributed smart contract', 
        desc:'Distributed smart contract will upgrade one-to-one paper contracts offline or centralized electronic contract signing mode in the traditional derivatives market to smart contract signing mode on blockchain. With these characteristics of programmability and execution automatically, the problem of credit risk from trades will be well solved.' 
      },
      { 
        img:require('~/assets/img/highlights/i2.png'), 
        title:'Unified trading medium', 
        desc:'VPP promise token is the only trading medium supported by the platform, all legal coins and digital currency need to be converted into VPP in the secondary market firstly and then they can participate in promises hedging deals. The unified trading medium will break limitations of the type of currency and different regions and have better access to global markets.' 
      },
      { 
        img:require('~/assets/img/highlights/i3.png'), 
        title:'Decentralized mechanism in contract creation', 
        desc:'Anyone or organization has the right to create a promise template for themselves and others to use. That is to say, "massive intelligence" will be adopted in the decentralized mechanism to meet needs of all parties better by providing personalized, more efficient promise contracts for them.' 
      },
      { 
        img:require('~/assets/img/highlights/i4.png'), 
        title:'Self-certification on the data chain', 
        desc:'Objective data indicators (like weather data) anchored in ValPromise contracts are written to the block while being acquired. No one has the right to change due to self-certification on the data chain.' 
      },
      { 
        img:require('~/assets/img/highlights/i5.png'), 
        title:'Layered design', 
        desc:'Applications are separated according to different contract definitions, trading functions and scenarios by layered design at the bottom of the ValPromise blockchain. In this way, not only does it ensure service quality, but also it creates the possibility of subsequent expansion.' 
      },
      { 
        img:require('~/assets/img/highlights/i6.png'), 
        title:'Mobile platform', 
        desc:'The development of front-end applications suitable for Mobile ad IOT will reduce costs greatly thus attracting more participants in ValPromise ecology.' 
      }
    ]
  },
  production: {
    title:'Weather Insurance : the first application in ValPromise eco',
    desc :'Weather Index Insurance will be the first mature application in ValPromise ecology. So far, Tianqibao team have made a great deal of cases successfully. They have issued over 200,000 guarantee contracts on weather risk in the past 6 months. We hope ValPromise to solve many isssues in weather risk management industry with its innovation.',
    items:[
      {
        title:'1.	The solution to the lack of mature weather insurances',
        desc :'There is almost no weather insurance product of a large scale and covering the whole country in China. In the future, by means of smart contracts we will plan to publish standardized digital ones to make everyone have access to hedging weather risk.'
      },
      {
        title:'2.	Inefficiency in insurance product design',
        desc :'In China, it at least takes more than one month for the current weather insurance products, which are designed by local meteorological departments and insurance companies mostly. ValPromise will solve this issues by smart contract and encouraging users to create their own contracts.'
      },
      {
        title:'3.	High cost and low efficiency in assessing the losses',
        desc :'It involves staffs in judging compliance conditions, determining the amount of compensation and others in traditional insurance products. Compared with it, ValPromise will realize judgment and implementation automatically by adopting the technology of smart contract, which will improve efficiency significantly.'
      },
      {
        title:'4.	Difficulty in self-certification for centralized organization',
        desc :'It is known that most weather data from the official judge are not traceable and the public has hardly access to them, therefore, it is quite difficult to realize self-certification for centralized meteorological data. ValPromise will aim to solve data traceability and trust issues by introducing blockchain and user consensus mechanism.'
      },
      {
        title:'5.	Lack of liquidity in OTC derivatives',
        desc :'The liquidity of derivatives in the market is limited due to restrictions on capital policies, lack of trust mechanism, efficiency of OTC trading. In ValPromise, the unified trading medium will break limitations of the type of currency and different regions and provide users with a trading platform that flows around the globe.'
      },
      {
        title:'6.	Unassessable OTC transaction risk',
        desc :'Currently, it is commonly for most weather hedge products to conduct risk measurement by relying on the model of financial institutions, which causes distortions in risk management. On the contrary, in ValPromise all contract transactions will be recorded by time stamp in blockchain. For this, all transactions could be verified openly and transparently and form the market consensus of risk measurement. Thence, the problem of distorted risk management will be solved greatly with it.'
      },
    ]
  },
  roadmap: {
    title:'Roadmap',
    img  : {
      pc     : { clsn:'i1', src:require('~/assets/img/roadmap/en-pc.png') },
      mobile : { clsn:'i2', src:require('~/assets/img/roadmap/en-mb.png') },
    }
  },
  team: {
    title:'Team',
    items:[
      {
        name  :'Xiang Tao',
        avatar:require('~/assets/img/team/m1.png'),
        title:'Xiang Tao&nbsp;&nbsp;&nbsp;&nbsp;Data Scientist', 
        desc:'Xiang Tao graduated from Chinese University of Hong Kong in as a master of Information Engineering in 2011. He has founded two big data companies, HeXun Technology Company (to provide monitoring services of global satellite big data) and Weather Pal (to provide fully automated weather contract pricing and distributed services) and took the lead in developing two specialized areas of professional data service. He has a wealth of experience in acquisition, management and analysis in massive data, design and implementation of technical architecture and commercializing data. He was interviewed by Focus Interview (the most authoritative program in China) and Forbes orderly because of his contributions in breaking the Western strategic data monopoly and creating new momentum for economic growth.'
      },
      {
        name:'Zhen Jiao',
        avatar:require('~/assets/img/team/m4.png'),
        title:'Zhen Jiao&nbsp;&nbsp;&nbsp;&nbsp;Ph.D. degree in Computer Science', 
        desc:'He obtained his Ph.D. degree in Computer Science from Chinese Academy of Sciences. His current research interests include IoT based blockchain architecture design and performance optimization of blockchain such as throughput-optimization. He has rich R&D experience on Internet of Things and Decentralized Networks. He is now a review expert of the National Natural Science Foundation of China. Furthermore, he has presided several research projects including National Natural Science Foundation of China, National key science and technology projects, and also Joint R&D projects with Fortune 500 Companies. He has lead formulation of two national IoT standards and has published over 20 academic papers in top international journals and conferences.'
      },
      {
        name:'Ivan Zhang',
        avatar:require('~/assets/img/team/m3.png'),
        title:'Ivan Zhang&nbsp;&nbsp;&nbsp;&nbsp;Senior Internet Product Specialist',
        desc:'Ivan gained his Master degree from Fudan University. He has served sequentially in the largest mobile incentive advertising company in china, the largest network security company of China (Qihu 360) and APUS Group which is the best overseas expansion company. He has rich experience in commercial products, Internet advertisements, mobile tools and cooperation with Key Account. The product responsible for him created over 100 million incomes annually and gained more than 1.5 billion users over the world. With a lot of experience on mobile Internet, Ivan takes charge of the platform design and implementation of ValPromise.'
      },
      {
        name:'Shao Jun',
        avatar:require('~/assets/img/team/m2.png'),
        title:'Shao Jun&nbsp;&nbsp;&nbsp;&nbsp;PhD in Probability', 
        desc:'Shao Jun graduated from the Master of Probability and Finance of University Paris 6 in conjunction with Ecole Polytechnique, under the direction of Professor Nicole El Karoui, the mother of contemporary financial mathematics, and worked for the AXA Paris Hedge Services. He has profound theoretical basis and rich practical experience in Derivatives Pricing and risk management.'
      },
      {
        name:'Eddie',
        avatar:require('~/assets/img/team/m5.png'),
        title:'Eddie full stack development engineer',
        desc:'Graduated from Dalian University of Technology. He worked in Alibaba, Taobao, Innovation Factory pea pods. During Alibaba, he was mainly responsible for algorithms and web development, and in Taobao was main direction for big data, high performance services, data consistency, network QoS and so on. Prior to joining ValPromise, Eddie served as a research and development leader at Innovations Farm Pea Pod, leading the Pea Pod Data and Algorithmic Group for technical research and development. In 2015, he started to contact the blockchain and accumulated the experience of mainstream digital currencies such as Bitcoin and Ethereum, as well as related blockchain technology.'
      },
      {
        name:'Wang Hui',
        avatar:require('~/assets/img/team/m6.png'),
        title:'Wang Hui full-stack development engineer',
        desc:'Graduated from Beijing University of Posts and Telecommunications. He worked for Microsoft in China, MooterMedia and other well-known companies successively. During at Microsoft, he was responsible for the development of search engine technology and advertising algorithms. And at MooterMedia, the real-time bidding on advertising and data systems were in charge of her. Prior to joining the ValPromise team, as CTO and architect at a leading digital marketing company in China, Wang Hui was responsible for the design and implementation of 10 million daily live commercial products, accumulating richness in algorithms, big data and AI. He has gathered rich experience in the development of blockchain technology and formed a deep understanding of it since he started to enter the blockchain industry in 2015.'
      },
    ],
    background: {
      title:'team.background',
      institutions:require('~/assets/img/team/background.png')
    }
  },
  advisor: {
    title:'Advisor',
    items:[
      {
        name:'',
        avatar:require('~/assets/img/advisor/a1.png'),
        desc:''
      },
      {
        name:'',
        avatar:require('~/assets/img/advisor/a2.png'),
        desc:''
      },
      {
        name:'',
        avatar:require('~/assets/img/advisor/a3.png'),
        desc:''
      },
      {
        name:'',
        avatar:require('~/assets/img/advisor/a4.png'),
        desc:''
      },
      {
        name:'Lao WeiXin',
        avatar:require('~/assets/img/advisor/a5.png'),
        desc:'Chairman of Qianhai Blockchain Ecological Alliance'
      },
      {
        name:'',
        avatar:require('~/assets/img/advisor/a6.png'),
        desc:''
      },
    ],
  },
  investors: {
    title :'Investors',
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
    // title:'Contact Us',
    join:{
      title:'Join us in building the sharing economy of tomorrow',
      desc :'Sign up for our mailing list and be first to learn of any  ValPromise news!',
      placeholder:'Enter email',
      btn:'Join'
    },
    social: {
      title:'Contact Us'
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
  article: {
    a1:{
      title:'ValPromise attended Blockchain Sharing Session in Shenzhen, 5th, Feb',
      paras:[
        {type:'p', content:'ValPromise was honored to be invited for the blockchain application summit held in Shenzhen on February 5. "Looking to the future of blockchain applications" was the theme of the event. Entrepreneurship teams from top domestic and overseas blockchain sectors have shared at the conference. ValPromise, as an invited guest, brought the latest progress of the project to Shenzhen audience and involved in a part of the lovers to participate in the further development of the project.'},
        { type:'p', renderAsHTML:true, content:'For more information，please visit on <a href="https://www.facebook.com/hiValPromise/" target="_blank">https://www.facebook.com/hiValPromise/</a> and our telegram group is <a href="https://t.me/ValPromise" target="_blank">https://t.me/ValPromise</a>' },
        { type:'img', src:require('~/assets/img/news/01.jpeg') },
        { type:'img', src:require('~/assets/img/news/02.jpeg') },
        { type:'img', src:require('~/assets/img/news/03.jpeg') },
        { type:'img', src:require('~/assets/img/news/04.jpeg') },
        { type:'img', src:require('~/assets/img/news/05.jpeg') },
      ]
    },
    a2:{
      title:'TOKENIZED THE WORLD - Hongkong Station',
      paras:[
        {type:'p', content:'On Feb 8, the founder of ValPromise Tao Xiang gave a public speech at the main venue of the Blockchain and Token Summit in Hongkong, where he called "Smart Boy".'},
        {type:'p', content:'Xiang Tao presented his project for the first time in the oversea market. At the sharing meeting, Xiang Tao introduced the huge market in the field of risk management and the current pain points in the industry. Meanwhile, he showed the superiority of using blockchain technology to solve the existing problems. All in all, ValPromise - a trading contract is a blockchain-based, distributed promissory contract publishing-trading system that addresses cross-regional and cross-region risk management worldwide (insurance, futures, options contracts issues and trades, prediction service) problem.'},
        {type:'p', content:'The sharing session successfully attracted a group of professional investors, blockchain peers, and blockchain technical experts to discuss investment and cooperation issues. <br>Happy ending for the first show for foreign investors.', renderAsHTML:true},
        {type:'p', content:'For more information，please visit on <a href="https://www.facebook.com/hiValPromise/" target="_blank">https://www.facebook.com/hiValPromise/</a><br>Our telegram group is <a href="https://t.me/ValPromise" target="_blank">https://t.me/ValPromise</a>', renderAsHTML:true},
        { type:'img', src:require('~/assets/img/news/2/08.jpg') },
        { type:'img', src:require('~/assets/img/news/2/01.jpg') },
        { type:'img', src:require('~/assets/img/news/2/02.jpg') },
        { type:'img', src:require('~/assets/img/news/2/03.jpg') },
        { type:'img', src:require('~/assets/img/news/2/04.jpg') },
        { type:'img', src:require('~/assets/img/news/2/05.jpg') },
        { type:'img', src:require('~/assets/img/news/2/06.jpg') },
        { type:'img', src:require('~/assets/img/news/2/07.jpg') },
        { type:'img', src:require('~/assets/img/news/2/09.jpg') },
      ]
    }
  }
}