function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value

    if (Client.checkForUrl(url)) {
        postData(url)
        .then(function(response) {
            console.log(response);
            document.getElementById('polarity').innerHTML = response.polarity;
            document.getElementById('subjectivity').innerHTML = response.subjectivity;
            document.getElementById('pConfidence').innerHTML = response.polarity_confidence;
            document.getElementById('sConfidence').innerHTML = response.subjectivity_confidence;
        })
    } else {
        alert("Please enter valid URL");
    }

}

const postData = async (url="") => {
    const res = await fetch('http://localhost:8081/api', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:8081/"
        },
        body: JSON.stringify({"url":url}),
    });
    try {
        const newData = await res.json();
        return newData
    } catch(error) {
        console.log("error", error)
    }
}

export { handleSubmit }
