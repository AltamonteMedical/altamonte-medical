document.addEventListener("DOMContentLoaded",function(){
  var btn=document.getElementById("menuToggle");
  var menu=document.getElementById("mobileMenu");
  if(!btn||!menu)return;
  function openMenu(){menu.classList.add("open");btn.setAttribute("aria-expanded","true");document.body.classList.add("menu-open");}
  function closeMenu(){menu.classList.remove("open");btn.setAttribute("aria-expanded","false");document.body.classList.remove("menu-open");}
  btn.onclick=function(e){e.preventDefault();e.stopPropagation();menu.classList.contains("open")?closeMenu():openMenu();};
  menu.addEventListener("click",function(e){if(e.target===menu||e.target.closest("a"))closeMenu();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu();});
});
