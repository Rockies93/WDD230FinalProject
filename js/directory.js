const apiUR = "/WDD230FinalProject/companies.json";
fetch(apiUR)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let i = 0; i < jsObject.companies.length; i++) {
        let directory = document.querySelector('div.directory');
        let card = document.createElement('div');
        card.setAttribute('class','company');
        directory.appendChild(card);

        let h2 = document.createElement('h2');
        h2.textContent = jsObject.companies[i].name;
        card.appendChild(h2);

        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class','profile-img');
        card.appendChild(imgDiv)
        let img = document.createElement('img');
        img.src = jsObject.companies[i].logo;
        img.alt = `${jsObject.companies[i].name} logo`;
        imgDiv.appendChild(img);

        let list = document.createElement('ul');
        card.appendChild(list);
        
        let phone = document.createElement('li');
        phone.textContent = jsObject.companies[i].phone;
        list.appendChild(phone);

        let website = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', jsObject.companies[i].website);
        a.textContent = jsObject.companies[i].website;
        website.appendChild(a);
        list.appendChild(website);

    }
});