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

const lightThemeColors = {
    primaryBackground: getStyleValue(root, '--primary-background'),
    panelBackground: getStyleValue(root, '--panel-background'),
    headColor: getStyleValue(root, '--head-color'),
    switchColor: getStyleValue(root, '--switch-style-color'),
    textColor: getStyleValue(root, '--text-color')
};

const darkThemeColors = {
    primaryBackground: '#333333',
    panelBackground: '#434343',
    headColor: '#8BE9FD',
    switchColor: '#434343',
    textColor: '#B5B5B5'
};

function getStyleValue(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style);
}

function changeTheme(colors) {
    Object.keys(colors).map(colorName => {
        root.style.setProperty(
            transformColorName(colorName),
            colors[colorName]
        );
    });
}

function transformColorName(colorName) {
    return '--' + colorName.replace(/([A-Z])/, '-$1').toLowerCase();
}
