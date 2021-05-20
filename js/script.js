function run() {
    let htmlCode = document.querySelector(".editor .textarea #html-code").value;
    let cssCode = "<style>"+document.querySelector(".editor .textarea #css-code").value+"</style>";
    let jsCode = document.querySelector(".editor .textarea #js-code").value;
    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}
document.querySelector(".editor .textarea #html-code").addEventListener("keyup", run);
document.querySelector(".editor .textarea #css-code").addEventListener("keyup", run);
document.querySelector(".editor .textarea #js-code").addEventListener("keyup", run);