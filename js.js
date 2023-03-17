fetch ("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (var i=0; i < data.length; i++) {
            let placeholder1 = document.querySelector("#card"+i);
            let out1 = "";

            let logoPic = "";

            if (data[i].source_type === "facebook") {
                logoPic = "icons/facebook.svg";
            }
            else {
                logoPic = "icons/instagram-logo.svg";
            }

            out1 += `
                <img src="${data[i].profile_image}" class="profImage">
                <p class="profNameAndDate">
                    <b>${data[i].name}</b> 
                    <br> 
                    ${data[i].date}
                </p> 
                <img src="icons/instagram-logo.svg" class="instaLogo">
                <img src="${data[i].image}" class="postPic">
                <p class="description">${data[i].caption}</p>
                <br style="brborder">
                <p class="likes"> <button class="likeButton"></button> ${data[i].likes}</p>
            `;
            placeholder1.innerHTML = out1;
        }
    })
