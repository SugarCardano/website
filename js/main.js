// Minimal JS for mobile menu accessibility
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(expanded){
      menu.hidden = true;
    } else {
      menu.hidden = false;
    }
  });
  
  // Copy policy id handler (small, unobtrusive)
  const copyBtns = document.querySelectorAll('.copy-policy');
  copyBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      const policy = this.getAttribute('data-policy');
      if(!policy) return;
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(policy).then(()=>{
          const old = this.textContent;
          this.textContent = 'COPIED';
          setTimeout(()=>{ this.textContent = old; }, 1400);
        }).catch(()=>{
          // fallback: select text in pre and prompt
          const el = document.getElementById('policy-id');
          if(el){
            try{ const range = document.createRange(); range.selectNodeContents(el); const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range); }
            catch(e){}
          }
        });
      }
    });
  });
});
