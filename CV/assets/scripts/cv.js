$(document).ready(function () {

    const savedTheme = localStorage.getItem("theme") || "light";
    $("html").attr("data-bs-theme", savedTheme);
    $("#Switch").prop("checked", savedTheme === "dark");
    $("#Switch").on("change", function () {
        const theme = this.checked ? "dark" : "light";
        $("html").attr("data-bs-theme", theme);
        localStorage.setItem("theme", theme);

    });

});

$(document).ready(function () {

    function validateName() {
        const value = $("#name").val().trim();
        return value.length >= 3;
    }

    function validateEmail() {
        const email = $("#email").val().trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateAge() {
        const age = parseInt($("#age").val(), 10);
        return !isNaN(age) && age >= 18;
    }

    function validateComent() {
        return $("#coment").val().trim().length >= 10;
    }

    function updateField(field, isValid) {
        field.toggleClass("is-valid", isValid);
        field.toggleClass("is-invalid", !isValid);
    }

    function checkForm() {
        const isFormValid =
            validateName() &&
            validateEmail() &&
            validateAge() &&
            validateComent();

        $("#submit").prop("disabled", !isFormValid);
    }

    $("#name").on("input", function () {
        const valid = validateName();
        updateField($(this), valid);
        checkForm();
    });

    $("#email").on("input", function () {
        const valid = validateEmail();
        updateField($(this), valid);
        checkForm();
    });

    $("#age").on("input", function () {
        const valid = validateAge();
        updateField($(this), valid);
        checkForm();
    });
    

    $("#coment").on("input", function () {
        const valid = validateComent();
        updateField($(this), valid);
        checkForm();
    });

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        alert("Formulario enviado correctamente ✔");
        this.reset();
        $(".form-control").removeClass("is-valid is-invalid");
        $("#submit").prop("disabled", true);
    });
    

});

$("#coment").on("input", function () {
    const len = $(this).val().length;
    $("#charCount").text(`${len}/200`);
});

$("#age").on("input", function () {
    this.value = this.value.replace(/\D/g, "");
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
});

$("#coment").on("input", function () {
    const max = 200;
    let text = $(this).val();
    if (text.length > max) {
        text = text.substring(0, max);
        $(this).val(text);
    }

    $("#charCount").text(text.length);
});
