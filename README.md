
<div align="center">
<img src="./public/logo.png" alt="CSSX Logo" width="132" height="132">
</div>
</br>
<details open>
<summary><b>Motivation 🔥</b></summary>
<div align="center">
<h1>CSSX</h1>
<p>
<section><b>The Beginning...</b></section>

The logic behind CSSX started because I was tired of fighting with responsive layouts. I needed a single function that actually did what I wanted without the usual headaches.
<br />
To make it work, I refined the <a href="./algorithm/main.ts"><code>GenerateClamp</code></a> algorithm and built the <a href="./services/device"><code>useDevice</code></a> service. I even added <a href="./services/zoom"><code>useZoom</code></a> just so I could finally have real control over how the browser handles zooming.
<br />
<section><b>How useResponsive was founded</b></section>
Things didn't go perfectly at first 😞. The layout was responsive, but the code became a mess of <code>useDevice</code> calls and <code>counterScale</code> logic to fix zoom issues. Undoing changes was a nightmare.
<br />
That’s why I created <a href="./services/responsive"><code>useResponsive</code></a>. It focuses on the basics: shapes and the clamp function. Why shapes? Because everything—buttons, layouts, boxes—is just a shape. By focusing on the geometry instead of overcomplicating the CSS, the whole process just clicked.
</p>
</div>
</details>
</br>

<details open>
<summary><b>Development Insights 😅</b></summary>
<p>
<ul>
<li>
<b>Upcoming:</b> CutScene-Player, Filters, Overlay, Range-Slider, Scrollbox, Sequence, Typewriter
</li>
<li><b>Algorithm Iteration:</b> The <code>GenerateClamp</code> function underwent over 300 iterations. It transitioned from <code>lazyGenerateClamp</code> to a version-controlled function that offers granular control over fluid typography and spacing.</li>
<li><b>The Zoom Challenge:</b> Integrating <code>useZoom</code> presented significant challenges, requiring a complete refactor of the <code>GenerateClamp</code> logic to ensure compatibility with browser scaling behaviors.</li>
<li><b>Optimization:</b> While <code>useResponsive</code> streamlines the workflow, achieving "pixel-perfect" responsiveness still involves precise parameter tuning and rigorous testing across various device profiles.</li>
</ul>

</p>
</details>

<br />
<div align="center">
  <small>© 2026 CSSX. Built with passion and a lot of iterations. 🚀</small>
</div>