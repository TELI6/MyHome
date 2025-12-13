window.onload = function () {
    addCompetencyItem();
    addCertItem();
    addEducationItem();
    addSkillItem();
    let isClick = 0;
    const menuImg = document.querySelector(".menu-img");
    menuImg.addEventListener("click", ()=>{
        const navMenu = document.querySelector(".nav-menu");
        if(!isClick){
            navMenu.style.display = "block";
            isClick = 1;
        }else{
            navMenu.style.display = "none";
            isClick = 0;
        }
    })
}

function CertItemDocument(name, date) {
    let certBadge = `<img class="cert-badge" src="images/check-icon.png">`;
    let certText = `<div class="cert-text">${name}</div>`;
    let certDate = `<div class="cert-date">${date}</div>`;
    let certItem = `<div class="cert-item">${certBadge}${certText}${certDate}</div>`;
    return certItem;
}

function addCertItem() {
    let certSection = document.querySelector(".cert-section");
    const certificates = [
        { name: "정보처리기능사", date: "2024-12-11" },
        { name: "컴퓨터활용능력2급", date: "2024-03-22" },
        { name: "ITQ 엑셀", date: "2022-06-30" },
    ];
    let rs = "";
    certificates.forEach((data) => {
        rs += CertItemDocument(data.name, data.date);
    });
    certSection.innerHTML += rs;
}

function EducationItemDocument(title, detail, date){
    let eduIcon = `<img class="edu-icon" src="images/calendar-icon.png">`;
    let eduTitle = `<div class="edu-title">${title}</div>`;
    let eduHeader = `<div class="edu-header">${eduIcon}${eduTitle}</div>`;

    let eduDetail = `<div class="edu-detail">${detail}<br>${date}</div>`;
    let educationItem = `<div class="education-item">${eduHeader}${eduDetail}</div>`;
    return educationItem;
}

function addEducationItem(){
    let studyEducation = document.querySelector(".study-education");
    const Education = [
        {title:"ICPC", detail:"경쟁 프로그래밍 대회에 참가함", date:"2025.10.11"},
        {title:"SUSC Study", detail:"알고리즘 및 자료구조 그룹 스터디 세션에 참여함", date:"2025.07.05 ~ 2025.08.10"},
    ];
    let rs = "";
    Education.forEach((data)=>{
        rs += EducationItemDocument(data.title, data.detail, data.date);
    });
    studyEducation.innerHTML += rs;         
}

function CompetencyItemDocument(title, description){
    let competencyTitle = `<div class="competency-title">${title}</div>`;
    let competencyDescription = `<div class="competency-description">${description}</div>`;
    let competencyItem = `<div class="competency-item">${competencyTitle}${competencyDescription}</div>`;
    
    return competencyItem;
}

function addCompetencyItem(){
    let competencys = document.querySelector("#competencys");
    const Competency = [
        {title:"1. CS 기반 원리 이해", description:`O(n²) 버블정렬을 O(n log n) 병합정렬로 전환하여 처리 시간 300ms → 40ms로 최적화 
        시간복잡도 및 내부 동작 구조를 기준으로 알고리즘 선택 및 설계 의사결정 수행`},
        {title:"2. 논리적 문제 해결 능력", description:`무한 루프 발생 케이스에서 재현 → 가설 → 로그 검증 → 수정 단계로 원인 식별
        조건 갱신 누락 문제 해결을 통해 비정상 종료 이슈 제거 (while 조건 갱신 로직 위치 재조정)`},
        {title:"3. 빠른 실전 적용력", description:`로또 번호 추천 서비스 기획 → UI/UX → 구현 → 배포까지 4일 내 완성 (개인 프로젝트) 
        핵심 기능 중심 MVP(최소 기능 제품) 개발: 자동 번호 추천, 최근 패턴 분석/시각화, 필터 기능`},
        {title:"4. 기획, UX 중심 사고", description:`네비게이션 구조 재설계로 기능 접근 경로 3단계 → 1단계로 축소, 사용자 행동 비용 감소. 
        기능 추가보다 사용 흐름과 경험 품질을 우선 고려하는 설계 방식 적용`},
    ];
    let rs = "";
    Competency.forEach((data)=>{
        rs += CompetencyItemDocument(data.title, data.description);
    });
    competencys.innerHTML += rs;
}

function skillItemDocument(imgSrc, name, description){
    const icon = `<img class="skill-icon" src="${imgSrc}">`;
    const skillName = `<span class="skill-name">${name}</span>`;
    const skillHeader = `<div class="skill-header">${icon}${skillName}</div>`;
    const skillDescription = `<div class="skill-description">${description}</div>`;
    const skillItem = `<div class="competency-item">${skillHeader}${skillDescription}</div>`;
    
    return skillItem;
}

function addSkillItem(){
    let skillContainer = document.querySelector("#skill-container");
    const skills = [
        {imgSrc:"images/learned-icon.png", name:"주요 사용 기술", description:`HTML, CSS, JavaScript (DOM 조작 및 로직 구현) C (독학 알고리즘, 논리적 사고)`},
        {imgSrc:"images/learning-icon.png", name:"현재 학습 중인 기술", description:`시스템 분석 및 설계, 고급 알고리즘, 지속적인 JavaScript 숙련도 향상`},
        {imgSrc:"images/tool-icon.png", name:"개발 및 협업 도구", description:`Visual Studio Code, GitHub(버전 관리), Figma (디자인 이해), Notion (문서화 및 스터디 조직)`}
    ];
    let rs = "";
    skills.forEach((data)=>{
        rs += skillItemDocument(data.imgSrc, data.name, data.description);
    });

    skillContainer.innerHTML += rs;
}