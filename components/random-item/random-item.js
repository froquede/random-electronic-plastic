import { LitElement, html, css } from '../../web_modules/lit-element.js';
import data from '../../result.js';

class RandomItem extends LitElement {
	constructor() {
		super();
	}

	static get styles() {
		return css`
			a {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: #fafafa;
				text-decoration: none;
				box-sizing: border-box;
				padding: 20px;
				transition: .2s ease all;
				margin-bottom: 10vh;
			}

			a:hover {
				background: rgba(255, 255, 255, .1);
				border-radius: 8px;
				transition: .2s ease all;
			}

			img {
				max-width: 200px;
				border-radius: 8px;
				margin-bottom: 12px;
			}

			p {
				margin: 0;
				text-align: center;
			}

			.name {
				font-size: 24px;
				font-weight: bold;
			}

			.note {
				font-size: 12px;
				margin-bottom: 12px;
			}

			.refresh {
				width: 200px;
				position: fixed;
				bottom: 10vh;
				left: calc(50% - 100px);
				text-align: center;
				text-transform: uppercase;
				border-radius: 4px;
				border: 2px solid #fafafa;
				box-sizing: border-box;
				padding: 12px;
				cursor: pointer;
				transition: .2s ease all;
			}

			.refresh:hover {
				color: #f75854;
				border-color: #f75854;
				transition: .2s ease all;
			}

			.__noselect {
				-webkit-touch-callout: none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}
		`;
	}

	render() {
		return html`
			${this.random()}
			<div class="refresh __noselect" @click=${this.refresh}>
				random game
			</div>
		`;
	}

	random() {
		let rand = Math.floor(Math.random() * data.length);
		let item = data[rand];
		return html`
			<a href="${item.url}" target="_blank" title="Click to see the details page!">
				<!-- <p class="note">click to see more</p> -->
				<img src="${item.image}"/>
				<p class="name">${item.name}</p>
				<p>${item.company} (year ${item.year})</p>
			</a>
		`;
	}

	refresh() {
		this.requestUpdate();
	}
}

customElements.define('random-item', RandomItem);

export default RandomItem; 
