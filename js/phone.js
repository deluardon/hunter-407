const lodPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data.data);
    displayPhone(phones)
}



const displayPhone = (phone) => {
    const phoneContainer = document.getElementById('phone-container');
    console.log(phone);
    phone.forEach(phone => {
        console.log(phone);
        // create a div
        const div = document.createElement('div');
        div.classList = ('card bg-white-100 shadow-xl');
        // set innerHtml
        div.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;
        // append child
        phoneContainer.appendChild(div);
    });
}

const handelSearch = () => {
    const searchField = document.getElementById('search-flid');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
    lodPhone(searchText);

}

// lodPhone()