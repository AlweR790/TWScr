function SaveVillageNames() {
    $(".quickedit-vn").each(function (data) {
        localStorage.setItem($(this).data("id"), $(this).children().children().children().first().data("text"));
    })
}

SaveVillageNames();