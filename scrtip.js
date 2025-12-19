// 1. 수업 자료 데이터 (여기에 폴더/파일 정보를 추가하세요)
const materials = [
    {
        type: "문서",
        icon: "fa-file-lines",
        date: "2025-03-01",
        title: "1주차 강의자료 - 프로그래밍 기초",
        desc: "Python 기본 문법과 변수, 자료형에 대한 소개",
        link: "./week1/index.html" // 하위 폴더 연결
    },
    {
        type: "문서",
        icon: "fa-file-lines",
        date: "2025-03-01",
        title: "1주차 실습자료",
        desc: "기본 문법 실습 예제 및 연습문제",
        link: "./week1-practice/index.html"
    },
    {
        type: "영상",
        icon: "fa-video",
        date: "2025-03-08",
        title: "2주차 강의 영상",
        desc: "조건문과 반복문 설명 영상 (45분)",
        link: "https://youtube.com/..." 
    },
    {
        type: "링크",
        icon: "fa-link",
        date: "2025-03-01",
        title: "Python 공식 문서",
        desc: "Python 공식 문서 바로가기",
        link: "https://docs.python.org/ko/3/"
    }
    // 데이터가 추가되면 자동으로 카드가 늘어납니다.
];

// 2. 카드를 화면에 그리는 함수
const cardContainer = document.getElementById('card-container');

function renderCards() {
    cardContainer.innerHTML = materials.map(item => `
        <div class="card">
            <div>
                <div class="card-header">
                    <span class="type-tag"><i class="fas ${item.icon}"></i> ${item.type}</span>
                    <span class="date">${item.date}</span>
                </div>
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
            <div class="card-footer">
                <a href="${item.link}" class="link-btn">
                    <i class="fas fa-link"></i> 자료 열기
                </a>
            </div>
        </div>
    `).join('');
}

// 실행
renderCards();