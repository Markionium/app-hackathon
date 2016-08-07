export function render(app) {
    if (typeof app === 'undefined') {
        throw new Error('Can not render nothing! :)');
    }

    const appNode = document.querySelector('#app');

    ReactDOM.render(app, appNode);
}
