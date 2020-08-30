const root = document.querySelector(':root');

export const lightThemeColors = {
    primaryBackground: getStyleValue(root, '--primary-background'),
    panelBackground: getStyleValue(root, '--panel-background'),
    headColor: getStyleValue(root, '--head-color'),
    switchColor: getStyleValue(root, '--switch-style-color'),
    textColor: getStyleValue(root, '--text-color')
};

export const darkThemeColors = {
    primaryBackground: '#333333',
    panelBackground: '#434343',
    headColor: '#8BE9FD',
    switchColor: '#434343',
    textColor: '#B5B5B5'
};

function getStyleValue(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style);
}
