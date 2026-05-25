/**
 * STUDIO DEV ECOSYSTEM FRONTEND DEVELOPMENT ENGINE
 * Programmatic Interactions Script Suite Module
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE DRAWER NAVIGATION MENU CONTROLLER ---
    const hamburgerTrigger = document.getElementById('hamburger-trigger');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const drawerLinks = mobileMenuDrawer.querySelectorAll('a');

    hamburgerTrigger.addEventListener('click', () => {
        mobileMenuDrawer.classList.toggle('hidden');
    });

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuDrawer.classList.add('hidden');
        });
    });

    // --- 2. EDITORIAL HERO TEXT TYPING LOGIC ENGINE ---
    const textArrays = ["clean structural code.", "minimal interface logic.", "responsive system web maps."];
    let sequenceIndex = 0;
    let characterIndex = 0;
    let reverseDeletionActive = false;
    const targetsTextNode = document.getElementById('dynamic-typing');

    function executeEditorialTypingSequence() {
        const structuralPhraseText = textArrays[sequenceIndex];
        
        if (reverseDeletionActive) {
            targetsTextNode.textContent = structuralPhraseText.substring(0, characterIndex - 1);
            characterIndex--;
        } else {
            targetsTextNode.textContent = structuralPhraseText.substring(0, characterIndex + 1);
            characterIndex++;
        }

        let dynamicEngineSpeed = reverseDeletionActive ? 30 : 60;

        if (!reverseDeletionActive && characterIndex === structuralPhraseText.length) {
            dynamicEngineSpeed = 2500; // Static phrasing delay timeline pause
            reverseDeletionActive = true;
        } else if (reverseDeletionActive && characterIndex === 0) {
            reverseDeletionActive = false;
            sequenceIndex = (sequenceIndex + 1) % textArrays.length;
            dynamicEngineSpeed = 400; // System rotation lifecycle buffer pause
        }

        setTimeout(executeEditorialTypingSequence, dynamicEngineSpeed);
    }
    setTimeout(executeEditorialTypingSequence, 600);

    // --- 3. GALLERY SYSTEM TAB DATA FILTER ROUTING PIPELINE ---
    const customTabFilters = document.querySelectorAll('.tab-filter-btn');
    const registeredGalleryCards = document.querySelectorAll('.gallery-item-card');

    customTabFilters.forEach(button => {
        button.addEventListener('click', () => {
            customTabFilters.forEach(btn => {
                btn.classList.remove('active-tab', 'bg-studio-lightText', 'text-studio-lightBg', 'dark:bg-studio-darkText', 'dark:text-studio-darkBg');
                btn.classList.add('border-stone-200', 'text-stone-500', 'dark:border-stone-800');
            });
            
            button.classList.add('active-tab', 'bg-studio-lightText', 'text-studio-lightBg', 'dark:bg-studio-darkText', 'dark:text-studio-darkBg');
            button.removeAttribute('border-stone-200');

            const criteriaFilterKey = button.getAttribute('data-filter');

            registeredGalleryCards.forEach(card => {
                const assignedCategoryTag = card.getAttribute('data-category');
                if (criteriaFilterKey === 'all' || assignedCategoryTag === criteriaFilterKey) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 4. DATA PACKET TRANSMISSION FORM INTERFACES VALIDATION ---
    const executionContactFormNode = document.getElementById('studio-contact-form');

    executionContactFormNode.addEventListener('submit', (event) => {
        event.preventDefault();
        let runtimeFormValidStatus = true;
        const criticalFormInputs = executionContactFormNode.querySelectorAll('input[required], textarea[required]');

        criticalFormInputs.forEach(input => {
            const contextAlertLabelNode = input.nextElementSibling;
            
            if (input.type === 'email') {
                const standardizedEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!standardizedEmailPattern.test(input.value.trim())) {
                    contextAlertLabelNode.classList.remove('hidden');
                    input.classList.add('border-rose-500');
                    runtimeFormValidStatus = false;
                } else {
                    contextAlertLabelNode.classList.add('hidden');
                    input.classList.remove('border-rose-500');
                }
            } else {
                if (input.value.trim() === '') {
                    contextAlertLabelNode.classList.remove('hidden');
                    input.classList.add('border-rose-500');
                    runtimeFormValidStatus = false;
                } else {
                    contextAlertLabelNode.classList.add('hidden');
                    input.classList.remove('border-rose-500');
                }
            }
        });

        if (runtimeFormValidStatus) {
            alert('Dialogue query parameters package submitted successfully.');
            executionContactFormNode.reset();
        }
    });

    // --- 5. RUNTIME SCHEME THEME CONTROLLER SWITCH (LOCALSTORAGE ARCHIVE) ---
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    
    if (localStorage.getItem('studio-theme') === 'dark' || (!('studio-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeSwitcherBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('studio-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('studio-theme', 'dark');
        }
    });

    // --- 6. FLOATING SCROLL RUNTIME ASCENT MONITOR & ACTIVE MENU SYNC ---
    const floatingAscentTrigger = document.getElementById('floating-ascent-trigger');
    const dynamicSectionsArray = document.querySelectorAll('section');
    const coreDirectoryNavAnchors = document.querySelectorAll('header ul li a');

    window.addEventListener('scroll', () => {
        // Toggle Floating Arrow Button Visibility bounds
        if (window.scrollY > 300) {
            floatingAscentTrigger.classList.remove('translate-y-24', 'opacity-0');
            floatingAscentTrigger.classList.add('translate-y-0', 'opacity-100');
        } else {
            floatingAscentTrigger.classList.remove('translate-y-0', 'opacity-100');
            floatingAscentTrigger.classList.add('translate-y-24', 'opacity-0');
        }

        // Active Scroll Route Track Highlighting
        let currentViewportSectionFocus = '';
        dynamicSectionsArray.forEach(section => {
            const sectionOffsetCalculated = section.offsetTop - 140;
            if (window.scrollY >= sectionOffsetCalculated) {
                currentViewportSectionFocus = section.getAttribute('id');
            }
        });

        coreDirectoryNavAnchors.forEach(anchor => {
            anchor.classList.remove('text-studio-accent', 'border-b', 'border-studio-accent');
            if (anchor.getAttribute('href') === `#${currentViewportSectionFocus}`) {
                anchor.classList.add('text-studio-accent', 'border-b', 'border-studio-accent');
            }
        });
    });

    floatingAscentTrigger.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 7. CORE VISSIBILITY OBSERVER ROUTINE (SCROLL REVEAL EFFICIENCY) ---
    const scrollRevealSetupSpecs = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" };
    
    const visualEntranceStateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, scrollRevealSetupSpecs);

    document.querySelectorAll('.scroll-reveal-section').forEach(section => {
        visualEntranceStateObserver.observe(section);
    });
});
