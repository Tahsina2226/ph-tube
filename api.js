console.log('video script added');
// 1 - fetch, load andshow categorieson html file












//crate loadcategories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCatagories(data.categories))
        .catch((error) => console.log(error));
};








//create display catagoriesloadCatagories
const displayCatagories = (catagories) => {
    const categoryContainer = document.getElementById('categories');



    // added data in html
    catagories.forEach((item) => {
        console.log(item);
        // create button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;


        // add button
        categoryContainer.append(button);
    });

};
loadCategories();