(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59510,e=>{e.v({background:"eWjAEq_background"})},1155,e=>{"use strict";var t=e.i(43476),i=e.i(71645),o=e.i(59510);let r=`attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`,n=`precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float progress;
uniform bool premultipliedAlpha;
void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float x = uv.x * 1.7;
  float wave = 0.12 * sin(x * 1.8 + time * 0.19)
             + 0.06 * sin(x * 3.1 - time * 0.13);
  float cloth = uv.y - 0.5 - (uv.x - 0.5) * 0.36 - wave;
  float spread = 1.0 + 0.38 * sin(x * 1.7 - time * 0.12);
  float folds = cloth * 27.0 * spread
              + 1.2 * sin(cloth * 7.0 + x * 1.4 + time * 0.09);
  float ridge = pow(0.5 + 0.5 * cos(folds), 42.0);
  float silk = pow(0.5 + 0.5 * cos(folds * 0.47 + x * 0.8), 8.0);
  float envelope = exp(-cloth * cloth * 1.8);
  float light = (ridge * 0.34 + silk * 0.14) * envelope;
  float shade = 0.63 + 0.37 * sin(x * 1.3 - time * 0.11);
  vec3 tint = mix(vec3(0.788, 0.729, 0.596), vec3(0.424, 0.435, 0.392), progress);
  float opacity = light * shade * mix(0.20, 0.13, progress);
  gl_FragColor = vec4(premultipliedAlpha ? tint * opacity : tint, opacity);
}`;e.s(["HeroBackground",0,function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current,i=t.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,powerPreference:"low-power"});if(!i)return;let o=i.createProgram(),a=[i.VERTEX_SHADER,i.FRAGMENT_SHADER].map((e,t)=>{let a=i.createShader(e);return i.shaderSource(a,t?n:r),i.compileShader(a),i.attachShader(o,a),a});if(i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS)){a.forEach(e=>i.deleteShader(e)),i.deleteProgram(o);return}i.useProgram(o),i.uniform1i(i.getUniformLocation(o,"premultipliedAlpha"),+(i.getContextAttributes()?.premultipliedAlpha!==!1));let l=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,l),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);let c=i.getAttribLocation(o,"position");i.enableVertexAttribArray(c),i.vertexAttribPointer(c,2,i.FLOAT,!1,0,0);let s=i.getUniformLocation(o,"resolution"),m=i.getUniformLocation(o,"time"),d=i.getUniformLocation(o,"progress"),u=matchMedia("(prefers-reduced-motion: reduce)"),h=0,f=!0,p=document.documentElement.classList.contains("motion-paused"),g=0,v=0,A=!0;function b(e){h=0,!g||u.matches||p||(v+=Math.min(e-g,50)),g=e,A&&(i.uniform1f(d,Number(document.documentElement.style.getPropertyValue("--theme-progress"))||0),A=!1),i.uniform1f(m,v/1e3+7),i.drawArrays(i.TRIANGLE_STRIP,0,4),!f||document.hidden||u.matches||p||(h=requestAnimationFrame(b))}function x(){cancelAnimationFrame(h),h=0,g=0,f&&!document.hidden&&(h=requestAnimationFrame(b))}let E=new ResizeObserver(()=>{let e=Math.min(devicePixelRatio||1,1.25,Math.sqrt(1e6/(t.clientWidth*t.clientHeight)));t.width=Math.max(1,Math.round(t.clientWidth*e)),t.height=Math.max(1,Math.round(t.clientHeight*e)),i.viewport(0,0,t.width,t.height),i.uniform2f(s,t.width,t.height),x()});E.observe(t);let R=new IntersectionObserver(([e])=>{f=e.isIntersecting,x()});R.observe(t);let w=new MutationObserver(e=>{e.some(e=>"style"===e.attributeName)&&(A=!0);let t=document.documentElement.classList.contains("motion-paused");t!==p?(p=t,x()):h||!f||document.hidden||(h=requestAnimationFrame(b))});return w.observe(document.documentElement,{attributes:!0,attributeFilter:["style","class"]}),document.addEventListener("visibilitychange",x),u.addEventListener("change",x),()=>{cancelAnimationFrame(h),E.disconnect(),R.disconnect(),w.disconnect(),document.removeEventListener("visibilitychange",x),u.removeEventListener("change",x),i.deleteBuffer(l),a.forEach(e=>i.deleteShader(e)),i.deleteProgram(o)}},[]),(0,t.jsx)("canvas",{ref:e,className:o.default.background,"aria-hidden":"true"})}])}]);