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
        date: "2024.01.01",
        title: "思い出その1",
        place: "📍 ○○",
        comment: "この日の思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo02.jpg",
        date: "2024.02.01",
        title: "思い出その2",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo03.jpg",
        date: "2024.03.01",
        title: "思い出その3",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo04.jpg",
        date: "2024.04.01",
        title: "思い出その4",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo05.jpg",
        date: "2024.05.01",
        title: "思い出その5",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo06.jpg",
        date: "2024.06.01",
        title: "思い出その6",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo07.jpg",
        date: "2024.07.01",
        title: "思い出その7",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo08.jpg",
        date: "2024.08.01",
        title: "思い出その8",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo09.jpg",
        date: "2024.09.01",
        title: "思い出その9",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo10.jpg",
        date: "2024.10.01",
        title: "思い出その10",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo11.jpg",
        date: "2024.11.01",
        title: "思い出その11",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo12.jpg",
        date: "2024.12.01",
        title: "思い出その12",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo13.jpg",
        date: "2025.01.01",
        title: "思い出その13",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo14.jpg",
        date: "2025.02.01",
        title: "思い出その14",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo15.jpg",
        date: "2025.03.01",
        title: "思い出その15",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo16.jpg",
        date: "2025.04.01",
        title: "思い出その16",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo17.jpg",
        date: "2025.05.01",
        title: "思い出その17",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo18.jpg",
        date: "2025.06.01",
        title: "思い出その18",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo19.jpg",
        date: "2025.07.01",
        title: "思い出その19",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: true,
        image: "images/photo20.jpg",
        date: "2025.08.01",
        title: "思い出その20",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },


    // =====================
    // 21〜50
    // 写真を追加したら
    // enabled: true にする
    // =====================

    {
        enabled: false,
        image: "images/photo21.jpg",
        date: "2025.09.01",
        title: "思い出その21",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo22.jpg",
        date: "2025.10.01",
        title: "思い出その22",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo23.jpg",
        date: "2025.11.01",
        title: "思い出その23",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo24.jpg",
        date: "2025.12.01",
        title: "思い出その24",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo25.jpg",
        date: "2026.01.01",
        title: "思い出その25",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo26.jpg",
        date: "2026.02.01",
        title: "思い出その26",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo27.jpg",
        date: "2026.03.01",
        title: "思い出その27",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo28.jpg",
        date: "2026.04.01",
        title: "思い出その28",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo29.jpg",
        date: "2026.05.01",
        title: "思い出その29",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo30.jpg",
        date: "2026.06.01",
        title: "思い出その30",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo31.jpg",
        date: "2026.07.01",
        title: "思い出その31",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo32.jpg",
        date: "2026.08.01",
        title: "思い出その32",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo33.jpg",
        date: "2026.09.01",
        title: "思い出その33",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo34.jpg",
        date: "2026.10.01",
        title: "思い出その34",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo35.jpg",
        date: "2026.11.01",
        title: "思い出その35",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo36.jpg",
        date: "2026.12.01",
        title: "思い出その36",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo37.jpg",
        date: "2027.01.01",
        title: "思い出その37",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo38.jpg",
        date: "2027.02.01",
        title: "思い出その38",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo39.jpg",
        date: "2027.03.01",
        title: "思い出その39",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo40.jpg",
        date: "2027.04.01",
        title: "思い出その40",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo41.jpg",
        date: "2027.05.01",
        title: "思い出その41",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo42.jpg",
        date: "2027.06.01",
        title: "思い出その42",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo43.jpg",
        date: "2027.07.01",
        title: "思い出その43",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo44.jpg",
        date: "2027.08.01",
        title: "思い出その44",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo45.jpg",
        date: "2027.09.01",
        title: "思い出その45",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo46.jpg",
        date: "2027.10.01",
        title: "思い出その46",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo47.jpg",
        date: "2027.11.01",
        title: "思い出その47",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo48.jpg",
        date: "2027.12.01",
        title: "思い出その48",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo49.jpg",
        date: "2028.01.01",
        title: "思い出その49",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
    },

    {
        enabled: false,
        image: "images/photo50.jpg",
        date: "2028.02.01",
        title: "思い出その50",
        place: "📍 ○○",
        comment: "ここに思い出を書いてね♡"
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

                <p class="date">
                    ${memory.date}
                </p>

                <h3>
                    ${memory.title}
                </h3>

                <p class="place">
                    ${memory.place}
                </p>

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