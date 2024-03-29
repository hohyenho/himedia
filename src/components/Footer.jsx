import React from 'react'

const Footer = () => {
	return (
		<footer id="footer" role="contentinfo">
			<div className="footer__inner">
				<div className="footer__text">
					<span>daifu</span>
					<span>© daifu</span>
				</div>
				<div className="footer__info">
					<div className="left">
						<div className="title">
							<a href="/">sign up</a>
						</div>
						<p className='desc'>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
					</div>
					<div className="right">
						<h3>social</h3>
						<ul>
							<li>
								<a href="/">youtube</a>
								<em>유튜브에 오시면 더 많은 강의를 볼 수 있습니다.</em>
							</li>
							<li>
								<a href="/">github</a>
								<em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
							</li>
							<li>
								<a href="/">tistory</a>
								<em>티스토리에 들어오시면 좋은 정보 볼 수 있습니다.</em>
							</li>
							<li>
								<a href="/">gsap</a>
								<em>GSAP를 공부하시고 오면 도움이 됩니다.</em>
							</li>
							<li>
								<a href="/">vite</a>
								<em>비트 강의도 곧 오픈 예정입니다.</em>
							</li>
							<li>
								<a href="/">react</a>
								<em>리액트 강의도 곧 오픈 예정입니다.</em>
							</li>
							<li>
								<a href="/">vue</a>
								<em>뷰 강의도 곧 오픈 예정입니다.</em>
							</li>
							<li>
								<a href="/">next</a>
								<em>넥스트 강의도 곧 오픈 예정입니다.</em>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer__right">
					© 2024 daifu<br />
					비상업용이며 포트폴리오로 제작하였습니다.
				</div>
			</div>
		</footer>
	)
}

export default Footer