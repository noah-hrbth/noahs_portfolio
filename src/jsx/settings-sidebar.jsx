import React from "react";

export class SettingsSidebar extends React.Component {
	render() {
		return (
			<aside className="settings-sidebar" aria-hidden="true">
				<button
					type="button"
					className="close-button"
					title="Close settings"
					tabIndex="-1"
				>
					<svg
						version="1.1"
						viewBox="0 -100 700 700"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m333.43 389.9c4.3828 4.418 10.344 6.9023 16.566 6.9023s12.184-2.4844 16.566-6.9023l93.332-93.332c5.9219-5.918 8.2305-14.547 6.0664-22.629-2.168-8.0859-8.4844-14.402-16.566-16.566-8.0859-2.168-16.715 0.14453-22.633 6.0625l-53.434 53.668v-223.77c0-8.3359-4.4453-16.039-11.664-20.207s-16.117-4.168-23.336 0-11.664 11.871-11.664 20.207v223.77l-53.434-53.668v0.003906c-5.918-5.918-14.547-8.2305-22.633-6.0625-8.082 2.1641-14.398 8.4805-16.566 16.566-2.1641 8.082 0.14453 16.711 6.0664 22.629z" />
					</svg>
				</button>
				<ul className="settings-sidebar__list">
					<li
						className="settings-sidebar__item theme-toggle-container"
						title="dark mode toggle"
					>
						<label htmlFor="theme-toggle__checkbox">
							<div className="theme-toggle">
								<input
									id="theme-toggle__checkbox"
									className="theme-toggle__checkbox"
									type="checkbox"
									tabIndex="-1"
								/>
							</div>
							<h4>Toggle Theme</h4>
						</label>
					</li>
					<li
						className="settings-sidebar__item adhd-toggle-container"
						title="adhd/dyslexia friendly text toggle"
					>
						<label className="adhd-toggle__label" htmlFor="adhd-toggle__checkbox">
							<div className="adhd-toggle">
								<input
									type="checkbox"
									id="adhd-toggle__checkbox"
									className="adhd-toggle__checkbox"
									tabIndex="-1"
								/>
								<svg
									version="1.1"
									viewBox="0 -75 700 700"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m523.6 173.6c0-17.824-7.082-34.918-19.684-47.52s-29.695-19.684-47.52-19.684h-21.445c-5.7031-0.11328-11.246 1.8906-15.559 5.625-4.3125 3.7344-7.0898 8.9336-7.793 14.594-0.62109 6.3086 1.4648 12.582 5.7344 17.27 4.2695 4.6875 10.324 7.3438 16.664 7.3125h22.398c5.9414 0 11.641 2.3594 15.84 6.5625 4.2031 4.1992 6.5625 9.8984 6.5625 15.84v21.449-0.003906c-0.11328 5.7031 1.8906 11.246 5.625 15.559 3.7305 4.3125 8.9297 7.0898 14.59 7.793 6.3086 0.62109 12.586-1.4648 17.27-5.7344 4.6875-4.2695 7.3438-10.324 7.3164-16.664z" />
									<path d="m200.98 218.4c5.6602-0.70313 10.859-3.4805 14.59-7.793 3.7344-4.3125 5.7383-9.8555 5.625-15.559v-21.445c0-5.9414 2.3594-11.641 6.5625-15.84 4.1992-4.2031 9.8984-6.5625 15.84-6.5625h21.449-0.003906c5.7031 0.11328 11.246-1.8906 15.559-5.625 4.3125-3.7305 7.0898-8.9297 7.793-14.59 0.62109-6.3086-1.4648-12.586-5.7344-17.27-4.2695-4.6875-10.324-7.3438-16.664-7.3164h-22.398c-17.824 0-34.918 7.082-47.52 19.684s-19.684 29.695-19.684 47.52v22.398c-0.027344 6.3398 2.6289 12.395 7.3164 16.664 4.6836 4.2695 10.961 6.3555 17.27 5.7344z" />
									<path d="m176.4 386.4c0 17.824 7.082 34.918 19.684 47.52s29.695 19.684 47.52 19.684h21.449-0.003906c5.7031 0.11328 11.246-1.8906 15.559-5.625 4.3125-3.7344 7.0898-8.9336 7.793-14.594 0.62109-6.3086-1.4648-12.582-5.7344-17.27-4.2695-4.6875-10.324-7.3438-16.664-7.3125h-22.398c-5.9414 0-11.641-2.3594-15.84-6.5625-4.2031-4.1992-6.5625-9.8984-6.5625-15.84v-21.445c0.11328-5.7031-1.8906-11.246-5.625-15.559-3.7305-4.3125-8.9297-7.0898-14.59-7.793-6.3086-0.62109-12.586 1.4648-17.27 5.7344-4.6875 4.2695-7.3438 10.324-7.3164 16.664z" />
									<path d="m434 453.6h22.398c17.824 0 34.918-7.082 47.52-19.684s19.684-29.695 19.684-47.52v-22.398c0.027344-6.3398-2.6289-12.395-7.3164-16.664-4.6836-4.2695-10.961-6.3555-17.27-5.7344-5.6602 0.70313-10.859 3.4805-14.59 7.793-3.7344 4.3125-5.7383 9.8555-5.625 15.559v21.445c0 5.9414-2.3594 11.641-6.5625 15.84-4.1992 4.2031-9.8984 6.5625-15.84 6.5625h-21.445c-5.7031-0.11328-11.246 1.8906-15.559 5.625-4.3125 3.7305-7.0898 8.9297-7.793 14.59-0.62109 6.3086 1.4648 12.586 5.7344 17.27 4.2695 4.6875 10.324 7.3438 16.664 7.3164z" />
									<path d="m350 369.6c5.9414 0 11.637-2.3633 15.84-6.5625 4.1992-4.1992 6.5586-9.8984 6.5586-15.84v-100.8h33.602c8.0039 0 15.398-4.2695 19.398-11.199 4-6.9297 4-15.469 0-22.398-4-6.9297-11.395-11.199-19.398-11.199h-112c-8.0039 0-15.398 4.2695-19.398 11.199-4 6.9297-4 15.469 0 22.398 4 6.9297 11.395 11.199 19.398 11.199h33.602v100.8c0 5.9414 2.3594 11.641 6.5586 15.84 4.2031 4.1992 9.8984 6.5625 15.84 6.5625z" />
								</svg>
							</div>
							<h4>Toggle ADHD/Dyslexia Text</h4>
						</label>
					</li>
				</ul>
				<p className="adhd-example-text animation__slide-out-to-top">
					<strong>Thi</strong>s <strong>i</strong>s <strong>a</strong>n
					<strong>examp</strong>le <strong>Tex</strong>t <strong>wit</strong>h
					<strong>adhd/dysle</strong>xia <strong>friend</strong>ly
					<strong>tex</strong>t <strong>enabl</strong>ed. <strong>Tes</strong>t
					<strong>i</strong>f <strong>yo</strong>u <strong>ca</strong>n
					<strong>rea</strong>d <strong>th</strong>e <strong>tex</strong>t
					<strong>bett</strong>er <strong>an</strong>d <strong>fast</strong>er
					<strong>no</strong>w.
				</p>
			</aside>
		);
	}
}
