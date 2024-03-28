var currentIndex1 = 0; // Текущий индекс для slider_1
var currentIndex2 = 1; // Текущий индекс для slider_2 (начинаем с 1)
var currentIndex3 = 2; // Текущий индекс для slider_3 (начинаем с 2)

var sliders = [
    document.querySelectorAll('.slider_1 .slider__item'),
    document.querySelectorAll('.slider_2 .slider__item'),
    document.querySelectorAll('.slider_3 .slider__item')
]; // Массив всех слайдеров

// Функция для отображения трех картинок в заданном слайдере
function showImages(slides, startIndex) {
    // Скрываем все элементы в слайдере
    slides.forEach(function(item) {
        item.style.display = 'none';
    });

    // Отображаем текущий элемент и два следующих после него
    for (var i = 0; i < 1; i++) {
        var indexToShow = (startIndex + i) % slides.length;
        slides[indexToShow].style.display = 'flex';
    }
}

// Функция для клика на кнопки "Попередній" и "Наступний"
function clickPag(n) {
    currentIndex1 += n; // Увеличиваем или уменьшаем индекс для slider_1
    currentIndex2 += n; // Увеличиваем или уменьшаем индекс для slider_2
    currentIndex3 += n; // Увеличиваем или уменьшаем индекс для slider_3

    // Если индекс стал отрицательным, приводим его к положительному, с учетом длины массива
    currentIndex1 = (currentIndex1 + sliders[0].length) % sliders[0].length;
    currentIndex2 = (currentIndex2 + sliders[1].length) % sliders[1].length;
    currentIndex3 = (currentIndex3 + sliders[2].length) % sliders[2].length;

    // Отображаем картинки в каждом из слайдеров
    showImages(sliders[0], currentIndex1);
    showImages(sliders[1], currentIndex2);
    showImages(sliders[2], currentIndex3);

    // Сбрасываем таймер при ручном листании слайдов
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);

    // Запускаем таймер заново, только если пользователь не переключал слайды вручную
    if (!manualSwitch) {
        timer1 = setInterval(function() {
            currentIndex1 = switchSlides(sliders[0], currentIndex1);
        }, 3000);

        timer2 = setInterval(function() {
            currentIndex2 = switchSlides(sliders[1], currentIndex2);
        }, 3000);

        timer3 = setInterval(function() {
            currentIndex3 = switchSlides(sliders[2], currentIndex3);
        }, 3000);
    }

    // Сброс флага ручного переключения
    manualSwitch = false;
}

// Показываем первые три элемента в каждом из слайдеров при загрузке страницы
showImages(sliders[0], currentIndex1);
showImages(sliders[1], currentIndex2);
showImages(sliders[2], currentIndex3);

// Переменная для отслеживания ручного переключения слайдов
var manualSwitch = false;

// Функция для переключения слайдов для каждого слайдера отдельно
function switchSlides(slides, currentIndex) {
    currentIndex = (currentIndex + 1) % slides.length;
    showImages(slides, currentIndex);
    return currentIndex;
}

// Переключение слайдов каждые 5 секунд для каждого слайдера отдельно
var timer1 = setInterval(function() {
    currentIndex1 = switchSlides(sliders[0], currentIndex1);
}, 3000);

var timer2 = setInterval(function() {
    currentIndex2 = switchSlides(sliders[1], currentIndex2);
}, 3000);

var timer3 = setInterval(function() {
    currentIndex3 = switchSlides(sliders[2], currentIndex3);
}, 3000);

// Добавляем обработчики событий для сброса таймера при ручном переключении слайдов
document.querySelector('.slider_1').addEventListener('click', function() {
    manualSwitch = true;
});

document.querySelector('.slider_2').addEventListener('click', function() {
    manualSwitch = true;
});

document.querySelector('.slider_3').addEventListener('click', function() {
    manualSwitch = true;
});
