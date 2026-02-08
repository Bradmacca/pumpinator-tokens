
      // Copy contract address on click
      document.querySelectorAll('.contract-address').forEach(el => {
        el.addEventListener('click', () => {
          navigator.clipboard.writeText(el.textContent);
          const hint = el.parentElement.querySelector('.copy-hint');
          if (hint) {
            hint.textContent = 'Copied!';
            setTimeout(() => hint.textContent = 'Click to copy', 2000);
          }
        });
      });
      
      // Floating particles animation
      const particles = document.querySelector('.floating-particles');
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: rgba(147, 51, 234, ${Math.random() * 0.5 + 0.2});
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
        `;
        particles.appendChild(particle);
      }
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}100px, -200px) rotate(360deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
      
      // Scroll animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.character-card, .stat-card, .social-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
      });
      
      console.log('🚀 Token website loaded - powered by Pumpinator');
    