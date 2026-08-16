const demoCopy = {
  km: {
    title: 'ប្រាប់យើងអំពីការមកទស្សនារបស់អ្នក',
    sub: 'មតិរបស់អ្នកជួយឱ្យយើងបម្រើបានកាន់តែប្រសើរ',
    party: 'ចំនួនភ្ញៀវ',
    visit: 'ចំនួនដងដែលបានមក',
    first: 'លើកដំបូង',
    with: 'អ្នកមកជាមួយនរណា?',
    next: 'បន្ទាប់'
  },
  en: {
    title: 'Tell us about your visit',
    sub: 'Your feedback helps us serve you better.',
    party: 'Party size',
    visit: 'How many times have you visited?',
    first: 'First time',
    with: 'Who are you dining with?',
    next: 'Continue'
  },
  zh: {
    title: '告诉我们您的用餐体验',
    sub: '您的反馈能帮助我们做得更好',
    party: '用餐人数',
    visit: '您来过几次？',
    first: '第一次',
    with: '您和谁一起来？',
    next: '继续'
  },
  ja: {
    title: 'ご来店について教えてください',
    sub: 'お客様の声が、より良いサービスにつながります。',
    party: 'ご利用人数',
    visit: 'ご来店回数',
    first: '初めて',
    with: 'どなたとご利用ですか？',
    next: '次へ'
  }
};

const langButtons = document.querySelectorAll('.lang-pill');
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    const copy = demoCopy[lang];
    langButtons.forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('[data-demo]').forEach((el) => {
      const key = el.dataset.demo;
      if (copy[key]) el.textContent = copy[key];
    });
  });
});

const pilotForm = document.getElementById('pilotForm');
const formStatus = document.getElementById('formStatus');
if (pilotForm) {
  pilotForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Pilot request captured in this prototype. Connect this form to your Telegram, email or CRM workflow before launch.';
  });
}
