// ==========================================================
// NOVA DIGITAL — script.js
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MOBILE MENU ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinksAll.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(sec => navObserver.observe(sec));

  /* ---------- SMOOTH SCROLL (offset for sticky navbar) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), (i % 4) * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));

  /* ---------- PROCESS PROGRESS LINE ---------- */
  const processProgress = document.getElementById('processProgress');
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        processProgress.classList.add('animate');
        processObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  if (processProgress) processObserver.observe(processProgress);

  /* ==========================================================
     PORTFOLIO DATA
     ========================================================== */
  const projects = [
    {
      id: 1,
      title: 'منصة سفر',
      category: 'مواقع',
      size: 'wide',
      desc: 'موقع حجوزات سفر بتجربة استخدام سلسة وسريعة.',
      img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
      challenge: 'مستخدمون يبحثون عن تجربة حجز سريعة وواضحة عبر الأجهزة المختلفة.',
      solution: 'واجهة بحث مبسطة مع مسار حجز مختصر وخطوات واضحة.',
      tech: 'HTML5, CSS3, JavaScript, تصميم متجاوب',
      result: 'تجربة تصفح أكثر سلاسة وتقليل خطوات إتمام الحجز.'
    },
    {
      id: 2,
      title: 'متجر فاخر',
      category: 'E-commerce',
      size: 'narrow',
      desc: 'متجر إلكتروني بهوية بصرية راقية لمنتجات مميزة.',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      challenge: 'إبراز جودة المنتجات ضمن تجربة تسوق أنيقة تعكس فخامة العلامة.',
      solution: 'تصميم بصري نظيف يركز على صور المنتج وتفاصيله.',
      tech: 'واجهة متجر مخصصة، عربة تسوق تفاعلية',
      result: 'واجهة تسوق أكثر جاذبية وسهولة تصفح للمنتجات.'
    },
    {
      id: 3,
      title: 'تطبيق خدمات',
      category: 'تطبيقات',
      size: 'narrow',
      desc: 'تطبيق موبايل لطلب الخدمات المنزلية بسهولة.',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
      challenge: 'ربط المستخدمين بمزودي الخدمة بخطوات بسيطة وواضحة.',
      solution: 'تدفق طلب خدمة من ثلاث خطوات مع تتبع مباشر للطلب.',
      tech: 'تصميم واجهات تطبيق، تجربة مستخدم متكاملة',
      result: 'مسار طلب أوضح وتفاعل أسهل مع مزودي الخدمة.'
    },
    {
      id: 4,
      title: 'منصة تعليم',
      category: 'مواقع',
      size: 'wide',
      desc: 'منصة تعلم إلكتروني بواجهة مرتبة وسهلة المتابعة.',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      challenge: 'تنظيم محتوى تعليمي كثيف بشكل يسهل على الطالب متابعته.',
      solution: 'هيكلة واضحة للمقررات مع مؤشرات تقدم بصرية.',
      tech: 'نظام إدارة محتوى تعليمي، تصميم متجاوب',
      result: 'تجربة تعلم أكثر تنظيمًا ووضوحًا للمسار الدراسي.'
    },
    {
      id: 5,
      title: 'شركة طاقة شمسية',
      category: 'مواقع',
      size: 'narrow',
      desc: 'موقع تعريفي لشركة حلول طاقة شمسية.',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
      challenge: 'تبسيط شرح حلول تقنية للطاقة لجمهور غير متخصص.',
      solution: 'محتوى مرئي واضح يشرح الفكرة والفائدة خطوة بخطوة.',
      tech: 'موقع تعريفي، نماذج طلب استشارة',
      result: 'شرح أوضح للخدمة وتواصل أسهل مع العملاء المهتمين.'
    },
    {
      id: 6,
      title: 'منصة عقارية',
      category: 'Dashboard',
      size: 'wide',
      desc: 'لوحة تحكم لإدارة وعرض المشاريع العقارية.',
      img: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1000&q=80',
      challenge: 'إدارة عدد كبير من العقارات وعرضها بشكل منظم للفرق.',
      solution: 'لوحة تحكم بفلاتر ذكية وعرض بياني للحالة والتوفر.',
      tech: 'لوحة تحكم تفاعلية، تصور بيانات',
      result: 'إدارة أسرع للمشاريع ورؤية أوضح لحالة كل عقار.'
    },
    {
      id: 7,
      title: 'نظام إدارة',
      category: 'Dashboard',
      size: 'narrow',
      desc: 'نظام داخلي لإدارة العمليات والفرق.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      challenge: 'متابعة مهام متعددة الفرق دون تشتت المعلومة.',
      solution: 'لوحة موحدة تجمع المهام والتقارير في مكان واحد.',
      tech: 'نظام ويب داخلي، صلاحيات مستخدمين',
      result: 'تنسيق أفضل بين الفرق ومتابعة أسرع للمهام.'
    },
    {
      id: 8,
      title: 'AI Assistant',
      category: 'AI',
      size: 'wide',
      desc: 'مساعد ذكاء اصطناعي لخدمة العملاء الآلية.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
      challenge: 'الرد السريع على استفسارات العملاء المتكررة على مدار الساعة.',
      solution: 'مساعد ذكي مدرّب على أسئلة العملاء الشائعة مع تصعيد للفريق عند الحاجة.',
      tech: 'تكامل نماذج AI، واجهة محادثة',
      result: 'استجابة أسرع لاستفسارات العملاء وتخفيف العبء عن الفريق.'
    }
  ];

  const portfolioGrid = document.getElementById('portfolioGrid');

  function renderProjects(filter = 'all') {
    portfolioGrid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = `project-card ${project.size}`;
      card.setAttribute('data-id', project.id);
      card.innerHTML = `
        <img src="${project.img}" alt="${project.title}" loading="lazy">
        <div class="project-overlay">
          <span class="project-cat">${project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <span class="project-link">عرض المشروع</span>
        </div>
      `;
      card.addEventListener('click', () => openModal(project.id));
      portfolioGrid.appendChild(card);
    });
  }
  renderProjects();

  /* ---------- PORTFOLIO FILTER ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  /* ==========================================================
     PROJECT MODAL
     ========================================================== */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalCat = document.getElementById('modalCat');
  const modalTitle = document.getElementById('modalTitle');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalSolution = document.getElementById('modalSolution');
  const modalTech = document.getElementById('modalTech');
  const modalResult = document.getElementById('modalResult');

  function openModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    modalImg.src = project.img;
    modalImg.alt = project.title;
    modalCat.textContent = project.category;
    modalTitle.textContent = project.title;
    modalChallenge.textContent = project.challenge;
    modalSolution.textContent = project.solution;
    modalTech.textContent = project.tech;
    modalResult.textContent = project.result;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  /* ==========================================================
     CONTACT FORM VALIDATION
     ========================================================== */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  const validators = {
    name: (v) => v.trim().length >= 2 || 'الرجاء إدخال الاسم كاملاً.',
    phone: (v) => /^[+0-9\s-]{8,15}$/.test(v.trim()) || 'رقم هاتف غير صحيح.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'بريد إلكتروني غير صحيح.',
    service: (v) => v.trim().length > 0 || 'الرجاء اختيار نوع الخدمة.',
    details: (v) => v.trim().length >= 10 || 'الرجاء وصف المشروع بتفصيل أكبر.'
  };

  function validateField(fieldName) {
    const field = document.getElementById(fieldName);
    const errorEl = document.getElementById(`err-${fieldName}`);
    const group = field.closest('.form-group');
    const result = validators[fieldName](field.value);

    if (result === true) {
      group.classList.remove('error');
      errorEl.textContent = '';
      return true;
    } else {
      group.classList.add('error');
      errorEl.textContent = result;
      return false;
    }
  }

  ['name', 'phone', 'email', 'service', 'details'].forEach(fieldName => {
    const field = document.getElementById(fieldName);
    field.addEventListener('blur', () => validateField(fieldName));
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group.classList.contains('error')) validateField(fieldName);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fieldsToValidate = ['name', 'phone', 'email', 'service', 'details'];
    let allValid = true;
    fieldsToValidate.forEach(fieldName => {
      if (!validateField(fieldName)) allValid = false;
    });

    if (!allValid) {
      const firstError = form.querySelector('.form-group.error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Frontend-only demo submission
    formSuccess.classList.add('show');
    form.querySelector('.btn-submit').setAttribute('disabled', 'true');
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      form.reset();
      form.querySelector('.btn-submit').removeAttribute('disabled');
      formSuccess.classList.remove('show');
    }, 4000);
  });

});
