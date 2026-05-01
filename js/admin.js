/* Admin Panel JS — Shanthi Weda Madhura */
'use strict';

const REPO='kanchu12345/spa', BRANCH='main', MAIN_JS='js/main.js';
const DEFAULT_PW_HASH='71e53e74f9f8b46741b5105cfff33e3f67e4345cfcdd424237db8f07506088c4'; // shanthi2026

/* ── Helpers ── */
async function sha256(msg){const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(msg));return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');}
function $(id){return document.getElementById(id);}
function showToast(msg,type='success'){const t=document.createElement('div');t.className=`toast ${type}`;t.innerHTML=`<i class="fa-solid ${type==='success'?'fa-check-circle':'fa-circle-exclamation'}"></i> ${msg}`;$('toast-container').appendChild(t);setTimeout(()=>t.remove(),4000);}
function openModal(id){$(id).classList.add('active');}
function closeModal(id){$(id).classList.remove('active');}
function b64Dec(s){return decodeURIComponent(atob(s).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join(''));}
function b64Enc(s){return btoa(encodeURIComponent(s).replace(/%([0-9A-F]{2})/g,(_,p)=>String.fromCharCode('0x'+p)));}

/* ── Auth State ── */
let ghToken=localStorage.getItem('swm_gh_token')||'';
let storedHash=localStorage.getItem('swm_pw_hash')||DEFAULT_PW_HASH;
let mainJsSha='', mainJsContent='';

/* ── Data (localStorage) ── */
function getData(){try{return JSON.parse(localStorage.getItem('swm_data')||'null')||{treatments:[],packages:[]};}catch{return{treatments:[],packages:[]};}}
function saveData(d){localStorage.setItem('swm_data',JSON.stringify(d));}

/* ── Init ── */
window.addEventListener('DOMContentLoaded',()=>{
  if(sessionStorage.getItem('swm_auth')==='1') showDash();
  else showLogin();

  $('login-btn').addEventListener('click', doLogin);
  $('password-input').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  $('logout-btn').addEventListener('click',()=>{sessionStorage.removeItem('swm_auth');showLogin();});

  // Tabs
  document.querySelectorAll('.main-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.main-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
      tab.classList.add('active');
      $(tab.dataset.target).classList.add('active');
      if(tab.dataset.target==='tab-gallery') initGallery();
    });
  });

  // Close buttons
  document.querySelectorAll('[data-close]').forEach(btn=>{
    btn.addEventListener('click',()=>closeModal(btn.dataset.close));
  });
  document.querySelectorAll('.modal-overlay').forEach(m=>{
    m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id);});
  });

  // Lang tabs in treatment modal
  document.querySelectorAll('.lang-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.lang-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.lang-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.lang-panel[data-lang-panel="${tab.dataset.langTab}"]`).classList.add('active');
    });
  });

  // Lang tabs in package modal
  document.querySelectorAll('.pkg-lang-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.pkg-lang-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.pkg-lang-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.pkg-lang-panel[data-lang-panel="${tab.dataset.langTab}"]`).classList.add('active');
    });
  });

  // Treatments
  $('add-treatment-btn').addEventListener('click',()=>openTreatmentModal());
  $('save-treatment-btn').addEventListener('click', saveTreatment);

  // Packages
  $('add-package-btn').addEventListener('click',()=>openPackageModal());
  $('save-package-btn').addEventListener('click', savePackage);

  // Delete confirm
  $('confirm-delete-btn').addEventListener('click', doDelete);

  // Settings
  $('save-gh-token-btn').addEventListener('click', saveGhToken);
  $('test-gh-token-btn').addEventListener('click', testGhToken);
  $('change-pw-btn').addEventListener('click', changePw);
  $('publish-btn').addEventListener('click', publishToGithub);

  // Gallery
  $('refresh-images-btn').addEventListener('click', loadImages);
  initUploadModal();

  // Preload settings field
  if(ghToken) $('settings-gh-token').value=ghToken;
});

/* ── Login ── */
async function doLogin(){
  const pw=$('password-input').value.trim();
  if(!pw){$('login-error').textContent='Please enter your password.';return;}
  $('login-btn').disabled=true;$('login-btn').textContent='Checking...';
  const hash=await sha256(pw);
  if(hash===storedHash){
    sessionStorage.setItem('swm_auth','1');
    showDash();
  } else {
    $('login-error').textContent='Incorrect password. Please try again.';
    $('password-input').value='';
  }
  $('login-btn').disabled=false;$('login-btn').innerHTML='<i class="fa-solid fa-right-to-bracket"></i> Login';
}

function showLogin(){
  $('login-section').classList.add('active');
  $('dashboard-section').classList.remove('active');
  $('password-input').value='';$('login-error').textContent='';
  setTimeout(()=>$('password-input').focus(),100);
}

function showDash(){
  $('login-section').classList.remove('active');
  $('dashboard-section').classList.add('active');
  renderOverview();
  renderTreatments();
  renderPackages();
  updateGhStatus();
}

/* ── Overview ── */
function renderOverview(){
  const d=getData();
  $('ov-treatments').textContent=d.treatments.length;
  $('ov-packages').textContent=d.packages.length;
}

function updateGhStatus(){
  const el=$('github-status');const txt=$('gh-status-text');
  if(ghToken){txt.textContent='GitHub: Connected ✓';el.style.color='#28a745';}
  else{txt.textContent='GitHub: Not configured — go to Settings';el.style.color='#888';}
}

/* ═══════════════════════════════
   TREATMENTS CRUD
═══════════════════════════════ */
let editTreatIdx=-1;

function renderTreatments(){
  const d=getData();
  const tbody=$('treatments-tbody');
  tbody.innerHTML='';
  if(!d.treatments.length){$('treatments-empty').classList.remove('hidden');return;}
  $('treatments-empty').classList.add('hidden');
  d.treatments.forEach((t,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td><strong>${escHtml(t.en.name||'')}</strong></td><td class="desc-preview">${escHtml(t.en.desc||'')}</td>
    <td class="actions">
      <button class="icon-btn edit" title="Edit" onclick="openTreatmentModal(${i})"><i class="fa-solid fa-pen"></i></button>
      <button class="icon-btn delete" title="Delete" onclick="askDelete('treatment',${i})"><i class="fa-solid fa-trash"></i></button>
    </td>`;
    tbody.appendChild(tr);
  });
  $('ov-treatments').textContent=d.treatments.length;
}

function openTreatmentModal(idx=-1){
  editTreatIdx=idx;
  clearTreatmentForm();
  if(idx>=0){
    const t=getData().treatments[idx];
    $('treatment-modal-title').textContent='Edit Treatment';
    $('t-en-name').value=t.en.name||'';$('t-en-desc').value=t.en.desc||'';
    $('t-si-name').value=t.si.name||'';$('t-si-desc').value=t.si.desc||'';
    $('t-ta-name').value=t.ta.name||'';$('t-ta-desc').value=t.ta.desc||'';
  } else {
    $('treatment-modal-title').textContent='Add Treatment';
  }
  // reset lang tabs to EN
  document.querySelectorAll('.lang-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.lang-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.lang-tab[data-lang-tab="en"]').classList.add('active');
  document.querySelector('.lang-panel[data-lang-panel="en"]').classList.add('active');
  openModal('treatment-modal');
  setTimeout(()=>$('t-en-name').focus(),100);
}

function clearTreatmentForm(){
  ['t-en-name','t-en-desc','t-si-name','t-si-desc','t-ta-name','t-ta-desc'].forEach(id=>{$(id).value='';});
}

function saveTreatment(){
  const name=$('t-en-name').value.trim();
  if(!name){showToast('English name is required.','error');return;}
  const item={
    en:{name:$('t-en-name').value.trim(),desc:$('t-en-desc').value.trim()},
    si:{name:$('t-si-name').value.trim(),desc:$('t-si-desc').value.trim()},
    ta:{name:$('t-ta-name').value.trim(),desc:$('t-ta-desc').value.trim()}
  };
  const d=getData();
  if(editTreatIdx>=0) d.treatments[editTreatIdx]=item;
  else d.treatments.push(item);
  saveData(d);
  closeModal('treatment-modal');
  renderTreatments();
  showToast(editTreatIdx>=0?'Treatment updated!':'Treatment added!');
}

/* ═══════════════════════════════
   PACKAGES CRUD
═══════════════════════════════ */
let editPkgIdx=-1;

function renderPackages(){
  const d=getData();
  const tbody=$('packages-tbody');
  tbody.innerHTML='';
  if(!d.packages.length){$('packages-empty').classList.remove('hidden');return;}
  $('packages-empty').classList.add('hidden');
  d.packages.forEach((p,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td><strong>${escHtml(p.en.title||'')}</strong></td><td class="desc-preview">${escHtml(p.en.sub||'')}</td>
    <td class="actions">
      <button class="icon-btn edit" title="Edit" onclick="openPackageModal(${i})"><i class="fa-solid fa-pen"></i></button>
      <button class="icon-btn delete" title="Delete" onclick="askDelete('package',${i})"><i class="fa-solid fa-trash"></i></button>
    </td>`;
    tbody.appendChild(tr);
  });
  $('ov-packages').textContent=d.packages.length;
}

function openPackageModal(idx=-1){
  editPkgIdx=idx;
  clearPackageForm();
  if(idx>=0){
    const p=getData().packages[idx];
    $('package-modal-title').textContent='Edit Package';
    $('p-en-label').value=p.en.label||'';$('p-en-title').value=p.en.title||'';
    $('p-en-sub').value=p.en.sub||'';$('p-en-desc').value=p.en.desc||'';
    $('p-si-label').value=p.si.label||'';$('p-si-title').value=p.si.title||'';
    $('p-si-sub').value=p.si.sub||'';$('p-si-desc').value=p.si.desc||'';
    $('p-ta-label').value=p.ta.label||'';$('p-ta-title').value=p.ta.title||'';
    $('p-ta-sub').value=p.ta.sub||'';$('p-ta-desc').value=p.ta.desc||'';
  } else {
    $('package-modal-title').textContent='Add Package';
  }
  document.querySelectorAll('.pkg-lang-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.pkg-lang-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.pkg-lang-tab[data-lang-tab="en"]').classList.add('active');
  document.querySelector('.pkg-lang-panel[data-lang-panel="en"]').classList.add('active');
  openModal('package-modal');
  setTimeout(()=>$('p-en-title').focus(),100);
}

function clearPackageForm(){
  ['p-en-label','p-en-title','p-en-sub','p-en-desc','p-si-label','p-si-title','p-si-sub','p-si-desc','p-ta-label','p-ta-title','p-ta-sub','p-ta-desc'].forEach(id=>{$(id).value='';});
}

function savePackage(){
  const title=$('p-en-title').value.trim();
  if(!title){showToast('English title is required.','error');return;}
  const item={
    en:{label:$('p-en-label').value.trim(),title:$('p-en-title').value.trim(),sub:$('p-en-sub').value.trim(),desc:$('p-en-desc').value.trim()},
    si:{label:$('p-si-label').value.trim(),title:$('p-si-title').value.trim(),sub:$('p-si-sub').value.trim(),desc:$('p-si-desc').value.trim()},
    ta:{label:$('p-ta-label').value.trim(),title:$('p-ta-title').value.trim(),sub:$('p-ta-sub').value.trim(),desc:$('p-ta-desc').value.trim()}
  };
  const d=getData();
  if(editPkgIdx>=0) d.packages[editPkgIdx]=item;
  else d.packages.push(item);
  saveData(d);
  closeModal('package-modal');
  renderPackages();
  showToast(editPkgIdx>=0?'Package updated!':'Package added!');
}

/* ── Delete ── */
let deleteTarget={type:'',idx:-1};

function askDelete(type,idx){
  deleteTarget={type,idx};
  const d=getData();
  const name=type==='treatment'?d.treatments[idx]?.en?.name:d.packages[idx]?.en?.title;
  $('delete-msg').textContent=`Are you sure you want to delete "${name}"? This cannot be undone.`;
  openModal('delete-modal');
}

function doDelete(){
  const d=getData();
  if(deleteTarget.type==='treatment') d.treatments.splice(deleteTarget.idx,1);
  else d.packages.splice(deleteTarget.idx,1);
  saveData(d);
  closeModal('delete-modal');
  renderTreatments();renderPackages();renderOverview();
  showToast('Deleted successfully.');
}

/* ═══════════════════════════════
   GALLERY
═══════════════════════════════ */
let imagesList=[], currentCat='all', targetImage=null;

function initGallery(){
  if(!ghToken){$('gallery-no-token').classList.remove('hidden');$('image-grid').innerHTML='';return;}
  $('gallery-no-token').classList.add('hidden');
  if(!imagesList.length) loadImages();
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.cat-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');currentCat=btn.dataset.cat;renderImages();
    });
  });
});

async function loadImages(){
  if(!ghToken){showToast('No GitHub token. Set it in Settings.','error');return;}
  $('gallery-spinner').classList.remove('hidden');$('image-grid').innerHTML='';
  try{
    const r=await fetch(`https://api.github.com/repos/${REPO}/contents/images`,{headers:{Authorization:`Bearer ${ghToken}`}});
    if(!r.ok)throw new Error('Failed to fetch images');
    const data=await r.json();
    imagesList=data.filter(f=>f.type==='file'&&/\.(jpg|jpeg|png|gif|svg)$/i.test(f.name));
    $('ov-images').textContent=imagesList.length;
    renderImages();
  }catch(e){showToast(e.message,'error');}
  finally{$('gallery-spinner').classList.add('hidden');}
}

function getCat(name){
  name=name.toLowerCase();
  if(name.includes('gallery_'))return 'gallery';
  if(name.includes('dr_')||name.includes('doctor'))return 'doctor';
  if(name.includes('treatment')||name.includes('herb')||name.includes('clinic'))return 'treatments';
  return 'general';
}

function renderImages(){
  const grid=$('image-grid');grid.innerHTML='';
  const list=currentCat==='all'?imagesList:imagesList.filter(i=>getCat(i.name)===currentCat);
  if(!list.length){grid.innerHTML='<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px 0;">No images in this category.</p>';return;}
  list.forEach(img=>{
    const card=document.createElement('div');card.className='image-card';
    card.innerHTML=`<div class="img-wrapper"><img src="${img.download_url}" alt="${img.name}" loading="lazy"></div>
    <div class="img-info"><p class="img-name">${img.name}</p><p class="img-size">${(img.size/1024).toFixed(1)} KB</p>
    <button class="replace-btn" data-sha="${img.sha}" data-name="${img.name}"><i class="fa-solid fa-upload"></i> Replace</button></div>`;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.replace-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      targetImage={name:btn.dataset.name,sha:btn.dataset.sha};
      $('target-filename').textContent=targetImage.name;
      resetUpload();openModal('upload-modal');
    });
  });
}

/* ── Upload Modal ── */
let base64File=null;
function initUploadModal(){
  const area=$('upload-area'),inp=$('file-input');
  area.addEventListener('click',()=>inp.click());
  area.addEventListener('dragover',e=>{e.preventDefault();area.classList.add('dragover');});
  area.addEventListener('dragleave',()=>area.classList.remove('dragover'));
  area.addEventListener('drop',e=>{e.preventDefault();area.classList.remove('dragover');if(e.dataTransfer.files[0])handleFile(e.dataTransfer.files[0]);});
  inp.addEventListener('change',e=>{if(e.target.files[0])handleFile(e.target.files[0]);});
  $('remove-preview').addEventListener('click',resetUpload);
  $('confirm-upload').addEventListener('click',doUpload);
}
function handleFile(f){
  if(!f.type.match('image.*')){showToast('Please select an image.','error');return;}
  if(f.size>3*1024*1024){showToast('Max file size is 3MB.','error');return;}
  const r=new FileReader();
  r.onload=e=>{
    $('image-preview').src=e.target.result;base64File=e.target.result.split(',')[1];
    $('file-details').textContent=`${f.name} (${(f.size/1024).toFixed(1)} KB)`;
    $('upload-area').classList.add('hidden');$('preview-container').classList.remove('hidden');
    $('confirm-upload').disabled=false;
  };r.readAsDataURL(f);
}
function resetUpload(){
  $('file-input').value='';base64File=null;$('image-preview').src='';$('file-details').textContent='';
  $('upload-area').classList.remove('hidden');$('preview-container').classList.add('hidden');
  $('confirm-upload').disabled=true;
}
async function doUpload(){
  if(!base64File||!targetImage)return;
  const btn=$('confirm-upload');btn.disabled=true;btn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Uploading...';
  try{
    const r=await fetch(`https://api.github.com/repos/${REPO}/contents/images/${targetImage.name}`,{
      method:'PUT',headers:{'Authorization':`Bearer ${ghToken}`,'Content-Type':'application/json'},
      body:JSON.stringify({message:`Admin: Replace ${targetImage.name}`,content:base64File,sha:targetImage.sha,branch:BRANCH})
    });
    if(!r.ok)throw new Error('Upload failed');
    showToast('Image replaced successfully!');closeModal('upload-modal');loadImages();
  }catch(e){showToast(e.message,'error');}
  finally{btn.disabled=false;btn.innerHTML='Upload & Replace';}
}

/* ═══════════════════════════════
   SETTINGS
═══════════════════════════════ */
function saveGhToken(){
  ghToken=$('settings-gh-token').value.trim();
  if(!ghToken){showToast('Please enter a token.','error');return;}
  localStorage.setItem('swm_gh_token',ghToken);
  showToast('GitHub token saved!');updateGhStatus();
  setStatus('gh-token-status','Token saved ✓','ok');
}

async function testGhToken(){
  const token=$('settings-gh-token').value.trim()||ghToken;
  if(!token){setStatus('gh-token-status','Enter a token first.','err');return;}
  setStatus('gh-token-status','Testing...','');
  try{
    const r=await fetch('https://api.github.com/user',{headers:{Authorization:`Bearer ${token}`}});
    if(r.ok){const u=await r.json();setStatus('gh-token-status',`Connected as @${u.login} ✓`,'ok');}
    else setStatus('gh-token-status','Invalid token or insufficient permissions.','err');
  }catch{setStatus('gh-token-status','Connection error.','err');}
}

async function changePw(){
  const cur=$('current-pw').value,nw=$('new-pw').value,cf=$('confirm-pw').value;
  if(!cur||!nw||!cf){setStatus('pw-status','All fields required.','err');return;}
  if(nw!==cf){setStatus('pw-status','New passwords do not match.','err');return;}
  if(nw.length<6){setStatus('pw-status','Password must be at least 6 characters.','err');return;}
  const curHash=await sha256(cur);
  if(curHash!==storedHash){setStatus('pw-status','Current password is incorrect.','err');return;}
  storedHash=await sha256(nw);
  localStorage.setItem('swm_pw_hash',storedHash);
  $('current-pw').value='';$('new-pw').value='';$('confirm-pw').value='';
  setStatus('pw-status','Password changed successfully ✓','ok');showToast('Password updated!');
}

function setStatus(id,msg,cls){const el=$(id);el.textContent=msg;el.className='status-msg'+(cls?' '+cls:'');}

/* ── Publish to GitHub ── */
async function publishToGithub(){
  if(!ghToken){showToast('Configure GitHub token in Settings first.','error');return;}
  const btn=$('publish-btn');
  btn.disabled=true;btn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Publishing...';
  setStatus('publish-status','Fetching current main.js...','');
  try{
    const d=getData();
    // Fetch current main.js
    const fetchRes=await fetch(`https://api.github.com/repos/${REPO}/contents/${MAIN_JS}?ref=${BRANCH}`,{headers:{Authorization:`Bearer ${ghToken}`}});
    if(!fetchRes.ok)throw new Error('Could not fetch main.js from GitHub');
    const fileData=await fetchRes.json();
    mainJsSha=fileData.sha;
    let content=b64Dec(fileData.content);

    // Patch treatment keys into each language block
    ['en','si','ta'].forEach(lang=>{
      d.treatments.forEach((t,i)=>{
        content=patchKey(content,lang,`t${i+1}-name`,t[lang]?.name||'');
        content=patchKey(content,lang,`t${i+1}-desc`,t[lang]?.desc||'');
      });
      d.packages.forEach((p,i)=>{
        content=patchKey(content,lang,`pkg${i+1}-label`,p[lang]?.label||'');
        content=patchKey(content,lang,`pkg${i+1}-title`,p[lang]?.title||'');
        content=patchKey(content,lang,`pkg${i+1}-sub`,p[lang]?.sub||'');
        content=patchKey(content,lang,`pkg${i+1}-desc`,p[lang]?.desc||'');
      });
    });

    const putRes=await fetch(`https://api.github.com/repos/${REPO}/contents/${MAIN_JS}`,{
      method:'PUT',headers:{'Authorization':`Bearer ${ghToken}`,'Content-Type':'application/json'},
      body:JSON.stringify({message:'Admin: Update treatments & packages',content:b64Enc(content),sha:mainJsSha,branch:BRANCH})
    });
    if(!putRes.ok)throw new Error('Failed to commit changes');
    showToast('Published to website successfully! Live in ~1 min.');
    setStatus('publish-status','Published ✓','ok');
  }catch(e){showToast(e.message,'error');setStatus('publish-status',e.message,'err');}
  finally{btn.disabled=false;btn.innerHTML='<i class="fa-solid fa-rocket"></i> Publish Changes';}
}

function patchKey(content,lang,key,val){
  const safe=val.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n');
  // Try to replace existing key
  const re=new RegExp(`('${key}'|"${key}")\\s*:\\s*(['"\`])([\\s\\S]*?)(?<!\\\\)\\2`,'g');
  const langBlock=extractLangBlock(content,lang);
  if(!langBlock)return content;
  const newBlock=langBlock.replace(re,(_,k,q)=>`${k}: ${q}${safe}${q}`);
  return content.replace(langBlock,newBlock);
}

function extractLangBlock(content,lang){
  const re=new RegExp(`\\b${lang}:\\s*\\{[\\s\\S]*?\\n\\s*},?`,'g');
  const m=re.exec(content);return m?m[0]:null;
}

/* ── Util ── */
function escHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
