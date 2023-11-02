// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq__content');

    faqContainer.addEventListener('click', (e) => {



        const groupHeader = e.target.closest('.faq__group--header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq__group--body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq__group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq__group--body');
                const otherIcon = otherGroup.querySelector('.faq__group--header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile__nav');

    hamburgerButton.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')
    );
});
