import { lightThemeColors, darkThemeColors } from './themeColors.js';

const root = document.querySelector(':root');
const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', handleCheckboxChange);

window.addEventListener('keydown', ({ key }) => {
    if (key == 'Enter') {
        checkbox.checked = !checkbox.checked;
        handleCheckboxChange();
    }
});

function handleCheckboxChange() {
    checkbox.checked ?
        changeTheme(darkThemeColors) :
        changeTheme(lightThemeColors);
}

function changeTheme(colors) {
    Object.keys(colors).map(colorName => {
        root.style.setProperty(
            formatColorName(colorName),
            colors[colorName]
        );
    });
}

function formatColorName(colorName) {
    return '--' + colorName.replace(/([A-Z])/, '-$1').toLowerCase();
}
