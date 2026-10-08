const h=document.querySelector('header'),b=document.querySelector('.burger'),m=document.querySelector('nav>ul');
const tog=()=>h.classList.toggle('solid',scrollY>40);tog();addEventListener('scroll',tog,{passive:true});
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.1});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));
