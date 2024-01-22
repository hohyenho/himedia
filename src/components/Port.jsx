import React, { useEffect, useRef } from 'react';
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port01.jpg";
import port05 from "../assets/img/port02.jpg";
import port06 from "../assets/img/port03.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const portText = [
	{
		num: "01",
		title: "Team Ace 팀프로젝트",
		site: "http://jok874.dothome.co.kr/main/",
		img: port01,
		desc: "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam 		facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",
		alt: "TeamACE 포트폴리오",
	},
	{
		num: "02",
		title: "화성 포트폴리오",
		site: "http://kimmina.dothome.co.kr/hwasung/",
		img: port02,
		desc: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam 		facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",
		alt: "화성 포트폴리오",
	},
	{
		num: "03",
		title: "Team_C 포트폴리오",
		site: "http://dongbinhosting.dothome.co.kr/team/",
		img: port03,
		desc: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam 		facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",
		alt: "Team_C 포트폴리오",
	},
	{
		num: "04",
		title: "Team Ace 팀프로젝트",
		site: "http://jok874.dothome.co.kr/main/",
		img: port04,
		desc: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam 		facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",
		alt: "TeamACE 포트폴리오",
	},
	{
		num: "05",
		title: "화성 포트폴리오",
		site: "http://kimmina.dothome.co.kr/hwasung/",
		img: port05,
		desc: "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam 		facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",
		alt: "화성 포트폴리오",
	},
	{
		num: "06",
		title: "Team_C 포트폴리오",
		site: "http://dongbinhosting.dothome.co.kr/team/",
		img: port06,
		desc: "6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam 	facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",
		alt: "Team_C 포트폴리오",
	},
]


const Port = () => {

	const horizontalRef = useRef(null);
	//useRef(null) : 변수를 생성하고 초기화...
	const sectionsRef = useRef([]);
	// useRef([]) 변수를 생성하고 빈배열로 초기화...


	useEffect(() => {
		//useEffect(()=>{}) : 컴퍼넌트가 랜더링될때 어떠한 작업을 수행하도록 해야한다면, 그것을 설정해주는 hook명령

		gsap.registerPlugin(ScrollTrigger);
		//트리거는 어느 특정한 동작에 반응해 자동으로 필요한 동작을 실행하는것을 말한다.
		//ScrollTrigger 플러그인을 등록함.

		const horizontal = horizontalRef.current;
		//horizontalRef의 현재값을 horizontal에 대입
		const sections = sectionsRef.current;
		//sectionsRef 현재값 배열요소를 sections 대입

		let scrollTween = gsap.to(sections, {
			xPercent: -120 * (sections.length - 1),
			scrollTrigger: {
				trigger: horizontal,
				start: "top 56px",
				end: () => "+=" + horizontal.offsetWidth,
				pin: true,
				//활성상태에서 트리거 요소 고정
				scrub: 1,
				//스크롤이 화면움직임을 따라가는데 1초걸림			
			},
		});

		return () => {
			scrollTween.kill();
			//스크롤 애니메이셔을 제거합니다. 컴포턴트가 언마운팅할때 메모리 누수를 방지해줌.
			//마운트 : 화면에 데이터가 보여지는 것을 의미함
		}

	}, []);


	//맨 처음 렝더링될때만 실행하고 업데이트될때는 실행안할때는 ,[] 빈 배열을 넣어주면된다.
	// useEffect(() => {
	//   console.log("렌더링 완료. 마운트될 때만 실행");
	// }, []);  또는 [name]을 넣어주면  name가 바뀔때마다 실행하다.


	return (

		<section id="port" ref={horizontalRef}>
			<div className="port__inner">
				<div className="port__title">
					portfolio <em>포폴 작업물</em>
				</div>
				<div className="port__wrap">

					{portText.map((port, key) => (
						<article className={`port__item p${key + 1}`} key={key}
							ref={(el) => (sectionsRef.current[key] = el)}
						>
							<span className="num">{port.num}</span>
							<a href={port.site} target="_blank" className="img">
								<img src={port.img} alt={port.alt} />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">
								{port.desc}
							</p>
							<a href={port.site} target="_blank" className="site">사이트 보기</a>
						</article>
					))}



				</div>
			</div>
		</section>
	)
}

export default Port