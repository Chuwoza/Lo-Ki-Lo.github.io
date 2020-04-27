// Нашли контейнер с селектом
const selectElement = document.querySelector("[data-select]");
// Нашли контейнер с реальным селектом
const selectReal = document.querySelector("#selectReal");
//Прослушали клик внутри с контейнером селект
selectElement.addEventListener("click", function(event){
   // console.log(event);
   // console.log(event.target);

   // Проверка, где произошел клик
   // event.target - показвает на каком именно HTML-елементе произошел клик   

   // Если кликнули внутри по дропдауну

   if (event.target.hasAttribute("data-select-item") ){
      // console.log("Click on Item");
      //Получаем значение из атрибута data-select-item у этого элемента 
   
      const itemTitle = event.target.getAttribute("data-select-item");
      // console.log(itemTitle);
      
      // Находим загаловок и меняем его текст на значение из выбранного пункта
      event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;
      // Скрываем выпадающий список
      event.target.closest("[data-select]").querySelector(".header-select__dropdown").classList.toggle("hidden");

      //Связка с реальным селектом 
      // Изменяем значение value у реального селекта
      selectReal.value = itemTitle;

   } else {
      this.querySelector(".header-select__dropdown").classList.toggle("hidden");
      // console.log("Click on Title");
   };
});