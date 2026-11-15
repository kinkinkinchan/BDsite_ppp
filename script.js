// =====================
// カウントダウン
// =====================

let count = 3;

const countElement =
    document.getElementById("count");

const countdown =
    document.getElementById("countdown");

const hero =
    document.getElementById("hero");


function showNextCount() {

    countElement.classList.remove("count-out");

    void countElement.offsetWidth;

    countElement.textContent = count;

    countElement.style.animation = "none";

    void countElement.offsetWidth;

    countElement.style.animation =
        "countdownPop .9s ease forwards";
}


const timer = setInterval(() => {

    countElement.classList.add("count-out");


    setTimeout(() => {

        count--;


        if (count > 0) {

            showNextCount();

        } else {

            clearInterval(timer);


            setTimeout(() => {

                countdown.style.display = "none";

                hero.classList.remove("hidden");

                createManyConfetti();

                createCelebrationConfetti();

                startForeverConfetti();

            }, 350);

        }

    }, 400);

}, 1000);



// =====================
// 紙吹雪
// =====================

function createConfetti() {

    const confetti =
        document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.width =
        Math.random() * 8 + 5 + "px";

    confetti.style.height =
        Math.random() * 15 + 8 + "px";

    confetti.style.animationDuration =
        Math.random() * 5 + 5 + "s";


    const colors = [

        "#65b891",
        "#8fd3a8",
        "#d8f3dc",
        "#ffffff",
        "#f5d76e"

    ];


    confetti.style.backgroundColor =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];


    document.body.appendChild(confetti);


    setTimeout(() => {

        confetti.remove();

    }, 10000);

}



function createManyConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        createConfetti();

    }

}



function createCelebrationConfetti() {

    for (
        let i = 0;
        i < 150;
        i++
    ) {

        setTimeout(() => {

            createConfetti();

        }, i * 15);

    }

}



function startForeverConfetti() {

    setInterval(() => {

        createConfetti();

    }, 700);

}



// =====================
// アルバム
// =====================
//
// ここで写真を管理します。
// 最大50枚まで追加できます。
// 今は1〜20枚目を表示。
// 21〜50枚目は enabled: false にしています。
//


const memories = [

    {
        enabled: true,
        image: "images/photo01.jpg",
        comment: "ギクシャクの時！仲直りできてよかった泣"
    },

    {
        enabled: true,
        image: "images/photo02.jpg",
        comment: "アフターヌーンティー！かわいかったね！"
    },

    {
        enabled: true,
        image: "images/photo03.jpg",
        comment: "女子文具博！またいこう！"
    },

    {
        enabled: true,
        image: "images/photo04.jpg",
        comment: "白コーデ♡もうすぐ一年か！"
    },

    {
        enabled: true,
        image: "images/photo05.jpg",
        comment: "新年会！またボドゲカフェいこ～！！"
    },

    {
        enabled: true,
        image: "images/photo06.jpg",
        comment: "浅草着物散策！レース可愛かった～！"
    },

    {
        enabled: true,
        image: "images/photo07.jpg",
        comment: "上野喫茶店！激安古着屋さん懐かしい"
    },

    {
        enabled: true,
        image: "images/photo08.jpg",
        comment: "黄色コーデ♡妖怪展！"
    },

    {
        enabled: true,
        image: "images/photo09.jpg",
        comment: "緑コーデ♡LTK！！"
    },

    {
        enabled: true,
        image: "images/photo10.jpg",
        comment: "ピンクコーデ♡漂流教室！"
    },

    {
        enabled: true,
        comment: "ぽに飲み会！part1"
    },

    {
        enabled: true,
        comment: "tillポーカー会！一文無しになってた"
    },

    {
        enabled: true,
        comment: "ハロウィン仮装！楽しかったね！"
    }

];



// =====================
// アルバムを自動生成
// =====================

const albumList =
    document.getElementById("album-list");


memories
    .filter(memory => memory.enabled)
    .forEach(memory => {

        const card =
            document.createElement("div");

        card.className = "album-card";


        card.innerHTML = `

            <img
                src="${memory.image}"
                alt="${memory.title}"
                loading="lazy"
            >

            <div class="photo-info">

                <p class="comment">
                    ${memory.comment}
                </p>

            </div>

        `;


        albumList.appendChild(card);

    });



// =====================
// アルバムふわっと表示
// =====================

const albumCards =
    document.querySelectorAll(".album-card");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.2
        }

    );


albumCards.forEach(card => {

    observer.observe(card);

});
