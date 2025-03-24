$(function () {
    /*==============================
      スライドショー機能
    ==============================*/
    var $slides = $('.slideshow img');
    var currentSlide = 0;
    function showMainSlide(index) {
      $slides.removeClass('active').eq(index).addClass('active');
    }
    function startSlideshow() {
      setInterval(function () {
        currentSlide = (currentSlide + 1) % $slides.length;
        showMainSlide(currentSlide);
      }, 10000);
    }
    startSlideshow();
  
    /*==============================
      スクロール時に上に戻るボタンの挙動
    ==============================*/
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
        $("#scrollTopBtn").css("display", "flex");
      } else {
        $("#scrollTopBtn").css("display", "none");
      }
    });
    $("#scrollTopBtn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
    });
  
    /*==============================
      タブ切り替え処理
    ==============================*/
    $(".tab-btn").on("click", function () {
      var index = $(".tab-btn").index(this);
      $(".tab-btn").removeClass("active");
      $(".tab-content").removeClass("active");
      $(this).addClass("active");
      var target = $(this).data("tab");
      $("#" + target).addClass("active");
    });
    $(".tab-arrows .left-arrow").on("click", function () {
      var activeIndex = $(".tab-btn.active").index();
      activeIndex = activeIndex > 0 ? activeIndex - 1 : $(".tab-btn").length - 1;
      $(".tab-btn").eq(activeIndex).click();
    });
    $(".tab-arrows .right-arrow").on("click", function () {
      var activeIndex = $(".tab-btn.active").index();
      activeIndex = activeIndex < $(".tab-btn").length - 1 ? activeIndex + 1 : 0;
      $(".tab-btn").eq(activeIndex).click();
    });
  
    /*==============================
      スムーズスクロール
    ==============================*/
    $('a[href^="#"]').on("click", function (e) {
      var href = $(this).attr("href");
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        var target = $(href);
        if (target.length) {
          $("html, body").animate({ scrollTop: target.offset().top }, 600);
        }
      }
    });
  
    /*==============================
      フッターの年数自動更新
    ==============================*/
    $("#year").text(new Date().getFullYear());
  
    /*==============================
      スクロールアニメーション
    ==============================*/
    var sections = document.querySelectorAll('section');
    var options = { threshold: 0.2 };
    var revealOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    sections.forEach(function (section) {
      section.classList.add('fade-in');
      revealOnScroll.observe(section);
    });
  
    /*==============================
      ハンバーガーメニュー
    ==============================*/
    $("#hamburger").on("click", function () {
      $("#nav-menu").toggleClass("active");
    });
    $("#nav-menu a").on("click", function () {
      $("#nav-menu").removeClass("active");
    });
  
    /*==============================
      言語切替
    ==============================*/
    var translations = {
      en: {
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-faq":"FAQ",
        "nav-contact": "Contact",
        "hero-title": "Hi, I'm Yuko Yamano",
        "hero-subtitle": "Developer | ISTQB Certified Software Tester",
        "view-work": "View My Work",
        "contact":"ContactContact",
        "about-title": "About Me",
        "about-1-tab": "My Approach to Development",
        "about-2-tab": "My Learning & Certifications",
        "about-3-tab": "Career Journey",
        
            "about-1-content": "When developing software, I prioritize usability, code readability, and reusability. I invest time in carefully designing systems and planning projects—whether I work independently or as part of a team. "
            + "<br>Although tight deadlines sometimes limit the opportunity for extensive documentation, I overcome this challenge by applying my testing expertise and using Test-Driven Development (TDD) to boost efficiency and ensure high quality."
            +"<br><br>My background in marketing research has taught me the value of understanding human behavior and making data-driven decisions. "
            +" <br><br> I bring these insights into my software development process, continuously improving quality and crafting solutions that align with user needs.\n\nI also make it a point to identify common challenges people encounter and develop effective software solutions to address them.",
           "about-2-content": "<ul>"
            + "<li><strong>Software Engineering Technology - Game Programming Advanced Diploma (High Honours)</strong><br>"
            + "Centennial College, Toronto, ON (Jan. 2021 - Apr. 2024)<br>"
            + "GPA: 4.3/4.5<br><br>"
            + "<strong>Relevant Courses:</strong><br>"
            + "<ul>"
            + "<li>Programming I & II</li>"
            + "<li>Web Interface Design</li>"
            + "<li>Java Programming</li>"
            + "<li>Web Application Development</li>"
            + "<li>Unix/Linux Operating Systems</li>"
            + "<li>Software Engrg Methodologies I & II</li>"
            + "</ul><br>"
            + "Gained hands-on experience in frontend development, game programming, and software testing, expanding my knowledge in web and application development."
            + "</li><br>"

            + "<li><strong>The Complete 2024 Software Testing Bootcamp</strong><br>"
            + "Nezam Academy via Udemy (May 2024 - Jul. 2024)<br>"
            + "Gained practical knowledge of software testing methodologies, test case creation, and automation testing.<br>"
            + "</li><br>"

            + "<li><strong>Game Design & Development Course (Online)</strong><br>"
            + "Michigan State University via Coursera (May 2020 - Sep. 2020)<br>"
            + "Learned the fundamentals of game design and development.<br>"
            + "</li><br>"

            + "<li><strong>International Communication Associate Degree</strong><br>"
            + "Aichi Sangyo University, Aichi, Japan (Apr. 2003 - Mar. 2005)<br>"
            + "</li>"
            + "</ul><br>"

            + "<h4>Certifications</h4>"
            + "<ul>"
            + "<li><strong>ISTQB Certified Tester Foundation Level (ISTQB CTFL)</strong><br>"
            + "Issued: June 2024 (Brightest)</li>"
            + "</ul>",
        "about-3-content": 
       "<p>My journey into software development began with web development and content creation. As a self-employed web developer, I built and maintained websites while also creating engaging content for various clients.</p><br>"

            + "<h4>Web Development & Content Creation</h4>"
            + "<ul>"
            + "<li><strong>Web Developer & Content Creator (Nov. 2015 - Dec. 2020)</strong><br>"
            + "Developed and maintained websites using HTML/CSS with WordPress.<br>"
            + "Created website content for 5 clients and contributed to the development of 8 websites.<br>"
            + "Edited existing content to enhance clarity and user engagement.</li><br>"
            + "</ul>"

            + "<p>Through these experiences, I developed a strong interest in web technologies, leading me to pursue formal education in Software Engineering Technology at Centennial College.</p><br>"

            + "<h4>Technical & IT Support Experience</h4>"
            + "<ul>"
            + "<li><strong>System Support Officer Co-op (Tribunals Ontario, Aug. 2022 - Dec. 2022)</strong><br>"
            + "Provided technical support for in-court technologies, including digital recording devices and video conferencing systems.<br>"
            + "Assisted users in troubleshooting technical issues, improving system efficiency.<br>"
            + "Gained hands-on experience in IT infrastructure and system reliability.</li><br>"

            + "<li><strong>IT Support Intern (SickKids Hospital, Feb. 2022 - Aug. 2022)</strong><br>"
            + "Managed an inventory of over 5,000 IT devices, ensuring data accuracy.<br>"
            + "Assisted in database management and asset tracking.<br>"
            + "Provided technical support and system maintenance.</li><br>"
            + "</ul><br>"

            + "<h4>Market Research & Analytical Skills</h4>"
            + "<ul>"
            + "<li><strong>Assistant Manager (Consumer Research Latin America, May. 2009 - Aug. 2012)</strong><br>"
            + "Designed brochures and templates for surveys and marketing purposes.<br>"
            + "Maintained and updated project management tools for real-time tracking.<br>"
            + "Developed data-driven presentations to share market research insights.<br>"
            + "Conducted accurate data entry, handling an average of 2,000 records per month.</li><br>"
            + "</ul><br>"

            + "<h4>Transitioning into Development & Testing</h4>"
            + "<p>My background in web development and IT support naturally led me to explore software quality assurance and frontend development. At college, I deepened my knowledge of JavaScript, React, and testing methodologies.</p><br>"

            + "<p>Through my studies and independent projects, I have developed and released several personal projects, You can find more details in the Projects section.</p><br>"

            + "<h4>Looking Ahead</h4>"
            + "<p>I am excited to apply my skills in software testing and frontend development, collaborating on projects that focus on usability, performance, and innovation.</p>",
        
       
        "projects-title": "Projects",

        "project-instruction": "Tap to view details",
        "project1-title": "Navi Grade",
        "project1-list1": "A web application that allows students to manage assignments, deadlines, and course information in one place."
                            + "It features a badge system to boost motivation upon task completion and an AI-driven grade prediction system.",
        "project1-list2": "<strong>Main Features:</strong>"
                            + "<ul>"
                            + "<li>User authentication</li>"
                            + "<li>Data storage and management</li>"
                            + "<li>AI-powered grade prediction</li>"
                            + "</ul>",
        "project1-list3": "<strong>Technologies Used:</strong> MERN Stack (MongoDB, Express.js, React, Node.js)",

        "project2-title": "Space Mathster",
        "project2-list1": "A math learning game designed to help children enjoy learning multiplication tables while traveling through the solar system.",
        "project2-list2": "<strong>Main Features:</strong>"
                            + "<ul>"
                            + "<li>Three difficulty levels for each multiplication set</li>"
                            + "<li>Both multiplication and division concepts covered</li>"
                            + "<li>Pause screen displays multiplication tables to support learning without interrupting gameplay</li>"
                            + "</ul>",
        "project2-list3": "<strong>Technologies Used:</strong> Unity, C#",

        "project3-title": "Space Mathster 2",
        "project3-list1": "An updated version of 'Space Mathster' that enhances gameplay and helps children develop a deeper understanding of multiplication.",
        "project3-list2": "<strong>Main Features:</strong>"
                            + "<ul>"
                            + "<li>Story mode where completing a multiplication set unlocks a new planet</li>"
                            + "<li>Leaderboard system to compete with players worldwide</li>"
                            + "<li>Optimized sound effects and visual effects for an improved gaming experience</li>"
                            + "</ul>",
        "project3-list3": "<strong>Technologies Used:</strong> Unity, C#", 

        "project4-title": "Nimbly",
        "project4-list1": "A digital recreation of a childhood puzzle game, featuring original rules and a fresh strategic twist.",
        "project4-list2": "<strong>Main Features:</strong>"
                            + "<ul>"
                            + "<li>Turn-based strategy puzzle gameplay</li>"
                            + "<li>AI opponent mode</li>"
                            + "<li>Simple yet deep game mechanics</li>"
                            + "</ul>",
        "project4-list3": "<strong>Technologies Used:</strong> Unity, C#", 

        "project5-title": "Reso365",
        "project5-list1": "A habit-tracking app that allows users to set and achieve goals at any time, not just for New Year's resolutions.",
        "project5-list2": "<strong>Main Features:</strong>"
                            + "<ul>"
                            + "<li>Flexible goal-setting, including habits and deadline-based objectives</li>"
                            + "<li>Breaks down goals into smaller steps to support achievement</li>"
                            + "<li>Data encryption to protect user privacy</li>"
                            + "</ul>",
        "project5-list3": "<strong>Technologies Used:</strong> Android Studio, Java, Firebase", 

        "project6-title": "Reso365 - Test Documents",
        "project6-list1": "Software testing for 'Reso365' to enhance product quality, including over 100 test cases and bug reports.",
        "project6-list2": "<strong>Scope:</strong>"
                            + "<ul>"
                            + "<li>Test plan creation</li>"
                            + "<li>Test case design and execution for each feature</li>"
                            + "<li>Identified and reported over 15 bugs, proposing fixes</li>"
                            + "</ul>",
        "project6-list3": "<strong>Tools Used:</strong> Google Docs, Trello, ScreenPal",


        "project7-title": "Alphabet Run",
        "project7-list1": "A game where you can practice typing while clearing the stage",
        "project7-list2": "<strong>Description:</strong>"
                            + "<ul>"
                            + "<li>Created for the Unity 1-Week Game Jam with the theme '2'</li>"
                            + "<li>A game that combines typing practice with an auto-scrolling platformer</li>"
                            + "<li>Received positive feedback from players about the well-balanced difficulty, making them want to play more. </li>"
                            + "</ul>",
        "project7-list3": "<strong>Tools Used:</strong> Unity, C#",







        
        "modal-title":"Title",
        "modal-duration":"Duration",
        "modal-purpose":"Purpose",
        "modal-role":"Role",
        "modal-challenges":"Challenges",

         "modal-link":"Detail",
         
        "skills-title": "Skills",

        "parallax-message":"Let's Connect!",


       "faq-title": "Frequently Asked Questions",
        "faq-q1": "What services do you offer?",
        "faq-a1": "I provide frontend development, website testing, and mobile app development.",
        "faq-q2": "How long does it take to complete a project?",
        "faq-a2": "It depends on the project size. Small projects take about 1-2 weeks, while larger ones may take up to a month.",
        "faq-q3": "What is your pricing structure?",
        "faq-a3": "I offer flexible pricing based on the project scale. Both hourly rates and fixed pricing options are available.",
        "faq-q4": "Do you develop games?",
        "faq-a4": "Absolutely! I specialize in game development using Unity.",
        "faq-q5": "How can I request a project?",
        "faq-a5": "Feel free to contact us via the form at the bottom of the page or reach out through LinkedIn or GitHub.",


        "step-title": "Contact",
      
        "step-1": "STEP.1",
        "step-2": "STEP.2",
        "step-3": "STEP.3",
        "step1-title": "Tell us about yourself",
        "user-individual": "Individual",
        "user-business": "Business",
        "step2-title": "What would you like to consult about?",
        "consult-web": "Web Development",
        "consult-test": "Software Testing",
        "consult-other": "Other",
        "next": "Next",
       
        "step3-title": "Contact",
         "contact-user-info":"User information",
         "contact-title": "Contact Me",
         "contact-name": "*Your Name",
         "contact-email": "*Your Email",
         "contact-message": "*Your Message",
         "contact-submit": "Send Message",
         "contact-go-back-button": "Go Back",
        "contact-go-back-button":"Back to Previous Page",
    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "自己紹介",
        "nav-skills": "スキル",
        "nav-projects": "プロジェクト",
        "nav-faq":"よくある質問",
        "nav-contact": "お問い合わせ",
        "hero-title": "山野優子",
        "hero-subtitle": "ディベロッパー | ISTQB取得ソフトウェアテスター",
        "view-work": "作品を見る",

        "contact":"お問い合わせ",
        "about-title": "自己紹介",
        "about-1-tab": "開発へのアプローチ",
        "about-2-tab": "学びと資格",
        "about-3-tab": "これまでの歩み",

        "about-1-content": "開発において最も重視しているのは、ユーザーの使いやすさ、コードの読みやすさ、そしてコードの再利用のしやすさです。そのために、時間をかけて設計を行い、個人開発でもグループ開発でも計画的に進めることを心がけています。"
        +"<br><br>もちろん、プロジェクトには時間的な制約があり、必ずしもドキュメントに十分な時間を割けるわけではありません。そうした中では、テストの知識を活かし、テスト駆動開発(TDD)を取り入れながら、開発の効率化と品質向上に努めています。"
        +"<br><br>前職のマーケティングリサーチ会社での経験から、人々の行動や考えを分析し、データを活用して意思決定を行う重要性を学びました。この経験を活かし、データを基にしたソフトウェアの品質向上、人々の行動やニーズに基づいた開発を心がけています。"
        +"<br><br>多くの人が抱える課題に常にアンテナを張り、ソフトウェア開発を通じて解決策を提供することを目指しています。",

        "about-2-content": "<ul>"
            + "<li><strong>ソフトウェア工学技術 (ゲームプログラミング) 上級ディプロマ</strong><br>"
            + "Centennial College, Toronto, ON (2021年1月 - 2024年4月)<br>"
            + "GPA: 4.3/4.5<br><br>"
            + "<strong>主な履修科目:</strong><br>"
            + ""
            + "<li>プログラミング I・II</li>"
            + "<li>Web インターフェースデザイン</li>"
            + "<li>Java プログラミング</li>"
            + "<li>Web アプリケーション開発</li>"
            + "<li>Unix/Linux オペレーションシステム</li>"
            + "<li>ソフトウェアエンジニアリングメソドロジー I & II</li>"
            + "<br>"
            + "フロントエンド開発、ゲームプログラミング、ソフトウェアテストの実践経験を積み、Webおよびアプリ開発の知識を広げた。<br><br>"

            + "<li><strong>ソフトウェアテスト・ブートキャンプ</strong><br>"
            + "Nezam Academy via Udemy (2024年5月 - 2024年7月)<br>"
            + "ソフトウェア品質向上のためのテスト手法を学習。実践的なテストケース作成や自動化に取り組む。<br>"
            + "</li><br>"

            + "<li><strong>ゲームデザイン & 開発コース (オンライン)</strong><br>"
            + "Michigan State University via Coursera (2020年5月 - 2020年9月)<br>"
            + "ゲームの設計・開発の基礎を学ぶ。<br>"
            + "</li><br>"

            + "<li><strong>国際コミュニケーション準学士号</strong><br>"
            + "愛知産業大学短期大学, 愛知, 日本 (2003年4月 - 2005年3月)<br>"
            + "</li>"
            + "</ul><br>"

            + "<h4>資格</h4>"
            + "<ul>"
            + "<li><strong>ISTQB Certified Tester Foundation Level (ISTQB CTFL)</strong><br>"
            + "取得年月: 2024年6月 (Brightest)</li>"
            + "</ul>",

        "about-3-content":  "<p>私のソフトウェア開発への道は、Web開発とコンテンツ制作から始まりました。フリーランスのWeb開発者として、複数のクライアントのWebサイトを制作・運用する機会をいただきました。</p><br>"

        + "<h4>Web開発 & コンテンツ制作</h4>"
        + "<ul>"
        + "<li><strong>Web Developer & Content Creator (2015年11月 - 2020年12月)</strong><br>"
        + "HTML/CSSおよびWordPressを使用したWebサイトの開発・運営。<br>"
        + "5つのクライアント向けにWebコンテンツを作成し、8つのWebサイト開発に携わる。<br>"
        + "既存のコンテンツを編集し、ユーザーにとって魅力的なサイトを提供。</li><br>"
        + "</ul>"

        + "<p>この経験を通じてWeb技術に強い関心を持ち、より深く学ぶためにCentennial Collegeでソフトウェア工学技術を専攻することを決めました。</p><br>"

        + "<h4>技術 & ITサポートの経験</h4>"
        + "<ul>"
        + "<li><strong>システムサポートオフィサー Co-op (Tribunals Ontario, 2022年8月 - 2022年12月)</strong><br>"
        + "法廷で使用されるデジタル録音デバイスやビデオ会議システムの技術サポート。<br>"
        + "ユーザーの技術的な問題を解決し、システムの安定性向上に貢献。<br>"
        + "ITインフラやシステムの信頼性向上に関する実践的な経験を積む。</li><br>"

        + "<li><strong>ITサポートインターン (SickKids病院, 2022年2月 - 2022年8月)</strong><br>"
        + "5,000台以上のIT機器を管理し、正確なデータベースを維持。<br>"
        + "データベース管理や資産追跡をサポート。<br>"
        + "技術サポートやシステムメンテナンスに携わる。</li><br>"
        + "</ul><br>"

        + "<h4>マーケットリサーチ & 分析スキル</h4>"
        + "<ul>"
        + "<li><strong>アシスタントマネージャー (Consumer Research Latin America, 2009年5月 - 2012年8月)</strong><br>"
        + "調査やマーケティング用のパンフレット・テンプレートを作成。<br>"
        + "プロジェクト管理ツールの更新・保守を担当。<br>"
        + "市場調査の分析データを用いたプレゼンテーションを作成。<br>"
        + "月平均2,000件の正確なデータ入力を実施。</li><br>"
        + "</ul><br>"

        + "<h4>開発 & ソフトウェアテストへの転向</h4>"
        + "<p>Web開発とITサポートの経験を活かし、ソフトウェア品質保証やフロントエンド開発の分野に興味を持ちました。カレッジでは、JavaScript・React・ソフトウェアテストの手法を本格的に学びました。</p><br>"

        + "<h4>今後の目標</h4>"
        + "<p>現在、ソフトウェアテストとフロントエンド開発のスキルを活かし、ユーザーの使いやすさやパフォーマンスに焦点を当てたプロジェクトに携わることを目指しています。</p>"
,
       
        "projects-title": "プロジェクト",
        "project-instruction":"タップで詳細を表示",
       
        "project1-title":"Navi Grade",
        "project1-list1": "学生が課題、締切、コースの情報を一元管理できるWebアプリ。"
                            + "課題を達成するたびにバッジシステムでモチベーションを向上させ、AIが最終成績を予測する機能を搭載。",
        "project1-list2":  "<strong>主要機能:</strong>"
                            + "<ul>"
                            + "<li>ユーザー認証</li>"
                            + "<li>データ保存・管理</li>"
                            + "<li>AIを活用した成績予測</li>"
                            + "</ul>",
        "project1-list3":" <strong>使用技術:</strong> MERNスタック (MongoDB, Express.js, React, Node.js)",

        "project2-title": "Space Mathster",
        "project2-list1": "九九を楽しみながら学べる算数学習ゲーム。プレイヤーは太陽系を旅しながら九九の9つの段を学べる。",
        "project2-list2": " <strong>主要機能:</strong>" 
                            + "<ul>"
                            + "<li>1つの段につき、3つのレベルで構成</li>"
                            + "<li>掛け算・割り算のふたつの概念を学べる</li>"
                            + "<li>Pause画面で九九一覧を表示し、ゲームを中断せずに学習可能</li>"
                            + "</ul>",
        "project2-list3": "<strong>使用技術:</strong> Unity, C#",

        "project3-title": "Space Mathster 2",
        "project3-list1": "『Space Mathster』のアップデート版。子供たちが九九をより深く学べるよう、進化したゲーム体験を提供。",
        "project3-list2": "<strong>主要機能:</strong>"
                            + "<ul>"
                            + "<li>前作のシステムを改良し、1つの段をクリアしたら新しい惑星が解放されるストーリーモードを搭載</li>"
                            + "<li>世界中のプレーヤーとスコアを競えるランキングシステムを搭載</li>"
                            + "<li>効果音やエフェクトを最適化し、ゲーム体験を向上</li>"
                            + "</ul>",
        "project3-list3": "<strong>使用技術:</strong> Unity, C#", 

        "project4-title": "Nimbly",
        "project4-list1": "子供の頃に遊んでいたパズルゲームを現代のデジタル環境で再現。<br>オリジナルのルールを持つパズルゲームを開発。",
        "project4-list2": "<strong>主要機能:</strong>"
                            + "<ul>"
                            + "<li>ターン制の戦略パズルゲーム</li>"
                            + "<li>AI対戦モードを搭載</li>"
                            + "<li>シンプルながらも奥深いゲームデザイン</li>"
                            + "</ul>",
        "project4-list3": "<strong>使用技術:</strong> Unity, C#", 

        "project5-title": "Reso365",
        "project5-list1": "新年の目標に限定せず、いつでも目標を設定し達成できる習慣管理アプリ。",
        "project5-list2": "<strong>主要機能:</strong>"
                            + "<ul>"
                            + "<li>習慣化・期限付きなど自由度の高い目標設定が可能</li>"
                            + "<li>設定した目標を細分化し、より達成しやすくサポート</li>"
                            + "<li>データ暗号化によるプライバシー保護</li>"
                            + "</ul>",
        "project5-list3": "<strong>使用技術:</strong> Android Studio, Java, Firebase", 

        "project6-title": "Reso365 - Test Documents",
        "project6-list1": "『Reso365』の品質向上のためのソフトウェアテストを実施。<br>100以上のテストケースを作成し、バグの特定と修正に貢献。",
        "project6-list2": "<strong>内容:</strong>"
                            + "<ul>"
                            + "<li>テストプラン作成</li>"
                            + "<li>機能ごとのテストケース設計と実施</li>"
                            + "<li>15件以上のバグを報告し、改善策を提案</li>"
                            + "</ul>",
        "project6-list3": "<strong>使用ツール:</strong> Google Document, Trello, ScreenPal",

        "project7-title": "アルファベットラン",
        "project7-list1": "画面をクリアしながらタイピング練習ができるゲーム",
        "project7-list2": "<strong>説明:</strong>"
                            + "<ul>"
                            + "<li>Unity1週間ゲームジャムにてテーマが「2」の際に作成</li>"
                            + "<li>タイピングとオートスクロールプラットフォームゲームを組み合わせたゲーム</li>"
                            + "<li>クリアできるまで挑戦したくなるとの評価を得た</li>"
                            + "</ul>",
        "project7-list3": "<strong>使用ツール:</strong>Unity, C#",



        "modal-title":"タイトル",
        "modal-duration":"制作期間",
        "modal-purpose":"目的",
        "modal-role":"担当箇所",
        "modal-challenges":"課題と乗り越えたこと",

         "modal-link":"詳細ページへ",

        "skills-title": "スキル",

        "parallax-message":"フォロー & つながる",


        "faq-title": "よくある質問",
        "faq-q1": "どのようなサービスを提供していますか？",
        "faq-a1": "フロントエンド開発、ウェブサイトのテスト、モバイルアプリ開発を提供しています。",
        "faq-q2": "プロジェクトの納期はどれくらいですか？",
        "faq-a2": "プロジェクトの規模により異なりますが、小規模なものは1〜2週間、大規模なものは最大1ヶ月かかる場合があります。",
        "faq-q3": "料金体系はどうなっていますか？",
        "faq-a3": "プロジェクトの規模に応じて柔軟に対応しています。時間単価や固定料金の両方に対応可能です。",
        "faq-q4": "ゲームの開発には対応していますか？",
        "faq-a4": "もちろん可能です！Unity でのゲーム開発をお任せください",
        "faq-q5": "プロジェクトの依頼はどうすればいいですか？",
        "faq-a5": "下部のコンタクトフォームから、またはLinkedIn・GitHub経由でお気軽にご連絡ください。",

        "step-title": "お問い合わせの前に",
      
        "step-1": "STEP.1",
        "step-2": "STEP.2",
        "step-3": "STEP.3",
        "step1-title": "あなたについて教えてください",
        "user-individual": "個人",
        "user-business": "法人",
        "step2-title": "何について相談したいですか？",
        "consult-web": "フロントエンド開発",
        "consult-test": "ソフトウェアテスト",
        "consult-other": "その他",
        "next": "次へ進む",
      
        "step3-title": "お問い合わせ内容",
        "contact-title": "お問い合わせ",
        "contact-user-info":"あなたの情報",
        "contact-name": "*お名前",
        "contact-email": "*メールアドレス",
        "contact-message": "*メッセージ",
        "contact-submit": "送信",
        "contact-go-back-button": "戻る",

        "contact-go-back-button":"前のページへ戻る",
    }
};

translations.en["hero-backgroundStory-title"] = "My Story";
translations.jp["hero-backgroundStory-title"] = "私のストーリー";

translations.en["hero-backgroundStory-contents"] = `
    <p><strong>"If you had $10,000, what would you do?"</strong></p>
    <p>One day, I came across this question on social media.</p>
    <p>A trip? A new gadget? No—what is it that I truly want to do?</p>
    <p>After thinking long and hard, I realized there was a dream I had buried deep inside.</p>
    <p>"I want to go back to school to study software development."</p>
    <p>Going to college had been a lifelong dream of mine. As a mother of two, it might have seemed too big of a goal to pursue. But now that my children were older, maybe—just maybe—it was finally possible.</p>
    <p>With that thought in mind, I took the leap and enrolled in college to study game development.</p>
    <p>I started with the fundamentals of programming, and as I delved into game development, my passion expanded to application development and frontend development.</p>
    <p>I fell in love with coding and the thrill of bringing ideas to life. Before I knew it, after graduating from college, I had already released three games and one app.</p>
    <p>What if I had received that $10,000 back then?</p>
    <p>Sure, it might have covered part of my tuition.</p>
    <p>But in the end, it wasn’t about the money—it was about making the decision and taking action.</p>
    <p>That decision changed my life.</p>
    <p>And so, I continue to create.</p>
    <p>Games, apps, frontend development—if you have something you want to build, let’s talk.</p>
    <p><strong>I would love to help turn your ideas into reality.</strong></p>
`;

translations.jp["hero-backgroundStory-contents"] = `
    <p><strong>「もし100万円あったら、何をしたい?」</strong></p>
    <p>ある日、SNSでこの問いを見かけました。</p>
    <p>旅行？新しい製品？いや、本当にやりたいことは何だろう？</p>
    <p>考え抜いた末に出た答えは、ずっと心の奥にしまっていた夢でした。</p>
    <p>「カナダのカレッジでソフトウェア開発を学びたい。」</p>
    <p>若い頃から憧れていた留学。二人の子供を抱える主婦の夢としては大きすぎるかもしれない。だけど、子供が少し成長した今なら、実現できるかもしれない。</p>
    <p>そう思い立ち、カナダのカレッジに入学しました。</p>
    <p>プログラミングの基礎から学び、ゲーム開発を皮切りに、アプリ開発、フロントエンド開発へと興味の幅が広がっていきました。</p>
    <p>コードを書いてアイデアを形にする楽しさにハマり、気がつけばカレッジを卒業してから3つのゲームと1つのアプリをリリース。</p>
    <p>もし、あのとき100万円がもらえていたら?</p>
    <p>たしかに、それで学費の一部を賄えたかもしれない。</p>
    <p>でも結局、大事だったのはお金ではなく、「やる」と決めて行動したこと。</p>
    <p>その決断が、私の人生を変えました。</p>
    <p>だから、今も私は「作りたい」と思ったものを形にし続けています。</p>
    <p>ゲーム、アプリ、フロントエンド開発——もしあなたが「こんなものを作りたい」と思ったら、お気軽にご相談ください。</p>
    <p><strong>あなたのアイデアを形にするお手伝いをさせてください。</strong></p>
`;
  
    // 更新用 About Me セクションの関数
    function updateAboutMeSection(lang) {
      $(".backGroundStory-section-title").html(translations[lang]["hero-backgroundStory-title"]);
      $(".backGroundStory-section-contents").html(translations[lang]["hero-backgroundStory-contents"]);
    }
    // 言語切替関数
    function switchLanguage(lang) {
      $('[data-key]').each(function () {
        var key = $(this).data("key");
        if ($(this).is("input, textarea")) {
          $(this).attr("placeholder", translations[lang][key]);
        } else {
          $(this).html(translations[lang][key]);
        }
      });
      updateAboutMeSection(lang);
      localStorage.setItem("site-language", lang);
    }
    $("#lang-jp").on("click", function () { switchLanguage("jp"); });
    $("#lang-en").on("click", function () { switchLanguage("en"); });
    var currentLang = localStorage.getItem("site-language") || "en";
    switchLanguage(currentLang);
  
    /*==============================
      プロジェクトカルーセル
    ==============================*/
    var $projectSlides = $(".project-slides");
    var $projectCards = $(".project-card");
    var $dots = $(".dot");
    var currentIndex = 0;
    function getSlideWidth() {
      return $(".project-card").first().outerWidth(true);
    }
    var slideWidth = getSlideWidth();
    var $firstClone = $projectCards.first().clone().addClass("clone");
    var $lastClone = $projectCards.last().clone().addClass("clone");
    $projectSlides.append($firstClone);
    $projectSlides.prepend($lastClone);
    $projectSlides.css("transform", "translateX(-" + slideWidth + "px)");
    function moveToSlide(index) {
      slideWidth = getSlideWidth();
      $projectSlides.css("transition", "transform 0.5s ease-in-out");
      $projectSlides.css("transform", "translateX(-" + ((index + 1) * slideWidth) + "px)");
      currentIndex = index;
      $dots.removeClass("active").eq(currentIndex % $projectCards.length).addClass("active");
    }
    $projectSlides.on("transitionend", function () {
      if (currentIndex === $projectCards.length) {
        $projectSlides.css("transition", "none");
        $projectSlides.css("transform", "translateX(-" + slideWidth + "px)");
        currentIndex = 0;
      }
      if (currentIndex === -1) {
        $projectSlides.css("transition", "none");
        $projectSlides.css("transform", "translateX(-" + (slideWidth * $projectCards.length) + "px)");
        currentIndex = $projectCards.length - 1;
      }
    });
    $(".right-btn").on("click", function () {
      if (currentIndex < $projectCards.length) {
        moveToSlide(currentIndex + 1);
      }
    });
    $(".left-btn").on("click", function () {
      moveToSlide(currentIndex - 1);
    });
    $dots.each(function (index) {
      $(this).on("click", function () {
        moveToSlide(index);
      });
    });
    $(window).on("resize", function () {
      slideWidth = getSlideWidth();
      $projectSlides.css("transition", "none");
      $projectSlides.css("transform", "translateX(-" + ((currentIndex + 1) * slideWidth) + "px)");
    });
  
    /*==============================
      モーダル表示処理（プロジェクト詳細）
    ==============================*/
    var $modal = $("#project-modal");
    var $modalTitle = $("#modal-title");
    var $modalImage = $("#modal-image");
    var $modalDuration = $("#modal-duration");
    var $modalPurpose = $("#modal-purpose");
    var $modalRole = $("#modal-role");
    var $modalChallenge = $("#modal-challenges");
    var $modalDetailLink = $("#modal-detail-link");
    var $closeBtn = $(".close-btn");
    var currentProjectKey = null;
    var projectDetails = {
        "project1": {
            en: {
                title: "Navi Grade",
                duration: "3 months",
                purpose: "A time management system for students, using AI to predict grades and gamification to enhance motivation.",
                role: "Frontend development, API integration, database design.",
                challenge: "API Optimization: It was challenging to collaborate with the backend developer to ensure that only the necessary data was retrieved. Initially, the frontend filtered data, but to improve performance, we adjusted the API endpoints to fetch only the required information.",
                link: "https://github.com/Avril-TFS/COMP313-002",
                image: "img/NaviGradeScr.png"
            },
            jp: {
                title: "ナビグレード",
                duration: "3ヶ月",
                purpose: "学生が効率よく課題管理できるように、AIを活用して成績を予測し、ゲーミフィケーション要素でモチベーション向上を図ることを目的とした。",
                role: "フロントエンド開発、API統合、データベース設計。",
                challenge: "APIの最適化: APIから必要な情報のみ取得できるように、バックエンド開発者との調整を実施。最初はフロントエンド側でフィルタ処理をしていたが、パフォーマンス向上のために、APIエンドポイントを修正して必要な情報のみ取得するようにした。",
                link: "https://github.com/Avril-TFS/COMP313-002",
                image: "img/NaviGradeScr.png"
            }
        },
        "project2": {
            en: {
                title: "Space Mathster (1K+ downloads)",
                duration: "6 months",
                purpose: "To gamify multiplication table learning and create an enjoyable experience for children.",
                role: "Solo development, responsible for design, coding, and release.",
                challenge: "Adjusting the difficulty of answer choices: Initially, random choices were generated, but this led to unrealistic and incorrect answers. To improve learning efficiency, incorrect choices were generated based on patterns (multiples of n ±1 and the correct answer ±5) rather than pure randomness.",
                link: "https://play.google.com/store/apps/details?id=com.FourCyGameStudio.SpaceMathster",
                image: "img/SpaceMathster1a.png"
            },
            jp: {
                title: "Space Mathster 1K+ ダウンロードを記録",
                duration: "6ヶ月",
                purpose: "子供たちが九九を楽しく学べるよう、ゲーム形式での学習環境を提供。",
                role: "個人開発、デザインからリリースまで全て担当。",
                challenge: "選択肢の難易度調整：完全にランダムな選択肢生成ではなく、パターンに基づいた問題設定に変更することで学習効果を向上。",
                link: "https://play.google.com/store/apps/details?id=com.FourCyGameStudio.SpaceMathster",
                image: "img/SpaceMathster1a.png"
            }
        },
        "project3": {
            en: {
                title: "Space Mathster 2",
                duration: "3 months",
                purpose: "An enhanced version of Space Mathster, designed to deepen children's understanding of multiplication tables.",
                role: "Solo development, responsible for design, coding, and release.",
                challenge: "Balancing gameplay and learning difficulty: Focused on game sound effects and interactive elements. Fine-tuned the explosion sound effect for incorrect answers and rewarding effect for correct ones.",
                link: "https://play.google.com/store/apps/details?id=com.FourCYGameStudio.SpaceMath_Two_v2",
                image: "img/SpaceMathster2a.png"
            },
            jp: {
                title: "Space Mathster2",
                duration: "3ヶ月",
                purpose: "スペースマスター１のアップデート版。子供達がより九九を深く学べるよう、進化したゲーム体験を提供。",
                role: "個人開発、デザインからリリースまで全て担当。",
                challenge: "ゲーム効果とレベル調整: 効果音やエフェクトの微調整により、ゲームのバランスを最適化。",
                link: "https://play.google.com/store/apps/details?id=com.FourCYGameStudio.SpaceMath_Two_v2",
                image: "img/SpaceMathster2a.png"
            }
        },
        "project4": {
            en: {
                title: "Nimbly",
                duration: "3 months",
                purpose: "Inspired by a childhood puzzle game that no longer existed online or as a board game, I wanted to recreate and play it again.",
                role: "Solo development, responsible for design, coding, and release.",
                challenge: "AI Movement: Creating an AI opponent was challenging; an algorithm was developed to evaluate moves based on a score system for optimal decision-making.",
                link: "https://play.google.com/store/apps/details?id=com.FourCyGameStudio.Nimbly",
                image: "img/Nimbly.png"
            },
            jp: {
                title: "Nimbly",
                duration: "3ヶ月",
                purpose: "幼少期に遊んでいたパズルゲームの再現を目指し、オリジナルの魅力を現代に蘇らせるため自ら開発。",
                role: "個人開発、デザインからリリースまで全て担当。",
                challenge: "AIの動きの設計:完全オリジナルのゲームだったため、AIの設計が難航。最適な手を選択できるように点数システムを導入し、各手の評価を行うアルゴリズムを開発。",
                link: "https://play.google.com/store/apps/details?id=com.FourCyGameStudio.Nimbly",
                image: "img/Nimbly.png"
            }
        },
        "project5": {
            en: {
                title: "Reso365",
                duration: "4 months",
                purpose: "Questioning the idea that New Year's resolutions can only be set at the start of the year, I created this app to allow users to start fresh any time.",
                role: "Solo development, responsible for design, coding, and release.",
                challenge: "Encrypting user data: Ensured privacy protection via Firebase encryption; debugging the decryption process was a significant challenge.",
                link: "https://play.google.com/store/apps/details?id=com.yuko.resolution",
                image: "img/Reso365_featuregraphic.png"
            },
            jp: {
                title: "Reso365",
                duration: "4ヶ月",
                purpose: "新年の目標は新年にしか立てられないのか？毎日が新たなスタートでもよいのではないか、という考えから開発。",
                role:"個人開発、デザインからリリースまで全て担当",
                challenge: "ユーザー情報の暗号化: Firebase によるデータ暗号化の実装で、復号化に苦労した。",
                link: "https://play.google.com/store/apps/details?id=com.yuko.resolution",
                image: "img/Reso365_featuregraphic.png"
            }
        },
        "project6": {
            en: {
                title: "Reso365 - Test Documents",
                duration: "4 months",
                purpose: "To improve the quality of Reso365, I created and executed over 100 test cases and reported more than 15 bugs.",
                role: "Responsible for all aspects of testing, including test planning, test documentation, and test case execution.",
                challenge: "Traceability of test cases: It was challenging to track which test cases were linked to which bug reports. Categorizing tasks by feature and using visual representations improved clarity.",
                link: "https://trello.com/b/SlKfiJvO/resolutionapp",
                image: "img/Testplan.png"
            },
            jp: {
                title: "Reso365-TEST Documents",
                duration:"4ヶ月",
                purpose: "Reso365の品質向上のために100以上のテストケースを作成、実行。15以上のバグレポートの作成",
                role:"テストプラン作成、テストドキュメント、テストケースなど全てのテスト工程を担当",
                challenge: "テストケースのトレーサビリティ: 各テストケースとバグレポートの関連性を明確化するのに苦労。機能ごとにカード分類し、視覚的に整理。",
                link: "https://trello.com/b/SlKfiJvO/resolutionapp",
                image: "img/Testplan.png"
            }
        },
        "project7": {
          en: {
              title: "Alphabet RUN",
              duration:  "1 week",
              purpose:  "Created for the Unity 1-Week Game Jam",
              role: "Responsible for everything from game design to implementation",
              challenge: "Spent a lot of time deciding on the game's concept and direction, resulting in minimal implementation, but it became an engaging and rewarding game to play.",
              link: "https://yukoyamano.github.io/AlphabetLTS-Build/",
             image: "img/alphabetRun1a.png"
          },
          jp: {
            title: "アルファベットラン",
            duration: "1週間",
            purpose: "Unity 1週間ゲームジャムへの参加",
            role: "ゲームデザインから実装まで全て担当",
            challenge: "ゲームのアイデアと方向性を決めるのに時間がかかり、最低限の実装となったが、挑戦しがいのある面白いゲームになった",
            link: "https://yukoyamano.github.io/AlphabetLTS-Build/",
            image: "img/alphabetRun1a.png"
          }
      }
    };
  
    function showModal(projectKey) {
      currentProjectKey = projectKey;
      var project = projectDetails[projectKey][currentLang];
      $modalTitle.text(project.title);
      $modalImage.attr("src", project.image);
      $modalDuration.html("<span>" + project.duration + "</span>");
      $modalPurpose.html("<span>" + project.purpose + "</span>");
      $modalRole.html("<span>" + project.role + "</span>");
      $modalChallenge.html("<span>" + project.challenge + "</span>");
      $modalDetailLink.attr("href", project.link).attr("target", "_blank");
      $modal.css("display", "block");
    }
    $(".project-card").on("click", function () {
      var projectKey = $(this).data("project-id");
      showModal(projectKey);
    });
    $closeBtn.on("click", function () {
      $modal.css("display", "none");
      currentProjectKey = null;
    });
    $(window).on("click", function (e) {
      if (e.target == $modal[0]) {
        $modal.css("display", "none");
        currentProjectKey = null;
      }
    });
    function updateModalLanguage() {
      if (currentProjectKey) {
        var project = projectDetails[currentProjectKey][currentLang];
        $modalTitle.text(project.title);
        $modalImage.attr("src", project.image);
        $modalDuration.html("<span>" + project.duration + "</span>");
        $modalPurpose.html("<span>" + project.purpose + "</span>");
        $modalRole.html("<span>" + project.role + "</span>");
        $modalChallenge.html("<span>" + project.challenge + "</span>");
        $modalDetailLink.attr("href", project.link);
      }
    }
    $("#lang-jp").on("click", function () {
      currentLang = "jp";
      switchLanguage("jp");
      updateModalLanguage();
    });
    $("#lang-en").on("click", function () {
      currentLang = "en";
      switchLanguage("en");
      updateModalLanguage();
    });
  
    /*==============================
      FAQのアコーディオン
    ==============================*/
    $(".faq-question").on("click", function () {
      $(this).next(".faq-answer").toggleClass("active");
      $(this).toggleClass("active");
    });
  
    /*==============================
      お問い合わせフォーム（ステップ制）
    ==============================*/
    var $steps = $(".step");
    var $stepBtns = $(".step-btn");
    var $nextBtns = $(".next-btn");
    var $errorMessageDiv = $(".error-message-contact");
    var $contactForm = $("#contact-form");
    var $userInfoField = $("#contact-user-info");
    var currentStep = 0;
    currentLang = localStorage.getItem("site-language") || "en";
    $errorMessageDiv.hide();
    var errorMessages = {
      en: "Please select an option.",
      jp: "いずれかを選択してください。"
    };
    var translationMapping = {
      "個人": { en: "Individual", jp: "個人" },
      "法人": { en: "Business", jp: "法人" },
      "Web開発": { en: "Web Development", jp: "Web開発" },
      "ソフトウェアテスト": { en: "Software Testing", jp: "ソフトウェアテスト" },
      "その他": { en: "Other", jp: "その他" }
    };
    function translateText(text) {
      return translationMapping[text] ? translationMapping[text][currentLang] : text;
    }
    $stepBtns.eq(1).prop("disabled", true).addClass("disabled");
    $stepBtns.eq(2).prop("disabled", true).addClass("disabled");
    function showStep(index) {
      $steps.removeClass("active").eq(index).addClass("active");
      $stepBtns.removeClass("active").eq(index).addClass("active");
      $errorMessageDiv.text("").hide();
    }
    function updateErrorMessage() {
      currentLang = localStorage.getItem("site-language") || "en";
    }
    $nextBtns.each(function (index) {
      $(this).on("click", function () {
        var $radios = $steps.eq(index).find('input[type="radio"]');
        var selected = $radios.is(":checked");
        if (!selected) {
          updateErrorMessage();
          $errorMessageDiv.text(errorMessages[currentLang]).css("color", "red").show();
          return;
        }
        $errorMessageDiv.text("").hide();
        if (index < $steps.length - 1) {
          currentStep++;
          showStep(currentStep);
          if (currentStep === 2) {
            $stepBtns.eq(1).prop("disabled", false).removeClass("disabled");
            var userType = $steps.eq(0).find('input[name="user-type"]:checked').val();
            var consultation = $steps.eq(1).find('input[name="consultation"]:checked').val();
            $userInfoField.val("【" + translateText(userType) + "】 " + translateText(consultation));
          }
        }
      });
    });
    $stepBtns.each(function (index) {
      $(this).on("click", function () {
        if (index === 1 && currentStep === 0) {
          var selected = $('input[name="user-type"]:checked').length > 0;
          if (!selected) {
            updateErrorMessage();
            $errorMessageDiv.text(errorMessages[currentLang]).css("color", "red").show();
            return;
          }
        }
        if (index === 2) {
          var userTypeSelected = $('input[name="user-type"]:checked').length > 0;
          var consultationSelected = $('input[name="consultation"]:checked').length > 0;
          if (!userTypeSelected || !consultationSelected) {
            updateErrorMessage();
            $errorMessageDiv.text(errorMessages[currentLang]).css("color", "red").show();
            return;
          }
        }
        currentStep = index;
        showStep(currentStep);
      });
    });
    $('input[type="radio"]').on("change", function () {
      $errorMessageDiv.text("").hide();
    });
    $('input[name="consultation"]').on("change", function () {
      $errorMessageDiv.text("").hide();
    });
    $("#lang-jp, #lang-en").on("click", function () {
      currentLang = localStorage.getItem("site-language") || "en";
    });
    showStep(currentStep);
    var submitMessage = { en: "Message sent!", jp: "お問い合わせが送信されました！" };
    $contactForm.on("submit", function (e) {
      e.preventDefault();
      alert(submitMessage[currentLang]);
      $contactForm[0].reset();
      currentStep = 0;
      showStep(currentStep);
    });
  });
  
  $(document).ready(function(){
    $("#linkedin-btn").click(function() {
        window.open("https://www.linkedin.com/in/yukoyamano", "_blank");
      });
    
    
      $("#github-btn").click(function() {
        window.open("https://github.com/YukoYamano", "_blank");
      });
    
     
      $("#projects-btn").click(function() {
        window.location.href = "#projects"; 
      });
    
      $("#contact-btn").click(function() {
        window.location.href = "#step-form"; 
      });

       
        $("#parallax-linkedin-btn").click(function() {
            window.open("https://www.linkedin.com/in/yukoyamano", "_blank");
        });

       
        $("#parallax-github-btn").click(function() {
            window.open("https://github.com/YukoYamano", "_blank");
        });
  })