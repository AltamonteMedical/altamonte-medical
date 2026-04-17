
function toggleSiteMenu(id='mobileSiteMenu', button=null){
  const menu = document.getElementById(id);
  const btn = button || document.querySelector('[data-menu-button="'+id+'"]');
  if(!menu) return;
  const isOpen = menu.classList.toggle('open');
  if(btn){ btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); }
}

document.addEventListener('click', function(e){
  document.querySelectorAll('.mobile-site-menu').forEach(function(menu){
    const btn = document.querySelector('[data-menu-button="'+menu.id+'"]');
    if(!menu.contains(e.target) && (!btn || !btn.contains(e.target))){
      menu.classList.remove('open');
      if(btn){ btn.setAttribute('aria-expanded', 'false'); }
    }
  });
});

function toggleCallMenu(){
  const menu = document.getElementById('floatingCallOptions');
  if(menu){ menu.classList.toggle('open'); }
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[data-call-track="true"]').forEach(function(link) {
    link.addEventListener('click', function() {
      const office = link.getAttribute('data-office') || '';
      const officeName = office === 'alafaya' ? 'Alafaya Orlando Office' : 'Altamonte Springs Office';
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'call_click',
          office: office,
          office_label: officeName,
          destination: link.getAttribute('href') || ''
        });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'call_click', {
          office: office,
          office_label: officeName,
          destination: link.getAttribute('href') || ''
        });
      }
    });
  });
});
