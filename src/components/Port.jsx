import React from 'react';
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port01.jpg";
import port05 from "../assets/img/port02.jpg";
import port06 from "../assets/img/port03.jpg";


const Port = () => {
	return (
		<section id="port">
			<div class="port__inner">
				<div class="port__title">
					portfolio <em>포폴 작업물</em>
				</div>
				<div class="port__wrap">
					<article class="port__item p1">
						<span class="num">01.</span>
						<a href="http://jok874.dothome.co.kr/main/" target="_blank" class="img">
							<img src={port01} alt="TeamACE 포트폴리오" />
						</a>
						<h3 class="title">Team Ace 팀프로젝트</h3>
						<p class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam
							facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam
							tenetur in dolores officia voluptatum?
						</p>
						<a href="http://jok874.dothome.co.kr/main/" target="_blank" class="site">사이트 보기</a>
					</article>
					<article class="port__item p2">
						<span class="num">02.</span>
						<a href="http://kimmina.dothome.co.kr/hwasung/" class="img" target="_blank">
							<img src={port02} alt="화성 포트폴리오" />
						</a>
						<h3 class="title">화성 포트폴리오</h3>
						<p class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam
							facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam
							tenetur in dolores officia voluptatum?
						</p>
						<a href="http://kimmina.dothome.co.kr/hwasung/" target="_blank" class="site">사이트 보기</a>
					</article>
					<article class="port__item p3">
						<span class="num">03.</span>
						<a href="http://dongbinhosting.dothome.co.kr/team/" class="img" target="_blank">
							<img src={port03} alt="C팀 포트폴리오" />
						</a>
						<h3 class="title">Team_C 포트폴리오</h3>
						<p class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam
							facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam
							tenetur in dolores officia voluptatum?
						</p>
						<a href="http://dongbinhosting.dothome.co.kr/team/" target="_blank" class="site">사이트 보기</a>
					</article>
					<article class="port__item p4">
						<span class="num">04.</span>
						<a href="http://jok874.dothome.co.kr/main/" target="_blank" class="img">
							<img src={port04} alt="TeamACE 포트폴리오" />
						</a>
						<h3 class="title">Team Ace 팀프로젝트</h3>
						<p class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam
							facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam
							tenetur in dolores officia voluptatum?
						</p>
						<a href="http://jok874.dothome.co.kr/main/" target="_blank" class="site">사이트 보기</a>
					</article>
					<article class="port__item p5">
						<span class="num">05.</span>
						<a href="http://kimmina.dothome.co.kr/hwasung/" class="img" target="_blank">
							<img src={port05} alt="화성 포트폴리오" />
						</a>
						<h3 class="title">화성 포트폴리오</h3>
						<p class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam
							facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam
							tenetur in dolores officia voluptatum?
						</p>
						<a href="http://kimmina.dothome.co.kr/hwasung/" target="_blank" class="site">사이트 보기</a>
					</article>
					<article class="port__item p6">
						<span class="num">06.</span>
						<a href="http://dongbinhosting.dothome.co.kr/team/" class="img" target="_blank">
							<img src={port06} alt="여다슬 포트폴리오" />
						</a>
						<h3 class="title">Team_C 포트폴리오</h3>
						<p class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam
							facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam
							tenetur in dolores officia voluptatum?
						</p>
						<a href="http://dongbinhosting.dothome.co.kr/team/" target="_blank" class="site">사이트 보기</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Port