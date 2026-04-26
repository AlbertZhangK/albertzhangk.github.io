<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kai Zhang | Political Theory</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #fcfcfc; /* 极浅的灰白色，比纯白更柔和 */
    }

    /* 标题使用学术感更强的衬线体 */
    h1, h2, h3, .nav-links a {
      font-family: 'Georgia', serif;
      color: #222;
    }

    a {
      color: #5a7b9a; /* 降低了蓝色的饱和度，更沉稳 */
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
/* 1. 导航栏：背景色稍微调亮一点（#545e66），增加对比度，确保看清 */
    .navbar {
      position: relative;
      z-index: 100;
      width: 100%;
      background: #545e66; 
      display: flex;
      justify-content: center; /* 核心：让 About/Research 等主目录保持在屏幕正中间 */
      align-items: center;
      padding: 18px 40px;
    }

    /* 2. 目录链接：字体加粗、字号调大，颜色改用更亮的浅灰色 (#e6e6e6) */
    .nav-links a {
      color: #e6e6e6; 
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      letter-spacing: 1px;
      transition: color 0.3s;
    }

    .nav-links a:hover, .nav-links a.active {
      color: #ffffff; /* 选中或悬停时变为纯白 */
      text-decoration: none;
    }

    /* 3. 中英文切换：去掉边框和背景，使其看起来就是一个普通的目录项，并固定在最右边 */
    .lang-toggle {
      position: absolute;
      right: 40px; /* 固定在导航栏的最右侧 */
      background: transparent;
      color: #e6e6e6; /* 初始颜色与目录链接完全一致 */
      border: none;
      padding: 0;
      cursor: pointer;
      font-family: 'Georgia', serif; /* 保持相同的学术感字体 */
      font-size: 1.2rem;
      font-weight: bold;
      transition: color 0.3s;
    }

    .lang-toggle:hover {
      color: #ffffff; /* 悬停时同样变纯白 */
      background: transparent;
    }

    /* 顶部油画全屏背景 (Hero Section) */
    .hero {
      position: relative;
      width: 100%;
      height: 55vh; /* 占据屏幕55%的高度，为导航栏留出空间 */
      min-height: 400px;
      background-image: url('rs=w-800,cg-true.webp'); /* 你的油画 */
      background-size: cover;
      background-position: center 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    /* 背景遮罩，确保文字清晰 */
    .hero-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.4); 
      z-index: 1;
    }

    /* 名字和头衔 */
    .hero-content {
      position: relative;
      z-index: 2;
      color: white;
      margin-top: -20px; /* 调整垂直对齐 */
    }

    .hero-content h1 {
      color: white;
      font-size: 3rem;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    .hero-content .subtitle {
      font-size: 1.2rem;
      font-style: italic;
      opacity: 0.9;
    }

    /* 主体内容区 - 拉大宽度 */
    .main-content {
      max-width: 1200px; /* 从900px增加到1200px */
      margin: 40px auto;
      padding: 0 20px;
      min-height: 40vh;
    }

    /* 标签页控制：默认隐藏，包含 active 类的显示 */
    .content-section {
      display: none;
      animation: fadeIn 0.5s ease-in-out;
    }

    .content-section.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* 关于页面的排版 - 用于PC端更大照片 */
    .about-layout {
      display: flex;
      gap: 50px; /* 增加照片与文字的间距 */
      margin-bottom: 40px;
    }

    /* 针对 About 页面照片排版调整 */
    @media screen and (min-width: 769px) {
      .about-image {
        flex: 0 0 350px; /* PC端照片所在区域占据固定350px宽度 */
      }
      .about-text {
        flex: 1; /* 文字占据剩余空间 */
      }
    }

    .about-image img {
      width: 100%;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .about-text {
      text-align: justify;
    }

    /* 段落间距控制 */
    p.en, p.zh {
      margin-bottom: 24px;
    }

    .section-title {
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 20px;
      margin-top: 40px;
    }

    ol, ul {
      padding-left: 20px;
      margin-bottom: 24px;
    }

    li {
      margin-bottom: 12px;
    }

    .painting-quote {
      text-align: center;
      margin-top: 60px;
      padding-top: 20px;
      border-top: 1px dashed #ccc;
      color: #666;
    }

    /* 移动端适配 */
    @media screen and (max-width: 768px) {
      .about-layout {
        flex-direction: column;
        align-items: center;
      }
      
      .hero-content h1 {
        font-size: 2.2rem;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
      }

      .lang-toggle {
        position: static; /* 移动端将按钮放进流内，避免重叠 */
        margin-left: 20px;
      }
      
      .navbar {
        flex-direction: column;
        gap: 15px;
      }
      
      .main-content {
        max-width: 100%; /* 手机端拉满宽度 */
      }
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <div class="nav-links">
      <a class="nav-item active" onclick="switchTab('about', this)">
        <span class="en">About</span><span class="zh" style="display:none">首页</span>
      </a>
      <a class="nav-item" onclick="switchTab('research', this)">
        <span class="en">Research</span><span class="zh" style="display:none">研究</span>
      </a>
      <a class="nav-item" onclick="switchTab('teaching', this)">
        <span class="en">Teaching</span><span class="zh" style="display:none">教学</span>
      </a>
      <a class="nav-item" onclick="switchTab('cv', this)">CV</a>
    </div>
    <div class="lang-toggle" onclick="toggleLang()">中文</div>
  </nav>

  <header class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="en">Kai Zhang</h1>
      <h1 class="zh" style="display:none">张开</h1>
      <p class="en subtitle">Ph.D. Candidate in Political Theory</p>
      <p class="zh subtitle" style="display:none">政治理论博士候选人</p>
    </div>
  </header>

  <main class="main-content">
    
    <section id="about" class="content-section active">
      <div class="about-layout">
        <div class="about-image">
          <img src="4b932ec969a40718bec70946dda41b86.jpeg" alt="Kai Zhang" />
        </div>
        
        <div class="about-text">
          <p>Email: <a href="mailto:albertk@pku.edu.cn">albertk@pku.edu.cn</a></p>
          <p>ORCID: <a href="https://orcid.org/0009-0003-8991-2945" target="_blank" rel="noopener noreferrer">0009-0003-8991-2945</a></p>
          <br />
          <p class="zh" style="display:none">张开，浙江缙云人，北京大学政府管理学院博士候选人，研究领域为政治理论和政治思想史。我的相关研究发表在《政治学研究》《北大政治学评论》《云南大学学报（社会科学版）》上。我博士论文的主题是托克维尔。我的学术旨趣分两点：其一，从西方近代以来的政治哲学史和思想史的视角，分析自由概念的演变，尤其是结合韦伯、施密特对现代国家、议会民主和官僚制的批判；其二，从批判理论的视角（并非当代激进左翼而更倾向于第一代法兰克福学派的批判理论脉络），分析现代社会的病理学，尤其是工具理性和精神性问题。宽泛来说，我对西方政治思想史都有一定兴趣。</p>
          <p class="zh" style="display:none">在研究之外，我也是徒步、户外运动和电子游戏的爱好者，同时我也会在<a href="https://www.douban.com/people/191607649/?_i=3430470Q8VyQjq,4030924Q8VyQjq" target="_blank" rel="noopener noreferrer">豆瓣</a>上写作影评。</p>
          
          <p class="en">I am a Ph.D. candidate at the School of Government, Peking University and a visiting scholar at Harvard Kennedy School. My research interests lie in political theory and the history of political thought. My related publications in Chinese have appeared in CASS Journal of Political Science, Peking University Political Science Review, and The Journal of Yunnan University Social Sciences Edition. My doctoral dissertation examines Alexis de Tocqueville, liberalism, and the relationship between politics and religion. More broadly, my research interest is two-fold: first, tracing the ideas of liberty within the intellectual history of western political philosophy, particularly from the perspective of rationalisation of Weber and political theology of Schmitt; second, analysing the pathologies of modern society from the perspective of critical theory (mostly grounded in the tradition of Frankfurt School).</p>
          <p class="en">I am a huge fan of hiking. I also enjoy writing film reviews and playing videogames.</p>
        </div>
      </div>

      <h2 class="zh section-title" style="display:none">教育经历</h2>
      <h2 class="en section-title">Education</h2>
      <p class="zh" style="display:none">2022.9- 博士研究生，北京大学政府管理学院<br />
      2018.9-2022.7 法学学士，北京大学政府管理学院<br />
      2025.8-2026.8 访问学者，哈佛大学肯尼迪学院阿什中心</p>
      
      <p class="en">2022.9– Ph.D. Student, School of Government, Peking University<br />
      2018.9–2022.7 BA, Politics and Public Administration, School of Government, Peking University<br />
      2025.8–2026.8 Visiting Ph.D. Student Fellow，Rajawali Institute for Asia Fellowship, Ash Center, Harvard Kennedy School</p>

      <h2 class="zh section-title" style="display:none">语言能力</h2>
      <h2 class="en section-title">Languages</h2>
      <p class="zh" style="display:none">汉语（母语）、英语（流利）、法语（熟练）</p>
      <p class="en">Chinese (native), English (fluent), French (proficient)</p>

      <div class="painting-quote">
        <p style="font-style: italic;">"Il m’y voilà tranquille au fond de l’abyîme."</p>
        <p class="zh" style="display:none">身处地狱之深，我却最宁静。</p>
      </div>
    </section>

    <section id="research" class="content-section">
      <h2 class="zh section-title" style="display:none">科研成果</h2>
      <h2 class="en section-title">Publications</h2>
      <ol>
        <li>
          <span class="zh" style="display:none"><a href="最终发表.pdf" target="_blank">段德敏、张开：《殖民扩张、种族主义与民主——托克维尔的“另一个美国”》，《政治学研究》，2023年第6期，第161-174页。</a></span>
          <span class="en"><a href="最终发表.pdf" target="_blank">Demin Duan and Kai Zhang, “Colonial Expansion, Racism, and Democracy: Tocqueville’s ‘Another America’”, CASS Journal of Political Science, no. 6, 2023, pp. 161-174.</a></span>
        </li>
        <li>
          <span class="zh" style="display:none"><a href="马基雅维利政治思想中的“永恒共和国”问题_段德敏.pdf" target="_blank">段德敏、张开：《马基雅维利政治思想中的“永恒共和国”问题》，《云南大学学报（社会科学版）》，2023年第4期，第76-86页。</a></span>
          <span class="en"><a href="马基雅维利政治思想中的“永恒共和国”问题_段德敏.pdf" target="_blank">Demin Duan and Kai Zhang, “The Problem of 'Perpetual Republic' in Machiavelli's Thought”, The Journal of Yunnan University Social Sciences Edition, no. 3, 2023, pp. 76-86.</a></span>
        </li>
        <li>
          <span class="zh" style="display:none"><a href="政治现实主义视角中的灾难与...变论时代中的政治现实主义》_张开.pdf" target="_blank">张开、段德敏：《政治现实主义视角中的灾难与命运》，《北大政治学评论》，第14辑，商务印书馆，2023年，第253-263页。</a></span>
          <span class="en"><a href="政治现实主义视角中的灾难与...变论时代中的政治现实主义》_张开.pdf" target="_blank">Kai Zhang and Demin Duan, “Disaster and Fortune from the Perspective of Political Realism: on Allison McQueen's Political Realism in Apocalyptic Times”, Peking University Political Science Review, vol. 14, 2023, pp. 253-263.</a></span>
        </li>
      </ol>

      <h2 class="zh section-title" style="display:none">会议发言</h2>
      <h2 class="en section-title">Conference Presentations</h2>
      <ol>
        <li class="zh" style="display:none">《时间中的政治德性：马基雅维利的“永恒共和国”问题》，2023年12月9-10日，2023年政治思想史论坛｜中外政治思想史中的“君主镜鉴”传统，北京，北京大学政府管理学院。</li>
        <li class="zh" style="display:none">《民主的边疆：托克维尔论美国的种族问题》，第四届“国家+”论坛——“边界/边疆”学术研讨会，2025年4月6日，昆明，北京大学中国政治学研究中心、云南民族大学政治与公共管理学院。</li>
        <li class="zh" style="display:none">《反权威时代的权威价值：托克维尔论超越性信仰与现代人的自由》，第十四届北京青年政治学论坛，2025年6月21-22日，北京，对外经济贸易大学。</li>
        <li class="zh" style="display:none">“Domination without a Dominator: Tocqueville on Political Pantheism and Democratic Despotism”, Annual Conference of Midwest Political Science Association, April 23, 2025, Chicago.</li>
        
        <li class="en">“Political Virtues in Time: Machiavelli on ‘Perpetual Republic’”, December 9-10, 2023, 2023 Forum of Political Thoughts | The Tradition of “Mirror for Princes” in the History of Chinese and Foreign Political Thoughts, Peking University School of Government.</li>
        <li class="en">“The Frontier of Democracy: Tocqueville on the Problem of Race in America”, April 6, 2025, the Fourth “State+” Forum — Academic Workshop on “Boundary/Frontier”, Yunnan, co-hosted by the Center for Chinese Political Studies at Peking University and the School of Politics and Public Administration at Yunnan Minzu University.</li>
        <li class="en">"The Value of Authority in an Anti-Authoritarian Age: Tocqueville on Transcendent Faith and the Freedom of Moderns,” The 14th Beijing Youth Forum of Political Science, June 21–22, 2025, Beijing, University of International Business and Economics.</li>
        <li class="en">Domination without a Dominator: Tocqueville on Political Pantheism and Democratic Despotism”, Annual Conference of Midwest Political Science Association, April 23, 2026, Chicago.</li>
      </ol>
    </section>

    <section id="teaching" class="content-section">
      <h2 class="zh section-title" style="display:none">教学经历</h2>
      <h2 class="en section-title">Teaching</h2>
      <p class="en">Information about teaching will be updated soon.</p>
      <p class="zh" style="display:none">教学相关信息将在此更新。</p>
    </section>

    <section id="cv" class="content-section">
      <h2 class="zh section-title" style="display:none">简历</h2>
      <h2 class="en section-title">Curriculum Vitae</h2>
      <p class="en">A full version of my CV is available upon request, or you can download a brief version below:</p>
      <p class="zh" style="display:none">如需完整简历请邮件联系，或在此下载简版：</p>
      <br />
      <p><a href="#" target="_blank" style="font-weight: bold;">[Download CV PDF]</a></p>
    </section>

  </main>

  <script>
    // 切换中英文
    function toggleLang() {
      const zhElements = document.querySelectorAll('.zh');
      const enElements = document.querySelectorAll('.en');
      zhElements.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');
      enElements.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');

      const toggleBtn = document.querySelector('.lang-toggle');
      toggleBtn.innerText = toggleBtn.innerText === 'EN' ? '中文' : 'EN';
    }

    // 切换分类浏览标签页
    function switchTab(tabId, element) {
      // 1. 隐藏所有内容区域
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
      // 2. 显示选中的区域
      document.getElementById(tabId).classList.add('active');

      // 3. 更新导航栏高亮状态
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      element.classList.add('active');
    }
  </script>
</body>
</html>
