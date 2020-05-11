function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    let expression = /^(https?):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/gi;
    let regex = new RegExp(expression);

    if(regex.test(inputText)) {
        return true
    } else {
    	return false
    }
}

export { checkForUrl }