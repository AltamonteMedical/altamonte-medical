
function packetData(){
  const form=document.getElementById('intakePacketForm'); const data={}; const groups={};
  form.querySelectorAll('input,select,textarea').forEach(el=>{
    if(!el.name)return;
    if(el.type==='checkbox'){groups[el.name]=groups[el.name]||[]; if(el.checked) groups[el.name].push(el.value);}
    else if(el.type==='radio'){ if(el.checked) data[el.name]=el.value; }
    else data[el.name]=el.value;
  });
  Object.keys(groups).forEach(k=>data[k]=groups[k]); return data;
}
function savePacket(){ localStorage.setItem('altamontePacket', JSON.stringify(packetData())); alert('Progress saved on this device.'); }
function loadPacket(){
  const raw=localStorage.getItem('altamontePacket'); if(!raw)return;
  const data=JSON.parse(raw); const form=document.getElementById('intakePacketForm');
  Object.keys(data).forEach(k=>{ form.querySelectorAll('[name="'+k+'"]').forEach(el=>{
    if(el.type==='checkbox' && Array.isArray(data[k])) el.checked=data[k].includes(el.value);
    else if(el.type==='radio') el.checked=el.value===data[k];
    else if(!Array.isArray(data[k])) el.value=data[k];
  })});
}
function downloadJSON(){
  const blob=new Blob([JSON.stringify(packetData(),null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='altamonte-intake-packet.json'; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),500);
}
function printPacket(){ window.print(); }
document.addEventListener('DOMContentLoaded', loadPacket);
