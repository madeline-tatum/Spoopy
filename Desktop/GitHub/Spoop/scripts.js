var image = document.getElementById("spoop1");
function new_spoop() {
    if (image.getAttribute('src') ==
"/Users/tiger/Desktop/GitHub/Spoop/images/spoop1.jpg")
    { 
        image.src =
"/Users/tiger/Desktop/GitHub/Spoop/images/spoop2.jpg";
    }
    else
    {
        image.src =
"/Users/tiger/Desktop/GitHub/Spoop/images/spoop1.jpg";
    }
}    