import { useState } from "react";

import Profile from "../../components/Profile";
import History from "../../components/History";
import Skills from "../../components/Skills";
import Works from "../../components/Works";

import "./css/Home.css";


const Home = () => {
    const [profile] = useState([
        {
            title: "学校",
            description: "工業系の高等専門学校",
        },
        {
            title: "学科",
            description: "情報工学科",
        },
        {
            title: "専攻",
            description: "Web開発",
        },
        {
            title: "最近の開発",
            description: "Web API 開発",
        }
    ]);

    const [myHistory] = useState([
        {
            date: "2019/5",
            description:
                "C言語の授業でプログラミングに興味を持ち始める。",
        },
        {
            date: "2019/10",
            description:
                "2020年10月豪雨のボランティア活動をする。",
        },
        {
            date: "2020/7~8",
            description:
                "文化祭（Covid-19のため中止）のクラス企画製作のために、Unityを使ってゲームを製作する。",
        },
        {
            date: "2021/11/2",
            description: "初めてのポートフォリオを完成させる。",
        },
        {
            date: "2020/12/5~6",
            description:
                "Web×Iot メイカーズチャレンジ 2020-21 in信州　Team Janbiとして特別賞を受賞する。",
        },
        { date: "2021/2/21", description: "現在のポートフォリオを完成させる。" },
        { date: "2021/10/13", description: "自分のクラスのホームページを完成させる。" },
    ]);

    const [skills] = useState([
        {
            title: "Frontend",
            skills: ["CSS", "jQuery", "HTML5", "React", "SCSS", "TailWind CSS"],
        },
        {
            title: "Backend",
            skills: ["Django", "JSON"],
        },
        {
            title: "Game Tool",
            skills: ["p5.js", "Unity"],
        },
        {
            title: "Language",
            skills: ["C", "Java", "JavaScript", "PHP", "Processing", "Python", "Ruby", "TypeScript"],
        },
        {
            title: "Document",
            skills: ["MarkDown", "LaTeX"],
        },
        {
            title: "Tool",
            skills: ["GitHub", "Visual Studio Code"],
        },
    ]);
    
    const [works] = useState([
        {
            title: "NNCT18J（現在）",
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
            ],
            links: [
                {
                    url: "https://jumpeace.github.io/portfolio/",
                    description: "Webページ",
                },
                {
                    url: "https://github.com/jumpeace/portfolio",
                    description: "ソース（GitHub）",
                },
            ],
        },
        {
            title: "ポートフォリオ（現在）",
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
            ],
            links: [
                {
                    url: "https://jumpeace.github.io",
                    description: "Webページ",
                },
                {
                    url: "https://github.com/jumpeace/jumpeace.github.io",
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
                        "https://webiotmakers.github.io/2020/shinshu/",
                    description:
                        "Web×Iotメイカーズチャレンジ2020-21　開催報告ページ",
                },
            ],
        },
        {
            title: "初めてのポートフォリオ",
            date: "2021/11/2",
            overViewImgFilename: "MyPage_1.png",
            sentence: [
                "HTMLもCSSもJSも学び始めたばかりで、とても苦労しました。",
                "とくに要素の中央揃えは数時間掛かることもあり、とても大変でした。",
                "でも、このサイトが完成した頃にはHTMLもCSSもJSも最初の頃よりはとても使えるようになっていて、大変だったけど製作して良かったなあと思っています。",
            ],
            links: [
                {
                    url: "https://jumpeace.github.io/first-portfolio",
                    description: "Webページ",
                },
                {
                    url: "https://github.com/jumpeace/first-portfolio",
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
                            人の役に立つITサービスを開発できるように努力し続けます
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
