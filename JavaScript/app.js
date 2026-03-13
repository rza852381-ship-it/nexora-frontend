// نستقبل submit من نموذج تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // منع التحديث الافتراضي للصفحة

    // ناخذ البيانات من الحقول
    const email = e.target[0].value;
    const password = e.target[1].value;

    // نرسل طلب للسيرفر
    fetch("https://nexurarm-25uustts.manus.space/api/salla/callback_URL/api/login", {  // حطي هنا رابط السيرفر الحقيقي
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){ // إذا البيانات صحيحة
            // نخزن التوكن لو موجود
            localStorage.setItem("token", data.token);
            // ننتقل للوحة التحكم
            window.location.href = "dashboard.html";
        } else {
            // إذا خطأ، نظهر رسالة
            alert("Login failed: " + data.message);
        }
    })
    .catch(err => {
        alert("Error: " + err);
    });
});
