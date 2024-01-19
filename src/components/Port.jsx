import React from 'react';
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port01.jpg";
import port05 from "../assets/img/port02.jpg";
import port06 from "../assets/img/port03.jpg";

const portTExt = [
	{
		num: "01",
		site: "http://jok874.dothome.co.kr/main/",
		img: port01,
		title: "Team Ace 팀프로젝트",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "02",
		site: "http://kimmina.dothome.co.kr/hwasung/",
		img: port02,
		title: "화성 포트폴리오",
		desc: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "03",
		site: "http://dongbinhosting.dothome.co.kr/team/",
		img: port03,
		title: "C팀 포트폴리오",
		desc: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "04",
		site: "http://jok874.dothome.co.kr/main/",
		img: port04,
		title: "Team Ace 팀프로젝트",
		desc: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "05",
		site: "http://kimmina.dothome.co.kr/hwasung/",
		img: port05,
		title: "화성 포트폴리오",
		desc: "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "06",
		site: "http://dongbinhosting.dothome.co.kr/team/",
		img: port06,
		title: "C팀 포트폴리오",
		desc: "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
]

const Port = () => {
	return (
		<section id="port">
			<div class="port__inner">
				<div class="port__title">
					portfolio <em>포폴 작업물</em>
				</div>
				<div class="port__wrap">
					{portTExt.map((port, key) => (
						<article class={`port__item p${key + 1}`} key={key}>
							<span class="num">{port.num}</span>
							<a href={port.site} target="_blank" class="img">
								<img src={port.img} alt={port.title} />
							</a>
							<h3 class="title">{port.title}</h3>
							<p class="desc">{port.desc}</p>
							<a href={port.site} target="_blank" class="site">사이트 보기</a>
						</article>
					))}


				</div>
			</div>
		</section>
	)
}

export default Port