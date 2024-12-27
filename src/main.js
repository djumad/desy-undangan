import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
