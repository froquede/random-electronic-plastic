import { html, render } from './web_modules/lit-html.js';
import './components/entry.js';

render(html`
    <style>
        html, body {
            margin: 0%;
            padding: 0;
            box-sizing: border-box;
            height: 100vh;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #212121;
            padding: 5vw;
        }

        * {
            font-family: 'Nunito Sans', sans-serif;
            color: #fafafa;
        }
    </style>
    <random-item></random-item>
`, document.body);