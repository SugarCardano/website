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

  // Video modal handler for ERA 01
  const playBtns = document.querySelectorAll('.play-video');
  playBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const id = this.getAttribute('data-video-id');
      if(!id) return;
      openVideoModal(id);
    });
  });

  function openVideoModal(videoId){
    // backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'video-modal-backdrop';
    backdrop.tabIndex = -1;

    const modal = document.createElement('div');
    modal.className = 'video-modal';

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src','https://www.youtube.com/embed/'+videoId+'?rel=0&autoplay=1');
    iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen','');
    iframe.setAttribute('title','SUGR — Video');

    const closeBtn = document.createElement('button');
    closeBtn.className = 'video-close';
    closeBtn.setAttribute('aria-label','Close video');
    closeBtn.textContent = '✕';

    const ytLink = document.createElement('div');
    ytLink.style.marginTop = '8px';
    ytLink.innerHTML = '<a href="https://youtu.be/'+videoId+'" target="_blank" rel="noopener noreferrer" style="color:#fff;font-weight:700">WATCH ON YOUTUBE ↗</a>';

    modal.appendChild(iframe);
    modal.appendChild(closeBtn);
    modal.appendChild(ytLink);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    // focus
    closeBtn.focus();

    function close(){
      document.body.removeChild(backdrop);
      document.removeEventListener('keydown', escHandler);
    }

    function escHandler(e){ if(e.key==='Escape') close(); }

    backdrop.addEventListener('click', function(e){ if(e.target===backdrop) close(); });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', escHandler);
  }
});
