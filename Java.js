/**
 * AGRINHO 2026 - Script Unificado (Java.js)
 * Centraliza todas as animações e comportamentos do site.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GERENCIAMENTO DE COMPONENTES E TEXTOS COM ANIMAÇÃO DE DIGITAÇÃO ---
    const typingTexts = document.querySelectorAll('.typing-animation');
    typingTexts.forEach(typingText => {
        const spans = typingText.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.animation = `typeWriter 0.09s ease-in-out forwards ${index * 0.03}s`;
        });
    });

    // --- 2. ANIMAÇÕES EXCLUSIVAS DA PÁGINA DE ENERGIA ---
    const isEnergiaPage = document.querySelector('.cabecalho-energia');
    if (isEnergiaPage) {
        const animateElements = (selector, delay = 100) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                setTimeout(() => {
                    element.classList.add('show');
                }, delay);
            });
        };

        animateElements('.fade-in');
        animateElements('.slide-in-left');
        animateElements('.fade-in-text');

        const elementsToFadeIn = document.querySelectorAll('.fade-in-element');
        elementsToFadeIn.forEach(element => {
            element.classList.add('fade-in');
        });

        setTimeout(() => {
            const cards = document.querySelectorAll('.fade-in-card');
            cards.forEach(card => {
                card.classList.add('show');
            });
        }, 150);
    } 
    // --- 3. ANIMAÇÕES EXCLUSIVAS DA PÁGINA DE ÁGUA ---
    else if (document.querySelector('.cabecalho-agua')) {
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
            const delay = parseFloat(element.style.animationDelay) || 0;
            setTimeout(() => {
                element.classList.add('show');
            }, delay * 1000 + 100);
        });

        const slideInRightElements = document.querySelectorAll('.slide-in-right');
        slideInRightElements.forEach(element => {
            const delay = parseFloat(element.style.animationDelay) || 0;
            setTimeout(() => {
                element.classList.add('show');
            }, delay * 1000 + 100);
        });

        const fadeInTextElements = document.querySelectorAll('.fade-in-text');
        fadeInTextElements.forEach(element => {
            element.classList.add('show');
        });
    } 
    // --- 4. ANIMAÇÕES PADRÃO (Index, Produção, Contato) ---
    else {
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
            setTimeout(() => {
                element.classList.add('show');
            }, 100);
        });

        const slideInLeftElements = document.querySelectorAll('.slide-in-left');
        slideInLeftElements.forEach(element => {
            setTimeout(() => {
                element.classList.add('show');
            }, 100);
        });

        const fadeInTextElements = document.querySelectorAll('.fade-in-text');
        fadeInTextElements.forEach(element => {
            element.classList.add('show');
        });

        const elementsToFadeIn = document.querySelectorAll('.fade-in-element');
        elementsToFadeIn.forEach(element => {
            setTimeout(() => {
                element.classList.add('show');
            }, 150);
        });
    }

    // --- 5. LÓGICA DO FORMULÁRIO DE CONTATO (Apenas na página de Contato) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;

            const emailDestino = "agrinho2026@senarpr.org.br";
            const corpoEmail = `Nome: ${nome}\nE-mail do remetente: ${email}\n\nMensagem:\n${mensagem}`;
            
            window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
        });
    }
});