// $('.choose-content-icon').on('click', function () {
//     let divID = $(this).attr('data-text');
//     $(this).addClass('active').siblings().removeClass('active');
//     $('.choose-content-icon' + divID).addClass('active').siblings().removeClass('active');
// })
let buttons = document.querySelectorAll(".choose-content-icon");
let blockText = document.querySelectorAll(".choose-content-text");
buttons.forEach((element) => {
    element.addEventListener("click", function (event) {
        let activeText = element.getAttribute("data-text");
        blockText.forEach((item) => {
            item.classList.remove("active")
        });
        document.querySelector(`.text-${activeText}`).classList.add("active");
    })
})
