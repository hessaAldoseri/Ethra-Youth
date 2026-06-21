// ملف JavaScript للتفاعل في موقع إثراء البراعم

document.addEventListener('DOMContentLoaded', function() {
    // التحقق من وجود نموذج الإدخال في الصفحة
    const nameForm = document.getElementById('nameForm');

    if (nameForm) {
        nameForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // الحصول على اسم المشارك
            const participantName = document.getElementById('participantName').value.trim();

            // التحقق من أن الحقل ليس فارغاً
            if (participantName) {
                // تخزين اسم المشارك في localStorage (اختياري للاستخدام المستقبلي)
                try {
                    localStorage.setItem('ethra_participant_name', participantName);
                } catch (e) {
                    console.log('تعذر تخزين اسم المشارك');
                }

                // الانتقال إلى صفحة النتيجة مباشرة
                window.location.href = 'result.html';
            } else {
                // إظهار تنبيه في حالة الحقل الفارغ
                alert('الرجاء إدخال اسمك للمشاركة');
                document.getElementById('participantName').focus();
            }
        });
    }

    // التحقق من وجود زر الرجوع في صفحة النتيجة
    const backBtn = document.getElementById('backBtn');

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // العودة للصفحة الأولى
            window.location.href = 'index.html';
        });
    }
    // إظهار زر الرجوع بعد 3 ثواني في صفحة النتيجة
    if (backBtn) {
        setTimeout(function() {
          backBtn.classList.remove('hidden');
    }, 3000);
}

    // تأثيرات بصرية إضافية للمدخلات
    const nameInput = document.getElementById('participantName');

    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.parentElement.classList.add('has-value');
            } else {
                this.parentElement.classList.remove('has-value');
            }
        });

        // التركيز على الحقل عند تحميل الصفحة
        setTimeout(function() {
            nameInput.focus();
        }, 500);
    }
});

// دالة مساعدة للتحقق من صحة الإدخال
function validateInput(input) {
    const trimmedValue = input.value.trim();
    return trimmedValue.length >= 2;
}

// تأثير حركي عند تمرير الماوس على البطاقة
const formCard = document.querySelector('.form-card');
if (formCard) {
    formCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });

    formCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}