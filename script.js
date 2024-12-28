function showAlert(message) {
  alert(`${message}!`);
}

const featureContainer = document.getElementById("features");

function hideFeatures() {
  featureContainer.style.display = "none";
}

function showFeatures() {
  featureContainer.style.display = "block";
}

let isBgChanged = false;
function changeBg() {
  if (!isBgChanged) {
    featureContainer.style.backgroundColor = "#005f73";
    isBgChanged = true;
  } else {
    featureContainer.style.backgroundColor = "#f9f9f9";
    isBgChanged = false;
  }
}

let fontChanged = false;
function changeFontSize() {
  const heroTitle = document.getElementById("hero-title");
  if (!fontChanged) {
    heroTitle.style.fontSize = "50px";
    fontChanged = true;
  } else {
    heroTitle.style.fontSize = "1.8rem";
    fontChanged = false;
  }
}

let hasTwoInputs = false;
function addInput() {
  const itemContainer = document.getElementById("onlineReserve");
  if (!hasTwoInputs) {
    itemContainer.innerHTML = `
    <input class="normal-text" value="رزرو آنلاین" />
    <input class="normal-text" value="اینپوت اضافه شده" />
    <button class="btn btn-secondary" onclick="addInput()">
        اضافه کردن اینپوت
    </button>`;
    hasTwoInputs = true;
  } else {
    itemContainer.innerHTML = `
    <input class="normal-text" value="رزرو آنلاین" />
    <button class="btn btn-secondary" onclick="addInput()">
        اضافه کردن اینپوت
    </button>`;
    hasTwoInputs = false;
  }
}

function removeInput() {
  const itemContainer = document.getElementById("priceInsurance");
  itemContainer.innerHTML = `
      <button class="btn btn-secondary" onclick="showAlert('برای اضافه شدن اینپوت رفرش کنید')">
        حذف اینپوت
      </button>`;
}

function changeValue() {
  const input = document.getElementById("supprot");

  input.setAttribute("value", "بدون پشتیبانی");
}

function formSubmit() {
  const inputs = {
    firstNameInput: document.getElementById("first-name"),
    lastNameInput: document.getElementById("last-name"),
    ageInput: document.getElementById("age"),
    genderMale: document.getElementById("gender-male"),
    genderFemale: document.getElementById("gender-female"),
    cityInput: document.getElementById("city"),
  };

  let hasError = false;
  Object.values(inputs).forEach((element) => {
    event.preventDefault();

    if (element.type === "checkbox") {
      // Skip checking value directly for checkboxes
      const genderChecked =
        inputs.genderMale.checked || inputs.genderFemale.checked;

      if (!genderChecked) {
        inputs.genderMale.style.outline = "2px solid red";
        inputs.genderFemale.style.outline = "2px solid red";
        hasError = true;
      } else {
        inputs.genderMale.style.outline = "1px solid";
        inputs.genderFemale.style.outline = "1px solid";
      }
    } else if (!element.value.trim()) {
      element.style.border = "1px solid red";
      hasError = true;
    } else {
      element.style.border = "1px solid";
    }
  });

  const resultLabel = document.getElementById("result");
  if (hasError) {
    resultLabel.innerHTML = "لطفا فیلد های خواسته شده را پر کنید.";
    resultLabel.style.color = "red";
  } else {
    resultLabel.innerHTML = "اطلاعات شما با موفقیت ثبت شد!";
    resultLabel.style.color = "green";
  }
}
