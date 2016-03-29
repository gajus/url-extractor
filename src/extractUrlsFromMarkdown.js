import marked from 'marked';

export default (input) => {
    const renderer = new marked.Renderer();
    const urls = [];

    renderer.image = (href) => {
        urls.push(href);
    };

    renderer.link = (href) => {
        urls.push(href);
    };

    marked(input, {
        renderer
    });

    return urls;
};
