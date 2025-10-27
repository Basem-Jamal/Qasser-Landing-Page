// تأثير الظهور عند التمرير
document.addEventListener('DOMContentLoaded', function() {

    // document.getElementById("snapBtn").addEventListener("click" , function(event){
    //     event.preventDefault();
    //     alert("لازال الرابط لا يعمل  بنتظار الرابط من الاستاذ علي")
    // })
    const fadeElements = document.querySelectorAll('.social-content.fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // تشغيل التأثير عند التحميل
    fadeInOnScroll();
    // تشغيل التأثير عند التمرير
    window.addEventListener('scroll', fadeInOnScroll);
    
    // إضافة تأثيرات تفاعلية للأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    
    const text = "بكل حب، نرحّب بأهل قطر وزوارها 🤗";
    const typewriter = document.getElementById("typewriter");
    const fadeText = document.getElementById("fadein-text");
    let i = 0;
    let typingSpeed = 150; // سرعة الكتابة

    function typeEffect() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, typingSpeed);
      } else {
        fadeText.style.opacity = 1; // إظهار النص الثاني
        setTimeout(resetEffect, 3000); // انتظر 3 ثوانٍ قبل الإعادة
      }
    }

    function resetEffect() {
      typewriter.textContent = "";
      fadeText.style.opacity = 0;
      i = 0;
      setTimeout(typeEffect, 500); // إعادة البدء بعد نصف ثانية
    }

    window.onload = typeEffect;

});
