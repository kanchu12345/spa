/* =============================================
   ADMIN PANEL SCRIPT
   ============================================= */

const REPO = 'kanchu12345/spa';
const BRANCH = 'main';
const MAIN_JS_PATH = 'js/main.js';

let githubToken = localStorage.getItem('gh_admin_token');
let imagesList = [];
let targetImage = null; // The image being replaced

// Content Editor State
let mainJsSha = '';
let mainJsContent = ''; // Raw text
let currentEditItem = null; // e.g., { type: 't', id: 1 } or { type: 'pkg', id: 1 }
let localContentCache = {}; // Store unsaved edits locally

// Elements
const loginSec = document.getElementById('login-section');
const dashSec = document.getElementById('dashboard-section');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const tokenInput = document.getElementById('github-token');
const loginError = document.getElementById('login-error');
const toastContainer = document.getElementById('toast-container');

// Tabs
const mainTabs = document.querySelectorAll('.main-tab');
const tabContents = document.querySelectorAll('.tab-content');

// Images Tab Elements
const imageGrid = document.getElementById('image-grid');
const imageSpinner = document.getElementById('loading-spinner');
const refreshBtn = document.getElementById('refresh-btn');
const catBtns = document.querySelectorAll('.cat-btn');

// Content Editor Elements
const contentSpinner = document.getElementById('content-spinner');
const refreshContentBtn = document.getElementById('refresh-content-btn');
const saveContentBtn = document.getElementById('save-content-btn');
const treatmentsList = document.getElementById('treatments-list');
const packagesList = document.getElementById('packages-list');
const editorPlaceholder = document.getElementById('editor-placeholder');
const editorForm = document.getElementById('editor-form');
const editorTitle = document.getElementById('editor-title');
const applyLocalBtn = document.getElementById('apply-local-btn');

// Modal Elements
const uploadModal = document.getElementById('upload-modal');
const closeModal = document.getElementById('close-modal');
const cancelUpload = document.getElementById('cancel-upload');
const confirmUpload = document.getElementById('confirm-upload');
const targetFilename = document.getElementById('target-filename');
const fileInput = document.getElementById('file-input');
const uploadArea = document.getElementById('upload-area');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const fileDetails = document.getElementById('file-details');
const removePreviewBtn = document.getElementById('remove-preview');

let base64File = null;
let currentImageCategory = 'all';

// Initialize
function init() {
  if (githubToken) {
    verifyTokenAndLoad();
  } else {
    showLogin();
  }
}

// UI State
function showLogin() {
  loginSec.classList.add('active');
  dashSec.classList.remove('active');
}

function showDash() {
  loginSec.classList.remove('active');
  dashSec.classList.add('active');
  loadImages();
  loadContent();
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation'}"></i> ${msg}`;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// Base64 Helpers
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
  }));
}

// Authentication
loginBtn.addEventListener('click', async () => {
  const token = tokenInput.value.trim();
  if (!token) return;
  
  loginBtn.disabled = true;
  loginBtn.textContent = 'Verifying...';
  
  try {
    const res = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    if (res.ok) {
      githubToken = token;
      localStorage.setItem('gh_admin_token', token);
      showDash();
    } else {
      loginError.textContent = 'Invalid token or insufficient permissions.';
    }
  } catch (err) {
    loginError.textContent = 'Connection error.';
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = 'Authenticate';
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('gh_admin_token');
  githubToken = null;
  tokenInput.value = '';
  showLogin();
});

async function verifyTokenAndLoad() {
  try {
    const res = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${githubToken}` }
    });
    if (res.ok) {
      showDash();
    } else {
      localStorage.removeItem('gh_admin_token');
      showLogin();
    }
  } catch (err) {
    showToast('Failed to verify session.', 'error');
  }
}

// Main Tabs Logic
mainTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    mainTabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    tab.classList.add('active');
    document.getElementById(tab.getAttribute('data-target')).classList.add('active');
  });
});

/* ==========================================================================
   IMAGE MANAGER
   ========================================================================== */

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentImageCategory = btn.getAttribute('data-cat');
    renderImages();
  });
});

async function loadImages() {
  imageGrid.innerHTML = '';
  imageSpinner.style.display = 'block';
  
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/images`, {
      headers: { Authorization: `Bearer ${githubToken}` }
    });
    
    if (!res.ok) throw new Error('Failed to fetch images');
    
    const data = await res.json();
    imagesList = data.filter(item => item.type === 'file' && item.name.match(/\.(jpg|jpeg|png|gif|svg)$/i));
    
    renderImages();
  } catch (err) {
    showToast(err.message, 'error');
  } finally {
    imageSpinner.style.display = 'none';
  }
}

function getCategory(filename) {
  const name = filename.toLowerCase();
  if (name.includes('gallery_')) return 'gallery';
  if (name.includes('dr_') || name.includes('doctor') || name.includes('award_')) return 'doctor';
  if (name.includes('treatment') || name.includes('herbal') || name.includes('clinic')) return 'treatments';
  if (name.includes('product')) return 'products';
  return 'general';
}

function renderImages() {
  imageGrid.innerHTML = '';
  
  const filtered = imagesList.filter(img => {
    if (currentImageCategory === 'all') return true;
    return getCategory(img.name) === currentImageCategory;
  });

  if (filtered.length === 0) {
    imageGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No images in this category.</p>';
    return;
  }

  filtered.forEach(img => {
    const card = document.createElement('div');
    card.className = 'image-card';
    
    const sizeKB = (img.size / 1024).toFixed(1);
    
    card.innerHTML = `
      <div class="img-wrapper">
        <img src="${img.download_url}" alt="${img.name}" loading="lazy">
      </div>
      <div class="img-info">
        <p class="img-name">${img.name}</p>
        <p class="img-size">${sizeKB} KB</p>
        <button class="replace-btn" data-sha="${img.sha}" data-name="${img.name}">Replace</button>
      </div>
    `;
    
    imageGrid.appendChild(card);
  });

  document.querySelectorAll('.replace-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      targetImage = {
        name: e.target.getAttribute('data-name'),
        sha: e.target.getAttribute('data-sha')
      };
      openModal();
    });
  });
}

refreshBtn.addEventListener('click', loadImages);

// Modal Logic
function openModal() {
  targetFilename.textContent = targetImage.name;
  resetUploadState();
  uploadModal.classList.add('active');
}

function closeModalHandler() {
  uploadModal.classList.remove('active');
  targetImage = null;
}

closeModal.addEventListener('click', closeModalHandler);
cancelUpload.addEventListener('click', closeModalHandler);

uploadArea.addEventListener('click', () => fileInput.click());
uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length) handleFile(e.target.files[0]);
});

function handleFile(file) {
  if (!file.type.match('image.*')) {
    showToast('Please select an image file.', 'error');
    return;
  }
  
  if (file.size > 2 * 1024 * 1024) {
    showToast('File size must be under 2MB.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.src = e.target.result;
    base64File = e.target.result.split(',')[1];
    fileDetails.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    
    uploadArea.classList.add('hidden');
    previewContainer.classList.remove('hidden');
    confirmUpload.disabled = false;
  };
  reader.readAsDataURL(file);
}

removePreviewBtn.addEventListener('click', resetUploadState);

function resetUploadState() {
  fileInput.value = '';
  base64File = null;
  imagePreview.src = '';
  fileDetails.textContent = '';
  uploadArea.classList.remove('hidden');
  previewContainer.classList.add('hidden');
  confirmUpload.disabled = true;
}

confirmUpload.addEventListener('click', async () => {
  if (!base64File || !targetImage) return;
  
  confirmUpload.disabled = true;
  confirmUpload.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading...';
  
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/images/${targetImage.name}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Admin Panel: Replaced ${targetImage.name}`,
        content: base64File,
        sha: targetImage.sha,
        branch: BRANCH
      })
    });
    
    if (!res.ok) throw new Error('Upload failed');
    
    showToast('Image successfully replaced!');
    closeModalHandler();
    loadImages(); 
    
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
    confirmUpload.disabled = false;
    confirmUpload.textContent = 'Upload & Replace';
  }
});


/* ==========================================================================
   CONTENT EDITOR
   ========================================================================== */

async function loadContent() {
  contentSpinner.style.display = 'block';
  treatmentsList.innerHTML = '';
  packagesList.innerHTML = '';
  editorForm.classList.add('hidden');
  editorPlaceholder.classList.remove('hidden');
  localContentCache = {};
  
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${MAIN_JS_PATH}?ref=${BRANCH}`, {
      headers: { Authorization: `Bearer ${githubToken}` }
    });
    
    if (!res.ok) throw new Error('Failed to fetch main.js');
    
    const data = await res.json();
    mainJsSha = data.sha;
    mainJsContent = b64DecodeUnicode(data.content);
    
    buildSidebar();
  } catch (err) {
    showToast('Could not load content: ' + err.message, 'error');
  } finally {
    contentSpinner.style.display = 'none';
  }
}

refreshContentBtn.addEventListener('click', loadContent);

function getTrans(lang, key) {
  // Regex to extract value safely from mainJsContent
  let langBlockRegex = new RegExp(`\\b${lang}:\\s*\\{[\\s\\S]*?\\n\\s*},?`, 'g');
  let langMatch = langBlockRegex.exec(mainJsContent);
  if (!langMatch) return '';
  let block = langMatch[0];
  
  let keyRegex = new RegExp(`('${key}'|"${key}")\\s*:\\s*(['"\`])([\\s\\S]*?)(?<!\\\\)\\2`, 'g');
  let match = keyRegex.exec(block);
  if (match) {
    return match[3].replace(/\\'/g, "'").replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
  }
  return '';
}

function setTrans(lang, key, newValue) {
  // Escapes for JS string
  let safeValue = newValue.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
  
  let langBlockRegex = new RegExp(`(\\b${lang}:\\s*\\{[\\s\\S]*?\\n\\s*},?)`, 'g');
  
  mainJsContent = mainJsContent.replace(langBlockRegex, (langBlock) => {
    let keyRegex = new RegExp(`('${key}'|"${key}")\\s*:\\s*(['"\`])([\\s\\S]*?)(?<!\\\\)\\2`, 'g');
    return langBlock.replace(keyRegex, (match, p1, p2) => {
      return `${p1}: ${p2}${safeValue}${p2}`;
    });
  });
}

function buildSidebar() {
  // Treatments 1-12
  for (let i = 1; i <= 12; i++) {
    const nameEn = getTrans('en', `t${i}-name`);
    const btn = document.createElement('button');
    btn.className = 'item-btn';
    btn.textContent = `T${i}: ${nameEn.substring(0, 20)}...`;
    btn.onclick = () => selectItem('t', i, btn);
    treatmentsList.appendChild(btn);
  }

  // Packages 1-8
  for (let i = 1; i <= 8; i++) {
    const nameEn = getTrans('en', `pkg${i}-title`);
    const btn = document.createElement('button');
    btn.className = 'item-btn';
    btn.textContent = `P${i}: ${nameEn.substring(0, 20)}...`;
    btn.onclick = () => selectItem('pkg', i, btn);
    packagesList.appendChild(btn);
  }
}

function selectItem(type, id, btn) {
  document.querySelectorAll('.item-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  currentEditItem = { type, id };
  
  const titleKey = type === 't' ? `t${id}-name` : `pkg${id}-title`;
  const descKey = type === 't' ? `t${id}-desc` : `pkg${id}-desc`;
  
  editorTitle.textContent = `Editing: ${type === 't' ? 'Treatment' : 'Package'} ${id}`;
  
  // En
  document.getElementById('edit-en-title').value = getTrans('en', titleKey);
  document.getElementById('edit-en-desc').value = getTrans('en', descKey);
  // Si
  document.getElementById('edit-si-title').value = getTrans('si', titleKey);
  document.getElementById('edit-si-desc').value = getTrans('si', descKey);
  // Ta
  document.getElementById('edit-ta-title').value = getTrans('ta', titleKey);
  document.getElementById('edit-ta-desc').value = getTrans('ta', descKey);
  
  editorPlaceholder.classList.add('hidden');
  editorForm.classList.remove('hidden');
}

applyLocalBtn.addEventListener('click', () => {
  if (!currentEditItem) return;
  const { type, id } = currentEditItem;
  const titleKey = type === 't' ? `t${id}-name` : `pkg${id}-title`;
  const descKey = type === 't' ? `t${id}-desc` : `pkg${id}-desc`;
  
  setTrans('en', titleKey, document.getElementById('edit-en-title').value);
  setTrans('en', descKey, document.getElementById('edit-en-desc').value);
  
  setTrans('si', titleKey, document.getElementById('edit-si-title').value);
  setTrans('si', descKey, document.getElementById('edit-si-desc').value);
  
  setTrans('ta', titleKey, document.getElementById('edit-ta-title').value);
  setTrans('ta', descKey, document.getElementById('edit-ta-desc').value);
  
  showToast('Changes applied locally. Remember to click "Save to Website" to commit!', 'success');
  
  // Update sidebar text if English title changed
  const activeBtn = document.querySelector('.item-btn.active');
  if (activeBtn) {
    const prefix = type === 't' ? `T${id}` : `P${id}`;
    activeBtn.textContent = `${prefix}: ${document.getElementById('edit-en-title').value.substring(0, 20)}...`;
  }
});

saveContentBtn.addEventListener('click', async () => {
  if (!mainJsContent || !mainJsSha) return;
  
  saveContentBtn.disabled = true;
  saveContentBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
  
  try {
    const encodedContent = b64EncodeUnicode(mainJsContent);
    
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${MAIN_JS_PATH}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Admin Panel: Updated treatments/packages content',
        content: encodedContent,
        sha: mainJsSha,
        branch: BRANCH
      })
    });
    
    if (!res.ok) throw new Error('Failed to commit changes');
    
    const data = await res.json();
    mainJsSha = data.content.sha; // Update SHA for subsequent saves
    
    showToast('Content successfully updated! Live in a few minutes.', 'success');
  } catch (err) {
    showToast('Error saving: ' + err.message, 'error');
  } finally {
    saveContentBtn.disabled = false;
    saveContentBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Save to Website';
  }
});

// Start
init();
