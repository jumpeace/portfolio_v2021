import { useState } from "react";

import Map from "../../components/Map";
import Histories from "../../components/Histories";
import TitledLists from "../../components/TitledLists";
import Boxes from "../../components/Boxes";

import "../css/Pages.css";
import "./css/Home.css";

const Home = () => {
    const [profile] = useState([
        {
            title: "誕生日",
            value: "2002年11月7日（18歳）",
        },
        {
            title: "学校・学科",
            value: "長野工業高等専門学校　電子情報工学科",
        },
        {
            title: "専攻",
            value: "Web開発",
        },
        {
            title: "趣味",
            value: "MineCraft、音楽鑑賞",
        },
        {
            title: "主要言語",
            value: "JavaScript、Python",
        },
    ]);
    const [myHistory] = useState([
        { when: "2002/11/7", what: "誕生" },
        { when: "2018/4/3", what: "長野工業高等専門学校入学" },
        {
            when: "2019/4月頃～",
            what: "C言語の授業が始まり、プログラミングに興味を持ち始める",
        },
        {
            when: "2019/10月頃",
            what:
                "2020年10月豪雨のボランティア活動（穂保地域の住宅内の片付け）をする",
        },
        { when: "2019/12月頃", what: "Pythonを学び始める" },
        {
            when: "2020/7~8月頃",
            what:
                "文化祭（Covid-19のため中止）のクラス企画製作のために、Unityを本格的に使う",
        },
        { when: "2021/8/16", what: "Web開発を学び始める" },

        {
            when: "2021/9/20",
            what: "自分自身だけで初めてJSアプリ（複数タイマー）を製作",
        },
        {
            when: "2021/11/2",
            what: "初めてのWebページ（MyPage#1） が完成",
        },
        {
            when: "2020/12/5~6",
            what:
                "Web×Iot メイカーズチャレンジ 2020-21 in長野 、Team Janbiとして特別賞受賞",
        },
        { when: "2021/1/2", what: "初めてログインフォームを実装" },
        { when: "2021/1/18", what: "Djangoを学び始める" },
        { when: "2021/?/?", what: "Portfolioが完成" },
    ]);
    const [skills] = useState([
        {
            title: "Frontend",
            lists: [
                "HTML5",
                "CSS",
                "SCSS",
                "JavaScript",
                "Typescript",
                "React",
            ],
        },
        {
            title: "Backend",
            lists: ["Python", "Django", "PHP", "Node.js", "JSON", "MySQL"],
        },
        {
            title: "Document",
            lists: ["LaTeX", "MarkDown"],
        },
        {
            title: "Tool",
            lists: ["Visual Studio Code", "Git", "GitHub"],
        },
        {
            title: "School",
            lists: ["Processing", "C", "Java"],
        },
        {
            title: "Other",
            lists: ["Unity"],
        },
    ]);
    const [works] = useState([
        {
            title: "JPig's Portfolio",
            when: "2021/2/20",
            overViewImgFilename: "Portfolio.png",
            details: [
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
                    description: "プログラムソース(GitHUb)",
                },
            ],
        },
        {
            title: "Web×Iot メイカーズチャレンジ2020-21 in長野",
            when: "2021/12/6～7",
            overViewImgFilename: "WebIoT_2020-21_Nagano.png",
            details: [
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
                        "Web×Iotメイカーズチャレンジ2020-21 in 長野　特別賞受賞 (Twitter@BonyChops)",
                },
            ],
        },
        {
            title: "MyPage#1",
            when: "2021/11/2",
            overViewImgFilename: "MyPage_1.png",
            details: [
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
                    description: "プログラムソース(GitHUb)",
                },
            ],
        },
    ]);

    return (
        <div className="article-page">
            <main>
                <section className="hero">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/hero.jpg`}
                        alt="Dzoko StachによるPixabayからの画像"
                    />
                    <pre className="sentence">
                        <p>
                            少しでも人の役に立てるWebサービスを作れるように開発をし続けます
                        </p>
                        <p>日々精進</p>
                    </pre>
                </section>
                <section className="articles">
                    <div className="article" name="profile">
                        <div className="header">
                            <div className="t-node">Profile</div>
                        </div>
                        <div className="contents profile">
                            <ul>
                                {profile.map((el) => {
                                    return (
                                        <li>
                                            <Map
                                                title={el.title}
                                                value={el.value}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="article">
                        <div className="header">
                            <div className="t-node">MyHistory</div>
                        </div>
                        <div className="contents">
                            <Histories data={myHistory} />
                        </div>
                    </div>
                    <div className="article">
                        <div className="header">
                            <div className="t-node">Skills</div>
                        </div>
                        <div className="contents">
                            <TitledLists data={skills} baseDir="img/skills" />
                        </div>
                    </div>
                    <div className="article">
                        <div className="header" name="works">
                            <div className="t-node">Works</div>
                        </div>
                        <div className="contents">
                            <Boxes data={works} baseDir="img/works" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
