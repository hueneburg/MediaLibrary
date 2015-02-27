function navbarClick($, document, id) {
    $(document).prop('title', id);
    var activeElement = $(".active");
    var element = $("#" + id);
    console.log(activeElement[0] != element[0])
    if (activeElement[0] != element[0]) {
        activeElement.removeClass("active");
        element.addClass("active");
        id = '#' + id + 'Content';
        $(id)[0].style.display = 'block';
        id = '#' + activeElement[0].id + 'Content';
        $(id)[0].style.display = 'none';
    }
}