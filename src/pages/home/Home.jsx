import { useState } from "react";

import Profile from "../../components/Profile";
import History from "../../components/History";
import Skills from "../../components/Skills";
import Works from "../../components/Works";

import "./css/Home.css";


const Home = () => {
    const [profile] = useState([
        {
            title: "誕生日",
            description: "2002年11月7日（18歳）",
        },
        {
            title: "学校・学科",
            description: "長野工業高等専門学校　電子情報工学科",
        },
        {
            title: "専攻",
            description: "Web開発",
        },
        {
            title: "趣味",
            description: "MineCraft、音楽鑑賞",
        },
        {
            title: "主要言語",
            description: "JavaScript、Python",
        },
    ]);

    const [myHistory] = useState([
        { date: "2002/11/7", description: "誕生" },
        { date: "2018/4/3", description: "長野工業高等専門学校入学" },
        {
            date: "2019/4月頃～",
            description:
                "C言語の授業が始まり、プログラミングに興味を持ち始める",
        },
        {
            date: "2019/10月頃",
            description:
                "2020年10月豪雨のボランティア活動（穂保地域の住宅内の片付け）をする",
        },
        { date: "2019/12月頃", description: "Pythonを学び始める" },
        {
            date: "2020/7~8月頃",
            description:
                "文化祭（Covid-19のため中止）のクラス企画製作のために、Unityを本格的に使う",
        },
        { date: "2021/8/16", description: "Web開発を学び始める" },

        {
            date: "2021/9/20",
            description: "自分自身だけで初めてJSアプリ（複数タイマー）を製作",
        },
        {
            date: "2021/11/2",
            description: "初めてのWebページ（MyPage#1） が完成",
        },
        {
            date: "2020/12/5~6",
            description:
                "Web×Iot メイカーズチャレンジ 2020-21 in信州 、Team Janbiとして特別賞受賞",
        },
        { date: "2021/1/2", description: "初めてログインフォームを実装" },
        { date: "2021/1/18", description: "Djangoを学び始める" },
        { date: "2021/2/21", description: "Portfolioが完成" },
    ]);

    const [skills] = useState([
        {
            title: "Frontend",
            skills: [
                "HTML5",
                "CSS",
                "SCSS",
                "JavaScript",
                "TypeScript",
                "React",
            ],
        },
        {
            title: "Backend",
            skills: ["Python", "Django", "PHP", "Node.js", "JSON", "MySQL"],
        },
        {
            title: "Document",
            skills: ["LaTeX", "MarkDown"],
        },
        {
            title: "Tool",
            skills: ["Visual Studio Code", "Git", "GitHub"],
        },
        {
            title: "School",
            skills: ["Processing", "C", "Java"],
        },
        {
            title: "Other",
            skills: ["Unity"],
        },
    ]);
    
    const [works] = useState([
        {
            title: "JPig's Portfolio",
            date: "2021/2/21",
            overViewImgFilename: "Portfolio.png",
            sentence: [
                "以前、Webページ(MyPage#1)を一度製作したのですが、以前のものはWebの学び始めたばかりの頃に製作しており、今ならもっと素晴らしいWebサイトができるのではないかと思い、Portfolioを製作をしました。",
                "製作には、Reactを使用しました。",
                "Reactを本格的に使うのは今回が初めてでした。",
                "実際に使ってみると、コンポネントの考え方がとても便利で、生のHTMLを使用するのに比べて綺麗に書くことができました。",
                "また、CSSは独特性を持たせたかったため、フレームワークは何も使用しませんでした。",
                "全部生のCSSで書くのはやはり大変だったけど、この製作を通してさらにCSSの理解を深められました。",
                "画像の上に文字を表示させるということは初めての試みでしたが、綺麗に表示できたので良かったです。",
                "まだレスポンシブ非対応なので、近いうちに頑張ってレスポンシブにも対応させたいと思っています。",
            ],
            links: [
                {
                    url: "https://jpig-main.github.io/portfolio/",
                    description: "JPig's Portfolio",
                },
                {
                    url: "https://github.com/JPig-Main/portfolio",
                    description: "ソース（GitHub）",
                },
            ],
        },
        {
            title: "Web×IoT メイカーズチャレンジ2020-21 in信州",
            date: "2021/12/6～7",
            overViewImgFilename: "WebIot_2020-21_Nagano.png",
            sentence: [
                "Webを勉強している最中、このイベントを知り、自分の技術の向上のために参加しました。",
                "5人チームで開発をしたのですが、チームメンバーに実際に企業でPHPやMySQLを使用している方、Pythonを自由自在に扱える方がいて、とても素晴らしい環境の中、開発を行いました。",
                "私たちのチームでは、COVIDiffuserというものを製作しました。",
                "この作品は、部屋の密集度を測定して、密集度が基準以上だったら、消毒液を乗せた車が自動でその部屋に持って行くというものです。",
                "他のチームメンバーの技術力が高かったので、、私は1人のメンバーと一緒に車自体を作ったり、車を動かす部分を製作しました。",
                "あまり専門的な技術がなくてもできるとはいえ、ハード部分をしっかり製作しないとソフト部分がたとえ素晴らしかったとしても何も動かなくなってしまうので、時間をかけてしっかり製作する必要がありました。",
                "特に大変だったのは、車に乗っているものを支えることでした。",
                "この問題を解決するために、耐荷重20Kgのプラスティック段ボールを使用し、さらに車の下に支えを何本か入れました。",
                "当日のハッカソンでは審査員にハードをやったことないわりにはとてもよく実装できていると言われたので、ほんとに嬉しかったです。",
            ],
            links: [
                {
                    url:
                        "https://twitter.com/BonyChops/status/1335522002262577153",
                    description:
                        "Web×Iotメイカーズチャレンジ2020-21 in 長野　特別賞受賞（Twitter@BonyChops）",
                },
            ],
        },
        {
            title: "MyPage#1",
            date: "2021/11/2",
            overViewImgFilename: "MyPage_1.png",
            sentence: [
                "Webを学び初めて半月ほどでWebサイトを製作し始めました。",
                "HTMLもCSSもJSも学び始めたばかりで、とても苦労しました。",
                "とくに要素の中央揃えは数時間掛かることもあり、とても大変でした。",
                "でも、このサイトが完成した頃にはHTMLもCSSもJSも最初の頃よりはとても使えるようになっていて、大変だったけど製作して良かったなあと思っています。",
                "この製作を通して、何でもやりきることが大切なんだなと感じました。",
            ],
            links: [
                {
                    url: "https://jpig-main.github.io/Mypage_1",
                    description: "MyPage#1",
                },
                {
                    url: "https://github.com/JPig-Main/Mypage_1",
                    description: "ソース(GitHub)",
                },
            ],
        },
    ]);


    return (
        <div className="home">
            <main>
                <section className="hero">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/hero.jpg`}
                        alt="Dzoko StachによるPixabayからの画像"
                    />

                    <div className="sentence">
                        <p>
                            少しでも人の役に立つWebサービスを作れるように、Web開発をし続けます
                        </p>
                    </div>
                </section>

                <section className="articles">
                    <article>
                        <div className="ar-title">
                            <div className="t-node">Profile</div>
                        </div>

                        <div className="contents">
                            <Profile data={profile} />
                        </div>
                    </article>

                    <article>
                        <div className="ar-title">
                            <div className="t-node">MyHistory</div>
                        </div>

                        <div className="contents">
                            <History data={myHistory} />
                        </div>
                    </article>

                    <article>
                        <div className="ar-title">
                            <div className="t-node">Skills</div>
                        </div>

                        <div className="contents">
                            <Skills data={skills} baseDir="img/skills" />
                        </div>
                    </article>

                    <article>
                        <div className="ar-title" name="works">
                            <div className="t-node">Works</div>
                        </div>

                        <div className="contents">
                            <Works data={works} baseDir="img/works" />
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};


export default Home;
