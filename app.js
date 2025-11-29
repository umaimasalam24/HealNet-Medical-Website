document.getElementById("submitBtn").addEventListener("click", function() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        Swal.fire({
            icon: "error",
            title: "Incomplete Form",
            text: "Please fill out all fields before submitting!",
        });
        return;
    }

    // If all fields filled → success alert
    Swal.fire({
        icon: "success",
        title: "Form Submitted!",
        text: "Thank you for contacting us. We will get back to you soon!",
        showConfirmButton: true,
        confirmButtonColor: "#00A4F4"
    });
});
