(function(){
  // menu bar: page colour at the top, navy once the page is scrolled
  var hdr=document.querySelector('.hdr');
  function onScroll(){ if(hdr){ var s=(window.scrollY||document.documentElement.scrollTop||0)>40; hdr.classList.toggle('scrolled',s); hdr.classList.toggle('top',!s);} }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  // email link: the address is assembled only when the link is used
  document.querySelectorAll('a.mail').forEach(function(a){
    function build(){ var u=a.getAttribute('data-u').split('').reverse().join(''); var d=a.getAttribute('data-d').split('').reverse().join(''); a.href='mailto:'+u+'@'+d; }
    ['mouseover','focus','touchstart','click'].forEach(function(ev){ a.addEventListener(ev,build,{passive:true}); });
  });
  // poster zoom
  var box=document.querySelector('.lightbox');
  if(box){
    var img=box.querySelector('img');
    function close(){ box.classList.remove('open'); img.removeAttribute('src'); }
    document.querySelectorAll('[data-zoom]').forEach(function(b){
      b.addEventListener('click',function(){ img.src=b.getAttribute('data-zoom'); img.alt=b.getAttribute('aria-label')||'Poster'; var fc=box.querySelector('figcaption'); if(fc) fc.textContent=b.getAttribute('data-caption')||''; box.classList.add('open'); box.querySelector('button').focus(); });
    });
    box.addEventListener('click',close);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&box.classList.contains('open')) close(); });
  }
})();
