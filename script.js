function showForm(formId) {
    document.querySelectorAll('.form-box').forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}