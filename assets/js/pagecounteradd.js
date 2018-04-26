$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://lovemybaby.club/BlogCounter/counteradd.php",
        data: {title: "{{ page.title }}", url: "{{ page.url }}"},
        datatype: "html",

        success: function (data) {
        },
        error: function () {
        }
    });
});