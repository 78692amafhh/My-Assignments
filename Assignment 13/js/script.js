// Hybrid SCSS + CSS Variables Demo - JavaScript
// =============================================

class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.root = document.documentElement;
        this.spotlightSection = document.getElementById('spotlightSection');
        this.spotlightEnabled = true;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.applySavedTheme();
    }
    
    bindEvents() {
        // Theme toggle
        document.getElementById('toggleTheme').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Spotlight toggle
        document.getElementById('spotlightToggle').addEventListener('click', () => {
            this.toggleSpotlight();
        });
        
        // Random accent color
        document.getElementById('randomAccent').addEventListener('click', () => {
            this.setRandomAccent();
        });
        
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveNav(e.target);
            });
        });
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
    }
    
    applyTheme(theme) {
        const themes = {
            dark: {
                '--color-bg-primary': '#0f172a',
                '--color-bg-secondary': '#1e293b',
                '--color-bg-tertiary': '#334155',
                '--color-text-primary': '#f1f5f9',
                '--color-text-secondary': '#cbd5e1',
                '--color-text-tertiary': '#94a3b8',
                '--color-border': '#475569',
                '--color-accent': '#f6dd80'
            },
            light: {
                '--color-bg-primary': '#ffffff',
                '--color-bg-secondary': '#f8fafc',
                '--color-bg-tertiary': '#f1f5f9',
                '--color-text-primary': '#1e293b',
                '--color-text-secondary': '#475569',
                '--color-text-tertiary': '#64748b',
                '--color-border': '#e2e8f0',
                '--color-accent': '#0ea5e9'
            }
        };
        
        const themeVars = themes[theme];
        Object.entries(themeVars).forEach(([property, value]) => {
            this.root.style.setProperty(property, value);
        });
        
        // Update button text
        document.getElementById('toggleTheme').textContent = 
            `Switch to ${theme === 'dark' ? 'Light' : 'Dark'}`;
    }
    
    toggleSpotlight() {
        this.spotlightEnabled = !this.spotlightEnabled;
        
        if (this.spotlightEnabled) {
            // Enable spotlight - set section-scoped variables
            this.spotlightSection.style.setProperty('--color-accent', '#7dd3fc');
            this.spotlightSection.style.setProperty('--space-md', '2rem');
            this.spotlightSection.style.setProperty('--radius-md', '1rem');
        } else {
            // Disable spotlight - remove inline styles (fallback to root)
            this.spotlightSection.style.removeProperty('--color-accent');
            this.spotlightSection.style.removeProperty('--space-md');
            this.spotlightSection.style.removeProperty('--radius-md');
        }
        
        // Update button text
        document.getElementById('spotlightToggle').textContent = 
            `Spotlight: ${this.spotlightEnabled ? 'ON' : 'OFF'}`;
    }
    
    setRandomAccent() {
        const accentColors = [
            '#f6dd80', '#0ea5e9', '#22c55e', '#eab308', '#ef4444', 
            '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16', '#f97316'
        ];
        
        const randomColor = accentColors[Math.floor(Math.random() * accentColors.length)];
        this.root.style.setProperty('--color-accent', randomColor);
        
        // Show notification
        this.showNotification(`Accent color changed to: ${randomColor}`);
    }
    
    setActiveNav(clickedBtn) {
        // Remove active class from all buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        clickedBtn.classList.add('active');
    }
    
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-accent);
            color: #111;
            padding: var(--space-md);
            border-radius: var(--radius-md);
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    applySavedTheme() {
        const savedTheme = localStorage.getItem('hybrid-demo-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            this.applyTheme(savedTheme);
        }
    }
    
    saveTheme() {
        localStorage.setItem('hybrid-demo-theme', this.currentTheme);
    }
}

// Card interaction effects
class CardAnimator {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
            card.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
            card.addEventListener('click', this.handleClick.bind(this));
        });
    }
    
    handleMouseEnter(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(-8px) scale(1.02)';
    }
    
    handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
    }
    
    handleClick(e) {
        const card = e.currentTarget;
        const title = card.querySelector('.card-title').textContent;
        
        // Create ripple effect
        const ripple = document.createElement('div');
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: ${size}px;
            height: ${size}px;
            left: ${e.clientX - rect.left - size/2}px;
            top: ${e.clientY - rect.top - size/2}px;
        `;
        
        card.style.position = 'relative';
        card.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            card.removeChild(ripple);
        }, 600);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    const cardAnimator = new CardAnimator();
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🔥 Hybrid SCSS + CSS Variables Demo Loaded!');
    console.log('💡 Features:');
    console.log('   - SCSS for design tokens & mixins');
    console.log('   - CSS custom properties for runtime theming');
    console.log('   - Section-scoped variable overrides');
    console.log('   - JavaScript theme manipulation');
});