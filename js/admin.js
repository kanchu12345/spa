/* =============================================
   ADMIN PANEL SCRIPT
   ============================================= */

const REPO = 'kanchu12345/spa';
const BRANCH = 'main';

let githubToken = localStorage.getItem('gh_admin_token');
let imagesList = [];
let targetImage = null; // The image being replaced

// Elements
const loginSec = document.getElementById('login-section');
const dashSec = document.getElementById('dashboard-section');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const tokenInput = document.getElementById('github-token');
const loginError = document.getElementById('login-error');
const imageGrid = document.getElementById('image-grid');
const spinner = document.getElementById('loading-spinner');
const refreshBtn = document.getElementById('refresh-btn');
const toastContainer = document.getElementById('toast-container');

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
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation'}"></i> ${msg}`;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
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

// Load Images
async function loadImages() {
  imageGrid.innerHTML = '';
  spinner.style.display = 'block';
  
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
    spinner.style.display = 'none';
  }
}

function renderImages() {
  imageGrid.innerHTML = '';
  imagesList.forEach(img => {
    const card = document.createElement('div');
    card.className = 'image-card';
    
    // Size formatting
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

// Upload Logic
uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  if (e.dataTransfer.files.length) {
    handleFile(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length) {
    handleFile(e.target.files[0]);
  }
});

function handleFile(file) {
  if (!file.type.match('image.*')) {
    showToast('Please select an image file.', 'error');
    return;
  }
  
  // 2MB limit check
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
    
    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || 'Upload failed');
    }
    
    showToast('Image successfully replaced! Changes will be live in a few minutes.');
    closeModalHandler();
    loadImages(); // Refresh the grid
    
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
    confirmUpload.disabled = false;
    confirmUpload.textContent = 'Upload & Replace';
  }
});

// Start
init();
